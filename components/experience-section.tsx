"use client";

import { SectionWrapper } from "./section-wrapper";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Qudra Technologies",
    role: "Frontend Engineer",
    period: "June 2024 - Present",
    points: [
      "Implemented real-time communication systems using WebSockets for instant messaging and live video conferencing, managing bidirectional data exchange and reconnection logic across multiple concurrent users",
      "Integrated Daily SDK with WebRTC protocols for video conferencing with screen sharing, participant controls, and connection quality monitoring for the Doron mentorship platform",
      "Built post-session features including call recordings, synchronized transcript playback, and AI-generated session summaries",
      "Built Qorepay, a production fintech invoicing platform integrating a third-party SDK for B2B and B2C invoice management, payment processing, and financial workflows serving live customers",
      "Developed AI-powered education features including chat interface, career guidance, text summarization, and flashcard generation",
      "Architected a social media feed system with real-time posts, stories, likes, comments, and media uploads using React Query for optimistic updates",
      "Built MyStack, a monorepo with vendor and customer apps enabling multiple vendors to manage storefronts and handle purchases",
      "Mentored 2 frontend interns, establishing coding standards that improved team-wide code quality by 50%",
    ],
  },
  {
    company: "Ajeoba Agro-Exchange",
    role: "Frontend Engineer / Associate Product Manager",
    period: "February 2022 - April 2024",
    points: [
      "Built customer-facing e-commerce platform with dynamic product listings, shopping cart, and checkout flow integrated with a multi-role marketplace serving farmers, logistics providers, and corporate buyers",
      "Optimized application performance achieving 40% improvement in Core Web Vitals through code-splitting, lazy loading, image optimization, and bundle size reduction",
      "Implemented responsive web design using CSS Grid, Flexbox, and mobile-first approaches to ensure seamless experiences across desktop, tablet, and mobile",
      "Bridged communication between engineering, design, and business teams as Associate Product Manager, translating product requirements into technical specifications and delivering features on schedule",
    ],
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative pl-8 pb-12 last:pb-0 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-primary" />

      {/* Content */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-lg font-semibold">{experience.company}</h3>
          <span className="text-sm text-muted-foreground">
            {experience.period}
          </span>
        </div>
        <p className="text-primary font-medium">{experience.role}</p>
        <ul className="space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={i}
              className="text-muted-foreground text-sm leading-relaxed flex gap-2"
            >
              <span className="text-primary mt-1.5 shrink-0">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
