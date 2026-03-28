"use client";

import { Mail, Github, Linkedin, Printer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = {
  "Core Technologies": [
    "React 18",
    "React Native",
    "Next.js",
    "Expo",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
  ],
  "Styling & UI": [
    "TailwindCSS",
    "Chakra UI",
    "Material UI",
    "ShadCN",
    "Styled Components",
    "SCSS",
    "RWD",
    "Mobile-First Design",
  ],
  "Data Visualization": ["Recharts", "Chart.js", "Interactive Dashboards"],
  "Real-Time & APIs": [
    "WebSockets",
    "RESTful APIs",
    "WebRTC",
    "Real-Time Data Exchange",
    "Supabase",
  ],
  "State Management": [
    "Redux Toolkit",
    "TanStack Query",
    "MobX",
    "Context API",
  ],
  "Testing & Quality": [
    "Jest",
    "React Testing Library",
    "Cypress",
    "Playwright",
    "DRY/SRP/SOLID",
  ],
  "Tools & Workflow": [
    "Git",
    "GitHub",
    "Figma",
    "npm/Node.js",
    "GitHub Copilot",
    "Agile/Scrum",
    "Turborepo",
  ],

  "Performance & Accessibility": [
    "Code-Splitting",
    "Lazy Loading",
    "Core Web Vitals",
    "WCAG",
    "ARIA",
  ],
};

const experience = [
  {
    title: "Frontend Engineer",
    company: "Qudra Technologies",
    period: "June 2024 - Present",
    bullets: [
      "Implemented real-time communication systems using WebSockets for instant messaging and live video conferencing, managing bidirectional data exchange, connection states, and reconnection logic across multiple concurrent users",
      "Integrated Daily SDK with WebRTC protocols for video conferencing with screen sharing, participant controls, and connection quality monitoring for the Doron mentorship platform",
      "Built post-session features including call recordings, synchronized transcript playback, and AI-generated session summaries",
      "Built Qorepay, a production fintech invoicing platform integrating a third-party SDK for B2B and B2C invoice management, payment processing, and financial workflows serving live customers",
      "Built interactive data visualization dashboards using Recharts with real-time updates and user-driven filtering for mobile-first audiences",
      "Designed and developed e-commerce landing pages for Zeefarh with dynamic product displays and conversion-optimized layouts",
      "Developed AI-powered education features including chat interface, career guidance, text summarization, and flashcard generation",
      "Architected social media feed system with real-time posts, stories, likes, comments, and media uploads using React Query for optimistic updates",
      "Architected a reusable component library with TailwindCSS and ShadCN/UI implementing atomic design principles",
      "Built MyStack, a monorepo with vendor and customer apps enabling multiple vendors to manage storefronts and handle purchases",
      "Mentored 2 frontend interns, establishing coding standards that improved team-wide code quality by 50%",
    ],
  },
  {
    title: "Frontend Engineer / Associate Product Manager",
    company: "Ajeoba Agro-Exchange",
    period: "Feb 2022 - Apr 2024",
    bullets: [
      "Built customer-facing e-commerce platform with dynamic product listings, shopping cart, and checkout flow integrated with multi-role marketplace serving farmers, logistics providers, and corporate buyers",
      "Optimized application performance achieving 40% improvement in Core Web Vitals through code-splitting, lazy loading, image optimization, and bundle size reduction",
      "Implemented responsive web design using CSS Grid, Flexbox, and mobile-first approaches across desktop, tablet, and mobile",
      "Bridged communication between engineering, design, and business teams as Associate Product Manager, translating product requirements into technical specifications and delivering features on schedule",
    ],
  },
];

const education = [
  {
    degree: "Diploma in Frontend Engineering",
    institution: "Altschool Africa",
    date: "June 2023",
  },
  {
    degree: "Laptop for Developers Internship",
    institution: "DevCareers",
    date: "Oct - Dec 2023",
  },
  {
    degree: "BSc Industrial Chemistry",
    institution: "Obafemi Awolowo University, Nigeria",
    date: "January 2022",
  },
];

const projects = [
  {
    name: "Ledgr",
    description:
      "Built a personal finance monorepo using Turborepo with two Next.js apps — a user dashboard and an admin portal — sharing a component library, types, and utilities across packages. Implemented Supabase auth with RLS, transaction tracking, budget management, Recharts analytics, and an admin portal for platform-wide user and transaction management.",
    tech: [
      "Next.js",
      "Turborepo",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
    ],
    github: "github.com/tolubishops0/ledgr",
    live: "ledgrr-app.vercel.app",
    adminUrl: "ledgr-admin.vercel.app",
  },
  {
    name: "TechPulse",
    description:
      "Full-stack tech news platform demonstrating all Next.js rendering strategies (SSG, ISR, SSR, PPR, CSR) with Supabase auth, real-time likes and comments, bookmarks, reading history, and a personalised dashboard.",
    tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "github.com/tolubishops0/techpulse",
    live: "techpulse-theta.vercel.app",
  },
  {
    name: "FarmFold",
    description:
      "A responsive agri-marketplace with reusable product cards, category and rating filters, and skeleton loaders to simulate async data fetching and real marketplace behavior.",
    tech: ["React", "Tailwind CSS"],
    github: "github.com/tolubishops0/farmfold",
    live: "farmfold.netlify.app",
  },
  {
    name: "LendSqr",
    description:
      "A fintech-style user management dashboard displaying users, loans, savings, and transaction data with detailed views, filtering, and authentication.",
    tech: ["TypeScript", "Next.js", "SCSS"],
    github: "github.com/tolubishops0/lendsqr",
    live: "user-list-lender.netlify.app",
  },
  {
    name: "Tech Care",
    description:
      "An assessment dashboard displaying users heart history data with interactive charts, data tables, and filtering for complex data visualization.",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    github: "github.com/tolubishops0/coa-trend",
    live: "coa-trend.netlify.app",
  },
  {
    name: "Scissors",
    description:
      "A URL shortener application that allows users to shorten long URLs into manageable links with Firebase as the backend.",
    tech: ["TypeScript", "React", "Firebase"],
    github: "github.com/tolubishops0/scissors",
    live: "whimsical-baklava-230b00.netlify.app",
  },
  {
    name: "Intelligent Scholar",
    description:
      "A high-conversion marketing landing page focused on clear information hierarchy, accessibility, and conversion-oriented layout.",
    tech: ["React", "Tailwind CSS"],
    github: "github.com/tolubishops0/isslp",
    live: "isslp.netlify.app",
  },
];

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 print:py-0 print:px-0">
      <div className="mx-auto max-w-4xl bg-background print:max-w-none">
        <div className="mb-6 flex justify-end print:hidden">
          <Button onClick={handlePrint} variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Tolu Okunjoyo
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">
            Frontend Engineer
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <a
              href="mailto:toluokunjoyo@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              toluokunjoyo@gmail.com
            </a>
            <a
              href="https://github.com/tolubishops0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/tjoyo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Remote (GMT+1)
            </span>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 border-b border-border pb-2 text-lg font-semibold text-foreground">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Frontend Engineer with 4 years of experience building complex web
            applications with real-time features, AI integrations, and
            third-party SDK implementations. Specialized in architecting and
            delivering production features including video conferencing systems,
            social media platforms, fintech invoicing tools, and e-commerce
            marketplaces using React, TypeScript, and Next.js. Proven track
            record of independently building and shipping customer-facing
            products from requirements to deployment. Strong problem-solver who
            researches and implements complex SDKs without heavy oversight,
            optimizes application performance, and delivers scalable solutions
            that serve live users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 border-b border-border pb-2 text-lg font-semibold text-foreground">
            Technical Skills
          </h2>
          <div className="space-y-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex flex-wrap items-start gap-2">
                <span className="text-sm font-medium text-foreground min-w-40">
                  {category}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 border-b border-border pb-2 text-lg font-semibold text-foreground">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-foreground">{job.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-primary">{job.company}</p>
                <ul className="mt-2 space-y-1.5">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 border-b border-border pb-2 text-lg font-semibold text-foreground">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-medium text-foreground">
                    {project.name}
                  </h3>
                  {project.github && (
                    <a
                      href={`https://${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      {project.github}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={`https://${project.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      {project.live}
                    </a>
                  )}
                  {project.adminUrl && (
                    <a
                      href={`https://${project.adminUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      {project.adminUrl}
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="mb-3 border-b border-border pb-2 text-lg font-semibold text-foreground">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="font-medium text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {edu.date}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
