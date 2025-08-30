// src/data/resumeData.js
export const resumeData = {
  personal: {
    name: "Awongo Fahadi Rashid",
    title: "Software Engineering Student",
    email: "fahadirashidawongo@gmail.com",
    phone: "(256) 764922070",
    location: "Kampala, Uganda",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/Afrah-Create",
    summary: "Passionate software engineering student with strong technical skills in full-stack development. Experienced in building responsive web applications using modern JavaScript frameworks and libraries. Strong problem-solving abilities and a commitment to writing clean, maintainable code.",
    avatar: "/images/about/Fahad.jpg"
  },
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Software Engineering",
      school: "Makerere University",
      startDate: "January 2025",
      endDate: "Expected May 2026",
      gpa: "4.5",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning"
      ]
    }
  ],
  experience: [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechSolutions Inc.",
      companyUrl: "https://techsolutions.example.com",
      location: "San Francisco, CA (Remote)",
      startDate: "June 2024",
      endDate: "Present",
      description: "Working on the core product team to develop and maintain enterprise-level web applications.",
      responsibilities: [
        "Developed and maintained responsive web applications using React, Redux, and TypeScript, improving user experience by 25%",
        "Collaborated with cross-functional teams to design and implement new features, following Agile methodologies",
        "Optimized application performance, reducing load times by 40% through code splitting and lazy loading",
        "Wrote unit and integration tests using Jest and React Testing Library, achieving 90% test coverage",
        "Participated in code reviews and provided constructive feedback to maintain code quality"
      ],
      technologies: ["React", "TypeScript", "Redux", "Node.js", "Jest", "Git"]
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "WebCraft Studios",
      companyUrl: "https://webcraft.example.com",
      location: "New York, NY",
      startDate: "May 2023",
      endDate: "August 2023",
      description: "Contributed to the development of client websites and web applications.",
      responsibilities: [
        "Built and deployed 10+ responsive websites using React, Node.js, and MongoDB",
        "Implemented RESTful APIs to connect front-end components with server-side logic",
        "Improved website performance by optimizing images and implementing lazy loading",
        "Collaborated with UI/UX designers to implement pixel-perfect interfaces"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
    },
    {
      id: 3,
      title: "Teaching Assistant - Web Development",
      company: "University Computer Science Department",
      location: "Boston, MA",
      startDate: "January 2023",
      endDate: "May 2023",
      description: "Assisted students in learning web development fundamentals.",
      responsibilities: [
        "Conducted weekly lab sessions to help students understand HTML, CSS, and JavaScript concepts",
        "Graded assignments and provided detailed feedback to help students improve their coding skills",
        "Held office hours to provide one-on-one assistance with course material and projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "VS Code"]
    }
  ], // Fixed: Added closing bracket and comma
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.example.com",
      image: "/images/projects/e-commerce.JPG"
    },
    {
      id: 2,
      title: "School Website",
      description: "A responsive informational website for a secondary school featuring pages for academics, admissions, news, gallery, and contact, optimized for performance and accessibility.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/username/school-website",
      demoUrl: "https://school.example.com",
      image: "/images/projects/school.JPG"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application providing current weather conditions and forecasts using the OpenWeather API.",
      technologies: ["JavaScript", "CSS3", "OpenWeather API", "Webpack"],
      githubUrl: "https://github.com/username/weather-dashboard",
      demoUrl: "https://weather-demo.example.com",
      image: "/images/projects/weather.JPG"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and styled-components to showcase projects and skills.",
      technologies: ["React", "styled-components", "Framer Motion", "React Icons"],
      githubUrl: "https://github.com/username/portfolio",
      demoUrl: "https://portfolio-demo.example.com",
      image: "/images/projects/potfolio.jpg"
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A web application to search and filter recipes based on ingredients, with step-by-step cooking instructions.",
      technologies: ["Vue.js", "Vuex", "Spoonacular API", "Tailwind CSS"],
      githubUrl: "https://github.com/username/recipe-finder",
      demoUrl: "https://recipes-demo.example.com"
    },
    {
      id: 6,
      title: "Supply Chain Management System",
      description: "An end-to-end supply chain management system built with Laravel handling inventory, procurement, supplier management, order tracking, and role-based access control.",
      technologies: ["Laravel", "PHP", "MySQL", "Blade", "REST APIs"],
      githubUrl: "https://github.com/username/supply-chain-management",
      demoUrl: "https://scm-demo.example.com",
      image: "/images/projects/supplychain.jpg"
    }
  ],
  skills: {
    "Programming Languages": [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 75 }
    ],
    "Web Technologies": [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3/SCSS", level: 90 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 75 }
    ],
    "Tools & Platforms": [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 80 },
      { name: "VS Code", level: 95 }
    ],
    "Databases": [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 70 }
    ],
    "Languages": [
      { name: "English", level: 95, proficiency: "Fluent" },
      { name: "Spanish", level: 70, proficiency: "Intermediate" },
      { name: "French", level: 40, proficiency: "Basic" }
    ]
  }
}; // Fixed: Removed extra semicolon