/**
 * IndexedDB Migration Component
 * Automatically migrates existing API keys from localStorage to IndexedDB
 */

import React, { useState, useEffect } from 'react';
import { storeApiKeysInIndexedDB, getApiKeysFromIndexedDB, isIndexedDBStorageConfigured } from '../lib/indexeddb-storage';
import { type Settings } from '../lib/settings';

interface IndexedDBMigrationProps {
  settings: Settings;
  onMigrationComplete: () => void;
}

export const IndexedDBMigration: React.FC<IndexedDBMigrationProps> = ({
  settings,
  onMigrationComplete,
}) => {
  const [migrationStatus, setMigrationStatus] = useState<'checking' | 'needed' | 'migrating' | 'complete' | 'error'>('checking');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkMigrationNeeded();
  }, []);

  const checkMigrationNeeded = async () => {
    try {
      // Check if IndexedDB is already configured
      const indexedDBConfigured = await isIndexedDBStorageConfigured();
      
      // Check if we have keys in localStorage that need migration
      const hasLocalStorageKeys = settings.openaiApiKey || settings.geminiApiKey;
      
      if (indexedDBConfigured) {
        setMigrationStatus('complete');
        onMigrationComplete();
      } else if (hasLocalStorageKeys) {
        setMigrationStatus('needed');
      } else {
        setMigrationStatus('complete');
        onMigrationComplete();
      }
    } catch (error) {
      console.error('Failed to check migration status:', error);
      setError('Failed to check migration status');
      setMigrationStatus('error');
    }
  };

  const performMigration = async () => {
    setMigrationStatus('migrating');
    setError(null);

    try {
      const keysToMigrate = {
        openaiApiKey: settings.openaiApiKey,
        geminiApiKey: settings.geminiApiKey,
      };

      // Store keys in IndexedDB
      await storeApiKeysInIndexedDB(keysToMigrate);

      // Verify migration
      const migratedKeys = await getApiKeysFromIndexedDB();
      const migrationSuccessful = 
        migratedKeys.openaiApiKey === keysToMigrate.openaiApiKey &&
        migratedKeys.geminiApiKey === keysToMigrate.geminiApiKey;

      if (migrationSuccessful) {
        setMigrationStatus('complete');
        onMigrationComplete();
      } else {
        throw new Error('Migration verification failed');
      }
    } catch (error) {
      console.error('Migration failed:', error);
      setError(`Migration failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setMigrationStatus('error');
    }
  };

  if (migrationStatus === 'checking') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-blue-700">Checking storage configuration...</span>
        </div>
      </div>
    );
  }

  if (migrationStatus === 'complete') {
    return null; // Don't show anything if migration is complete
  }

  if (migrationStatus === 'error') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <div className="flex items-start gap-3">
          <span className="text-red-600 text-xl">⚠️</span>
          <div className="flex-1">
            <h3 className="text-red-800 font-medium mb-1">Storage Migration Error</h3>
            <p className="text-red-700 text-sm mb-3">{error}</p>
            <div className="flex gap-2">
              <button
                onClick={performMigration}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
              >
                Retry Migration
              </button>
              <button
                onClick={checkMigrationNeeded}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
              >
                Check Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (migrationStatus === 'migrating') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-blue-700">Migrating your API keys to secure storage...</span>
        </div>
      </div>
    );
  }

  // migrationStatus === 'needed'
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🔒</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Security Upgrade Available
          </h3>
          
          <p className="text-green-700 mb-4">
            Your API keys are currently stored in localStorage. Upgrade to IndexedDB encryption 
            for better security while keeping your existing keys - no need to re-enter them!
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium text-green-900 mb-2">Benefits:</h4>
            <ul className="space-y-1">
              <li className="text-sm text-green-700 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Better encryption to protect your API keys
              </li>
              <li className="text-sm text-green-700 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Same convenience - no need to re-enter keys
              </li>
              <li className="text-sm text-green-700 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Protection against XSS attacks
              </li>
              <li className="text-sm text-green-700 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Helps protect your API credits
              </li>
            </ul>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={performMigration}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium"
            >
              🔒 Upgrade to Secure Storage
            </button>
            
            <button
              onClick={() => setMigrationStatus('complete')}
              className="text-green-600 hover:text-green-700 px-4 py-2 rounded-md font-medium"
            >
              Skip for Now
            </button>
          </div>
          
          <p className="text-xs text-green-600 mt-3">
            💡 Your API keys will be automatically migrated and preserved during the upgrade.
          </p>
        </div>
      </div>
    </div>
  );
};