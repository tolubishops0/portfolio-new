"use client";

import { SectionWrapper } from "./section-wrapper";
import { TechBadge } from "./tech-badge";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiRedux,
  SiNodedotjs,
  SiGit,
  SiFigma,
  // SiChakraui,
  SiMui,
  SiJest,
  SiDgraph,
  SiExpo,
  SiWebrtc,
  SiGithub,
  SiStyledcomponents,
  SiMobx,
  SiFirebase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";

export const techStack = [
  // Core
  { name: "React 18", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },

  // Mobile
  {
    name: "React Native",
    icon: <TbBrandReactNative className="text-[#61DAFB]" />,
  },
  { name: "Expo", icon: <SiExpo /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },

  // Styling
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Material UI", icon: <SiMui className="text-[#007FFF]" /> },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents className="text-[#DB7093]" />,
  },

  // State management
  { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "React Query", icon: <SiReact className="text-[#FF4154]" /> },
  { name: "MobX", icon: <SiMobx className="text-[#61DAFB]" /> },

  // Real-time
  { name: "WebSockets", icon: <BiNetworkChart className="text-[#F7DF1E]" /> },
  {
    name: "WebRTC",
    icon: <SiWebrtc className="text-[#333333] dark:text-white" />,
  },

  // Backend & DB
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },

  // Data viz
  { name: "Recharts", icon: <SiDgraph className="text-[#FF6384]" /> },

  // Testing
  { name: "Jest", icon: <SiJest className="text-[#C21325]" /> },
  {
    name: "React Testing Library",
    icon: <SiReact className="text-[#61DAFB]" />,
  },

  // Tools
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m{" "}
              <span className="text-foreground font-medium">Tolu Okunjoyo</span>
              , a Frontend Engineer building scalable, high-performance web
              applications with React, Next.js, and TypeScript.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in dashboards, data-heavy interfaces, and complex UI
              systems. I’ve shipped production features across fintech
              dashboards, e-commerce apps, AI-powered tools, real-time
              messaging, and video conferencing platforms, including complex SDK
              integrations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus is on delivering maintainable, production-ready
              applications that solve real user problems. I’m now expanding into{" "}
              <span className="text-primary font-medium">React Native</span> to
              bring my web experience to mobile platforms.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Currently exploring: React Native
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Tech Stack
            </h3>
            <div className="max-h-73 md:max-h-95 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    name={tech.name}
                    icon={<span className="text-base">{tech.icon}</span>}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
