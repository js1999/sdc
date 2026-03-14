interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl border border-navy-100/60 shadow-sm
        ${paddingStyles[padding]}
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/5 hover:-translate-y-1 hover:border-teal-200" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
