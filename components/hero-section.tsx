"use client";

import { Github, Linkedin, Twitter, ChevronDown, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-primary/20 blur-2xl -z-10" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl border-none border-foreground/10 overflow-hidden">
                <Image
                  src="/toluimg.png"
                  alt="Tolu Okunjoyo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Open to work badge */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-full text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to work
              </div>

              {/* Experience badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-full text-sm font-medium">
                4 yrs exp.
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left lg:order-1">
            {/* Greeting badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 border border-primary/30 bg-primary/10 rounded-full text-primary text-sm font-medium">
              {"Tolubishops here"} <span className="ml-1">{"👋"}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
              Building things for the web
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-4 text-pretty leading-relaxed mx-auto">
              Frontend Engineer with{" "}
              <span className="text-foreground font-medium">
                4 years of experience
              </span>{" "}
              building complex web applications — real-time video conferencing,
              AI-powered tools, fintech platforms, and e-commerce marketplaces.
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 text-pretty leading-relaxed mx-auto">
              Specialised in{" "}
              <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">Next.js</span>, and{" "}
              <span className="text-primary font-medium">TypeScript</span>.{" "}
              Currently expanding into{" "}
              <span className="text-primary font-medium">React Native</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors text-center"
              >
                Get in touch
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <a
                href="https://github.com/tolubishops0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tjoyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:toluokunjoyo@gmail.com"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
