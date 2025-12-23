import React from "react";

export default function Card({ children, className = "", hover = true }) {
  return (
    <div className={`bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg ${hover ? "hover:shadow-emerald-900/20 hover:shadow-2xl hover:-translate-y-1 hover:bg-slate-800/80" : ""} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
