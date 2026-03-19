"use client";

import { SectionWrapper } from "./section-wrapper";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {"Let's"} work together
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Open to full-time roles, freelance projects, and collaborations
        </p>

        <a
          href="mailto:toluokunjoyo@gmail.com"
          className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-primary transition-colors group"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          toluokunjoyo@gmail.com{" "}
        </a>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="https://github.com/tolubishops0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/toluokunjoyo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/tolubishops"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
