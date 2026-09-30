import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className = "", highlighted = false }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl border transition-all duration-300
        ${highlighted
          ? "border-accent-300 shadow-lg shadow-accent-100/50 ring-1 ring-accent-200"
          : "border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
