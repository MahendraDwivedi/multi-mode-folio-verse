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
  hero: {
    title: string;
    subtitle: string;
    socialLinks: Array<{
      name: string;
      url: string;
    }>;
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
    title: "Software Developer | Java Developer | Full Stack MERN Developer",
    description: "Aspiring Software Developer with expertise in Java and full stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Currently pursuing B.Tech in Computer Science Engineering with hands-on experience in building scalable web applications, RESTful APIs, and enterprise-level solutions. Proficient in both frontend and backend technologies with a strong foundation in object-oriented programming and modern development practices.",
    location: "Gonda, Uttar Pradesh",
    email: "dmahendra0707@gmail.com",
    phone: "+91 9580187515",
    profileImage: "/profile-photo.jpeg"
  },
  hero: {
    title: "Software Developer & Problem Solver",
    subtitle: "Aspiring Software Developer with expertise in Java and full stack development using the MERN stack. Passionate about creating innovative web solutions and solving complex problems. Currently pursuing B.Tech in Computer Science Engineering with hands-on experience in building scalable applications and modern web technologies.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/MahendraDwivedi" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/mahendra-dwivedi-a35132249/" },
      { name: "LeetCode", url: "https://leetcode.com/u/MahendraDwivedi/" }
    ]
  },
  academics: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rajkiya Engineering College, Sonbhadra",
      year: "2022-2026 (Currently 8th Semester)",
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
      "Node.js", "Spring Boot", "Java", "Spring Framework", "Spring MVC", "Spring Data JPA", "Hibernate", "Maven", "RESTful APIs", "Microservices"
    ],
    databases: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "JDBC"],
    os: ["Debian", "Ubuntu", "Mint", "Windows"],
    otherTools: ["Postman", "Git", "Vite", "IntelliJ IDEA", "Eclipse", "VS Code", "JUnit", "Mockito", "Docker", "Maven"]
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
      title: "PrimeDrive – Let's Drive",
      description: "Developed a full-stack car rental web app enabling owners to list/manage vehicles and users to book cars with real-time availability. Built secure REST APIs (Node.js, Express, MongoDB) for vehicle/booking management with JWT authentication & role-based access. Designed responsive UI (React, TailwindCSS, Recharts) with dashboards showing overall monthly bookings (guests) and owner-specific bookings & revenue (logged-in users). Implemented booking system with pickup/return dates, dynamic pricing, statuses (pending/confirmed/cancelled), and owner dashboard with customer details (name, email, phone). Optimized queries with MongoDB aggregation pipelines for monthly analytics, ensuring scalable and efficient reporting.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Recharts"],
      githubUrl: "https://github.com/MahendraDwivedi/PrimeDrive2.0",
      demoUrl: "https://primedrive-lake.vercel.app/",
      image: "photo-1449824913935-59a10b8d2000"
    },
    {
      title: "AI Email Reply Generator",
      description: "Built a Chrome extension adding an 'AI Reply' button in Gmail that auto-generates context-aware responses via Gemini API. Developed a secure Spring Boot REST API backend and React interface for testing and managing AI prompts. Integrated extension scripts with Gmail's DOM for seamless UI interaction and message extraction. Optimized API response time using asynchronous REST calls and caching mechanisms.",
      techStack: ["Java", "Spring Boot", "React", "Chrome Extension", "Google Gemini API"],
      githubUrl: "https://github.com/MahendraDwivedi",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "AgroStack-Inspired Community Q&A Platform",
      description: "Built a StackOverflow-like Q&A platform with role-based dashboards for User, Expert, and Admin. Implemented ask/answer workflows, voting, expert verification, and content moderation. Integrated an AI chatbot for instant query assistance and intelligent suggestions. Developed secure REST APIs using Spring Boot and a responsive React frontend.",
      techStack: ["Spring Boot", "React", "MongoDB", "AI Chatbot"],
      githubUrl: "https://github.com/MahendraDwivedi",
      image: "photo-1516321318423-f06f85e504b3"
    }
  ],
  certifications: [
    {
      name: "Complete Java Programming and Certification Guide",
      issuer: "Udemy",
      year: "2025",
      credentialId: "UC-4e5ef2b4-102e-4401-9341-532e17b79592"
    },
    {
      name: "Flutter Zero To Hero - Complete Crash Course For Beginners",
      issuer: "Udemy",
      year: "2025",
      credentialId: "UC-0af8cfb7-b768-4ab9-8697-d1fdfa5d58a9"
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      year: "2025",
      credentialId: "2raWSqLZJ3AgK6nNv"
    },
    {
      name: "Java Foundation Badge",
      issuer: "Oracle University",
      year: "2025"
    }
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "ZCROM Technologies",
      duration: "2025 - 2026",
      description: [
        "Developed Careerdastak, a platform providing daily government job notifications, exam dates, admit cards, results, and syllabus updates",
        "Built user dashboards enabling open blog posting for job updates, preparation resources, and guidance content",
        "Implemented verified content workflows, real-time alerts, and easy-to-navigate career guidance features",
        "Developed scalable REST APIs using Node.js/Express and a responsive React frontend with MongoDB"
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
    "1st position in Software category during internal hackathon for SIH 2025",
    "Achieved the leetcode rating of 1636",
    "Secured a contest rank of 1448 on Leetcode weekly contest 446",
    "Solved over 1000 problems on various coding platforms such as Leetcode, GFG, Coding Ninjas etc."
  ],
  contact: {
    email: "dmahendra0707@gmail.com",
    phone: "+91 9580187515",
    linkedin: "https://www.linkedin.com/in/mahendra-dwivedi-a35132249/",
    github: "https://github.com/MahendraDwivedi",
    leetcode: "https://leetcode.com/u/mahendradwivedi07/"
  }
};
