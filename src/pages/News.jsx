import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

const THEME = {
    colors: {
        accent: "text-emerald-400",
        accentBg: "bg-emerald-500",
        hover: "hover:text-emerald-300",
        border: "border-emerald-500/30",
    }
};

const newsItems = [
    {
        id: 1,
        title: "Golden Stars Robotics Team Wins Regional Championship",
        date: "December 12, 2025",
        category: "Achievements",
        excerpt: "Our senior robotics team, 'The Aurum Automata', secured first place at the New England Regional Robotics Competition this weekend.",
        image: "https://placehold.co/800x600/1e293b/FFFFFF?text=Robotics+Win"
    },
    {
        id: 2,
        title: "Annual Winter Arts Showcase Announced",
        date: "December 05, 2025",
        category: "Arts & Culture",
        excerpt: "Join us for an evening of music, visual arts, and theater performances by our talented students. Tickets are available now.",
        image: "https://placehold.co/800x600/0f172a/FFFFFF?text=Winter+Showcase"
    },
    {
        id: 3,
        title: "New Science Wing Groundbreaking Ceremony",
        date: "November 28, 2025",
        category: "Campus Development",
        excerpt: "We are thrilled to begin construction on the new state-of-the-art Science and Innovation Center, set to open in Fall 2026.",
        image: "https://placehold.co/800x600/334155/FFFFFF?text=Science+Wing"
    },
    {
        id: 4,
        title: "Guest Lecture: Dr. Sarah Al-Fayed on Climate Resilience",
        date: "November 15, 2025",
        category: "Academic Events",
        excerpt: "Renowned environmental scientist Dr. Sarah Al-Fayed will be visiting our campus to discuss the future of climate resilience strategies.",
        image: "https://placehold.co/800x600/1e293b/FFFFFF?text=Guest+Lecture"
    }
];

export default function News() {
    return (
        <div className="bg-transparent min-h-screen pt-32 pb-24 font-sans">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <SectionTitle 
                    subtitle="Latest Updates" 
                    title="News & Events" 
                    center 
                    light
                />
                <p className="max-w-3xl mx-auto text-center text-slate-400 text-xl leading-relaxed mt-4">
                    Stay connected with the vibrant life at Golden Stars Academy. From student achievements to upcoming campus events.
                </p>
            </div>

            {/* News Grid */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                {newsItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Card className="flex flex-col h-full overflow-hidden bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-emerald-500/50 transition-colors group">
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-2">
                                    <Tag size={12} /> {item.category}
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                    {item.title}
                                </h3>
                                
                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {item.excerpt}
                                </p>
                                
                                <a href="#" className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:text-emerald-400 transition-colors mt-auto">
                                    Read Full Story <ArrowRight size={16} />
                                </a>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Newsletter CTA */}
            <div className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-slate-900/80 backdrop-blur border border-emerald-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
                     <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Never Miss an Update</h3>
                     <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                        Subscribe to our weekly newsletter to get the latest news, event reminders, and stories from our community delivered to your inbox.
                     </p>
                     
                     <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500"
                        />
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
                            Subscribe
                        </button>
                     </form>
                </div>
            </div>
        </div>
    );
}
