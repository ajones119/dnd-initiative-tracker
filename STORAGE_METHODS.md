# API Key Storage Methods Comparison

This document provides a comprehensive comparison of different methods for storing API keys securely in your D&D Initiative Tracker application.

## 🔒 Security Levels (1-10 scale)

### 1. Environment Variables (Security: 10/10) ⭐
**Best for: Production deployments**

```typescript
// Server-side only
export OPENAI_API_KEY="your-key-here"
export GEMINI_API_KEY="your-key-here"
```

**Pros:**
- API keys never reach the client
- Industry standard for production
- Environment-specific configuration
- No client-side vulnerabilities

**Cons:**
- Requires server-side implementation
- Not suitable for client-only apps
- Deployment complexity

**Implementation:**
```bash
# .env file (server-side)
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AIza...
```

---

### 2. Proxy Server (Security: 9/10) ⭐
**Best for: Production web apps**

```typescript
// API keys stored server-side, client makes requests to proxy
const response = await fetch('/api/ai/generate', {
  method: 'POST',
  body: JSON.stringify({ prompt, model })
});
```

**Pros:**
- API keys never exposed to client
- Centralized API management
- Rate limiting and monitoring
- User authentication integration

**Cons:**
- Requires server infrastructure
- Additional complexity
- Network latency

**Server Implementation:**
```javascript
// Express.js example
app.post('/api/ai/generate', authenticateUser, async (req, res) => {
  const { prompt, model } = req.body;
  const apiKey = await getUserApiKey(req.user.id, model);
  const result = await callAI(apiKey, prompt, model);
  res.json(result);
});
```

---

### 3. In-Memory Storage (Security: 8/10)
**Best for: Single-session usage**

```typescript
// Data lost on page refresh
storeApiKeysInMemory({ openaiApiKey: "sk-..." });
```

**Pros:**
- Most secure client-side option
- No persistent storage
- Session-based encryption
- Automatic cleanup

**Cons:**
- Data lost on page refresh
- Not suitable for multi-session apps
- Memory limitations

**Implementation:**
```typescript
import { storeApiKeysInMemory, getMemoryApiKey } from './memory-storage';

// Store keys (encrypted in memory)
storeApiKeysInMemory({
  openaiApiKey: "sk-your-key",
  geminiApiKey: "AIza-your-key"
});

// Retrieve keys (automatically decrypted)
const key = getMemoryApiKey('openai');
```

---

### 4. IndexedDB with Encryption (Security: 7/10)
**Best for: Persistent client-side storage**

```typescript
// Encrypted persistent storage
await storeApiKeysInIndexedDB({ openaiApiKey: "sk-..." });
```

**Pros:**
- Encrypted persistent storage
- Larger storage capacity
- Better security than localStorage
- Asynchronous operations

**Cons:**
- Still vulnerable to XSS
- Browser-specific implementation
- Complex error handling

**Implementation:**
```typescript
import { storeApiKeysInIndexedDB, getIndexedDBApiKey } from './indexeddb-storage';

// Store with encryption
await storeApiKeysInIndexedDB({
  openaiApiKey: "sk-your-key",
  geminiApiKey: "AIza-your-key"
});

// Retrieve
const key = await getIndexedDBApiKey('openai');
```

---

### 5. HTTP-Only Cookies (Security: 6/10)
**Best for: Server-side authentication**

```typescript
// Server sets httpOnly cookie
res.cookie('api_key', encryptedKey, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
});
```

**Pros:**
- httpOnly prevents XSS access
- Automatic expiration
- Secure transmission
- Server-controlled

**Cons:**
- Limited storage size
- Sent with every request
- Server-side complexity
- CSRF considerations

**Implementation:**
```javascript
// Server-side (Express.js)
app.post('/api/keys', (req, res) => {
  const encryptedKey = encrypt(req.body.apiKey);
  res.cookie('api_key', encryptedKey, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
  res.json({ success: true });
});
```

---

### 6. Session Storage (Security: 5/10)
**Best for: Temporary storage**

```typescript
// Cleared when tab closes
storeApiKeysInSession({ openaiApiKey: "sk-..." });
```

**Pros:**
- Better than localStorage
- Automatic cleanup
- Tab-isolated
- No persistence across sessions

**Cons:**
- Still vulnerable to XSS
- Limited to current tab
- Data lost on tab close

**Implementation:**
```typescript
import { storeApiKeysInSession, getSessionApiKey } from './session-storage';

// Store (encrypted)
storeApiKeysInSession({
  openaiApiKey: "sk-your-key",
  geminiApiKey: "AIza-your-key"
});

// Retrieve
const key = getSessionApiKey('openai');
```

---

### 7. LocalStorage with Encryption (Security: 3/10)
**Current implementation - Not recommended for production**

```typescript
// Your current implementation
const encrypted = encryptForStorage(keys);
localStorage.setItem('api_keys', encrypted);
```

**Pros:**
- Simple implementation
- Persistent across sessions
- Widely supported

**Cons:**
- Vulnerable to XSS attacks
- Visible in dev tools
- No automatic expiration
- Synchronous operations

---

## 🚀 Migration Guide

### From LocalStorage to Secure Storage

1. **Choose your target method** based on your deployment:
   - **Production web app**: Use Proxy Server or Environment Variables
   - **Desktop app**: Use IndexedDB or In-Memory
   - **Development**: Use Session Storage

