# Complete Supabase Setup Guide

This guide will help you set up Supabase for your D&D Initiative Tracker with IP-based rate limiting and encrypted API key storage.

## 🚀 **Quick Start**

### 1. **Create Supabase Project**

1. Go to [supabase.com](https://supabase.com)
2. Sign up/Sign in and create a new project
3. Wait for the project to be ready (usually 2-3 minutes)
4. Note your project URL and anon key from Settings > API

### 2. **Install Dependencies**

The Supabase client is already installed. You just need to set up environment variables.

### 3. **Environment Variables**

Create a `.env` file in your project root:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: For Edge Functions (server-side Groq API key)
GROQ_API_KEY=xai-4VYWLJHpbvsMQhA2IRk9MWm6AbPGCbe39LiL9SYXeGITeAqoyCwzfBoAawZVqvml9OZNyyGXA1QDXQNL
```

### 4. **Database Schema**

Run this SQL in your Supabase SQL Editor:

```sql
-- Create the user_api_keys table for encrypted API key storage
CREATE TABLE user_api_keys (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  encrypted_keys TEXT NOT NULL,
  user_ip INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure one record per user
  UNIQUE(user_id)
);

-- Create the rate_limits table for IP-based rate limiting
CREATE TABLE rate_limits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  user_agent TEXT,
  requests_count INTEGER DEFAULT 0,
  last_request_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Unique constraint per IP per day
  UNIQUE(ip_address, DATE(created_at))
);

-- Create the request_logs table for monitoring
CREATE TABLE request_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  user_agent TEXT,
  prompt TEXT,
  model TEXT,
  tokens_used INTEGER,
  response_time_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_user_api_keys_user_id ON user_api_keys(user_id);
CREATE INDEX idx_user_api_keys_ip ON user_api_keys(user_ip);
CREATE INDEX idx_rate_limits_ip_date ON rate_limits(ip_address, DATE(created_at));
CREATE INDEX idx_request_logs_ip ON request_logs(ip_address);
CREATE INDEX idx_request_logs_created_at ON request_logs(created_at);
```

### 5. **Row Level Security (RLS)**

Enable RLS for security:

```sql
-- Enable RLS on all tables
ALTER TABLE user_api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE request_logs ENABLE ROW LEVEL SECURITY;

-- Allow anonymous access for rate limiting (needed for public use)
CREATE POLICY "Allow anonymous rate limit access" ON rate_limits
FOR ALL USING (true);

-- Allow anonymous request logging
CREATE POLICY "Allow anonymous request logging" ON request_logs
FOR INSERT WITH CHECK (true);

-- IP-based security for API keys (optional - for authenticated users)
CREATE POLICY "IP-based access for API keys" ON user_api_keys
FOR ALL USING (user_ip = inet_client_addr());
```

### 6. **Deploy Edge Function (Optional)**

For server-side Groq API calls with rate limiting:

1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link your project: `supabase link --project-ref your-project-id`
4. Deploy the function: `supabase functions deploy generate-initiative`

## 🔧 **Configuration**

### **Rate Limiting Settings**

You can adjust rate limits in `src/lib/supabase-client.ts`:

```typescript
export const RATE_LIMIT_CONFIG = {
  maxRequestsPerIP: 30, // Per day
  maxTokensPerRequest: 2000,
  // ... other settings
};
```

### **Storage Priority**

The unified storage system will automatically try these methods in order:

1. **Environment Variables** (most secure)
2. **Proxy Service** (server-side)
3. **Supabase Storage** (encrypted + IP security)
4. **IndexedDB** (encrypted local storage)
5. **localStorage** (fallback)

## 🧪 **Testing**

### **1. Test in UI**

1. Open the app and go to Settings
2. Scroll down to see "Supabase Status" section
3. Use the "Supabase Integration Test" to verify functionality

### **2. Test API Key Storage**

```typescript
import { storeApiKeysInSupabase, getApiKeysFromSupabase } from './lib/supabase-storage';

