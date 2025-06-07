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
    frontend: string[];
    backend: string[];
    databases: string[];
    os: string[];
    otherTools: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
    featured?: boolean;
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
  achievements: string[];
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website?: string;
    leetcode?: string;
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
      year: "2022-2026 (Currently 6th Semester)",
      grade: "7.5 CGPA (Current)",
      achievements: ["Consistent Academic Performance", "Active in Technical Events", "Web Development Projects"]
    },
    {
      degree: "12th Grade (PCM + CS)",
      institution: "AIMS International School, Gonda",
      year: "2020-2021",
      grade: "89.6%",
      achievements: ["Science Stream Excellence", "Mathematics High Scorer", "Academic Merit"]
    },
    {
      degree: "10th Grade",
      institution: "AIMS International School, Gonda",
      year: "2018-2019",
      grade: "92.67%",
      achievements: ["Academic Excellence", "All Subjects Distinction", "School Topper"]
    }
  ],
  skills: {
    technical: [
      "JavaScript", "React", "Node.js", "HTML/CSS", "C++", "Python", 
      "Git", "MongoDB", "Express.js", "Vercel Deployment", "Web Development", "UI/UX Design",
      "Flutter", "Dart"
    ],
    soft: [
      "Problem Solving", "Creative Thinking", "Team Collaboration", "Communication", 
      "Project Management", "Adaptability", "Learning Agility"
    ],
    languages: ["Hindi (Native)", "English (Fluent)", "Java", "JavaScript", "Python", "C/C++", "Dart"],
    frontend: ["React", "Tailwind CSS", "HTML", "CSS", "Flutter"],
    backend: [
      "Node.js", "Springboot"
    ],
    databases: ["MySQL", "MongoDB", "Firebase"],
    os: ["Debian", "Ubuntu", "Windows"],
    otherTools: ["Postman", "Git", "Vite"]
  },
  projects: [
    {
      title: "Learnix",
      description: "Learning Management System (LMS) - Built a scalable full-stack LMS using MongoDB, Express.js, React.js, and Node.js, integrated with Clerk for secure authentication and role-based access control (instructor, student). Instructors can create, update, and delete courses with modular content and tracked student progress with dynamic updates and backend sync using Mongoose. Personalized dashboards for students and instructors showing progress, enrolled courses, and performance analytics.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Clerk", "Mongoose"],
      githubUrl: "https://github.com/MahendraDwivedi/learnix",
      demoUrl: "https://learnix-three.vercel.app",
      image: "photo-1498050108023-c5249f4df085",
      featured: true
    },
    {
      title: "Training & Placement Website",
      description: "Created a responsive web portal to streamline training and placement activities for students and recruiters. Developed multiple user roles (students, recruiters, verifiers) with customized functionality. Enhanced user experience with dynamic company profile displays and recruitment drive tracking. Integrated a search feature for finding companies, roles, and recruitment events.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/MahendraDwivedi/training-placement",
      demoUrl: "https://training-placement-eta.vercel.app",
      image: "photo-1486312338219-ce68d2c6f44d",
      featured: true
    },
    {
      title: "Maleria Tracker",
      description: "Real-time malaria tracking and data visualization for early detection and prevention. Developed a full-stack web application using React (frontend), Express.js (backend), and MongoDB (database). Designed a state-and district-level tracking system for malaria cases, including active cases, total cases, and recoveries. Built a hospital-based data entry system in which hospitals update case details in real time. Ensured secure API communication and authentication for authorized hospital data entry.",
      techStack: ["React", "Express.js", "MongoDB", "Node.js", "Data Visualization"],
      githubUrl: "https://github.com/MahendraDwivedi/maleria-tracker",
      image: "photo-1576091160399-112ba8d25d1f"
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
      title: "Core Team Member",
      company: "Google Developer Group",
      duration: "Jul 2024 - Present",
      description: [
        "Conducted sessions on problem solving techniques, algorithm optimization, and coding best practices",
        "Organized several virtual contests and hackathons",
        "Helping beginners understand complex topics"
      ],
      type: "job"
    },
    {
      title: "College Website Maintenance Team",
      company: "Rajkiya Engineering College",
      duration: "Aug 2024 - Present",
      description: [
        "Learned the fundamentals of Version Control Like Git and Github and about Real-World Project Management",
        "Learned to troubleshoot and resolve issues related to user experience, website functionality"
      ],
      type: "job"
    },
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
  achievements: [
    "Achieved the leetcode rating of 1636",
    "Secured a contest rank of 1448 on Leetcode weekly contest 446",
    "Solved over 1000 problems on various coding platforms such as Leetcode, GFG, Coding Ninjas etc."
  ],
  contact: {
    email: "dwivedimahendra9876@gmail.com",
    phone: "+91 9580187515",
    linkedin: "https://www.linkedin.com/in/mahendra-dwivedi-a35132249/",
    github: "https://github.com/MahendraDwivedi",
    website: "https://mahendra-portfolio.vercel.app",
    leetcode: "https://leetcode.com/u/MahendraDwivedi/"
  }
};
