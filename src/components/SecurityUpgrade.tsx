/**
 * Security Upgrade Component
 * One-click upgrade from localStorage to secure storage while preserving API keys
 */

import React, { useState } from 'react';
import { oneClickSecureUpgrade, getMigrationRecommendation } from '../lib/migration-helper';
import { type Settings } from '../lib/settings';

interface SecurityUpgradeProps {
  settings: Settings;
  onSettingsUpdate: (settings: Partial<Settings>) => void;
}

export const SecurityUpgrade: React.FC<SecurityUpgradeProps> = ({
  settings,
  onSettingsUpdate,
}) => {
  const [upgrading, setUpgrading] = useState(false);
  const [upgradeResult, setUpgradeResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const recommendation = getMigrationRecommendation(settings);

  const handleUpgrade = async () => {
    setUpgrading(true);
    setUpgradeResult(null);
    
    try {
      const result = await oneClickSecureUpgrade(settings);
      
      if (result.success) {
        await onSettingsUpdate(result.newSettings);
      }
      
      setUpgradeResult({
        success: result.success,
        message: result.message
      });
    } catch (error) {
      setUpgradeResult({
        success: false,
        message: `Upgrade failed: ${error}`
      });
    } finally {
      setUpgrading(false);
    }
  };

  // Don't show if already using secure storage
  if (!recommendation.recommended) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🔒</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Security Upgrade Available
          </h3>
          
          <p className="text-blue-700 mb-4">
            Your personal API keys are currently stored in localStorage, which is vulnerable to security attacks. 
            Upgrade to encrypted storage to better protect your API keys and credits - no need to re-enter them!
          </p>
          
          <div className="mb-4">
            <h4 className="font-medium text-blue-900 mb-2">Benefits of upgrading:</h4>
            <ul className="space-y-1">
              {recommendation.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-blue-700 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          {upgradeResult && (
            <div className={`p-3 rounded-md mb-4 ${
              upgradeResult.success 
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {upgradeResult.success ? '✅' : '❌'}
                </span>
                <span className="font-medium">
                  {upgradeResult.success ? 'Upgrade Successful!' : 'Upgrade Failed'}
                </span>
              </div>
              <p className="text-sm mt-1">{upgradeResult.message}</p>
            </div>
          )}
          
          <div className="flex gap-3">
            <button
              onClick={handleUpgrade}
              disabled={upgrading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {upgrading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Upgrading...
                </span>
              ) : (
                '🔒 Upgrade to Secure Storage'
              )}
            </button>
            
            <button
              onClick={() => setUpgradeResult(null)}
              className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-md font-medium"
            >
              Dismiss
            </button>
          </div>
          
          <p className="text-xs text-blue-600 mt-3">
            💡 Your API keys will be automatically migrated and preserved during the upgrade process.
          </p>
        </div>
      </div>
    </div>
  );
};