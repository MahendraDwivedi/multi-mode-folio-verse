
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Terminal, Globe, Sun, Moon } from 'lucide-react';
import GUIMode from '@/components/portfolio/GUIMode';
import TerminalMode from '@/components/portfolio/TerminalMode';
import WebMode from '@/components/portfolio/WebMode';

type PortfolioMode = 'gui' | 'terminal' | 'web';

const Index = () => {
  const [currentMode, setCurrentMode] = useState<PortfolioMode>('web');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const modes = [
    { id: 'gui' as const, label: 'GUI', icon: Monitor },
    { id: 'terminal' as const, label: 'Terminal', icon: Terminal },
    { id: 'web' as const, label: 'Web', icon: Globe },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      currentMode === 'terminal' ? 'terminal-bg' : 'bg-background'
    }`}>
      {/* Mode Switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <Card className="p-1 flex items-center gap-1 bg-background/90 backdrop-blur-sm border border-border/50">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <Button
                key={mode.id}
                variant={currentMode === mode.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentMode(mode.id)}
                className="flex items-center gap-1 text-xs"
              >
                <Icon className="w-3 h-3" />
                {mode.label}
              </Button>
            );
          })}
        </Card>
        
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="bg-background/90 backdrop-blur-sm"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>

      {/* Render Current Mode */}
      {currentMode === 'gui' && <GUIMode />}
      {currentMode === 'terminal' && <TerminalMode />}
      {currentMode === 'web' && <WebMode />}
    </div>
  );
};

export default Index;
