# Static Site API Key Storage Guide

Since your D&D Initiative Tracker is a **statically generated site**, here are the best storage methods for your use case:

## 🎯 **Recommended Storage Methods for Static Sites**

### 1. **IndexedDB with Encryption** (Recommended)
```typescript
// Best for static sites - encrypted persistent storage
await storeApiKeysInIndexedDB({
  openaiApiKey: "sk-your-key",
  geminiApiKey: "AIza-your-key"
});
```

**Pros:**
- ✅ Works perfectly with static sites
- ✅ Encrypted persistent storage
- ✅ Large storage capacity
- ✅ Better security than localStorage
- ✅ No server required

**Cons:**
- ⚠️ Still vulnerable to XSS (but encrypted)
- ⚠️ Browser compatibility considerations

### 2. **In-Memory Storage** (Most Secure Client-Side)
```typescript
// Most secure client-side option
storeApiKeysInMemory({
  openaiApiKey: "sk-your-key",
  geminiApiKey: "AIza-your-key"
});
```

**Pros:**
- ✅ Most secure client-side option
- ✅ No persistent storage
- ✅ Session-based encryption
- ✅ Perfect for static sites
- ✅ Automatic cleanup

**Cons:**
- ⚠️ Data lost on page refresh
- ⚠️ Not suitable for multi-session apps

### 3. **Session Storage** (Good Balance)
```typescript
// Good balance of security and convenience
storeApiKeysInSession({
  openaiApiKey: "sk-your-key",
  geminiApiKey: "AIza-your-key"
});
```

**Pros:**
- ✅ Better than localStorage
- ✅ Automatic cleanup on tab close
- ✅ Tab-isolated
- ✅ Works great with static sites

**Cons:**
- ⚠️ Still vulnerable to XSS
- ⚠️ Data lost on tab close

## 🚀 **Implementation for Static Sites**

### Update Your Storage Configuration
```typescript
// In your unified storage setup
const STATIC_SITE_METHODS = [
  'indexeddb',    // Primary: Encrypted persistent
  'memory',       // Fallback: Most secure
  'session',      // Fallback: Good balance
  'localstorage'  // Last resort: Current method
];

unifiedStorage.setPreferredMethod('indexeddb');
```

### Environment Variables for Static Sites
```bash
# For build-time injection (limited security)
VITE_OPENAI_API_KEY=sk-your-key
VITE_GEMINI_API_KEY=AIza-your-key

# Note: These are visible to clients in static builds
```

### Build-Time Configuration
```typescript
// astro.config.mjs
export default defineConfig({
  // ... your config
  build: {
    // Ensure static output
    format: 'file'
  },
  // For environment variables at build time
  define: {
    __BUILD_TIME_API_KEYS__: JSON.stringify({
      openai: process.env.OPENAI_API_KEY,
      gemini: process.env.GEMINI_API_KEY
    })
  }
});
```

## 🔒 **Security Considerations for Static Sites**

### What You CAN'T Do (Server-Side Only):
- ❌ Hide API keys completely from client
- ❌ Use HTTP-only cookies
- ❌ Server-side proxy (without additional server)
- ❌ True environment variable security

### What You CAN Do (Client-Side):
- ✅ Encrypt API keys before storage
- ✅ Use more secure storage methods
- ✅ Implement key rotation
- ✅ Add usage monitoring
- ✅ Validate keys before storage

## 🛠️ **Static Site Optimization**

### 1. **Progressive Enhancement**
```typescript
// Start with most secure, fallback to less secure
const storageChain = [
  'indexeddb',
  'memory', 
  'session',
  'localstorage'
];

for (const method of storageChain) {
  if (await isMethodAvailable(method)) {
    await switchStorageMethod(method);
    break;
  }
}
```

### 2. **Build-Time Key Injection** (Limited Security)
```typescript
// For deployment-specific keys (visible to client)
const buildTimeKeys = __BUILD_TIME_API_KEYS__ || {};

// Use for development/demo purposes only
if (buildTimeKeys.openai && buildTimeKeys.gemini) {
  await storeApiKeysInIndexedDB(buildTimeKeys);
}
```

### 3. **Key Validation**
```typescript
// Always validate keys before storing
const isValidKey = await testApiKey(apiKey, model);
if (!isValidKey) {
  throw new Error('Invalid API key');
}
```

## 📊 **Static Site Storage Comparison**

| Method | Security | Persistence | Static Compatible | Recommendation |
|--------|----------|-------------|-------------------|----------------|
| IndexedDB | 7/10 | ✅ Yes | ✅ Yes | **Primary Choice** |
| In-Memory | 8/10 | ❌ No | ✅ Yes | **Most Secure** |
| Session | 5/10 | ⚠️ Tab Only | ✅ Yes | **Good Balance** |
| LocalStorage | 3/10 | ✅ Yes | ✅ Yes | **Current (Upgrade)** |
| Cookies | 6/10 | ✅ Yes | ✅ Yes | **Fallback** |

## 🎯 **Recommended Static Site Setup**

```typescript
// Recommended configuration for your static site
const STATIC_SITE_CONFIG = {
  primaryMethod: 'indexeddb',
  fallbackChain: ['memory', 'session', 'localstorage'],
  enableEncryption: true,
  keyRotation: true,
  validation: true
};

// Initialize with your preferred method
await unifiedStorage.setPreferredMethod('indexeddb');

// The system will automatically fallback if IndexedDB isn't available
```

## 🚀 **Deployment Considerations**

### Static Site Hosts (Vercel, Netlify, GitHub Pages):
- ✅ IndexedDB works perfectly
- ✅ Session storage works great
- ✅ In-memory storage ideal for demos
- ⚠️ Environment variables are visible to client
- ❌ No server-side proxy without additional server

### Hybrid Deployment:
- Use static site for UI
- Add serverless functions for API key management
- Implement proxy endpoints for AI calls

## 🔧 **Migration Path for Static Sites**

1. **Immediate**: Switch to IndexedDB storage
2. **Short-term**: Implement in-memory fallback
3. **Medium-term**: Add session storage option
4. **Long-term**: Consider serverless proxy functions

Your static site can be **significantly more secure** than your current localStorage implementation while maintaining full static site compatibility!