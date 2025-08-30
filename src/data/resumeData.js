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
      logo: "/images/about/Fahad.jpg", // placeholder logo
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
    },
    {
      id: 2,
      degree: "Uganda Advanced Certificate of Education (A-Level)",
      school: "Aringa Secondary School",
      logo: "/images/about/Afr2.webp", // placeholder logo
      startDate: "2022",
      endDate: "2023",
      relevantCourses: ["Mathematics", "Physics", "ICT"]
    },
    {
      id: 3,
      degree: "Uganda Certificate of Education (O-Level)",
      school: "Aringa Secondary School",
      logo: "/images/about/Fahad.jpg", // placeholder logo
      startDate: "2017",
      endDate: "2020"
    },
    {
      id: 4,
      degree: "Primary Education",
      school: "Obongi Town Primary School",
      logo: "/images/about/Afr2.webp", // placeholder logo
      startDate: "2010",
      endDate: "2016"
    }
  ],
  experience: [
    {
      id: 1,
      title: "Student Developer",
      company: "E-Commerce Platform",
      companyUrl: "https://ecommerce-demo.example.com",
      location: "Kampala, Uganda (Remote)",
      startDate: "Jan 2025",
      endDate: "Present",
      description: "Designed and built a full-stack e-commerce platform with secure authentication, product catalog, cart, and Stripe-powered checkout.",
      responsibilities: [
        "Implemented responsive React UI with protected routes and Redux state management",
        "Developed Node.js APIs for products, users, orders, and payments",
        "Integrated Stripe for real payments and order workflows",
        "Optimized bundle size and added code-splitting and lazy loading"
      ],
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      id: 2,
      title: "Student Developer",
      company: "School Website",
      companyUrl: "https://school.example.com",
      location: "Kampala, Uganda",
      startDate: "Nov 2024",
      endDate: "Dec 2024",
      description: "Built a modern, accessible multi-page school website including academics, admissions, news, gallery, and contact sections.",
      responsibilities: [
        "Created semantic, accessible pages with reusable components",
        "Ensured mobile-first responsiveness and fast load times",
        "Implemented simple form handling and basic client-side validation"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 3,
      title: "Project Developer",
      company: "Portfolio Website",
      companyUrl: "https://portfolio-demo.example.com",
      location: "Kampala, Uganda",
      startDate: "Sep 2024",
      endDate: "Oct 2024",
      description: "Developed a responsive portfolio with smooth animations and component-based styling to showcase projects and skills.",
      responsibilities: [
        "Implemented sections for About, Projects, Skills, and Contact",
        "Added animations and interactive elements for engaging UX",
        "Optimized images and used lazy loading to improve performance"
      ],
      technologies: ["React", "styled-components", "Framer Motion"]
    },
    {
      id: 4,
      title: "Student Developer",
      company: "Supply Chain Management System",
      companyUrl: "https://scm-demo.example.com",
      location: "Kampala, Uganda (Remote)",
      startDate: "Mar 2025",
      endDate: "Present",
      description: "Built core modules for inventory, procurement, supplier management, and order tracking with role-based access control.",
      responsibilities: [
        "Designed relational schema and implemented CRUD features",
        "Developed Blade-based views with reusable layouts and components",
        "Secured endpoints and dashboards with RBAC and middleware"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Blade", "REST APIs"]
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
      title: "Bweranyangi Girls Group Website",
      description: "A responsive website for Bweranyangi Girls Group featuring information about the school, academics, admissions, news, gallery, and contact details. Built with modern web technologies for optimal performance and accessibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/Afrah-Create/Bweranyangi-Girls-Group-G",
      demoUrl: "https://afrah-create.github.io/Bweranyangi-Girls-Group-G/",
      image: "/images/projects/school.JPG"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and styled-components to showcase projects and skills.",
      technologies: ["React", "styled-components", "Framer Motion", "React Icons"],
      githubUrl: "https://github.com/username/portfolio",
      demoUrl: "https://portfolio-demo.example.com",
      image: "/images/projects/potfolio.jpg"
    },
    {
      id: 4,
      title: "Supply Chain Management System",
      description: "An end-to-end supply chain management system built with Laravel handling inventory, procurement, supplier management, order tracking, and role-based access control.",
      technologies: ["Laravel", "PHP", "MySQL", "Blade", "REST APIs"],
      githubUrl: "https://github.com/username/supply-chain-management",
      demoUrl: "https://afrah-create.github.io/Apex234/",
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
      { name: "Gimara", level: 70, proficiency: "Intermediate" },
      { name: "Lugbara", level: 40, proficiency: "Basic" }
    ]
  }
}; // Fixed: Removed extra semicolon