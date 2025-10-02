import React from 'react';
import { Button } from './ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from './ui/dialog';
import { 
  HelpCircle, 
  Wand2, 
  Settings, 
  BookOpen, 
  MousePointer, 
  Zap,
  Info,
  ArrowRight,
  CheckCircle,
  Keyboard,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';

interface HelpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <HelpCircle className="h-6 w-6 text-primary" />
            Fantasy Initiative Tracker - Help Guide
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Start */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-warning" />
              Quick Start
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Add Creatures:</strong> Click "Add Row" or type monster names in the Name column
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Set Initiative:</strong> Enter initiative values (higher = goes first)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Manage Combat:</strong> Use Previous/Next Turn buttons to track rounds
                </div>
              </div>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Keyboard className="h-5 w-5 text-accent" />
              Keyboard Shortcuts
            </h3>
            <div className="space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <ArrowUp className="h-4 w-4" />
                    Table Navigation
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Navigate between cells:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl + Arrow Keys</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Previous turn:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Shift + ←</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Next turn:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Shift + →</kbd>
                    </div>
                  </div>
                </div>

                <div className="border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    General Navigation
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Tab through elements:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Tab</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Navigate backwards:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Shift + Tab</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Activate focused element:</span>
                      <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Enter / Space</kbd>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-accent" />
                  Navigation Tips
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>• <strong>Ctrl + Arrow</strong> moves between table cells without changing input values</li>
                  <li>• <strong>Shift + Arrow</strong> (left/right) advances combat turns</li>
                  <li>• All buttons and checkboxes have visible focus indicators</li>
                  <li>• Regular arrow keys work normally in text inputs (no modifier needed)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monster Search */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <MousePointer className="h-5 w-5 text-primary" />
              Monster Search & Auto-Fill
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                Type monster names in the Name column to search our database of 250+ D&D 5e creatures:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span>HP, AC, Speed automatically populated</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span>Initiative modifier calculated from Dexterity</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  <span>Actions and abilities added to Notes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* AI Setup */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Settings className="h-5 w-5 text-secondary" />
              AI Setup & Configuration
            </h3>
            <div className="space-y-4 text-sm">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Getting Started with AI:</h4>
                <ol className="space-y-2 ml-4 list-decimal">
                  <li>Click the <strong>Settings</strong> button (gear icon)</li>
                  <li>Choose your AI model: <strong>OpenAI</strong> or <strong>Gemini</strong></li>
                  <li>Enter your API key (see instructions below)</li>
                  <li>Save settings and start generating encounters!</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Wand2 className="h-4 w-4" />
                    OpenAI Setup
                  </h4>
                  <ol className="space-y-1 text-xs">
                    <li>1. Visit <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com</a></li>
                    <li>2. Create account or sign in</li>
                    <li>3. Generate new API key</li>
                    <li>4. Copy and paste into Settings</li>
                  </ol>
                </div>

                <div className="border border-secondary/20 rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Gemini Setup
                  </h4>
                  <ol className="space-y-1 text-xs">
                    <li>1. Visit <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aistudio.google.com</a></li>
                    <li>2. Sign in with Google account</li>
                    <li>3. Create new API key</li>
                    <li>4. Copy and paste into Settings</li>
                  </ol>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Wand2 className="h-4 w-4" />
                    Quick AI Assistant
                  </h4>
                  <p className="text-xs mb-2">
                    Use the AI Assistant button to quickly generate creatures for your current encounter:
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li>• Provides example prompts</li>
                    <li>• Generates creature stats instantly</li>
                    <li>• Perfect for quick additions</li>
                  </ul>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Full Encounter Builder
                  </h4>
                  <p className="text-xs mb-2">
                    Use the Combat Description section below the table for complete encounters:
                  </p>
                  <ul className="space-y-1 text-xs">
                    <li>• Describe full scenarios</li>
                    <li>• Get combat mechanics & tactics</li>
                    <li>• Auto-populates entire table</li>
                  </ul>
                </div>
              </div>

              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-warning" />
                  Security Note
                </h4>
                <p className="text-xs">
                  Your API keys are stored locally in your browser and never sent to our servers. 
                  Use dedicated API keys with usage limits for security.
                </p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-info" />
              Pro Tips
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                  <span className="text-primary font-bold text-xs">1</span>
                </div>
                <div>
                  <strong>Better AI Results:</strong> Be specific about enemy types, numbers, and environmental details in your encounter descriptions.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                  <span className="text-primary font-bold text-xs">2</span>
                </div>
                <div>
                  <strong>Mobile Usage:</strong> Essential stats (HP, AC) are available in the Notes popup on small screens.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                  <span className="text-primary font-bold text-xs">3</span>
                </div>
                <div>
                  <strong>Encounter Planning:</strong> Save your encounters before sessions to quickly load them during play.
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <DialogClose asChild>
            <Button variant="outline">Got it!</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
