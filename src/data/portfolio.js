// Update project descriptions, links and images here when your case studies are ready.
export const profile = {
  name: 'Meas Diyamong',
  shortName: 'MEAS DIYAMONG',
  role: 'Designer-minded developer',
  email: 'diyamong2005@gmail.com',
  telegram: 'https://t.me/MeasDiyamong',
  phone: '+855 96 626 9671',
  location: 'Cambodia',
  instagram: 'https://www.instagram.com/mdm.rocki_/',
  tiktok: 'https://www.tiktok.com/@rocki29mdm',
  github: 'https://github.com/Rocki2z',
}

export const projects = [
  {
    number: '01', slug: 'clothing-store', title: 'ClothingStore API', category: 'BACKEND DEVELOPMENT', year: '2026',
    description: 'A RESTful API for a clothing store, built with ASP.NET Core, EF Core and PostgreSQL.',
    image: 'https://i.pinimg.com/736x/36/fa/2a/36fa2a2c42c154fdab0b704e59a9047d.jpg',
    className: 'project-fashion', tags: ['ASP.NET Core', 'C#', 'PostgreSQL'], link: '#contact',
  },
  {
    number: '02', slug: 'hotel-booking', title: 'Hotel Booking System', category: 'FULL-STACK DEVELOPMENT', year: '2026',
    description: 'A full-stack hotel booking platform with room discovery, availability search, booking management, and secure authentication.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85',
    className: 'project-hotel', tags: ['ASP.NET Core', 'EF Core', 'JWT'], link: '#contact',
  },
  {
    number: '03', slug: 'cinema-booking', title: 'Cinema Management System', category: 'FULL-STACK DEVELOPMENT', year: '2026',
    description: 'A full-stack cinema booking experience with authentication, ticketing and a payment flow.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85',
    className: 'project-cinema', tags: ['React', 'Node.js', 'TypeScript'], link: '#contact',
  },
  {
    number: '04', slug: 'creative-direction', title: 'Creative Direction', category: 'CONTENT & VISUAL STORYTELLING', year: '2026',
    description: 'Fashion and lifestyle content shaped by styling, trend research and visual storytelling.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85',
    className: 'project-creative', tags: ['Content creation', 'Fashion', 'Editing'], link: '#contact',
  },
  {
   id: "02",
    slug: "hotel-booking",
    title: "Hotel Booking System",
    category: "Full-stack Development",
    year: "2026",
    description:
      "A hotel booking platform with room discovery, availability search, booking management, and secure authentication.",
    summary:
      "A full-stack application designed to simplify hotel discovery and reservation management.",
    role: "Full-stack Developer",

    frontendRepo:
      "https://github.com/Rocki2z/HotelBookingFrontend",

    backendRepo:
      "https://github.com/Rocki2z/HotelBookingAPI",

    overview:
      "Hotel Booking System is a full-stack project built to manage hotel reservations. It connects a React frontend with an ASP.NET Core backend and PostgreSQL database.",

    features: [
      "Hotel and room discovery",
      "Room availability search",
      "Booking creation and management",
      "JWT authentication and role-based authorization",
      "Payment and cancellation workflow",
      "API security and error handling",
    ],

    frontend: [
      "React",
      "JavaScript",
      "CSS",
    ],

    backend: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "JWT Authentication",
      "PostgreSQL",
    ],

    tools: [
      "Git & GitHub",
      "OpenAPI",
      "Postman",
    ],

    architecture: [
      "React Frontend",
      "ASP.NET Core Web API",
      "Services and Business Logic",
      "Entity Framework Core",
      "PostgreSQL Database",
    ],

    learning:
      "This project helped me understand how frontend and backend applications communicate, how to structure REST APIs, manage authentication, and work with relational databases.",
  },

  {
    id: "01",
    slug: "clothing-store",
    title: "ClothingStore API",
    category: "Backend Development",
    year: "2026",
    description: "A RESTful API designed to manage products and backend operations for an online clothing store.",
    summary: "A backend application built with ASP.NET Core, providing product management, database integration, and secure API access.",
    role: "Backend Developer",
    repoUrl: "https://github.com/Rocki2z/ClothingStoreAPI",
    overview: "ClothingStoreAPI is a backend development project built with ASP.NET Core. The application provides REST API endpoints for managing clothing store data. It uses Entity Framework Core to communicate with a PostgreSQL database through Npgsql.",
    features: [
      "RESTful API architecture",
      "Product management with CRUD operations",
      "Create, retrieve, update, and delete product records",
      "Entity Framework Core database integration",
      "PostgreSQL database management",
      "JWT authentication and authorization",
      "Protected API endpoints",
      "API testing and documentation with Swagger / OpenAPI",
    ],
    backend: ["ASP.NET Core", "C#", "Entity Framework Core", "Npgsql", "PostgreSQL", "JWT Authentication"],
    tools: ["Visual Studio", "Git & GitHub", "Swagger / OpenAPI", "Postman"],
    architecture: [
      "HTTP Client / API Request",
      "ASP.NET Core Controller",
      "Service / Business Logic",
      "Entity Framework Core",
      "PostgreSQL Database",
    ],
    learning: "Through this project, I improved my understanding of ASP.NET Core Web API development, RESTful API design, dependency injection, Entity Framework Core, PostgreSQL integration, CRUD operations, and JWT-based authentication.",
  },

  {
    id: "03",
    slug: "cinema-booking",
    title: "Cinema Management System",
    category: "Full-stack Development",
    year: "2026",
    description: "A full-stack cinema management and booking application with an admin dashboard and backend API.",
    summary: "A cinema management platform designed to manage movies, bookings, users, and ticketing operations.",
    role: "Full-stack Developer",
    frontendRepo: "https://github.com/SeanglyDev/Cinema-DashboardUI",
    backendRepo: "https://github.com/SeanglyDev/Cinema-Backend",
    overview: "Cinema Management System is a full-stack application that combines a backend API with a dedicated dashboard interface. The project focuses on managing cinema operations and supporting the movie booking workflow through a structured frontend and backend architecture.",
    features: [
      "Cinema and movie management",
      "Admin dashboard interface",
      "User registration and authentication",
      "OTP-based login verification",
      "Role-based access control",
      "Movie booking workflow",
      "QR code ticket generation",
      "Payment workflow integration",
    ],
    frontend: ["React", "TypeScript", "JavaScript", "CSS"],
    backend: ["Node.js", "TypeScript", "REST API", "PostgreSQL", "JWT Authentication"],
    tools: ["Git & GitHub", "Postman", "Visual Studio Code"],
    architecture: [
      "Cinema Admin Dashboard (React)",
      "REST API Requests",
      "Node.js Backend",
      "Authentication and Business Logic",
      "PostgreSQL Database",
    ],
    learning: "This project helped me understand full-stack application development, frontend and backend integration, authentication workflows, role-based permissions, relational database management, and how different components work together in a real-world booking system.",
  },

  {
    id: "04",
    slug: "creative-direction",
    title: "Content Creation & Creative Direction",
    category: "Fashion / Lifestyle Content",
    year: "2026",
    description: "A collection of fashion, lifestyle, and brand-focused content created during my experience at ZANDO.",
    summary: "Exploring fashion storytelling, visual presentation, and social media content through real-world creative work.",
    role: "Content Creator",
    overview: "During my time as a Content Creator at ZANDO, I worked on fashion and lifestyle content designed to connect with audiences through visual storytelling. I explored content ideas, followed trends, and created videos that aligned with the brand's identity and communication goals.",
    features: [
      "Fashion and lifestyle video content",
      "Outfit presentation and styling concepts",
      "Trend-based content planning",
      "Visual storytelling",
      "Social media content creation",
      "Video editing and presentation",
      "Brand-focused creative concepts",
    ],
    skills: ["Content Planning", "Creative Direction", "Fashion Styling", "Visual Storytelling", "Video Editing", "Trend Research", "Social Media Content"],
    experience: { company: "ZANDO", position: "Content Creator", duration: "2026 · 2+ months" },
    videoReferences: [
      { id: "7662328187703020808", title: "ZANDO Video Reference 01", url: "https://www.tiktok.com/@zandocambodia/video/7662328187703020808" },
      { id: "7674520868961242376", title: "ZANDO Video Reference 02", url: "https://www.tiktok.com/@zandocambodia/video/7674520868961242376" },
      { id: "7673444902272879879", title: "ZANDO Video Reference 03", url: "https://www.tiktok.com/@zandocambodia/video/7673444902272879879" },
    ],
    personalTikTok: "https://www.tiktok.com/@rocki29mdm",
    learning: "This experience helped me understand how to create content for a real fashion brand, develop creative ideas, communicate through visuals, and understand audience interests.",
  },
]

export const skills = [
  { title: 'Development', items: ['C# / ASP.NET Core', 'Node.js / REST APIs', 'React.js / Angular', 'Entity Framework Core', 'PostgreSQL / SQL Server', 'MongoDB'] },
  { title: 'Tools & workflow', items: ['Git / GitHub', 'Swagger / Postman', 'Figma', 'Visual Studio', 'VS Code', 'Responsive UI'] },
  { title: 'Creative', items: ['UI/UX fundamentals', 'Visual storytelling', 'Content creation', 'Video editing', 'Fashion styling', 'Trend research'] },
]

export const experience = [
  { date: '2026', title: 'Content Creator', company: 'ZANDO', detail: 'Created fashion and lifestyle content, planned ideas around trends and audience interests, and collaborated on brand-focused visual storytelling.' },
  { date: '2021 — 2023', title: 'Waiter & Cashier', company: 'Family Restaurant', detail: 'Supported daily restaurant operations, customer service and cash handling in a fast-paced environment.' },
]

export const education = [
  { date: '2023 — 2026', title: 'Management Information Systems', place: 'SETEC Institute' },
  { date: '2021 — 2023', title: 'High School Diploma', place: 'Kampot Krong High School' },
]
