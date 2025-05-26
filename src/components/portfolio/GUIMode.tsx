
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Square, X, Folder, User, GraduationCap, Code, FolderOpen, Award, Briefcase, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

type WindowType = 'about' | 'academics' | 'skills' | 'projects' | 'certifications' | 'experience' | 'contact';

interface WindowState {
  id: string;
  type: WindowType;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

const GUIMode = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'about-1',
      type: 'about',
      title: 'About Me',
      isMinimized: false,
      isMaximized: false,
      position: { x: 100, y: 100 },
      size: { width: 600, height: 400 },
      zIndex: 1
    }
  ]);

  const [nextZIndex, setNextZIndex] = useState(2);

  const windowIcons = {
    about: User,
    academics: GraduationCap,
    skills: Code,
    projects: FolderOpen,
    certifications: Award,
    experience: Briefcase,
    contact: Mail
  };

  const openWindow = (type: WindowType, title: string) => {
    const existing = windows.find(w => w.type === type);
    if (existing) {
      bringToFront(existing.id);
      return;
    }

    const newWindow: WindowState = {
      id: `${type}-${Date.now()}`,
      type,
      title,
      isMinimized: false,
      isMaximized: false,
      position: { x: 150 + windows.length * 50, y: 150 + windows.length * 30 },
      size: { width: 600, height: 400 },
      zIndex: nextZIndex
    };

    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  const bringToFront = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: nextZIndex } : w
    ));
    setNextZIndex(nextZIndex + 1);
  };

  const renderWindowContent = (window: WindowState) => {
    switch (window.type) {
      case 'about':
        return (
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {portfolioData.about.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{portfolioData.about.name}</h2>
                <p className="text-muted-foreground">{portfolioData.about.title}</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">{portfolioData.about.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Location:</span> {portfolioData.about.location}
              </div>
              <div>
                <span className="font-medium">Email:</span> {portfolioData.about.email}
              </div>
            </div>
          </div>
        );
      
      case 'academics':
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Academic Background</h2>
            {portfolioData.academics.map((edu, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution} • {edu.year}</p>
                <p className="text-sm font-medium text-foreground mt-1">Grade: {edu.grade}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="p-6 space-y-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technical.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.soft.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Projects</h2>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {portfolioData.projects.map((project, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-3">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="text-xs">GitHub</Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" variant="outline" className="text-xs">Demo</Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Certifications</h2>
            {portfolioData.certifications.map((cert, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.issuer} • {cert.year}</p>
                {cert.credentialId && (
                  <p className="text-sm text-muted-foreground mt-1">ID: {cert.credentialId}</p>
                )}
              </Card>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Experience</h2>
            {portfolioData.experience.map((exp, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        );

      case 'contact':
        return (
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">{portfolioData.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-primary text-center">📱</span>
                <span className="text-foreground">{portfolioData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-primary text-center">💼</span>
                <a href={portfolioData.contact.linkedin} className="text-primary hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-primary text-center">🐙</span>
                <a href={portfolioData.contact.github} className="text-primary hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-6">Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute left-6 top-6 space-y-4">
        {Object.entries(windowIcons).map(([type, Icon]) => (
          <div
            key={type}
            className="flex flex-col items-center cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors"
            onClick={() => openWindow(type as WindowType, type.charAt(0).toUpperCase() + type.slice(1))}
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-1">
              <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
            <span className="text-xs text-gray-700 dark:text-gray-300 capitalize">{type}</span>
          </div>
        ))}
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 flex items-center px-4 gap-2">
        <Folder className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        {windows.filter(w => !w.isMinimized).map((window) => {
          const Icon = windowIcons[window.type];
          return (
            <Button
              key={window.id}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => bringToFront(window.id)}
            >
              <Icon className="w-4 h-4" />
              {window.title}
            </Button>
          );
        })}
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <div
          key={window.id}
          className={`absolute gui-window border border-gray-300 dark:border-gray-600 rounded-lg shadow-2xl transition-all ${
            window.isMinimized ? 'hidden' : ''
          } ${window.isMaximized ? 'inset-4' : ''}`}
          style={{
            left: window.isMaximized ? 0 : window.position.x,
            top: window.isMaximized ? 0 : window.position.y,
            width: window.isMaximized ? '100vw' : window.size.width,
            height: window.isMaximized ? '100vh' : window.size.height,
            zIndex: window.zIndex,
          }}
          onClick={() => bringToFront(window.id)}
        >
          {/* Window Header */}
          <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-t-lg flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2">
              {(() => {
                const Icon = windowIcons[window.type];
                return <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
              })()}
              <span className="text-sm text-gray-700 dark:text-gray-300">{window.title}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0 hover:bg-yellow-500"
                onClick={() => minimizeWindow(window.id)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0 hover:bg-green-500"
                onClick={() => maximizeWindow(window.id)}
              >
                <Square className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-6 h-6 p-0 hover:bg-red-500"
                onClick={() => closeWindow(window.id)}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Window Content */}
          <div className="h-full pb-8 overflow-hidden">
            {renderWindowContent(window)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GUIMode;
