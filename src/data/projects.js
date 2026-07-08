// Central data file for all projects.
// To add a new project, append an object to this array — every
// section of the site (carousel, grid, modal) reads from here.

export const projects = [
  {
     id: "gamex-mern-platform",
  name: "GameX MERN Platform",
  route: "/projects/gamex-mern-platform",
  tagline: "Full-Stack Gaming Platform with Admin Dashboard",
  description:
    "A full-stack MERN application featuring a responsive gaming website, secure admin dashboard, and RESTful backend API for dynamic content management.",

  image: "/uploads/gamex-project.png", // Replace with your project screenshot

  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "JavaScript",
  ],

  github: "https://github.com/sayyedahmedhussain/gamex-mern-platform",
  live: "https://YOUR-LIVE-DEMO.vercel.app",

  features: [
    "Responsive React frontend with dynamic content rendering",
    "Secure admin dashboard for managing website content",
    "RESTful API with complete CRUD functionality",
    "MongoDB integration using Mongoose with MVC architecture",
  ],

  architecture: {
    backend:
      "Node.js and Express.js REST API following the MVC architecture with modular routing, controllers, and MongoDB integration.",

    frontend:
      "React.js frontend built with reusable components and Axios for seamless communication with backend APIs.",

    database:
      "MongoDB with Mongoose for efficient data modeling, storage, and CRUD operations.",

    authentication:
      "Admin panel authentication with secure environment variable configuration.",

    deployment:
      "Frontend deployed on Vercel and backend configured for production with environment-based settings.",
    },
  },
  {
     id: "svg-editor",
  name: "SVG Editor with MongoDB",
  route: "/projects/svg-editor",
  tagline: "Interactive SVG Editing with Real-Time Database Sync",

  description:
    "A full-stack web application that enables users to upload, edit, and manage SVG files directly in the browser while synchronizing all changes with MongoDB in real time.",

  image: "/uploads/svg-editor.png", // Replace with your project screenshot

  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SVG"
  ],

  github: "https://github.com/sayyedahmedhussain/svg-editor-mongodb",
  live: "https://YOUR-LIVE-DEMO.vercel.app",

  features: [
    "Upload and edit SVG files directly within the browser",
    "Automatically detect and edit SVG text elements",
    "Real-time synchronization between the editor and MongoDB",
    "Download updated SVG files after editing"
  ],

  architecture: {
    backend:
      "Node.js and Express.js REST API responsible for storing, retrieving, and updating SVG data in MongoDB.",

    frontend:
      "Interactive JavaScript-based SVG editor providing live text editing, responsive UI, and seamless communication with backend APIs.",

    database:
      "MongoDB stores SVG content and synchronizes updates in real time for persistent editing.",

    authentication:
      "No authentication implemented in the current version.",

    deployment:
      "Configured for production deployment with frontend and backend connected through REST APIs and environment variables."
    },
  },
  {
    id: "sah-chat",
  name: "SAH Chat",
  route: "/projects/sah-chat",
  tagline: "Real-Time MERN Chat Application",

  description:
    "A full-stack real-time chat application built with the MERN stack, featuring JWT authentication, dual OTP verification (Email & Phone), one-to-one and group messaging, file sharing, and live communication powered by Socket.io.",

  image: "/uploads/sah-chatapp.png", // Replace with your project screenshot

  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Socket.io",
    "JWT",
    "bcrypt",
    "Tailwind CSS",
    "Nodemailer",
    "Twilio",
    "Multer"
  ],

  github: "https://github.com/sayyedahmedhussain/SAH-chatt",
  live: "https://YOUR-LIVE-DEMO.vercel.app",

  features: [
    "Dual OTP registration using Email (Nodemailer) or Phone (Twilio Verify API)",
    "Real-time one-to-one and group messaging powered by Socket.io",
    "File sharing, message replies, emoji reactions, and typing indicators",
    "JWT authentication with bcrypt password hashing and live online presence"
  ],

  architecture: {
    backend:
      "Node.js and Express.js backend with modular MVC architecture, JWT-protected REST APIs, Socket.io event handling, and secure authentication.",

    frontend:
      "React.js application built with reusable components, React Context API, React Router, and Tailwind CSS for a responsive chat experience.",

    database:
      "MongoDB with Mongoose models for users, conversations, messages, and group chat management.",

    authentication:
      "JWT-based authentication with bcrypt password hashing, plus secure Email OTP (Nodemailer) and Phone OTP (Twilio Verify API) registration.",

    deployment:
      "Frontend and backend deployed as separate services with environment-based configuration for secure API communication."
    },
  },
  {
  id: "syed-boys-hostel",
  name: "Syed Boys Hostel Website",
  route: "/projects/syed-boys-hostel",
  tagline: "Modern hostel website with SEO & real client deployment",
  description:
    "A fully responsive and SEO-optimized website developed for Syed Boys Hostel in Rawalpindi. The website showcases hostel facilities, room details, pricing, contact information, location, and booking options. I handled the complete development, implemented on-page SEO for better search engine visibility, deployed the project to Vercel, and successfully delivered it to the client. The client is satisfied with the final product and is receiving inquiries and bookings through the website.",
  image:
    "/uploads/syed-boys-hostel.png",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "SEO",
    "Responsive Design",
    "Vercel"
  ],
  github: "https://github.com/sayyedahmedhussain/syed-boys-hostel-website",
  live: "https://syed-boys-hostel-website111.vercel.app/",
  features: [
    "Fully responsive design for mobile, tablet, and desktop",
    "Modern and user-friendly interface",
    "Hostel facilities and amenities section",
    "Room pricing and accommodation details",
    "Interactive contact page with location information",
    "SEO optimization for improved Google search visibility",
    "Fast-loading pages with optimized assets",
    "Cross-browser compatibility",
    "Deployed on Vercel with production-ready configuration",
    "Helping the client receive online inquiries and hostel bookings"
  ],
  architecture: {
    frontend:
      "Built using semantic HTML5, modern CSS3, and vanilla JavaScript for high performance and maintainability.",
    responsive:
      "Mobile-first responsive layout ensuring an excellent user experience across all screen sizes.",
    seo:
      "Implemented on-page SEO including optimized meta titles, descriptions, Open Graph tags, sitemap.xml, robots.txt, structured page hierarchy, and performance optimization.",
    deployment:
      "Successfully deployed on Vercel with continuous deployment from GitHub for easy updates.",
    impact:
      "Delivered as a real client project. The client is happy with the website, has improved online visibility, and is receiving inquiries and booking requests through the website."
  },
},
];
