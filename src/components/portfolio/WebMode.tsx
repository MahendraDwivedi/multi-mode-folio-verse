
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Mail, Github, Linkedin, ExternalLink, Phone, MapPin, MessageCircle, Star, Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar, Legend } from 'recharts';

const WebMode = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const navigation = [
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackData);
    alert('Thank you for your feedback!');
    setFeedbackData({ name: '', rating: 5, comment: '' });
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

  // Skills data for charts
  const skillsData = portfolioData.skills.technical.slice(0, 8).map((skill, index) => ({
    name: skill,
    proficiency: Math.floor(Math.random() * 30) + 70,
    projects: Math.floor(Math.random() * 15) + 5
  }));

  const skillCategories = [
    { name: 'Frontend', value: 35, color: '#3b82f6' },
    { name: 'Backend', value: 30, color: '#10b981' },
    { name: 'Database', value: 20, color: '#f59e0b' },
    { name: 'Tools', value: 15, color: '#ef4444' }
  ];

  const chartConfig = {
    proficiency: {
      label: "Proficiency %",
      color: "hsl(var(--primary))",
    },
    projects: {
      label: "Projects",
      color: "hsl(var(--secondary))",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">{portfolioData.about.name}</h1>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={downloadResume} className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              <span className="hidden xs:inline">Resume</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
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

          <Button size="sm" className="hidden md:flex items-center gap-2" onClick={downloadResume}>
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Responsive Layout */}
      <section id="about" className="pt-16 sm:pt-20 pb-8 sm:pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-20">
            {/* Profile Image */}
            <div className="flex justify-center order-1 lg:order-1">
              {portfolioData.about.profileImage ? (
                <img 
                  src={portfolioData.about.profileImage} 
                  alt={portfolioData.about.name}
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-4 border-primary/20 shadow-2xl"
                />
              ) : (
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-6xl font-bold shadow-2xl">
                  {portfolioData.about.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>

            {/* Profile Details */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {portfolioData.about.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-6">
                {portfolioData.about.title}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {portfolioData.about.description}
              </p>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">{portfolioData.about.location}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">{portfolioData.about.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="academics" className="py-8 sm:py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Education</h2>
          <div className="space-y-4 sm:space-y-6">
            {portfolioData.academics.map((edu, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm sm:text-base text-muted-foreground">{edu.year}</p>
                    <p className="text-sm sm:text-base font-medium text-foreground">{edu.grade}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <Badge key={i} variant="secondary" className="text-xs sm:text-sm">{achievement}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with Charts */}
      <section id="skills" className="py-8 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Skills & Expertise</h2>
          
          {/* Skills Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Technical Proficiency</h3>
              <ChartContainer config={chartConfig} className="h-64 sm:h-80">
                <ResponsiveContainer>
                  <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis 
                      dataKey="name" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={10}
                      interval={0}
                    />
                    <YAxis fontSize={10} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="proficiency" fill="var(--color-proficiency)" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Skill Distribution</h3>
              <ChartContainer config={chartConfig} className="h-64 sm:h-80">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={skillCategories}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      fontSize={10}
                    >
                      {skillCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </Card>
          </div>

          {/* Skills Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {portfolioData.skills.technical.map((skill, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 text-xs sm:text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {portfolioData.skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs sm:text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Languages</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {portfolioData.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="outline" className="text-xs sm:text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 sm:py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="h-36 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs sm:text-sm" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="w-3 h-3" />
                        Code
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs sm:text-sm" onClick={() => window.open(project.demoUrl, '_blank')}>
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

      {/* Certifications Section */}
      <section id="certifications" className="py-8 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-primary font-bold text-lg sm:text-xl">{cert.name.charAt(0)}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{cert.year}</p>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground mt-2 break-all">ID: {cert.credentialId}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Feedback */}
      <section id="contact" className="py-8 sm:py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground break-all">{portfolioData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{portfolioData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <a href={portfolioData.contact.linkedin} className="text-sm sm:text-base text-primary hover:underline break-all" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <a href={portfolioData.contact.github} className="text-sm sm:text-base text-primary hover:underline break-all" target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-4 sm:p-6 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Send a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="text-sm sm:text-base resize-none"
                  />
                </div>
                <Button type="submit" className="w-full text-sm sm:text-base">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Feedback Form */}
            <Card className="p-4 sm:p-6 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Share Your Feedback</h3>
              <form onSubmit={handleFeedbackSubmit} className="space-y-3 sm:space-y-4">
                <Input
                  placeholder="Your Name"
                  value={feedbackData.name}
                  onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                  required
                  className="text-sm sm:text-base"
                />
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">Rating:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 sm:w-5 sm:h-5 cursor-pointer ${
                          star <= feedbackData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setFeedbackData({ ...feedbackData, rating: star })}
                      />
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder="Your feedback..."
                  rows={3}
                  value={feedbackData.comment}
                  onChange={(e) => setFeedbackData({ ...feedbackData, comment: e.target.value })}
                  required
                  className="text-sm sm:text-base resize-none"
                />
                <Button type="submit" className="w-full text-sm sm:text-base">Submit Feedback</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2">
        <Button
          onClick={openWhatsApp}
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-green-600 hover:bg-green-700 shadow-lg"
          size="lg"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        <Button
          onClick={downloadResume}
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg"
          size="lg"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2024 {portfolioData.about.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebMode;
