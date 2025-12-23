import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import { ArrowUpRight, GraduationCap, Zap, Users, CheckCircle, Orbit } from "lucide-react";
import { motion } from "framer-motion";

// --- THEME CONSTANTS (High-Contrast Emerald/Slate) ---
const THEME = {
    colors: {
        accent: "bg-emerald-500 hover:bg-emerald-600",
        accentText: "text-emerald-400",
        accentLight: "bg-emerald-100",
        // New: Gradient for borders/accents
        gradient: "from-emerald-500 to-cyan-500",
    },
};

// Custom component for the individual academic level card with geometric flair
const LevelCard = ({ level, idx }) => {
    const isFeatured = level.isFeatured;

    // Framer Motion variants for card
    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            transition: { duration: 0.8, delay: idx * 0.15 } 
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`
                group p-8 rounded-2xl transition-all duration-500 h-full relative overflow-hidden
                ${isFeatured 
                    ? 'bg-slate-900/90 shadow-2xl shadow-emerald-500/30 ring-2 ring-emerald-500/70' 
                    : 'bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-900/80'
                }
            `}
            style={{ 
                transformStyle: 'preserve-3d', 
                perspective: '1000px',
                // Optional: Add a subtle diagonal inner shadow for depth
                boxShadow: isFeatured ? 'inset 0 0 50px rgba(52, 211, 163, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.5)' : 'none'
            }}
        >
            {/* Background Image / Placeholder with soft overlay */}
            <div className="absolute inset-0 z-0">
                 <img
                    src={level.image}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isFeatured ? 'opacity-20 blur-sm' : 'opacity-5 group-hover:opacity-10'}`}
                    alt={level.title}
                    onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/800x600/1e293b/FFFFFF?text=${encodeURIComponent(level.title.replace(/\s+/g, "+"))}`;
                    }}
                />
                <div className="absolute inset-0 bg-slate-950/90"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Grade and Badge */}
                <div className="flex items-center justify-between mb-4">
                    <span className={`font-extrabold tracking-widest uppercase text-sm ${isFeatured ? 'text-emerald-300' : 'text-slate-400'}`}>
                        {level.grade}
                    </span>
                    {isFeatured && (
                        <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-sm text-xs font-semibold border border-yellow-400/50 transform skew-x-[-10deg]">
                            <Zap size={12} className="skew-x-[10deg]" /> Elite Track
                        </div>
                    )}
                </div>

                {/* Title and Description */}
                <h3 className={`text-4xl font-extrabold mb-4 ${isFeatured ? 'text-white' : 'text-white/90'}`}>{level.title}</h3>
                <p className={`text-slate-300 flex-grow text-md mb-8 ${isFeatured ? 'text-slate-200' : ''}`}>{level.desc}</p>
                
                {/* CTA Link with Arrow Flair */}
                <a 
                    href="#" 
                    className={`
                        flex items-center gap-2 font-bold text-base transition-transform p-2 border-l-4 border-emerald-500/80
                        ${isFeatured ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-emerald-500 group-hover:text-emerald-400'}
                        group-hover:translate-x-1 mt-auto
                    `}
                >
                    Access Curriculum Portal <ArrowUpRight size={18} />
                </a>
            </div>
        </motion.div>
    );
};

// --- Faculty Data & Outcomes (Kept for integration) ---
const facultyMembers = [
    { name: "Dr. Emmanuel Rupiah", title: "Head of Science Dept.", specialty: "Pure Sciences", image: "https://placehold.co/100x100/334155/FFFFFF?text=ER" },
    { name: "Mr. Derrick Chanda", title: "Head Of Social Studies", specialty: "World History", image: "https://placehold.co/100x100/334155/FFFFFF?text=DC" },
    { name: "Ms.  Carol Siwale", title: "Head Of Business Studies", specialty: "Business Studies", image: "https://placehold.co/100x100/334155/FFFFFF?text=CS" },
];
const learningOutcomes = [
    "Mastery of core academic disciplines (STEM, Humanities, Arts)",
    "Fluency in critical thinking and complex problem-solving",
    "Effective written and verbal communication skills",
    "Demonstrated leadership and ethical reasoning",
    "High college acceptance rate at top-tier institutions",
];


