import React from "react";
import Button from "./Button.jsx";

const palette = {
  info: { background: "rgba(15, 23, 42, 0.9)", color: "#38bdf8", border: "#0ea5e9" }, // Slate-900 with Sky-400
  success: { background: "rgba(15, 23, 42, 0.9)", color: "#4ade80", border: "#22c55e" }, // Slate-900 with Green-400
  warning: { background: "rgba(15, 23, 42, 0.9)", color: "#facc15", border: "#eab308" }, // Slate-900 with Yellow-400
  error: { background: "rgba(15, 23, 42, 0.9)", color: "#f87171", border: "#ef4444" }, // Slate-900 with Red-400
};

export default function CustomAlert({ kind = "info", message, onClose }) {
  if (onClose) {
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-slate-900 p-8 rounded-xl shadow-2xl max-w-sm w-full space-y-4 border border-slate-700 border-t-4 border-t-emerald-500">
          <h3 className="text-xl font-bold text-white">Confirmation</h3>
          <p className="text-slate-300">{message}</p>
          <Button variant="primary" onClick={onClose} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Close</Button>
        </div>
      </div>
    );
  }

  const theme = palette[kind] || palette.info;
  return (
    <div className="alert p-4 rounded-lg border backdrop-blur-md shadow-lg font-medium" 
         style={{ background: theme.background, color: theme.color, borderColor: theme.border }}>
      {message}
    </div>
  );
}
