import React from "react";
import { THEME } from "../utils/constants.js";

export default function SectionTitle({ subtitle, title, align = "center", light = false }) {
  return (
    <div className={`space-y-2 mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <span className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? "text-green-300" : THEME.colors.accentText}`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl font-serif ${light ? "text-white" : "text-blue-950"}`}>
        {title}
      </h2>
    </div>
  );
}
