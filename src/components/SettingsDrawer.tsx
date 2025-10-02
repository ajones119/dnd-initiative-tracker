import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerClose,
} from "./ui/drawer";
import { Settings, X, Key, Brain, Sparkles, AlertTriangle } from "lucide-react";
import { useSettings } from "../hooks/useSettings";
import { type AIModel } from "../lib/settings";

interface SettingsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
  open,
  onOpenChange,
}) => {
  const { settings, updateSettings, resetSettings, isEncrypted } =
    useSettings();
  const [tempSettings, setTempSettings] = useState(() => settings);

  // Update temp settings when drawer opens (only when open changes to true)
  React.useEffect(() => {
    if (open) {
      setTempSettings(settings);
    }
  }, [open]); // Remove settings from dependency array to prevent infinite loop

  const handleSave = () => {
    updateSettings(tempSettings);
    onOpenChange(false);
  };

  const handleCancel = () => {
    setTempSettings(settings);
    onOpenChange(false);
  };

  const handleModelChange = (model: AIModel) => {
    setTempSettings({ ...tempSettings, aiModel: model });
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="w-96">
        <DrawerHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600" />
            <DrawerTitle>Settings</DrawerTitle>
          </div>
          <DrawerClose asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 absolute right-0 top-0">
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        {/* Content */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* AI Model Selection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-purple-500" />
              <h3 className="font-medium">AI Model</h3>
            </div>

            <div className="space-y-2">
              {(["none", "openai", "gemini"] as const).map((model) => (
                <label
                  key={model}
                  className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                >
                  <input
                    type="radio"
                    name="aiModel"
                    value={model}
                    checked={tempSettings.aiModel === model}
                    onChange={() => handleModelChange(model)}
                    className="text-purple-500 focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium capitalize">
                        {model === "none"
                          ? "Disabled"
                          : model === "openai"
                            ? "OpenAI"
                            : "Google Gemini"}
                      </span>
                      {model !== "none" && (
                        <Badge variant="secondary" className="text-xs">
                          {model === "openai"
                            ? "GPT-4o-mini"
                            : "Gemini 1.5 Flash"}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {model === "none" && "No AI assistance"}
                      {model === "openai" && "Fast and reliable AI assistance"}
                      {model === "gemini" && "Google's powerful AI model"}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* API Keys */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Key className="h-4 w-4 text-blue-500" />
              <h3 className="font-medium">API Keys</h3>
            </div>

            {/* OpenAI API Key */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                OpenAI API Key
              </label>
              <Input
                type="password"
                value={tempSettings.openaiApiKey}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    openaiApiKey: e.target.value,
                  })
                }
                placeholder="sk-proj-..."
                className="font-mono text-sm"
              />
              <p className="text-xs text-gray-500">
                Get your API key from{" "}
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  OpenAI Platform
                </a>
              </p>
            </div>

            {/* Gemini API Key */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Google Gemini API Key
              </label>
              <Input
                type="password"
                value={tempSettings.geminiApiKey}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    geminiApiKey: e.target.value,
                  })
                }
                placeholder="AIza..."
                className="font-mono text-sm"
              />
              <p className="text-xs text-gray-500">
                Get your API key from{" "}
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Google AI Studio
                </a>
                <br />
                <span className="text-amber-600">
                  Note: Gemini 1.5 models may not be available in all regions
                  yet
                </span>
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="font-medium text-sm">AI Status</span>
            </div>
            <p className="text-sm text-gray-600">
              {tempSettings.aiModel === "none" && "AI assistance is disabled"}
              {tempSettings.aiModel === "openai" &&
                !tempSettings.openaiApiKey &&
                "OpenAI selected but no API key provided"}
              {tempSettings.aiModel === "openai" &&
                tempSettings.openaiApiKey &&
                "✅ OpenAI ready for assistance"}
              {tempSettings.aiModel === "gemini" &&
                !tempSettings.geminiApiKey &&
                "Gemini selected but no API key provided"}
              {tempSettings.aiModel === "gemini" &&
                tempSettings.geminiApiKey &&
                "✅ Gemini ready for assistance"}
            </p>
          </div>
          {/* Security Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">🔐 API Key Security</p>
                <p className="mb-2">
                  Your API keys are stored locally in your browser. This is fine
                  for personal use.
                </p>
                <div className="text-xs space-y-1">
                  <p>
                    ⚠️ <strong>Plain text storage</strong> - Keys stored in
                    browser localStorage
                  </p>
                  <p>
                    ✅ <strong>Local only</strong> - Never sent to external
                    servers
                  </p>
                  <p>
                    ⚠️ <strong>Browser sharing</strong> - Don't share this
                    browser with others
                  </p>
                  <p>
                    💡 <strong>Best practice</strong> - Use dedicated API keys
                    with usage limits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DrawerFooter className="border-t">
          <div className="flex justify-between">
            <Button variant="destructive" onClick={resetSettings}>
              Reset to Defaults
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Settings</Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
