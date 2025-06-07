
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
      {/* Render Current Mode */}
      {currentMode === 'gui' && <GUIMode />}
      {currentMode === 'terminal' && <TerminalMode />}
      {currentMode === 'web' && <WebMode modes={modes} currentMode={currentMode} setCurrentMode={setCurrentMode} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
    </div>
  );
};

export default Index;
