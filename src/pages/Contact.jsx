import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const THEME = {
    colors: {
        accent: "text-emerald-400",
        bg: "bg-slate-900",
    }
};

export default function Contact() {
    return (
        <div className="bg-transparent min-h-screen pt-32 pb-24 font-sans">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <SectionTitle 
                    subtitle="Get in Touch" 
                    title="Contact Us" 
                    center 
                    light
                />
                <p className="max-w-3xl mx-auto text-center text-slate-400 text-xl leading-relaxed mt-4">
                    Have questions about admissions, academics, or campus life? We're here to help. Reach out to us using the form below or visit our campus.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="p-8 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 h-full">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <MessageSquare className="text-emerald-400" size={24} /> Send us a Message
                        </h3>
                        
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300">First Name</label>
                                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300">Last Name</label>
                                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300">Email Address</label>
                                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="jane.doe@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300">Subject</label>
                                <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all">
                                    <option>General Inquiry</option>
                                    <option>Admissions</option>
                                    <option>Academics</option>
                                    <option>Careers</option>
                                </select>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300">Message</label>
                                <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none" placeholder="How can we assist you today?"></textarea>
                            </div>
                            
                            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </Card>
                </motion.div>

                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Info Cards */}
                    <div className="grid gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex items-start gap-4">
                            <div className="bg-emerald-900/30 p-3 rounded-lg text-emerald-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Campus Location</h4>
                                <p className="text-slate-400">Ndeke<br/>Lusaka</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex items-start gap-4">
                            <div className="bg-emerald-900/30 p-3 rounded-lg text-emerald-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Phone & Fax</h4>
                                <p className="text-slate-400">Main: +26 (077) 058-4978<br/>Fax: +26 (967) 882-706</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex items-start gap-4">
                            <div className="bg-emerald-900/30 p-3 rounded-lg text-emerald-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                                <p className="text-slate-400">Admissions: admissions@goldenstars.edu<br/>General: info@goldenstars.edu</p>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex items-start gap-4">
                            <div className="bg-emerald-900/30 p-3 rounded-lg text-emerald-400">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Office Hours</h4>
                                <p className="text-slate-400">Monday - Friday: 8:00 AM - 4:00 PM<br/>Saturday: 9:00 AM - 1:00 PM (Admissions Only)</p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder Map */}
                    <div className="w-full h-64 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 relative">
                        <img 
                            src="https://placehold.co/800x400/1e293b/475569?text=Map+Location" 
                            alt="Map Location" 
                            className="w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity"
                        />
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg text-white text-sm font-semibold border border-white/10">
                                Interactive Map Loading...
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
