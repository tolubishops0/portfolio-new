"use client";

import { SectionWrapper } from "./section-wrapper";
import { ProjectCard } from "./project-card";

// const projects = [
//   {
//     title: "TechPulse",
//     description:
//       "Full-stack tech news platform demonstrating all Next.js rendering strategies - SSG, ISR, SSR, PPR, and CSR - in a single production app. Features Supabase auth, real-time likes and comments, bookmarks, reading history, and a personalised dashboard.",
//     tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
//     githubUrl: "https://github.com/tolubishops0/techpulse",
//     liveUrl: "https://techpulse-theta.vercel.app",
//     imageUrl: "/images/techpulse.png",
//     featured: true,
//   },
//   {
//     title: "FarmFold",
//     description:
//       "A responsive agri-marketplace featuring reusable product components, advanced category filtering, and skeleton loaders for an optimized async user experience.",
//     tags: ["React", "Tailwind CSS", "MUI"],
//     githubUrl: "https://github.com/tolubishops0/farmfold",
//     liveUrl: "https://farmfold.netlify.app",
//     imageUrl: "/images/farmfold.png",
//   },
//   {
//     title: "Anike Salubata",
//     description:
//       "An e-commerce web application for selling handmade shoes built for a personal business, with cart functionality, product management, and Firebase integration.",
//     tags: ["React", "Tailwind CSS", "MUI", "Firebase"],
//     githubUrl: "https://github.com/tolubishops0/anikesalubata",
//     liveUrl: "https://harmonious-kheer-4c1df8.netlify.app",
//     imageUrl: "/images/anike.png",
//   },
//   {
//     title: "LendSqr",
//     description:
//       "A fintech-style user management dashboard displaying users, loans, savings, and transaction data with detailed views, filtering, and authentication.",
//     tags: ["TypeScript", "Next.js", "SCSS"],
//     githubUrl: "https://github.com/tolubishops0/lendsqr",
//     liveUrl: "https://user-list-lender.netlify.app",
//     imageUrl: "/images/lendsqr.jpg",
//   },
//   {
//     title: "Tech Care",
//     description:
//       "An assessment dashboard displaying users heart history data with interactive charts, data tables, and filtering for complex data visualization.",
//     tags: ["React", "Tailwind CSS", "Chart.js"],
//     githubUrl: "https://github.com/tolubishops0/coa-trend",
//     liveUrl: "https://coa-trend.netlify.app",
//     imageUrl: "/images/coa.png",
//   },
//   {
//     title: "Scissors",
//     description:
//       "A URL shortener application that allows users to shorten long URLs into manageable links with Firebase as the backend.",
//     tags: ["TypeScript", "React", "Firebase"],
//     githubUrl: "https://github.com/tolubishops0/scissors",
//     liveUrl: "https://whimsical-baklava-230b00.netlify.app",
//     imageUrl: "/images/scissors.png",
//   },
//   {
//     title: "Spotify Clone",
//     description:
//       "A Spotify UI clone focusing on design accuracy and responsiveness, replicating the music streaming interface with playlist views and player controls.",
//     tags: ["React", "Tailwind CSS"],
//     githubUrl: undefined,
//     liveUrl: "https://sunny-spotify.netlify.app",
//     imageUrl: "/images/spotify.png",
//   },
// ];

const projects = [
  {
    title: "Ledgr",
    description:
      "Built a personal finance management monorepo using Turborepo, containing two Next.js applications — a user-facing dashboard and an admin portal — sharing a component library, types, and utilities across packages. Implemented Supabase for authentication, real-time data, and row-level security. Features include transaction tracking, budget management, analytics with Recharts, and an admin portal for user and platform management.",
    tags: [
      "Next.js",
      "Turborepo",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
    ],
    githubUrl: "https://github.com/tolubishops0/ledgr",
    liveUrl: "https://ledgrr-app.vercel.app/login",
    adminUrl: "https://ledgr-admin.vercel.app/login",
    imageUrl: "/images/ledgr-user.png",
    featured: true,
  },
  {
    title: "TechPulse",
    description:
      "Built a full-stack tech news platform showcasing multiple Next.js rendering strategies (SSG, SSR, ISR, PPR, CSR) within a single application. Implemented authentication, real-time interactions (likes, comments), and personalized user features including bookmarks and reading history. Structured data fetching and rendering logic to handle different performance and caching strategies across pages.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/tolubishops0/techpulse",
    liveUrl: "https://techpulse-theta.vercel.app",
    imageUrl: "/images/techpulse.png",
    featured: true,
  },
  {
    title: "FarmFold",
    description:
      "Built a responsive agri-marketplace for browsing and filtering products across categories. Implemented reusable component architecture and advanced filtering logic for dynamic product views. Optimized user experience with skeleton loaders and asynchronous data handling.",
    tags: ["React", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/tolubishops0/farmfold",
    liveUrl: "https://farmfold.netlify.app",
    imageUrl: "/images/farmfold.png",
  },
  {
    title: "Anike Salubata",
    description:
      "Developed an e-commerce platform for a real business, enabling product browsing, cart management, and order flow. Integrated Firebase for backend services including data storage and authentication. Handled dynamic state management across product listings and user interactions.",
    tags: ["React", "Tailwind CSS", "MUI", "Firebase"],
    githubUrl: "https://github.com/tolubishops0/anikesalubata",
    liveUrl: "https://harmonious-kheer-4c1df8.netlify.app",
    imageUrl: "/images/anike.png",
  },
  {
    title: "LendSqr",
    description:
      "Built a fintech-style dashboard for managing users, loans, and transaction data. Implemented data tables, filtering, and detailed views for handling large datasets. Structured components and state for scalability across multiple dashboard sections.",
    tags: ["TypeScript", "Next.js", "SCSS"],
    githubUrl: "https://github.com/tolubishops0/lendsqr",
    liveUrl: "https://user-list-lender.netlify.app",
    imageUrl: "/images/lendsqr.jpg",
  },
  {
    title: "Tech Care",
    description:
      "Built a data visualization dashboard for monitoring health metrics and user history. Implemented interactive charts and data tables to represent complex datasets. Handled filtering and state updates for dynamic data exploration.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/tolubishops0/coa-trend",
    liveUrl: "https://coa-trend.netlify.app",
    imageUrl: "/images/coa.png",
  },
  {
    title: "Scissors",
    description:
      "Built a URL shortener application for generating and managing shortened links. Integrated Firebase for backend storage and real-time data handling. Managed user input, validation, and link generation flow.",
    tags: ["TypeScript", "React", "Firebase"],
    githubUrl: "https://github.com/tolubishops0/scissors",
    liveUrl: "https://whimsical-baklava-230b00.netlify.app",
    imageUrl: "/images/scissors.png",
  },
  {
    title: "Spotify Clone",
    description:
      "Recreated a Spotify-like interface focusing on responsive design and UI accuracy. Built reusable components for playlists, navigation, and media controls. Focused on layout structure and consistent user experience across screen sizes.",
    tags: ["React", "Tailwind CSS"],
    githubUrl: undefined,
    liveUrl: "https://sunny-spotify.netlify.app",
    imageUrl: "/images/spotify.png",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
              featured={project.featured}
              url2={project.adminUrl}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
