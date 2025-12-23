import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { CheckCircle, Calendar, FileText, Mail, Phone, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

// --- THEME & CONSTANTS (Using the Slate/Emerald palette) ---
const THEME = {
    colors: {
        primary: "bg-slate-900",
        primaryText: "text-white",
        accent: "bg-emerald-500 hover:bg-emerald-600",
        accentText: "text-emerald-400",
        accentLight: "bg-emerald-900/20",
    },
};

// Custom component to draw the connection line between steps
const StepConnector = () => (
    <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-full px-12 hidden md:block z-0">
        {/* Main Line with Gradient effect */}
        <div className="h-1 bg-gradient-to-r from-emerald-500/0 via-slate-700 to-emerald-500/0"></div>
    </div>
);

export default function Admissions({ navigate }) {
    const steps = [
        {
            title: "Inquire & Visit",
            desc: "Schedule a personalized campus tour or attend an Open House event to see our community in action.",
            icon: Calendar,
            iconColor: "text-emerald-400",
            bgClass: "bg-emerald-900/30", 
        },
        {
            title: "Submit Application",
            desc: "Complete the online application form and upload all necessary documents along with the fee.",
            icon: FileText,
            iconColor: "text-emerald-300",
            bgClass: "bg-emerald-900/20",
        },
        {
            title: "Assessment & Interview",
            desc: "Student interviews, academic assessment, and teacher recommendations are reviewed.",
            icon: CheckCircle,
            iconColor: "text-emerald-400",
            bgClass: "bg-emerald-900/30",
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="bg-transparent min-h-screen pt-32 pb-24 font-sans">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <SectionTitle 
                    subtitle="Joining Golden Stars Academy" 
                    title="Your Admissions Journey" 
                    center 
                    light
                />
                <p className="max-w-3xl mx-auto text-center text-slate-400 text-xl leading-relaxed mt-4">
                    We welcome families who value academic excellence and character development. 
                    Our admissions team is here to guide you through every step of the journey.
                </p>
            </div>

            {/* Steps Grid - Enhanced Flow/Roadmap */}
            <motion.div 
                className="max-w-7xl mx-auto px-6 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Horizontal Flow Line with Gradient */}
                <StepConnector />
                
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="relative z-10">
                            <Card className="p-8 h-full shadow-xl border border-white/10 transition duration-300 hover:shadow-2xl hover:border-emerald-500">
                                {/* Step Indicator (High Contrast) */}
                                <div className={`relative w-14 h-14 rounded-full ${step.bgClass} flex items-center justify-center mb-6 border-4 border-slate-800 shadow-md mx-auto md:mx-0`}>
                                    <step.icon size={28} className={step.iconColor} />
                                    {/* Accent Number Dot */}
                                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${THEME.colors.accent} text-white font-bold text-base flex items-center justify-center border-2 border-slate-800 shadow-lg`}>
                                        {idx + 1}
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-3 mt-4">{step.title}</h3>
                                <p className="text-slate-400 text-base">{step.desc}</p>
                            </Card>
                            {/* Arrow between steps (only for 1st and 2nd step) */}
                            {idx < steps.length - 1 && (
                                <ArrowRight 
                                    size={36} 
                                    className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-slate-400 z-20"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Dates & Deadlines - High Contrast Block */}
            <div className={`${THEME.colors.primary} py-24 mt-32 relative`}>
                {/* Visual Accent Box */}
                <div className="absolute inset-y-0 right-0 w-1/4 bg-emerald-500/10 hidden md:block"></div>
                
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-4 mb-12 justify-center">
                        <Calendar size={32} className="text-emerald-400" />
                        <h2 className="text-3xl font-bold text-white">Key Dates & Deadlines</h2>
                    </div>
                    <div className="space-y-4">
                        {/* Data Rows */}
                        {[
                            { date: "October 15", event: "Applications Open for 2026-2027" },
                            { date: "December 1", event: "Financial Aid Deadline (Priority Consideration)" },
                            { date: "January 15", event: "Priority Application Submission Deadline" },
                            { date: "March 10", event: "Decision Notification to Families" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-slate-800 shadow-lg border-l-4 border-emerald-500 hover:bg-slate-700/80 transition duration-300"
                            >
                                <span className="font-extrabold text-emerald-400 w-40 mb-1 md:mb-0 text-lg">{item.date}</span>
                                <span className="text-slate-300 flex-1 text-lg">{item.event}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Button variant="accent" className="bg-emerald-500/80 text-white hover:bg-emerald-500" onClick={() => alert("View Full Academic Calendar")}>
                            View Full Academic Calendar
                        </Button>
                    </div>
                </div>
            </div>

            {/* CTA / Contact - Dynamic Angled Container */}
            <div className="max-w-4xl mx-auto px-6 text-center mt-24 relative">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Card className={`${THEME.colors.primary} text-white border-none p-12 rounded-3xl shadow-2xl relative overflow-hidden`}
                        style={{ transform: 'rotateX(5deg)', transformStyle: 'preserve-3d', perspective: '1000px' }} // Subtle 3D tilt
                    >
                        <h2 className="text-4xl font-extrabold mb-4 text-emerald-400">Ready to Apply?</h2>
                        <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">
                            Begin your journey today via our secure online portal. We look forward to connecting with you!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
                            <Button className={`${THEME.colors.accent} text-white font-bold`} onClick={() => navigate && navigate('apply-student')}>
                                Start Application <ArrowRight size={18} />
                            </Button>
                            <Button variant="outline-light"> 
                                <Download size={16} /> Download Handbook
                            </Button>
                        </div>
                        
                        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-center gap-10 text-base text-white/90 font-semibold">
                            <a href="tel:+16175550198" className="flex items-center gap-3 transition hover:text-emerald-400">
                                <Phone size={20} className="text-emerald-400" /> +1 (617) 555-0198
                            </a>
                            <a href="mailto:admissions@goldenstars.edu" className="flex items-center gap-3 transition hover:text-emerald-400">
                                <Mail size={20} className="text-emerald-400" /> admissions@goldenstars.edu
                            </a>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}