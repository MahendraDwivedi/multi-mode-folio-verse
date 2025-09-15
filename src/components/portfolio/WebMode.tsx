
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Sun, Moon, Monitor, Terminal, Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import WhatsAppButton from './WhatsAppButton';

type PortfolioMode = 'gui' | 'terminal' | 'web';

interface WebModeProps {
  modes: { id: PortfolioMode; label: string; icon: React.ComponentType<any> }[];
  currentMode: PortfolioMode;
  setCurrentMode: (mode: PortfolioMode) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const WebMode = ({ modes, currentMode, setCurrentMode, isDarkMode, toggleTheme }: WebModeProps) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mahendra_Kumar_Dwivedi_Resume.pdf';
    link.download = 'Mahendra_Kumar_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                {portfolioData.about.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-lg font-bold">{portfolioData.about.name}</h1>
                <p className="text-sm text-muted-foreground">{portfolioData.about.title}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button onClick={downloadResume} size="sm">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          
          {/* Mode Switcher - Positioned below Resume option */}
          <div className="flex justify-end mt-4">
            <Card className="p-1 flex items-center gap-1 bg-background/95 backdrop-blur-sm border border-border/50 shadow-lg">
              {modes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <Button
                    key={mode.id}
                    variant={currentMode === mode.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentMode(mode.id)}
                    className="flex items-center gap-1 text-xs min-w-[60px]"
                  >
                    <Icon className="w-3 h-3" />
                    {mode.label}
                  </Button>
                );
              })}
            </Card>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-secondary py-20 rounded-b-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{portfolioData.hero.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{portfolioData.hero.subtitle}</p>
          <div className="flex justify-center space-x-4">
            {portfolioData.hero.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default WebMode;
