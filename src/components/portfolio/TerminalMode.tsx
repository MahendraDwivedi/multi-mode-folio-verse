import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

interface TerminalLine {
  type: 'input' | 'output' | 'ascii';
  content: string;
  timestamp?: string;
}

const TerminalMode = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const asciiArt = {
    about: `
╔═══════════════════════════════════════╗
║              ABOUT ME                 ║
╚═══════════════════════════════════════╝`,
    
    academics: `
╔═══════════════════════════════════════╗
║            ACADEMICS                  ║
╚═══════════════════════════════════════╝`,
    
    skills: `
╔═══════════════════════════════════════╗
║              SKILLS                   ║
╚═══════════════════════════════════════╝`,
    
    projects: `
╔═══════════════════════════════════════╗
║             PROJECTS                  ║
╚═══════════════════════════════════════╝`,
    
    contact: `
╔═══════════════════════════════════════╗
║             CONTACT                   ║
╚═══════════════════════════════════════╝`,
    
    experience: `
╔═══════════════════════════════════════╗
║            EXPERIENCE                 ║
╚═══════════════════════════════════════╝`,
    
    certifications: `
╔═══════════════════════════════════════╗
║          CERTIFICATIONS               ║
╚═══════════════════════════════════════╝`
  };

  useEffect(() => {
    const welcomeMessage = `
╔══════════════════════════════════════════════════════════════╗
║                     PORTFOLIO TERMINAL v1.0                 ║
║                      Welcome to Alex's Portfolio            ║
╚══════════════════════════════════════════════════════════════╝

Type 'help' to see available commands or use the buttons below.
`;
    
    setLines([
      { type: 'ascii', content: welcomeMessage },
      { type: 'output', content: 'System initialized. Ready for commands.' }
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const commands = [
    { command: 'show about', description: 'Display personal information' },
    { command: 'show academics', description: 'Show academic background' },
    { command: 'show skills', description: 'List technical and soft skills' },
    { command: 'show projects', description: 'Display project portfolio' },
    { command: 'show experience', description: 'Show work experience' },
    { command: 'show certifications', description: 'List certifications' },
    { command: 'show contact', description: 'Display contact information' },
    { command: 'help', description: 'Show this help message' },
    { command: 'clear', description: 'Clear terminal screen' },
  ];

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const timestamp = new Date().toLocaleTimeString();
    
    // Add command to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    
    // Add input line
    setLines(prev => [...prev, { 
      type: 'input', 
      content: `alex@portfolio:~$ ${cmd}`,
      timestamp 
    }]);

    // Process command
    let output = '';
    let asciiHeader = '';

    switch (command) {
      case 'help':
        output = `Available commands:
${commands.map(c => `  ${c.command.padEnd(20)} - ${c.description}`).join('\n')}`;
        break;

      case 'clear':
        setLines([]);
        return;

      case 'show about':
        asciiHeader = asciiArt.about;
        output = `Name: ${portfolioData.about.name}
Title: ${portfolioData.about.title}
Location: ${portfolioData.about.location}
Email: ${portfolioData.about.email}
Phone: ${portfolioData.about.phone}

Description:
${portfolioData.about.description}

Profile Image: ${portfolioData.about.profileImage ? 'Available' : 'Not set'}`;
        break;

      case 'show academics':
        asciiHeader = asciiArt.academics;
        output = portfolioData.academics.map((edu, index) => 
          `${index + 1}. ${edu.degree}
   Institution: ${edu.institution}
   Year: ${edu.year}
   Grade: ${edu.grade}
   Achievements:
${edu.achievements.map(a => `   - ${a}`).join('\n')}
`).join('\n');
        break;

      case 'show skills':
        asciiHeader = asciiArt.skills;
        output = `Technical Skills:
${portfolioData.skills.technical.map(skill => `  • ${skill}`).join('\n')}

Soft Skills:
${portfolioData.skills.soft.map(skill => `  • ${skill}`).join('\n')}

Languages:
${portfolioData.skills.languages.map(lang => `  • ${lang}`).join('\n')}`;
        break;

      case 'show projects':
        asciiHeader = asciiArt.projects;
        output = portfolioData.projects.map((project, index) => 
          `${index + 1}. ${project.title}
   Description: ${project.description}
   Tech Stack: ${project.techStack.join(', ')}
   ${project.githubUrl ? `GitHub: ${project.githubUrl}` : ''}
   ${project.demoUrl ? `Demo: ${project.demoUrl}` : ''}
`).join('\n');
        break;

      case 'show experience':
        asciiHeader = asciiArt.experience;
        output = portfolioData.experience.map((exp, index) => 
          `${index + 1}. ${exp.title} at ${exp.company}
   Duration: ${exp.duration}
   Type: ${exp.type}
   Responsibilities:
${exp.description.map(desc => `   - ${desc}`).join('\n')}
`).join('\n');
        break;

      case 'show certifications':
        asciiHeader = asciiArt.certifications;
        output = portfolioData.certifications.map((cert, index) => 
          `${index + 1}. ${cert.name}
   Issuer: ${cert.issuer}
   Year: ${cert.year}
   ${cert.credentialId ? `Credential ID: ${cert.credentialId}` : ''}
`).join('\n');
        break;

      case 'show contact':
        asciiHeader = asciiArt.contact;
        output = `Email: ${portfolioData.contact.email}
Phone: ${portfolioData.contact.phone}
LinkedIn: ${portfolioData.contact.linkedin}
GitHub: ${portfolioData.contact.github}
${portfolioData.contact.website ? `Website: ${portfolioData.contact.website}` : ''}`;
        break;

      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    // Add output lines
    if (asciiHeader) {
      setLines(prev => [...prev, { type: 'ascii', content: asciiHeader }]);
    }
    setLines(prev => [...prev, { type: 'output', content: output }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        executeCommand(currentInput);
        setCurrentInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const handleCommandClick = (command: string) => {
    setCurrentInput(command);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen terminal-bg text-green-400 font-mono p-4">
      {/* Terminal Window */}
      <div className="bg-black/80 rounded-lg border border-green-500/30 shadow-2xl max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm ml-4">portfolio@terminal</span>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="p-4 h-96 overflow-y-auto scroll-smooth"
        >
          {lines.map((line, index) => (
            <div key={index} className={`${
              line.type === 'input' ? 'text-yellow-400' : 
              line.type === 'ascii' ? 'text-cyan-400 whitespace-pre' : 
              'text-green-300'
            } whitespace-pre-wrap mb-1`}>
              {line.content}
            </div>
          ))}
          
          {/* Current Input Line */}
          <div className="flex items-center text-yellow-400">
            <span className="mr-2">alex@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent border-none outline-none flex-1 text-green-400"
              autoFocus
            />
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>

      {/* Command Buttons */}
      <div className="max-w-6xl mx-auto mt-6">
        <h3 className="text-cyan-400 text-lg mb-4 font-semibold">Quick Commands:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {commands.filter(cmd => cmd.command.startsWith('show')).map((cmd, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-black/40 border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all font-mono text-sm"
              onClick={() => handleCommandClick(cmd.command)}
            >
              {cmd.command}
            </Button>
          ))}
        </div>
        
        <div className="flex gap-3 mt-3">
          <Button
            variant="outline"
            className="bg-black/40 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-mono text-sm"
            onClick={() => handleCommandClick('help')}
          >
            help
          </Button>
          <Button
            variant="outline"
            className="bg-black/40 border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-400 transition-all font-mono text-sm"
            onClick={() => handleCommandClick('clear')}
          >
            clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TerminalMode;
