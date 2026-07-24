import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "drive-fleet",
    title: "DriveFleet - Central car rental",
    image: "/carImage.png",
    shortDescription: "Discover your ideal vehicle through intelligent search and dynamic filtering.",
    description: "Drive Fleet is a modern, secure car rental platform where users can easily browse, book, and rent vehicles online. With optimized search capabilities and real-time availability tracking, the platform reduces vehicle discovery time to under 1 second, enabling instant bookings and significantly improving the overall rental experience.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "MongoDB", "Express", "Node.js"],
    liveLink: "https://drive-fleet-zeta.vercel.app",
    githubClient: "https://github.com/tawsifast/Drive-Fleet",
    challenges: [
      "Implementing real-time availability tracking to prevent double bookings.",
      "Optimizing search queries for fast vehicle discovery.",
      "Building a date-range booking system that prevents conflicts and manages availability accurately."
    ],
    futurePlans: [
      "Integrating a secure payment gateway for online transactions.",
      "Adding user reviews and rating systems for vehicles.",
      "Advanced car filtering with location-based search and availability calendar."
    ]
  },
  {
    id: "2",
    slug: "sweet-byte-ai",
    title: "Sweet-Byte-AI",
    image: "/sweet.png",
    shortDescription: "AI-Powered Confectionery E-Commerce Platform.",
    description: "Built a full-stack confectionery e-commerce platform connecting dessert buyers with bakery management through AI-generated content and real-time order tracking, with role-aware routing to dedicated customer and owner/admin environments.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "OpenAI API"],
    liveLink: "https://sweet-byte-ai.vercel.app",
    githubClient: "https://github.com/tawsifast/sweet-backery",
    challenges: [
      "Integrating AI for dynamic product description generation.",
      "Managing complex state for the shopping cart and checkout process.",
      "Implementing robust role-based access control (RBAC) for different user types."
    ],
    futurePlans: [
      "Enhancing the AI to recommend products based on user preferences.",
      "Adding a real-time chat support feature for customers.",
      "Expanding the platform to support multiple bakery vendors."
    ]
  },
  {
    id: "3",
    slug: "nexus-home",
    title: "Nexus Home",
    image: "/propertyRental.png",
    shortDescription: "Property Rental & Booking Platform featuring real-time workflows.",
    description: "NexusHome a property rental marketplace enabling property owners to list rentals and tenants to discover, book, and pay reservation fees online — featuring role-based dashboards, real-time booking workflows, and Stripe-powered secure payments.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    liveLink: "https://nexushome-phi.vercel.app",
    githubClient: "https://github.com/tawsifast/Assignment-10",
    challenges: [
      "Integrating Stripe for secure and seamless payment processing.",
      "Designing complex database schemas for property listings and bookings.",
      "Ensuring real-time updates for property availability."
    ],
    futurePlans: [
      "Adding a virtual tour feature for property listings.",
      "Implementing a messaging system between tenants and property owners.",
      "Expanding payment options to include cryptocurrency.",
     "Advanced property recommendations with AI"
    ]
  }
];