// Store keys
await storeApiKeysInSupabase({
  openaiApiKey: 'sk-proj-...',
  geminiApiKey: 'AIza...'
});

// Retrieve keys
const keys = await getApiKeysFromSupabase();
console.log('Stored keys:', keys);
```

### **3. Test Rate Limiting**

```typescript
import { checkRateLimit, recordRequest } from './lib/supabase-client';

const ipAddress = '192.168.1.1';
const rateLimit = await checkRateLimit(ipAddress);
console.log('Rate limit status:', rateLimit);

// Record a request
await recordRequest(ipAddress, navigator.userAgent, 'test prompt', 'groq');
```

## 🔒 **Security Features**

### **Encryption**
- API keys are encrypted with AES-256 using CryptoJS before storage
- Even database admins cannot read the keys without the encryption key

### **IP-Based Security**
- Users can only access their data from the same IP address
- Prevents unauthorized access from different locations
- Automatic IP tracking and validation

### **Rate Limiting**
- 30 requests per IP per day (configurable)
- Automatic daily reset at midnight
- Request logging for monitoring and abuse detection

### **Row Level Security**
- Database-level security policies
- Prevents SQL injection and unauthorized access
- Enforced at the database level, not just application level

## 📊 **Monitoring**

### **View Usage Statistics**

```sql
-- Check rate limit usage
SELECT ip_address, requests_count, last_request_at 
FROM rate_limits 
WHERE DATE(created_at) = CURRENT_DATE 
ORDER BY requests_count DESC;

-- Check request logs
SELECT ip_address, model, tokens_used, created_at 
FROM request_logs 
WHERE created_at >= NOW() - INTERVAL '1 day'
ORDER BY created_at DESC;
```

### **Supabase Dashboard**

- Go to your Supabase project dashboard
- Navigate to "Table Editor" to view data
- Use "Logs" to monitor Edge Function execution
- Check "API" section for usage statistics

## 🚨 **Troubleshooting**

### **Common Issues**

1. **"Supabase not configured"**
   - Check environment variables are set correctly
   - Restart your development server after adding .env file

2. **"Rate limit check failed"**
   - Verify database schema is created correctly
   - Check RLS policies are set up properly

3. **"API key storage failed"**
   - Ensure user_api_keys table exists
   - Check if RLS policies allow your IP address

4. **Edge Function not working**
   - Verify function is deployed: `supabase functions list`
   - Check function logs: `supabase functions logs generate-initiative`

### **Debug Mode**

Enable debug logging in your browser console:

```typescript
// In browser console
localStorage.setItem('debug', 'supabase:*');
```

## 🎯 **Production Deployment**

### **Environment Variables**

For production, set these in your hosting platform:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-production-anon-key
GROQ_API_KEY=your-production-groq-key
```

### **Security Recommendations**

1. **Use service role key** for server-side operations (not anon key)
2. **Enable RLS policies** for all tables
3. **Set up monitoring** for unusual usage patterns
4. **Regular backups** of your Supabase database
5. **Monitor API usage** to prevent abuse

### **Scaling Considerations**

- **Free Tier**: 500MB database, 2GB bandwidth, 50k MAU
- **Pro Tier**: $25/month for higher limits
- **Rate Limiting**: Adjust limits based on your user base
- **Database**: Monitor storage usage and optimize queries

## 🎉 **You're All Set!**

Your D&D Initiative Tracker now has:

✅ **Encrypted API key storage** with Supabase  
✅ **IP-based rate limiting** to prevent abuse  
✅ **Server-side AI proxy** for Groq API calls  
✅ **Automatic fallback** to local storage methods  
✅ **Real-time monitoring** of usage and security  

The system will automatically use the most secure available storage method, with Supabase being the preferred choice when configured.

## 📚 **Additional Resources**

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Rate Limiting Best Practices](https://supabase.com/docs/guides/api/rate-limiting)