export default function Academics() {
    const levels = [
        {
            title: "Lower School",
            grade: "Grades 1-7",
            desc: "A foundation built on curiosity, exploration, and core skills, ensuring a smooth transition into structured, lifelong learning.",
            image: "https://placehold.co/800x600/93C5FD/FFFFFF?text=Lower+School",
        },
        {
            title: "Junior Secondary School",
            grade: "Form  1&2",
            desc: "Expanding horizons with interdisciplinary projects, critical thinking, and dedicated faculty mentorship across all subjects.",
            image: "https://placehold.co/800x600/60A5FA/FFFFFF?text=Middle+School",
        },
        {
            title: "Senior Secondary School",
            grade: "Form 3&4",
            desc: "Advanced preparation for university through rigorous AP coursework, specialization tracks, leadership development, and Capstone projects.",
            image: "https://placehold.co/800x600/2563EB/FFFFFF?text=Upper+School",
            isFeatured: true,
        },
    ];

    const motionInView = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        viewport: { once: true, amount: 0.3 }
    }
    
    // Framer Motion variant for text lists
    const outcomeItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <div className="bg-transparent min-h-screen pt-32 pb-20 relative overflow-hidden">
            
            {/* Theme Sidebar */}
            <div className="absolute inset-y-0 right-0 w-1/4 bg-emerald-500/10 hidden md:block pointer-events-none -z-10"></div>

            {/* Background Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 via-slate-900 to-slate-900 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-cyan-500/50 to-slate-900 opacity-50"></div>


            <div className="max-w-7xl mx-auto px-6">
                
                {/* --- 1. Academic Pathways (Grid with Flair) --- */}
                <SectionTitle 
                    subtitle="Curriculum Schematics" 
                    title="Academic Pathways" 
                    align="left" 
                    light 
                />
                <p className="max-w-3xl text-lg text-slate-400 mt-4 mb-16">
                    Our dynamic curriculum is structured into three essential phases, each meticulously designed to propel students toward intellectual mastery and real-world competency.
                </p>
                
                {/* Main Academic Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {levels.map((level, idx) => (
                        <LevelCard key={level.title} level={level} idx={idx} />
                    ))}
                </div>
                
                {/* Dedicated Electives & Specialization Section (Geometrical CTA) */}
                <motion.div 
                    {...motionInView}
                    className="mt-28 p-10 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 shadow-xl shadow-emerald-500/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-5 pointer-events-none" style={{clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'}} />

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <Orbit size={64} className="text-emerald-400 flex-shrink-0 animate-spin-slow" />
                        
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-3xl font-extrabold text-white mb-2">Specialization & Electives</h3>
                            <p className="text-slate-300 text-lg max-w-2xl">
                                Utilize advanced tracks in Robotics, Bio-Engineering, and Global Policy. Unlock your potential through intensive, specialized study.
                            </p>
                        </div>
                        
                        <a 
                            href="#" 
                            className={`
                                flex items-center gap-3 px-8 py-3 rounded-full font-bold text-lg whitespace-nowrap 
                                ${THEME.colors.accent} text-black shadow-lg transition duration-300
                            `}
                        >
                            Access Specializations <ArrowUpRight size={20} />
                        </a>
                    </div>
                </motion.div>
                
                {/* --- 2. Learning Outcomes (Split Section with Flair) --- */}
                <div className="mt-28 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div {...motionInView} transition={{ duration: 0.7, delay: 0.1 }}>
                        <SectionTitle 
                            subtitle="The Golden Stars Graduate" 
                            title="Validated Core Competencies" 
                            align="left" 
                            light 
                        />
                        <p className="text-slate-400 text-lg mt-4 mb-8">
                            Our success is measured by the tangible skills our students carry forward. These competencies define a Golden Stars-educated global leader.
                        </p>
                        
                        <a href="#" className="flex items-center gap-2 text-emerald-500 font-semibold hover:text-emerald-400 transition-colors">
                            Request Data Sheet <ArrowUpRight size={18} />
                        </a>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                        className="p-8 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden"
                    >
                        {/* Gradient Border Accent for flair */}
                        <div className={`absolute inset-0 border-2 rounded-2xl border-transparent pointer-events-none`} 
                            style={{ 
                                background: `linear-gradient(to bottom right, #34d399, #06b6d4) border-box`,
                                mask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
                                maskComposite: `exclude`,
                                WebkitMaskComposite: `exclude`,
                                WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`
                            }}
                        />

                        <div className="relative z-10 space-y-6">
                            {learningOutcomes.map((item, i) => (
                                <motion.div key={i} variants={outcomeItemVariants} className="flex items-start gap-4">
                                    <div className="bg-emerald-900/20 border-emerald-500/30 p-6">
                                        <CheckCircle size={22} className="text-black flex-shrink-0" />
                                    </div>
                                    <span className="text-black text-lg font-medium leading-relaxed">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* --- 3. Faculty Spotlight (Circular Focus) --- */}
                <div className="mt-28 text-center">
                    <SectionTitle 
                        subtitle="Our Mentors" 
                        title="Meet the Faculty" 
                        center 
                        light 
                    />
                    <p className="max-w-3xl mx-auto text-lg text-slate-400 mt-4 mb-12">
                        Guidance from world-class experts. Our faculty are dedicated mentors shaping the next generation of innovators.
                    </p>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.15 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {facultyMembers.map((member, i) => (
                            <motion.div 
                                key={member.name} 
                                variants={outcomeItemVariants}
                                className="p-6 bg-slate-900/80 backdrop-blur-md rounded-full md:rounded-xl border border-slate-700 hover:border-emerald-500 transition-all shadow-lg flex flex-col items-center group"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-500/50 group-hover:border-emerald-400 transition-colors"
                                />
                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400">{member.name}</h4>
                                <p className="text-emerald-400 font-semibold text-sm">{member.title}</p>
                                <p className="text-slate-400 text-sm mt-1">{member.specialty}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <a href="#" className="mt-8 inline-flex items-center gap-2 text-emerald-500 font-semibold hover:text-emerald-400 transition-colors">
                        View Complete Directory <Users size={18} />
                    </a>
                </div>

            </div>
        </div>
    );
}