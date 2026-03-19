"use client";

import { Github, ExternalLink } from "lucide-react";
import { TechPill } from "./tech-badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  imageUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card border border-border/50 rounded-xl overflow-hidden",
        "transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
        featured && "md:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-linear-to-br from-primary/20 via-primary/10 to-transparent",
          featured ? "h-40 md:h-125" : "h-72 md:h-80",
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {title.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className={cn("font-bold", featured ? "text-xl" : "text-lg")}>
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View ${title} live`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechPill key={tag} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
