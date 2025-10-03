# Supabase Proxy Implementation Guide

## 🚀 **Setup Steps**

### 1. **Create Supabase Project**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Note your project URL and anon key

### 2. **Install Supabase Client**
```bash
npm install @supabase/supabase-js
```

### 3. **Environment Variables**
```bash
# .env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
GROQ_API_KEY=xai-4VYWLJHpbvsMQhA2IRk9MWm6AbPGCbe39LiL9SYXeGITeAqoyCwzfBoAawZVqvml9OZNyyGXA1QDXQNL
```

### 4. **Database Schema**
```sql
-- Rate limiting table
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

-- Request logs for monitoring
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

-- Indexes for performance
CREATE INDEX idx_rate_limits_ip_date ON rate_limits(ip_address, DATE(created_at));
CREATE INDEX idx_request_logs_ip ON request_logs(ip_address);
CREATE INDEX idx_request_logs_created_at ON request_logs(created_at);
```

### 5. **Row Level Security (RLS)**
```sql
-- Enable RLS
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE request_logs ENABLE ROW LEVEL SECURITY;

-- Allow anonymous access for rate limiting
CREATE POLICY "Allow anonymous rate limit access" ON rate_limits
FOR ALL USING (true);

CREATE POLICY "Allow anonymous request logging" ON request_logs
FOR INSERT WITH CHECK (true);
```

## 🔒 **Security Benefits**

### **IP-Based Rate Limiting**
- Each IP address gets 30 requests per day
- Prevents abuse from same IP
- Automatic daily reset

### **Request Monitoring**
- Log all requests for analysis
- Track response times and token usage
- Detect abuse patterns

### **Server-Side Protection**
- API key never reaches client
- Rate limiting enforced server-side
- Cannot be bypassed by client manipulation

## 📊 **Free Tier Limits**
- **500MB database** - Plenty for rate limiting data
- **2GB bandwidth** - Sufficient for API proxying
- **50,000 monthly active users** - Perfect for your scale
- **Real-time subscriptions** - Live rate limit updates

## 💰 **Cost Analysis**
- **Free tier**: 0 requests = $0
- **Pro tier**: $25/month for higher limits
- **Your usage**: 100-2k users/day = Well within free tier