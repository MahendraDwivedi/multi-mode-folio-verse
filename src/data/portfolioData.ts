
export interface PortfolioData {
  about: {
    name: string;
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
  };
  academics: Array<{
    degree: string;
    institution: string;
    year: string;
    grade: string;
    achievements: string[];
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
    credentialId?: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string[];
    type: 'internship' | 'job' | 'freelance';
  }>;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website?: string;
  };
}

export const portfolioData: PortfolioData = {
  about: {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    description: "Passionate software developer with 3+ years of experience creating innovative web applications. I specialize in React, Node.js, and modern UI/UX design principles. Always eager to learn new technologies and solve complex problems.",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567"
  },
  academics: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      year: "2020-2024",
      grade: "3.8 GPA",
      achievements: ["Dean's List (4 semesters)", "ACM Programming Contest Winner", "Computer Science Excellence Award"]
    },
    {
      degree: "High School Diploma",
      institution: "Tech Prep Academy",
      year: "2016-2020",
      grade: "4.0 GPA",
      achievements: ["Valedictorian", "National Merit Scholar", "Mathematics Olympiad Gold Medal"]
    }
  ],
  skills: {
    technical: [
      "JavaScript/TypeScript", "React", "Node.js", "Python", "Java", "SQL", "MongoDB", 
      "AWS", "Docker", "Git", "Figma", "Adobe Creative Suite"
    ],
    soft: [
      "Problem Solving", "Team Leadership", "Communication", "Project Management", 
      "Creative Thinking", "Adaptability", "Time Management"
    ],
    languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"]
  },
  projects: [
    {
      title: "EcoTracker",
      description: "A comprehensive sustainability tracking app that helps users monitor their carbon footprint, set environmental goals, and connect with eco-friendly communities.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      githubUrl: "https://github.com/alexjohnson/ecotracker",
      demoUrl: "https://ecotracker-demo.com",
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "CodeCollab",
      description: "Real-time collaborative coding platform with video chat, screen sharing, and integrated development environment for remote pair programming.",
      techStack: ["React", "WebRTC", "Socket.io", "Monaco Editor", "Docker"],
      githubUrl: "https://github.com/alexjohnson/codecollab",
      demoUrl: "https://codecollab-demo.com",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for controlling and monitoring smart home devices with beautiful data visualizations and automated routines.",
      techStack: ["Vue.js", "Python", "Raspberry Pi", "MQTT", "InfluxDB"],
      githubUrl: "https://github.com/alexjohnson/smart-home",
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-DVA-2023-001"
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2022",
      credentialId: "GOOGLE-UX-2022-456"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      year: "2023",
      credentialId: "MDB-DEV-2023-789"
    }
  ],
  experience: [
    {
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      duration: "Jun 2023 - Aug 2023",
      description: [
        "Developed REST APIs using Node.js and Express for client projects",
        "Collaborated with senior developers on React frontend applications",
        "Participated in agile development processes and code reviews",
        "Improved application performance by 25% through optimization"
      ],
      type: "internship"
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jan 2022 - Present",
      description: [
        "Built custom websites for 15+ small businesses and startups",
        "Specialized in React, WordPress, and e-commerce solutions",
        "Managed full project lifecycle from requirements to deployment",
        "Maintained 98% client satisfaction rate"
      ],
      type: "freelance"
    }
  ],
  contact: {
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    website: "https://alexjohnson.dev"
  }
};
