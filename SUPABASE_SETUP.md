# Supabase Setup for API Key Storage

This guide shows how to set up Supabase with IP-based security rules for storing encrypted API keys.

## 🔧 **Setup Steps**

### 1. **Install Supabase Client**

```bash
npm install @supabase/supabase-js
```

### 2. **Create Supabase Project**

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 3. **Environment Variables**

Add to your `.env` file:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. **Database Schema**

Run this SQL in your Supabase SQL editor:

```sql
-- Create the user_api_keys table
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

-- Create index for faster lookups
CREATE INDEX idx_user_api_keys_user_id ON user_api_keys(user_id);

-- Create index for IP-based queries
CREATE INDEX idx_user_api_keys_ip ON user_api_keys(user_ip);
```

### 5. **IP-Based Security Rules**

Add these Row Level Security (RLS) policies in Supabase:

```sql
-- Enable RLS on the table
ALTER TABLE user_api_keys ENABLE ROW LEVEL SECURITY;

-- Policy 1: Users can only read their own data from their IP
CREATE POLICY "Users can read own data from same IP" ON user_api_keys
FOR SELECT USING (
  user_id = current_setting('request.jwt.claims', true)::json->>'user_id' 
  AND user_ip = inet_client_addr()
);

-- Policy 2: Users can only insert/update their own data from their IP
CREATE POLICY "Users can modify own data from same IP" ON user_api_keys
FOR ALL USING (
  user_id = current_setting('request.jwt.claims', true)::json->>'user_id' 
  AND user_ip = inet_client_addr()
);

-- Policy 3: Users can only delete their own data from their IP
CREATE POLICY "Users can delete own data from same IP" ON user_api_keys
FOR DELETE USING (
  user_id = current_setting('request.jwt.claims', true)::json->>'user_id' 
  AND user_ip = inet_client_addr()
);
```

### 6. **Alternative: IP-Only Security (No Auth Required)**

If you don't want user authentication, you can use IP-only security:

```sql
-- Simpler IP-based policy (no user authentication required)
CREATE POLICY "IP-based access only" ON user_api_keys
FOR ALL USING (user_ip = inet_client_addr());

-- This allows anyone from the same IP to access the data
-- Good for single-user applications
```

### 7. **Update the Storage Implementation**

Update `src/lib/supabase-storage.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

class SupabaseStorage {
  /**
   * Store API keys in Supabase with encryption and IP tracking
   */
  async storeApiKeys(keys: SupabaseApiKeys): Promise<void> {
    try {
      // Encrypt keys with CryptoJS before sending to Supabase
      const encryptedKeys = encryptForStorage(keys);
      
      const { data, error } = await supabase
        .from('user_api_keys')
        .upsert({
          user_id: this.userId,
          encrypted_keys: encryptedKeys,
          user_ip: await this.getCurrentIP(), // Track user's IP
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
    } catch (error) {
      console.error("Failed to store API keys in Supabase:", error);
      throw new Error("Failed to store API keys in Supabase");
    }
  }

  /**
   * Get current user's IP address
   */
  private async getCurrentIP(): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Failed to get IP address:", error);
      return '127.0.0.1'; // Fallback for localhost
    }
  }

  // ... rest of the implementation
}
```

## 🔒 **Security Features**

### **CryptoJS Encryption**
- API keys are encrypted with AES-256 before being sent to Supabase
- Even if someone gains access to your database, they can't read the keys
- Uses your existing encryption system

### **IP-Based Access Control**
- Users can only access their data from the same IP address
- Prevents unauthorized access from different locations
- Automatically tracks user's IP address

### **Row Level Security (RLS)**
- Database-level security policies
- Enforced at the database level, not just application level
- Prevents SQL injection and unauthorized access

## 🚀 **Usage Example**

```typescript
import { storeApiKeysInSupabase, getApiKeysFromSupabase } from './lib/supabase-storage';

// Store API keys (automatically encrypted and IP-tracked)
await storeApiKeysInSupabase({
  openaiApiKey: 'sk-your-key',
  geminiApiKey: 'AIza-your-key'
});

// Retrieve API keys (automatically decrypted)
const keys = await getApiKeysFromSupabase();
```

## 🛡️ **Security Benefits**

1. **Double Encryption**: CryptoJS + Supabase encryption
2. **IP Restriction**: Only accessible from user's IP
3. **Database Security**: RLS policies prevent unauthorized access
4. **Audit Trail**: Timestamps and IP tracking
5. **Automatic Cleanup**: Can set up automatic deletion policies

## ⚠️ **Important Notes**

### **IP Limitations**
- Users can't access their data from different locations
- Dynamic IPs might cause access issues
- Consider allowing IP ranges for corporate users

### **Fallback Strategy**
```typescript
// Always have a fallback to IndexedDB
try {
  await storeApiKeysInSupabase(keys);
} catch (error) {
  console.warn('Supabase failed, falling back to IndexedDB');
  await storeApiKeysInIndexedDB(keys);
}
```

### **IP Change Handling**
```typescript
// Allow users to update their IP if it changes
const updateIP = async () => {
  const newIP = await getCurrentIP();
  await supabase
    .from('user_api_keys')
    .update({ user_ip: newIP })
    .eq('user_id', userId);
};
```

## 🎯 **Recommended Setup**

For your D&D Initiative Tracker:

1. **Primary**: Supabase with IP-based security
2. **Fallback**: IndexedDB with CryptoJS encryption
3. **Emergency**: localStorage (current implementation)

This gives you maximum security with automatic fallbacks!