
export interface PortfolioData {
  about: {
    name: string;
    title: string;
    description: string;
    location: string;
    email: string;
    phone: string;
    profileImage?: string;
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
    name: "Mahendra Kumar Dwivedi",
    title: "B.Tech Student | Software Developer",
    description: "Passionate B.Tech student with a keen interest in software development and creative design. Currently pursuing Computer Science Engineering with a focus on web development and modern technologies.",
    location: "Sonbhadra, Uttar Pradesh",
    email: "dwivedimahendra9876@gmail.com",
    phone: "+91 9580187515",
    profileImage: "/lovable-uploads/7b88955d-8e68-42ad-ad8c-3891fb6682ce.png"
  },
  academics: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rajkiya Engineering College, Sonbhadra",
      year: "2021-2025 (Currently 6th Semester)",
      grade: "7.5 CGPA",
      achievements: ["Consistent Academic Performance", "Active in Technical Events", "Web Development Projects"]
    },
    {
      degree: "12th Grade (Senior Secondary)",
      institution: "AIMS International School, Gonda",
      year: "2020-2021",
      grade: "89.6%",
      achievements: ["Science Stream Excellence", "Mathematics High Scorer", "Academic Merit"]
    },
    {
      degree: "10th Grade (Secondary)",
      institution: "AIMS International School, Gonda",
      year: "2018-2019",
      grade: "92.67%",
      achievements: ["Academic Excellence", "All Subjects Distinction", "School Topper"]
    }
  ],
  skills: {
    technical: [
      "JavaScript", "React", "Node.js", "HTML/CSS", "C++", "Python", 
      "Git", "MongoDB", "Express.js", "Vercel Deployment", "Web Development", "UI/UX Design"
    ],
    soft: [
      "Problem Solving", "Creative Thinking", "Team Collaboration", "Communication", 
      "Project Management", "Adaptability", "Learning Agility"
    ],
    languages: ["Hindi (Native)", "English (Fluent)"]
  },
  projects: [
    {
      title: "Learnix",
      description: "A comprehensive learning platform web application designed to provide interactive educational content and resources for students. Features modern UI/UX design with responsive layout.",
      techStack: ["React", "Node.js", "CSS", "JavaScript", "Vercel"],
      githubUrl: "https://github.com/MahendraDwivedi/learnix",
      demoUrl: "https://learnix-three.vercel.app",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Training & Placement Website",
      description: "A complete web solution for managing campus placements and training resources. Includes student registration, company listings, and placement tracking features.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Vercel"],
      githubUrl: "https://github.com/MahendraDwivedi/training-placement",
      demoUrl: "https://training-placement-eta.vercel.app",
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ],
  certifications: [
    {
      name: "Web Development Fundamentals",
      issuer: "Online Learning Platform",
      year: "2023",
      credentialId: "WEB-2023-001"
    },
    {
      name: "React Development",
      issuer: "Technical Institute",
      year: "2023",
      credentialId: "REACT-2023-456"
    }
  ],
  experience: [
    {
      title: "Web Development Projects",
      company: "Personal Projects",
      duration: "2022 - Present",
      description: [
        "Developed multiple web applications using modern technologies",
        "Implemented responsive design principles for mobile-first approach",
        "Deployed applications on cloud platforms like Vercel",
        "Collaborated on open-source projects and learning platforms"
      ],
      type: "freelance"
    }
  ],
  contact: {
    email: "dwivedimahendra9876@gmail.com",
    phone: "+91 9580187515",
    linkedin: "https://www.linkedin.com/in/mahendra-dwivedi-a35132249/",
    github: "https://github.com/MahendraDwivedi",
    website: "https://mahendra-portfolio.vercel.app"
  }
};
