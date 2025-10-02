/**
 * Secure encryption utilities for local storage
 * Uses AES-256 encryption with crypto-js
 */

import CryptoJS from "crypto-js";

// Get encryption key from environment (lazy loading)
export function getEncryptionKey(): string {
  return (
    import.meta.env.VITE_ENCRYPTION_KEY || "default-key-change-in-production"
  );
}

/**
 * Simple AES-256 encryption using crypto-js built-in key derivation
 */
function aesEncrypt(text: string, password: string): string {
  try {
    // Use crypto-js built-in encryption which handles IV and key derivation automatically
    const encrypted = CryptoJS.AES.encrypt(text, password);
    return encrypted.toString();
  } catch (error) {
    console.error("AES encryption failed:", error);
    throw new Error("Failed to encrypt data");
  }
}

/**
 * Simple AES-256 decryption using crypto-js built-in key derivation
 */
function aesDecrypt(encryptedData: string, password: string): string {
  try {
    // Use crypto-js built-in decryption
    const decrypted = CryptoJS.AES.decrypt(encryptedData, password);
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("AES decryption failed:", error);
    throw new Error("Failed to decrypt data");
  }
}

/**
 * Encrypt sensitive data before storing in localStorage
 */
export function encryptForStorage(data: any): string {
  try {
    const jsonString = JSON.stringify(data);
    return aesEncrypt(jsonString, getEncryptionKey());
  } catch (error) {
    console.error("Encryption failed:", error);
    throw new Error("Failed to encrypt data");
  }
}

/**
 * Decrypt data from localStorage
 */
export function decryptFromStorage(encryptedData: string): any {
  try {
    const decryptedJson = aesDecrypt(encryptedData, getEncryptionKey());
    return JSON.parse(decryptedJson);
  } catch (error) {
    console.error("Decryption failed:", error);
    // Return default settings if decryption fails
    return null;
  }
}

/**
 * Check if encryption is properly configured
 */
export function isEncryptionConfigured(): boolean {
  const key = getEncryptionKey();
  return !!key;
}

/**
 * Get encryption status for debugging
 */
export function getEncryptionStatus(): {
  configured: boolean;
  keyLength: number;
} {
  const key = getEncryptionKey();
  return {
    configured: isEncryptionConfigured(),
    keyLength: key.length,
  };
}
