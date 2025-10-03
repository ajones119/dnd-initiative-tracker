/**
 * Storage Method Selector Component
 * Allows users to choose and test different API key storage methods
 */

import React, { useState, useEffect } from 'react';
import { unifiedStorage, type StorageStatus, type StorageMethod } from '../lib/unified-storage';
import { type Settings } from '../lib/settings';

interface StorageMethodSelectorProps {
  settings: Settings;
  onStorageMethodChange: (method: StorageMethod) => void;
  onSettingsUpdate: (settings: Partial<Settings>) => void;
}

export const StorageMethodSelector: React.FC<StorageMethodSelectorProps> = ({
  settings,
  onStorageMethodChange,
  onSettingsUpdate,
}) => {
  const [storageStatuses, setStorageStatuses] = useState<StorageStatus[]>([]);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [testing, setTesting] = useState<string | null>(null);

  useEffect(() => {
    loadStorageStatuses();
  }, []);

  const loadStorageStatuses = async () => {
    setLoading(true);
    try {
      const statuses = await unifiedStorage.getAllStorageStatus();
      const analysis = await unifiedStorage.getStorageAnalysis();
      setStorageStatuses(statuses);
      setAnalysis(analysis);
    } catch (error) {
      console.error('Failed to load storage statuses:', error);
    } finally {
      setLoading(false);
    }
  };

  const testStorageMethod = async (method: StorageMethod) => {
    setTesting(method);
    try {
      // Test storing and retrieving a test key
      const testKeys = {
        openaiApiKey: 'test-key-' + Date.now(),
        geminiApiKey: 'test-key-' + Date.now(),
      };

      // Store test keys
      const storeSuccess = await unifiedStorage.storeApiKeys(testKeys);
      
      // Retrieve test keys
      const retrievedOpenAI = await unifiedStorage.getApiKey('openai');
      const retrievedGemini = await unifiedStorage.getApiKey('gemini');

      // Clear test keys
      await unifiedStorage.clearApiKeys();

      const success = storeSuccess && 
        retrievedOpenAI === testKeys.openaiApiKey && 
        retrievedGemini === testKeys.geminiApiKey;

      alert(`Test ${success ? 'PASSED' : 'FAILED'} for ${method} storage`);
      
      // Reload statuses
      await loadStorageStatuses();
    } catch (error) {
      console.error(`Test failed for ${method}:`, error);
      alert(`Test FAILED for ${method} storage: ${error}`);
    } finally {
      setTesting(null);
    }
  };

  const getSecurityColor = (method: StorageMethod) => {
    switch (method) {
      case 'environment':
      case 'proxy':
        return 'text-green-600';
      case 'indexeddb':
      case 'memory':
        return 'text-yellow-600';
      case 'cookies':
      case 'session':
        return 'text-orange-600';
      case 'localstorage':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getSecurityIcon = (method: StorageMethod) => {
    switch (method) {
      case 'environment':
      case 'proxy':
        return '🔒';
      case 'indexeddb':
      case 'memory':
        return '🛡️';
      case 'cookies':
      case 'session':
        return '⚠️';
      case 'localstorage':
        return '🚨';
      default:
        return '❓';
    }
  };

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Current Selection */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Current Storage Method
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getSecurityIcon(settings.storageMethod)}</span>
          <span className={`font-medium ${getSecurityColor(settings.storageMethod)}`}>
            {settings.storageMethod.toUpperCase()}
          </span>
          {settings.useUnifiedStorage && (
            <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
              Unified Storage Enabled
            </span>
          )}
        </div>
      </div>

      {/* Security Analysis */}
      {analysis && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Security Analysis
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-600">Security Score:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  analysis.securityScore >= 8 ? 'bg-green-500' :
                  analysis.securityScore >= 6 ? 'bg-yellow-500' :
                  analysis.securityScore >= 4 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                style={{ width: `${(analysis.securityScore / 10) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium">{analysis.securityScore}/10</span>
          </div>
          
          <div className="space-y-1">
            {analysis.recommendations.map((rec: string, index: number) => (
              <div key={index} className="text-sm text-gray-700">
                {rec}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Storage Methods */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Available Storage Methods
        </h3>
        
        {storageStatuses.map((status) => (
          <div 
            key={status.method}
            className={`border rounded-lg p-4 ${
              status.method === settings.storageMethod 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getSecurityIcon(status.method)}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${getSecurityColor(status.method)}`}>
                      {status.method.toUpperCase()}
                    </span>
                    {status.configured && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        CONFIGURED
                      </span>
                    )}
                    {!status.available && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                        NOT AVAILABLE
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {status.warning || 'No issues detected'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {status.available && (
                  <button
                    onClick={() => testStorageMethod(status.method)}
                    disabled={testing === status.method}
                    className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
                  >
                    {testing === status.method ? 'Testing...' : 'Test'}
                  </button>
                )}
                
                {status.available && status.method !== settings.storageMethod && (
                  <button
                    onClick={() => onStorageMethodChange(status.method)}
                    className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                  >
                    Use This
                  </button>
                )}
                
                {status.method === settings.storageMethod && (
                  <span className="text-sm text-blue-600 font-medium">
                    ACTIVE
                  </span>
                )}
              </div>
            </div>
            
            {/* Configuration Details */}
            <div className="mt-3 text-sm text-gray-600">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">OpenAI:</span>
                  {status.openaiConfigured ? (
                    <span className="text-green-600 ml-1">✓ Configured</span>
                  ) : (
                    <span className="text-gray-400 ml-1">Not set</span>
                  )}
                </div>
                <div>
                  <span className="font-medium">Gemini:</span>
                  {status.geminiConfigured ? (
                    <span className="text-green-600 ml-1">✓ Configured</span>
                  ) : (
                    <span className="text-gray-400 ml-1">Not set</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Migration Notice */}
      {settings.storageMethod !== 'localstorage' && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h4 className="text-yellow-800 font-medium mb-2">
            🔄 Migration Notice
          </h4>
          <p className="text-yellow-700 text-sm">
            When switching storage methods, your API keys will be automatically migrated 
            to the new storage system. The old storage will be cleared for security.
          </p>
        </div>
      )}

      {/* Refresh Button */}
      <div className="flex justify-center">
        <button
          onClick={loadStorageStatuses}
          disabled={loading}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Refreshing...' : 'Refresh Status'}
        </button>
      </div>
    </div>
  );
};