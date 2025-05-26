
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Mail, Github, Linkedin, ExternalLink, Phone, MapPin, MessageCircle, Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const WebMode = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigation = [
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'hire', label: 'Hire Me' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Mahendra! I'm interested in discussing potential opportunities with you.");
    window.open(`https://wa.me/919580187515?text=${message}`, '_blank');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/7b88955d-8e68-42ad-ad8c-3891fb6682ce.png';
    link.download = 'Mahendra_Kumar_Dwivedi_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">{portfolioData.about.name}</h1>
          
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button size="sm" className="flex items-center gap-2" onClick={downloadResume}>
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            {portfolioData.about.profileImage ? (
              <img 
                src={portfolioData.about.profileImage} 
                alt={portfolioData.about.name}
                className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20 shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
                {portfolioData.about.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {portfolioData.about.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {portfolioData.about.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {portfolioData.about.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {portfolioData.about.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {portfolioData.about.email}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="academics" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {portfolioData.academics.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{edu.year}</p>
                    <p className="font-medium text-foreground">{edu.grade}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <Badge key={i} variant="secondary">{achievement}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technical.map((skill, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="w-3 h-3" />
                        Code
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" variant="outline" className="flex items-center gap-1" onClick={() => window.open(project.demoUrl, '_blank')}>
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Experience</h2>
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <Badge variant="outline" className="mt-2">{exp.type}</Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">{exp.duration}</p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">{cert.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.year}</p>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground mt-2">ID: {cert.credentialId}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section id="hire" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Hire Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Backend Developer</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Specialized in Node.js, Express.js, MongoDB, PostgreSQL, and RESTful APIs
              </p>
              <p className="text-lg font-medium text-green-600">Minimum Stipend: ₹15,000/month</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Frontend Developer</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Expert in React.js, Next.js, TypeScript, Tailwind CSS, and modern UI/UX
              </p>
              <p className="text-lg font-medium text-green-600">Minimum Stipend: ₹15,000/month</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Full Stack Developer</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Complete web development solutions with MERN/PERN stack expertise
              </p>
              <p className="text-lg font-medium text-green-600">Minimum Stipend: ₹15,000/month</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Java Developer</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Strong foundation in Core Java, Spring Boot, and enterprise applications
              </p>
              <p className="text-lg font-medium text-green-600">Minimum Stipend: ₹15,000/month</p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Ready to start working together?</h3>
            <div className="flex justify-center gap-4">
              <Button onClick={openWhatsApp} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{portfolioData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{portfolioData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a href={portfolioData.contact.linkedin} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a href={portfolioData.contact.github} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <Button
          onClick={openWhatsApp}
          className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg"
          size="lg"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
        <Button
          onClick={downloadResume}
          className="rounded-full w-14 h-14 shadow-lg"
          size="lg"
        >
          <Download className="w-5 h-5" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 {portfolioData.about.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebMode;
