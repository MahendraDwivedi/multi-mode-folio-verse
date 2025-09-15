import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Mail, Github, Linkedin, ExternalLink, Phone, MapPin, MessageCircle, Briefcase, Code2, X, Minus, Square } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface WindowState {
  isMaximized: boolean;
  isMinimized: boolean;
  isOpen: boolean;
  zIndex: number;
  left?: number;
  top?: number;
}

type WindowType = 'about' | 'skills' | 'projects' | 'experience' | 'academics' | 'certifications' | 'hire' | 'contact';

const GUIMode = () => {
  const [windowStates, setWindowStates] = useState<Record<WindowType, WindowState>>({
    about: { isMaximized: false, isMinimized: false, isOpen: true, zIndex: 10 },
    skills: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 },
    projects: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 },
    experience: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 },
    academics: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 },
    certifications: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 },
    hire: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 },
    contact: { isMaximized: false, isMinimized: false, isOpen: false, zIndex: 10 }
  });

  const [nextZIndex, setNextZIndex] = useState(11);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const getWindowCenter = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const windowWidth = 600; // Default window width
    const windowHeight = 400; // Default window height
    
    return {
      left: Math.max(16, (screenWidth - windowWidth) / 2),
      top: Math.max(80, (screenHeight - windowHeight) / 2)
    };
  };

  const openWindow = (windowType: WindowType) => {
    console.log('Opening window:', windowType);
    const centerPos = getWindowCenter();
    setWindowStates(prev => ({
      ...prev,
      [windowType]: { 
        isMaximized: false, 
        isMinimized: false, 
        isOpen: true, 
        zIndex: nextZIndex,
        left: centerPos.left,
        top: centerPos.top
      }
    }));
    setNextZIndex(prev => prev + 1);
  };

  const closeWindow = (windowType: WindowType) => {
    setWindowStates(prev => ({
      ...prev,
      [windowType]: { ...prev[windowType], isOpen: false }
    }));
  };

  const maximizeWindow = (windowType: WindowType) => {
    setWindowStates(prev => ({
      ...prev,
      [windowType]: { 
        ...prev[windowType], 
        isMaximized: !prev[windowType].isMaximized,
        isMinimized: false,
        zIndex: nextZIndex
      }
    }));
    setNextZIndex(prev => prev + 1);
  };

  const minimizeWindow = (windowType: WindowType) => {
    setWindowStates(prev => ({
      ...prev,
      [windowType]: { 
        ...prev[windowType], 
        isMinimized: !prev[windowType].isMinimized 
      }
    }));
  };

  const bringToFront = (windowType: WindowType) => {
    setWindowStates(prev => ({
      ...prev,
      [windowType]: { 
        ...prev[windowType], 
        zIndex: nextZIndex
      }
    }));
    setNextZIndex(prev => prev + 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mahendra_Kumar_Dwivedi_Resume.pdf';
    link.download = 'Mahendra_Kumar_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Mahendra! I'm interested in discussing potential opportunities with you.");
    window.open(`https://wa.me/919580187515?text=${message}`, '_blank');
  };

  const WindowFrame = ({ 
    title, 
    children, 
    windowType, 
    className = "" 
  }: { 
    title: string; 
    children: React.ReactNode; 
    windowType: WindowType; 
    className?: string; 
  }) => {
    const state = windowStates[windowType];
    
    if (!state.isOpen) return null;

    const windowStyle = state.isMaximized 
      ? { left: 0, top: 0, right: 0, bottom: 0 }
      : { 
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };

    return (
      <div 
        className={`
          bg-white border-2 border-gray-400 shadow-lg fixed inset-0
          ${state.isMinimized ? 'h-8' : 'h-full'}
          ${className}
        `}
        style={{
          zIndex: state.zIndex,
        }}
        onClick={() => bringToFront(windowType)}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-1 flex items-center justify-between cursor-move">
          <span className="font-bold text-sm">{title}</span>
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="w-6 h-6 p-0 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(windowType);
              }}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-6 h-6 p-0 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                maximizeWindow(windowType);
              }}
            >
              <Square className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-6 h-6 p-0 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(windowType);
              }}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
        {!state.isMinimized && (
          <div className="p-4 overflow-auto h-[calc(100%-2rem)] bg-white">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-teal-400 to-blue-600 p-4 relative overflow-hidden">
      {/* Desktop Icons - Adjusted positioning */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mb-4 relative z-0 pt-4 pb-20">
        {[
          { type: 'about' as WindowType, icon: '👤', label: 'About' },
          { type: 'skills' as WindowType, icon: '🛠️', label: 'Skills' },
          { type: 'projects' as WindowType, icon: '💼', label: 'Projects' },
          { type: 'experience' as WindowType, icon: '📋', label: 'Experience' },
          { type: 'academics' as WindowType, icon: '🎓', label: 'Education' },
          { type: 'certifications' as WindowType, icon: '📜', label: 'Certifications' },
          { type: 'hire' as WindowType, icon: '💰', label: 'Hire Me' },
          { type: 'contact' as WindowType, icon: '📧', label: 'Contact' }
        ].map((item) => (
          <div
            key={item.type}
            className="flex flex-col items-center cursor-pointer group select-none"
            onClick={() => {
              console.log('Icon clicked:', item.type);
              openWindow(item.type);
            }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-blue-200 transition-colors shadow-md">
              {item.icon}
            </div>
            <span className="text-white text-xs sm:text-sm mt-2 text-center font-medium drop-shadow-md">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={downloadResume}
          >
            <Download className="w-4 h-4 mr-1" />
            Resume
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-800"
            onClick={() => {
              // Navigate back to web mode
              const event = new CustomEvent('changeMode', { detail: 'web' });
              window.dispatchEvent(event);
            }}
          >
            ← Back to Web
          </Button>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto">
          {Object.entries(windowStates)
            .filter(([, state]) => state.isOpen)
            .map(([windowType]) => (
              <Button
                key={windowType}
                size="sm"
                variant="outline"
                className="text-xs whitespace-nowrap"
                onClick={() => {
                  if (windowStates[windowType as WindowType].isMinimized) {
                    minimizeWindow(windowType as WindowType);
                  } else {
                    bringToFront(windowType as WindowType);
                  }
                }}
              >
                {windowType.charAt(0).toUpperCase() + windowType.slice(1)}
              </Button>
            ))}
        </div>
        <div className="text-xs hidden sm:block">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Windows Container */}
      <div className="relative">
        {/* About Window */}
        <WindowFrame title="About - Mahendra Kumar Dwivedi" windowType="about" className="max-w-2xl">
          <div className="text-center">
            {portfolioData.about.profileImage ? (
              <img 
                src={portfolioData.about.profileImage} 
                alt={portfolioData.about.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
              />
            ) : (
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {portfolioData.about.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{portfolioData.about.name}</h2>
            <p className="text-blue-600 font-medium mb-3">{portfolioData.about.title}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{portfolioData.about.description}</p>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {portfolioData.about.location}
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {portfolioData.about.email}
              </div>
            </div>
          </div>
        </WindowFrame>

        {/* Skills Window */}
        <WindowFrame title="Skills & Expertise" windowType="skills" className="max-w-3xl">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-1">
                {portfolioData.skills.technical.map((skill, index) => (
                  <Badge key={index} className="bg-blue-100 text-blue-800 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-1">
                {portfolioData.skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-1">
                {portfolioData.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </WindowFrame>

        {/* Projects Window */}
        <WindowFrame title="Featured Projects" windowType="projects" className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.projects.slice(0, 4).map((project, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button size="sm" variant="outline" onClick={() => window.open(project.demoUrl, '_blank')}>
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </WindowFrame>

        {/* Experience Window */}
        <WindowFrame title="Professional Experience" windowType="experience" className="max-w-3xl">
          <div className="space-y-4">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-600 text-sm">{exp.duration}</p>
                <Badge variant="outline" className="mt-1">{exp.type}</Badge>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </WindowFrame>

        {/* Education Window */}
        <WindowFrame title="Educational Background" windowType="academics" className="max-w-3xl">
          <div className="space-y-4">
            {portfolioData.academics.map((edu, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{edu.year}</p>
                    <p className="font-medium text-gray-800">{edu.grade}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {edu.achievements.map((achievement, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{achievement}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </WindowFrame>

        {/* Certifications Window */}
        <WindowFrame title="Certifications & Achievements" windowType="certifications" className="max-w-3xl">
          <div className="grid md:grid-cols-2 gap-4">
            {portfolioData.certifications.map((cert, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">{cert.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{cert.name}</h3>
                <p className="text-blue-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.year}</p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>
                )}
              </Card>
            ))}
          </div>
        </WindowFrame>

        {/* Hire Me Window */}
        <WindowFrame title="Hire Me - Available Positions" windowType="hire" className="max-w-4xl">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">Backend Developer</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Specialized in Node.js, Express.js, MongoDB, PostgreSQL, and RESTful APIs
                </p>
                <p className="text-green-600 font-medium">Minimum Stipend: ₹15,000/month</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">Frontend Developer</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Expert in React.js, Next.js, TypeScript, Tailwind CSS, and modern UI/UX
                </p>
                <p className="text-green-600 font-medium">Minimum Stipend: ₹15,000/month</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">Full Stack Developer</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Complete web development solutions with MERN/PERN stack expertise
                </p>
                <p className="text-green-600 font-medium">Minimum Stipend: ₹15,000/month</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">Java Developer</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Strong foundation in Core Java, Spring Boot, and enterprise applications
                </p>
                <p className="text-green-600 font-medium">Minimum Stipend: ₹15,000/month</p>
              </Card>
            </div>

            <div className="text-center pt-4 border-t">
              <h3 className="font-semibold text-gray-800 mb-3">Ready to start working together?</h3>
              <div className="flex justify-center gap-3">
                <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Chat on WhatsApp
                </Button>
                <Button onClick={() => openWindow('contact')} variant="outline">
                  <Mail className="w-4 h-4 mr-1" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </WindowFrame>

        {/* Contact Window */}
        <WindowFrame title="Contact Information" windowType="contact" className="max-w-2xl">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Get In Touch</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{portfolioData.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{portfolioData.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <a href={portfolioData.contact.linkedin} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-blue-600" />
                    <a href={portfolioData.contact.github} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-3">Send Message</h3>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-sm"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-sm"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="text-sm"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </WindowFrame>
      </div>
    </div>
  );
};

export default GUIMode;
