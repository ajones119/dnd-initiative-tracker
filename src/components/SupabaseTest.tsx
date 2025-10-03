import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
// Using div instead of Card component since it's not available
import { Badge } from './ui/badge';
import { 
  storeApiKeysInSupabase, 
  getApiKeysFromSupabase, 
  clearApiKeysFromSupabase,
  getSupabaseStorageStatus 
} from '../lib/supabase-storage';
import { supabaseProxyService } from '../lib/supabase-proxy-service';

export const SupabaseTest: React.FC = () => {
  const [testOpenaiKey, setTestOpenaiKey] = useState('');
  const [testGeminiKey, setTestGeminiKey] = useState('');
  const [testPrompt, setTestPrompt] = useState('Generate a goblin warrior for D&D combat');
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const testStoreKeys = async () => {
    setLoading(true);
    try {
      await storeApiKeysInSupabase({
        openaiApiKey: testOpenaiKey,
        geminiApiKey: testGeminiKey
      });
      setResult('✅ Keys stored successfully!');
      await loadStatus();
    } catch (error) {
      setResult(`❌ Error storing keys: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testRetrieveKeys = async () => {
    setLoading(true);
    try {
      const keys = await getApiKeysFromSupabase();
      setResult(`✅ Retrieved keys: OpenAI=${!!keys.openaiApiKey}, Gemini=${!!keys.geminiApiKey}`);
      await loadStatus();
    } catch (error) {
      setResult(`❌ Error retrieving keys: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testClearKeys = async () => {
    setLoading(true);
    try {
      await clearApiKeysFromSupabase();
      setResult('✅ Keys cleared successfully!');
      await loadStatus();
    } catch (error) {
      setResult(`❌ Error clearing keys: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const loadStatus = async () => {
    try {
      const supabaseStatus = await getSupabaseStorageStatus();
      setStatus(supabaseStatus);
    } catch (error) {
      setStatus({ error: error.toString() });
    }
  };

  const testProxyService = async () => {
    setLoading(true);
    try {
      if (!supabaseProxyService.isAvailable()) {
        setResult('❌ Supabase proxy service not available');
        return;
      }

      const response = await supabaseProxyService.generateInitiativeData(testPrompt, 'groq');
      setResult(`✅ Proxy test successful! Generated ${response.creatures.length} creatures`);
    } catch (error) {
      setResult(`❌ Proxy test failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadStatus();
  }, []);

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            🧪 Supabase Integration Test
            {status && (
              <Badge variant={status.supabaseAvailable ? 'default' : 'secondary'}>
                {status.supabaseAvailable ? 'Available' : 'Not Configured'}
              </Badge>
            )}
          </h3>
        </div>
        <div className="space-y-4">
          {/* Status Display */}
          {status && (
            <div className="bg-gray-50 p-3 rounded-lg text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div>Supabase Available: {status.supabaseAvailable ? '✅' : '❌'}</div>
                <div>Configured: {status.configured ? '✅' : '❌'}</div>
                <div>OpenAI Key: {status.openaiConfigured ? '✅' : '❌'}</div>
                <div>Gemini Key: {status.geminiConfigured ? '✅' : '❌'}</div>
              </div>
              {status.warning && (
                <div className="mt-2 text-xs text-amber-600">
                  {status.warning}
                </div>
              )}
            </div>
          )}

          {/* Test API Keys */}
          <div className="space-y-3">
            <h4 className="font-medium">Test API Key Storage</h4>
            <Input
              type="password"
              placeholder="OpenAI API Key (sk-proj-...)"
              value={testOpenaiKey}
              onChange={(e) => setTestOpenaiKey(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Gemini API Key (AIza...)"
              value={testGeminiKey}
              onChange={(e) => setTestGeminiKey(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={testStoreKeys} disabled={loading}>
                Store Keys
              </Button>
              <Button onClick={testRetrieveKeys} disabled={loading} variant="outline">
                Retrieve Keys
              </Button>
              <Button onClick={testClearKeys} disabled={loading} variant="destructive">
                Clear Keys
              </Button>
            </div>
          </div>

          {/* Test Proxy Service */}
          <div className="space-y-3">
            <h4 className="font-medium">Test Proxy Service</h4>
            <Input
              placeholder="Test prompt for AI generation"
              value={testPrompt}
              onChange={(e) => setTestPrompt(e.target.value)}
            />
            <Button onClick={testProxyService} disabled={loading}>
              Test Groq Proxy
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Test Results:</h4>
              <pre className="text-sm text-blue-800 whitespace-pre-wrap">{result}</pre>
            </div>
          )}

          {/* Setup Instructions */}
          {!status?.supabaseAvailable && (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <h4 className="font-medium text-amber-900 mb-2">Setup Required:</h4>
              <ol className="text-sm text-amber-800 space-y-1 list-decimal list-inside">
                <li>Create a Supabase project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">supabase.com</a></li>
                <li>Set environment variables:
                  <ul className="ml-4 mt-1 space-y-1 list-disc list-inside">
                    <li><code>VITE_SUPABASE_URL</code></li>
                    <li><code>VITE_SUPABASE_ANON_KEY</code></li>
                  </ul>
                </li>
                <li>Run the SQL schema from <code>SUPABASE_SETUP.md</code></li>
                <li>Deploy the Edge Function from <code>supabase/functions/</code></li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupabaseTest;