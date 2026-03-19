"use client"

import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  icon?: React.ReactNode
  className?: string
}

export function TechBadge({ name, icon, className }: TechBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-3 rounded-lg",
        "bg-card border border-border/50",
        "transition-all duration-300",
        "hover:border-primary/50 hover:shadow-sm",
        className
      )}
    >
      {icon && <span className="text-muted-foreground">{icon}</span>}
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export function TechPill({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
        "bg-secondary text-secondary-foreground",
        className
      )}
    >
      {name}
    </span>
  )
}
