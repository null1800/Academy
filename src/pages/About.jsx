import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, BookOpen, Clock } from "lucide-react";

// --- THEME CONSTANTS ---
const THEME = {
    colors: {
        accent: "bg-emerald-500 hover:bg-emerald-600",
        accentText: "text-emerald-400",
        gradient: "from-emerald-500 to-cyan-500",
    },
};

const ValueCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all group"
    >
        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
            <Icon className="text-emerald-400" size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
);

export default function About() {
    return (
        <div className="bg-transparent min-h-screen pt-32 pb-20 relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <SectionTitle 
                        subtitle="Who We Are" 
                        title="Legacy of Excellence" 
                        center 
                        light 
                    />
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg text-slate-400 mt-6 leading-relaxed"
                    >
                        Founded in 1985, Golden Stars Academy has been a beacon of educational innovation and character development for over four decades. We are dedicated to nurturing the next generation of global leaders through a rigorous academic curriculum and a supportive, values-driven community.
                    </motion.p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Target size={120} className="text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Target className="text-emerald-400" /> Our Mission
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            To empower students with knowledge, integrity, and resilience, fostering a lifelong love for learning and a commitment to positive global impact.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden"
                    >
                         <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Shield size={120} className="text-cyan-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Shield className="text-cyan-400" /> Our Vision
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            To be a world-class institution where every student is inspired to reach their full potential, cultivating wisdom and compassion in equal measure.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="mb-24">
                    <SectionTitle subtitle="Our Foundation" title="Core Values" align="left" light />
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <ValueCard 
                            icon={Award} 
                            title="Excellence" 
                            desc="We strive for the highest standards in everything we do, from academics to arts and athletics."
                            delay={0.1}
                        />
                        <ValueCard 
                            icon={Users} 
                            title="Community" 
                            desc="We believe in the power of collaboration, respect, and inclusivity to build a strong school family."
                            delay={0.2}
                        />
                        <ValueCard 
                            icon={BookOpen} 
                            title="Integrity" 
                            desc="We act with honesty and moral courage, taking responsibility for our actions and their impact."
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* History / Timeline Snippet */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle subtitle="Our Journey" title="History & Heritage" align="left" light />
                            <div className="space-y-6 mt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                                        <Clock size={20} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">1985</h4>
                                        <p className="text-slate-400">Founded by Dr. Ray Mtonga with a vision for holistic education.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                                        <Clock size={20} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">2000</h4>
                                        <p className="text-slate-400">Expanded campus facilities to include the state-of-the-art Science Wing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                                        <Clock size={20} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">2023</h4>
                                        <p className="text-slate-400">Recognized as a "School of Excellence" for digital innovation in learning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/20">
                             <img 
                                src="https://placehold.co/800x1000/1e293b/FFFFFF?text=School+History" 
                                alt="History of Golden Stars" 
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
