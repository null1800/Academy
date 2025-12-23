import React from "react";
import { THEME } from "../utils/constants.js";

export default function Button({ children, variant = "primary", className = "", onClick, type = "button", ...props }) {
  const baseStyle = "px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded-sm";
  const variants = {
    primary: `${THEME.colors.primary} text-white hover:bg-blue-900 shadow-md`,
    secondary: "bg-white text-blue-950 border border-blue-950/10 hover:border-blue-950 hover:bg-stone-50",
    outline: "border border-white/30 text-white hover:bg-white hover:text-blue-950",
    ghost: "text-blue-950 hover:bg-blue-950/5",
    accent: `${THEME.colors.accent} text-white hover:bg-green-800 shadow-md`,
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