2. **Update your settings**:
```typescript
// Enable unified storage
await updateSettings({
  useUnifiedStorage: true,
  storageMethod: 'indexeddb' // or your preferred method
});
```

3. **Migrate existing keys**:
```typescript
// Keys are automatically migrated when switching methods
await switchStorageMethod('indexeddb');
```

### Environment Variables Setup

Create `.env` file:
```bash
# Server-side environment variables
OPENAI_API_KEY=sk-your-actual-key-here
GEMINI_API_KEY=AIza-your-actual-key-here
VITE_ENCRYPTION_KEY=your-32-char-encryption-key
```

### Proxy Server Setup

1. **Create server endpoints**:
```javascript
// api/keys.js
export async function POST({ request }) {
  const { openaiApiKey, geminiApiKey } = await request.json();
  
  // Store in secure database
  await storeApiKeys(userId, { openaiApiKey, geminiApiKey });
  
  return new Response(JSON.stringify({ success: true }));
}
```

2. **Update client to use proxy**:
```typescript
// Use proxy service instead of direct API calls
const result = await proxyService.generateInitiativeData(prompt, model);
```

---

## 🛡️ Security Best Practices

### 1. Never Log API Keys
```typescript
// ❌ Bad
console.log('API Key:', apiKey);

// ✅ Good
console.log('API Key configured:', !!apiKey);
```

### 2. Use HTTPS in Production
```typescript
// Always use HTTPS for API key transmission
const response = await fetch('https://api.openai.com/v1/...', {
  headers: { 'Authorization': `Bearer ${apiKey}` }
});
```

### 3. Implement Key Rotation
```typescript
// Regular key rotation
if (keyAge > 30 * 24 * 60 * 60 * 1000) { // 30 days
  await rotateApiKey();
}
```

### 4. Validate Keys Before Storage
```typescript
// Test API key before storing
const isValid = await testApiKey(apiKey, model);
if (!isValid) {
  throw new Error('Invalid API key');
}
```

---

## 🔧 Implementation Examples

### Unified Storage Usage
```typescript
import { unifiedStorage } from './lib/unified-storage';

// Set preferred method
unifiedStorage.setPreferredMethod('indexeddb');

// Store keys (automatically uses best available method)
await unifiedStorage.storeApiKeys({
  openaiApiKey: 'sk-...',
  geminiApiKey: 'AIza-...'
});

// Get key for specific model
const apiKey = await unifiedStorage.getApiKey('openai');

// Get storage analysis
const analysis = await unifiedStorage.getStorageAnalysis();
console.log('Security score:', analysis.securityScore);
```

### Component Integration
```typescript
// In your settings component
const { switchStorageMethod, storageAnalysis } = useSettings();

// Switch to more secure method
await switchStorageMethod('indexeddb');

// Display security recommendations
{storageAnalysis?.recommendations.map(rec => (
  <div key={rec}>{rec}</div>
))}
```

---

## 📊 Performance Comparison

| Method | Setup Time | Runtime Performance | Storage Size | Browser Support |
|--------|------------|-------------------|--------------|-----------------|
| Environment | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | N/A | N/A |
| Proxy Server | ⭐⭐ | ⭐⭐⭐⭐ | N/A | ⭐⭐⭐⭐⭐ |
| In-Memory | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Limited | ⭐⭐⭐⭐⭐ |
| IndexedDB | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Large | ⭐⭐⭐⭐ |
| Cookies | ⭐⭐⭐ | ⭐⭐⭐ | Small | ⭐⭐⭐⭐⭐ |
| Session | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Medium | ⭐⭐⭐⭐⭐ |
| LocalStorage | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Medium | ⭐⭐⭐⭐⭐ |

---

## 🎯 Recommendations by Use Case

### Production Web Application
1. **Proxy Server** (primary)
2. **Environment Variables** (fallback)
3. **HTTP-Only Cookies** (session management)

### Desktop Application
1. **IndexedDB** (primary)
2. **In-Memory** (temporary)
3. **Encrypted Files** (advanced)

### Development/Testing
1. **Session Storage** (convenient)
2. **Environment Variables** (secure)
3. **In-Memory** (clean)

### Mobile Application
1. **Secure Keychain** (native)
2. **IndexedDB** (web-based)
3. **In-Memory** (temporary)

---

## 🔍 Troubleshooting

### Common Issues

1. **"Storage method not available"**
   - Check browser compatibility
   - Verify HTTPS for secure methods
   - Test with different browsers

2. **"API key not found"**
   - Verify key is stored correctly
   - Check encryption/decryption
   - Test storage method directly

3. **"Permission denied"**
   - Check storage quotas
   - Verify user permissions
   - Clear browser data

### Debug Commands
```typescript
// Check all storage statuses
const statuses = await unifiedStorage.getAllStorageStatus();
console.table(statuses);

// Test specific method
await testStorageMethod('indexeddb');

// Get detailed analysis
const analysis = await unifiedStorage.getStorageAnalysis();
console.log(analysis);
```

---

## 🚀 Next Steps

1. **Choose your target storage method** based on your deployment needs
2. **Update your settings component** to include the storage selector
3. **Test the migration** with your existing API keys
4. **Monitor security** with the built-in analysis tools
5. **Consider implementing a proxy server** for production deployment

Remember: The most secure option is to never expose API keys to the client at all. Use server-side storage whenever possible!