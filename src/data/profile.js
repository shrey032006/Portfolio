// Single source of truth for portfolio content (taken from Shreya's CV).
// Edit here; components stay untouched.

export const profile = {
  name: "Shreya Bagewadi",
  firstName: "Shreya",
  location: "Hubballi, Karnataka, India",
  photo: "/profile.jpg", // put your photo at client/public/profile.jpg
  headline: "Full-Stack MERN Developer",
  education: "BCA · KLE University – P.C. Jabin Science College, Hubballi",
  intro:
    "Motivated BCA student with a strong foundation in Java, Python, JavaScript, SQL and web development. I build practical applications with React.js, Node.js, Express, Spring Boot and databases, and I'm especially interested in AI, software development, data analytics and user-focused digital solutions.",
  typedRoles: [
    "Full-Stack MERN Developer",
    "BCA Student · CS Fundamentals First",
    "Builder of Digital Document Reminder",
    "Problem Solver",
  ],
  featured: {
    label: "Featured project",
    title: "Digital Document Reminder",
  },
  links: {
    github: "https://github.com/shrey032006",
    linkedin: "https://linkedin.com/in/shreya-bagewadi-85041537",
    email: "mailto:bagewadishreya4@gmail.com",
    emailAddress: "bagewadishreya4@gmail.com",
    resume: "/Shreya_Bagewadi_Resume.pdf",
  },
  nav: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Learning" },
    { id: "contact", label: "Contact" },
  ],
  stack: ["MongoDB", "Express", "React", "Node.js"],

  about: {
    paragraphs: [
      "I'm a BCA student at KLE University's P.C. Jabin Science College in Hubballi. I like understanding how things work underneath, which is why I started with Java, SQL and core programming before moving into full-stack web development.",
      "I learn quickly, enjoy solving problems, and want to contribute to a professional team while I keep growing in the technology field. Alongside the MERN stack I've worked with Spring Boot and Hibernate, so I'm comfortable on both the JavaScript and Java sides of backend development.",
    ],
    highlights: [
      { label: "Core languages", value: "Java · Python · JavaScript · SQL" },
      { label: "Databases", value: "MySQL · PostgreSQL · MongoDB" },
      { label: "Backend", value: "Node/Express · Spring Boot" },
      { label: "Interests", value: "AI · Data analytics · UX" },
    ],
  },

  projects: [
    {
      title: "Digital Document Reminder",
      tag: "MERN Stack",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description:
        "A web application that helps users manage important documents and track their expiry dates.",
      points: [
        "Store document details in one place.",
        "Monitor expiry dates of every saved document.",
        "Receive reminders for documents approaching expiration.",
      ],
      github: "https://github.com/shrey032006",
    },
  ],

  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript", "SQL", "HTML"] },
    { group: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "Hibernate"] },
    { group: "Frontend", items: ["React.js", "Bootstrap"] },
    { group: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  ],

  certifications: [
    {
      title: "Java, Spring Boot & Hibernate",
      issuer: "P.C. Jabin Science College × Seminarroom Education",
      meta: "42 hours · 2025–26",
      image: "/certs/java-spring-hibernate.jpg",
      text: "Object-oriented Java, RESTful web services with Spring Boot, and database persistence using Hibernate ORM.",
    },
    {
      title: "Back End Development",
      issuer: "P.C. Jabin Science College × Seminarroom Education",
      meta: "42 hours · 2025–26",
      image: "/certs/backend-development.jpg",
      text: "Server-side logic, API development, database integration and backend architecture patterns for scalable web applications.",
    },
    {
      title: "Front End Development",
      issuer: "P.C. Jabin Science College × Seminarroom Education",
      meta: "42 hours · 2024–25",
      image: "/certs/frontend-development.jpg",
      text: "Responsive web design, component-based UI architecture, state management, modern JavaScript and API integration.",
    },
    {
      title: "UI/UX Design using Figma",
      issuer: "P.C. Jabin Science College × Seminarroom Education",
      meta: "42 hours · 2024–25",
      image: "/certs/figma-ui-ux.jpg",
      text: "UI/UX fundamentals, wireframing, prototyping and designing user-friendly digital interfaces.",
    },
    {
      title: "Workshop on Power BI",
      issuer: "P.C. Jabin Science College × Seminarroom Education",
      meta: "Workshop · 2024–25",
      image: "/certs/power-bi.jpg",
      text: "Data visualization and dashboard creation to present data interactively.",
    },
    {
      title: "Introduction to Retrieval Augmented Generation (RAG)",
      issuer: "IBM SkillsBuild",
      meta: "1 hr 30 min · 27 Jan 2026",
      image: "/certs/ibm-rag.jpg",
      text: "Fundamentals of RAG and how external knowledge sources improve the relevance and accuracy of AI-generated responses.",
    },
    {
      title: "Ethical Considerations for Generative AI",
      issuer: "IBM SkillsBuild",
      meta: "1 hr 30 min · 27 Jan 2026",
      image: "/certs/ibm-genai-ethics.jpg",
      text: "Responsible AI practices, ethical challenges, privacy, fairness and risks associated with Generative AI.",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Simplilearn SkillUP",
      meta: "11 Jul 2026",
      image: "/certs/simplilearn-ai.jpg",
      text: "Foundational knowledge of AI concepts, applications and intelligent systems.",
    },
  ],

  educationList: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      school: "KLE University – P.C. Jabin Science College",
      place: "Hubballi, Karnataka",
    },
  ],
};
