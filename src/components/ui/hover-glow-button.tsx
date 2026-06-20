import React, { useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/* ---------- HoverButton (for <button> elements) ---------- */

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  (
    {
      children,
      className = "",
      disabled = false,
      glowColor = "var(--gold)",
      backgroundColor = "var(--foreground)",
      textColor = "var(--background)",
      hoverTextColor = "var(--gold)",
      ...props
    },
    ref,
  ) => {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [hovered, setHovered] = useState(false);

    const onMove = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
      <button
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition-colors duration-300",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
        style={{
          backgroundColor,
          color: hovered ? hoverTextColor : textColor,
        }}
        {...props}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  },
);
HoverButton.displayName = "HoverButton";

/* ---------- GlowLink (for TanStack Router <Link> elements) ---------- */

interface GlowLinkProps {
  to: string;
  params?: Record<string, string>;
  className?: string;
  children: ReactNode;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export const GlowLink: React.FC<GlowLinkProps> = ({
  to,
  params,
  className = "",
  children,
  glowColor = "var(--gold)",
  backgroundColor = "var(--foreground)",
  textColor = "var(--background)",
  hoverTextColor = "var(--gold)",
}) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link
      to={to}
      params={params}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition-colors duration-300",
        className,
      )}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor,
        color: hovered ? hoverTextColor : textColor,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
};
