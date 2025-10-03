import React, { useState, useEffect } from 'react';
import { getSupabaseStorageStatus } from '../lib/supabase-storage';

interface SupabaseStatusProps {
  className?: string;
}

export const SupabaseStatus: React.FC<SupabaseStatusProps> = ({ className = '' }) => {
  const [status, setStatus] = useState<{
    configured: boolean;
    openaiConfigured: boolean;
    geminiConfigured: boolean;
    userId: string;
    warning: string;
    supabaseAvailable: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const supabaseStatus = await getSupabaseStorageStatus();
        setStatus(supabaseStatus);
      } catch (error) {
        console.error('Failed to load Supabase status:', error);
        setStatus({
          configured: false,
          openaiConfigured: false,
          geminiConfigured: false,
          userId: '',
          warning: 'Failed to load Supabase status',
          supabaseAvailable: false
        });
      } finally {
        setLoading(false);
      }
    };

    loadStatus();
  }, []);

  if (loading) {
    return (
      <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm text-gray-600">Loading Supabase status...</span>
        </div>
      </div>
    );
  }

  if (!status) {
    return (
      <div className={`p-4 bg-red-50 border border-red-200 rounded-lg ${className}`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-sm text-red-700">Supabase Status: Error</span>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
    if (!status.supabaseAvailable) return 'bg-gray-100 border-gray-300 text-gray-700';
    if (status.configured) return 'bg-green-50 border-green-300 text-green-700';
    return 'bg-yellow-50 border-yellow-300 text-yellow-700';
  };

  const getStatusText = () => {
    if (!status.supabaseAvailable) return 'Not Configured';
    if (status.configured) return 'Configured & Ready';
    return 'Available (No Keys)';
  };

  const getStatusIcon = () => {
    if (!status.supabaseAvailable) return '🔧';
    if (status.configured) return '✅';
    return '⚠️';
  };

  return (
    <div className={`p-4 border rounded-lg ${getStatusColor()} ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getStatusIcon()}</span>
          <span className="font-medium text-sm">Supabase Storage</span>
        </div>
        <span className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded">
          {getStatusText()}
        </span>
      </div>
      
      <div className="text-xs space-y-1">
        <div className="flex justify-between">
          <span>OpenAI API:</span>
          <span className={status.openaiConfigured ? 'text-green-600' : 'text-gray-500'}>
            {status.openaiConfigured ? 'Configured' : 'Not Set'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Gemini API:</span>
          <span className={status.geminiConfigured ? 'text-green-600' : 'text-gray-500'}>
            {status.geminiConfigured ? 'Configured' : 'Not Set'}
          </span>
        </div>
        {status.userId && (
          <div className="flex justify-between">
            <span>User ID:</span>
            <span className="font-mono text-xs">{status.userId.substring(0, 8)}...</span>
          </div>
        )}
      </div>

      {status.warning && (
        <div className="mt-2 p-2 bg-white bg-opacity-50 rounded text-xs">
          <span className="text-gray-600">{status.warning}</span>
        </div>
      )}

      {!status.supabaseAvailable && (
        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs">
          <p className="text-blue-800 font-medium">Setup Required:</p>
          <ul className="text-blue-700 mt-1 space-y-1">
            <li>• Set VITE_SUPABASE_URL environment variable</li>
            <li>• Set VITE_SUPABASE_ANON_KEY environment variable</li>
            <li>• Create database tables (see SUPABASE_SETUP.md)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SupabaseStatus;