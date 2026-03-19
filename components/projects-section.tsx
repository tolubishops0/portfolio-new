"use client";

import { SectionWrapper } from "./section-wrapper";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "TechPulse",
    description:
      "Full-stack tech news platform demonstrating all Next.js rendering strategies - SSG, ISR, SSR, PPR, and CSR - in a single production app. Features Supabase auth, real-time likes and comments, bookmarks, reading history, and a personalised dashboard.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/tolubishops0/techpulse",
    liveUrl: "https://techpulse-theta.vercel.app",
    imageUrl: "/images/techpulse.png",
    featured: true,
  },
  {
    title: "FarmFold",
    description:
      "A responsive agri-marketplace featuring reusable product components, advanced category filtering, and skeleton loaders for an optimized async user experience.",
    tags: ["React", "Tailwind CSS", "MUI"],
    githubUrl: "https://github.com/tolubishops0/farmfold",
    liveUrl: "https://farmfold.netlify.app",
    imageUrl: "/images/farmfold.png",
  },
  {
    title: "Anike Salubata",
    description:
      "An e-commerce web application for selling handmade shoes built for a personal business, with cart functionality, product management, and Firebase integration.",
    tags: ["React", "Tailwind CSS", "MUI", "Firebase"],
    githubUrl: "https://github.com/tolubishops0/anikesalubata",
    liveUrl: "https://harmonious-kheer-4c1df8.netlify.app",
    imageUrl: "/images/anike.png",
  },
  {
    title: "LendSqr",
    description:
      "A fintech-style user management dashboard displaying users, loans, savings, and transaction data with detailed views, filtering, and authentication.",
    tags: ["TypeScript", "Next.js", "SCSS"],
    githubUrl: "https://github.com/tolubishops0/lendsqr",
    liveUrl: "https://user-list-lender.netlify.app",
    imageUrl: "/images/lendsqr.jpg",
  },
  {
    title: "Tech Care",
    description:
      "An assessment dashboard displaying users heart history data with interactive charts, data tables, and filtering for complex data visualization.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/tolubishops0/coa-trend",
    liveUrl: "https://coa-trend.netlify.app",
    imageUrl: "/images/coa.png",
  },
  {
    title: "Scissors",
    description:
      "A URL shortener application that allows users to shorten long URLs into manageable links with Firebase as the backend.",
    tags: ["TypeScript", "React", "Firebase"],
    githubUrl: "https://github.com/tolubishops0/scissors",
    liveUrl: "https://whimsical-baklava-230b00.netlify.app",
    imageUrl: "/images/scissors.png",
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify UI clone focusing on design accuracy and responsiveness, replicating the music streaming interface with playlist views and player controls.",
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
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
