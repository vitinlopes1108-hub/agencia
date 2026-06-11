import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "original" | "brand" | "white";
  size?: number;
  className?: string;
}

export default function Logo({
  variant = "original",
  size = 40,
  className,
  ...props
}: LogoProps) {
  // SVG of the high-fidelity Assessoria Skale Logo Glyph
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="skaleLogoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A6DD9" />
          <stop offset="100%" stopColor="#448FF2" />
        </linearGradient>
      </defs>

      {variant === "original" && (
        <rect width="100" height="100" rx="22" fill="url(#skaleLogoGradient)" />
      )}

      {/* Symbol Glyph */}
      <g transform={variant === "original" ? "translate(11, 11) scale(0.78)" : "translate(0, 0)"}>
        {/* Left-Top Interlocking Piece */}
        <path
          d="M 19.8 52.5 L 36.4 36.5 H 43.5 L 48.5 41.5 L 29.5 60.5 L 27.5 58.5 L 34.5 51.5 H 19.8 Z"
          fill={variant === "white" ? "#FFFFFF" : variant === "original" ? "#FFFFFF" : "#1A6DD9"}
        />
        {/* Central Left-Bottom Bar */}
        <path
          d="M 27.5 78.5 V 63.5 L 46.5 44.5 L 53.5 51.5 H 41.5 L 34.5 58.5 H 27.5 Z"
          fill={variant === "white" ? "#FFFFFF" : variant === "original" ? "#FFFFFF" : "#1A6DD9"}
          className="opacity-95"
        />
        {/* Right-Bottom Interlocking Piece */}
        <path
          d="M 80.2 47.5 L 63.6 63.5 H 56.5 L 51.5 58.5 L 70.5 39.5 L 72.5 41.5 L 65.5 48.5 H 80.2 Z"
          fill={variant === "white" ? "#FFFFFF" : variant === "original" ? "#FFFFFF" : "#1A6DD9"}
        />
        {/* Central Right-Top Bar */}
        <path
          d="M 72.5 21.5 V 36.5 L 53.5 55.5 L 46.5 48.5 H 58.5 L 65.5 41.5 H 72.5 Z"
          fill={variant === "white" ? "#FFFFFF" : variant === "original" ? "#FFFFFF" : "#1A6DD9"}
          className="opacity-95"
        />
      </g>
    </svg>
  );
}
