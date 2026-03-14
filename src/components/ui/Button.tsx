"use client";

import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 active:scale-[0.98]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20 active:scale-[0.98]",
  outline:
    "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white active:scale-[0.98]",
  ghost:
    "text-navy-700 hover:text-navy-900 hover:bg-navy-50 active:scale-[0.98]",
  white:
    "bg-white text-navy-900 hover:bg-cream shadow-lg active:scale-[0.98]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className = "", children, ...props }, ref) {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap";
    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if ("href" in props && props.href) {
      const { href, onClick, ...rest } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={onClick}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

export default Button;
