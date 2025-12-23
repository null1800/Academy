import React, { useState, useEffect } from "react";
import { BookOpen, Calendar, Play, ArrowRight, Star, Microscope, Palette, Globe, GraduationCap, Zap, Users } from "lucide-react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import CustomAlert from "../components/CustomAlert.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { motion, AnimatePresence } from "framer-motion";

// --- THEME & CONSTANTS ---
// Adjusting colors for the high-contrast dark aesthetic
const THEME = {
    colors: {
        primaryText: "text-white",
        secondaryText: "text-slate-400",
        accent: "bg-emerald-500 hover:bg-emerald-400",
        accentText: "text-emerald-400",
    },
};

// --- HERO SLIDE DATA ---
const heroSlides = [
    // (Data remains the same for functionality)
    {
        id: 1,
        title: "Empowering Minds, Building Futures.",
        subtitle: "World-class academics, creativity, and leadership for the next generation. Join a community dedicated to excellence.",
        image: "https://placehold.co/1200x800/1E293B/94A3B8?text=Inspiring+Future+Leaders",
        accentWord: "Building Futures.",
    },
    {
        id: 2,
        title: "Discover Your Potential in STEM.",
        subtitle: "Explore our state-of-the-art labs and research opportunities. Where curiosity meets innovation.",
        image: "https://placehold.co/1200x800/0F172A/94A3B8?text=Science+Lab+Focus",
        accentWord: "STEM.",
    },
    {
        id: 3,
        title: "Champions on the Field.",
        subtitle: "Our athletics program builds character, teamwork, and resilience through competitive sports.",
        image: "https://placehold.co/1200x800/2563EB/BFDBFE?text=Athletics+&+Sports",
        accentWord: "Champions",
    },
    {
        id: 4,
        title: "A Lifelong Alumni Network.",
        subtitle: "Join a global community of graduates making a difference in every field imaginable.",
        image: "https://placehold.co/1200x800/EA580C/FED7AA?text=Alumni+Community",
        accentWord: "Network.",
    },
];


const HeroCarousel = ({ navigate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const slide = heroSlides[currentSlide];

    // Animation variants for the slide transition
    const slideVariants = {
        enter: { opacity: 0, scale: 1.05 },
        center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }, // Slower, smoother transition
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8 } },
    };

    const textVariants = {
        center: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
        exit: { opacity: 0, y: 30, transition: { duration: 0.4 } },
    }

    const renderHighlightedTitle = (title, accentWord) => {
        if (!accentWord || !title.includes(accentWord)) return title;
        
        const parts = title.split(accentWord);
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {part}
                {index < parts.length - 1 && (
                    <span className="text-emerald-400 inline-block relative z-10">{accentWord}</span>
                )}
            </React.Fragment>
        ));
    };

    return (
        <div className="relative overflow-hidden min-h-[700px] shadow-2xl bg-slate-900 rounded-b-3xl">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={slide.id}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30" // Reduced opacity slightly
                    />
                    {/* Stronger Overlay Gradient for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20"></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-28 text-white">
                        {/* Text Content */}
                        <motion.h1
                            key={`title-${slide.id}`}
                            variants={textVariants}
                            initial="exit"
                            animate="center"
                            exit="exit"
                            className="text-6xl md:text-8xl font-extrabold leading-snug mb-6 max-w-4xl drop-shadow-xl"
                        >
                            {renderHighlightedTitle(slide.title, slide.accentWord)}
                        </motion.h1>

                        <motion.p
                            key={`subtitle-${slide.id}`}
                            variants={textVariants}
                            initial="exit"
                            animate="center"
                            exit="exit"
                            className="text-xl opacity-90 max-w-lg mb-10 text-slate-300"
                        >
                            {slide.subtitle}
                        </motion.p>
                        
                        {/* Buttons */}
                        <div className="flex gap-4">
                            <Button variant="primary" className={THEME.colors.accent} onClick={() => navigate("academics")}>
                                Explore Programs
                            </Button>
                            <Button variant="outline-light" onClick={() => navigate("admissions")}>
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
                            currentSlide === index ? 'bg-emerald-400 scale-125' : 'bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};


export const Home = ({ navigate }) => {
    const [showAlert, setShowAlert] = useState(false);

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="bg-transparent pt-0 overflow-hidden font-sans relative">
            
            {/* HERO SECTION - FULL WIDTH CAROUSEL */}
            <section className="relative w-full mb-32">
                <HeroCarousel navigate={navigate} />
            </section>

            {/* CREATIVE QUICK LINKS/NEWS - Layered Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* 1. Main News Card (Spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="md:col-span-2 relative min-h-[300px] rounded-2xl overflow-hidden shadow-xl group"
                    >
                        <img
                            src="https://placehold.co/600x400/1D4ED8/BFDBFE?text=Student+Success"
                            alt="Science Fair"
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/80 transition duration-300 p-8 flex flex-col justify-end text-white">
                            <BookOpen size={40} className="text-emerald-400 mb-3" />
                            <h3 className="text-3xl font-extrabold mb-1">Science Fair Winners Announced</h3>
                            <p className="text-base text-slate-400 mb-6">Discover student-led innovation and success across all grade levels.</p>
                            <Button variant="ghost" className="justify-start text-xs uppercase text-emerald-400 hover:text-white">
                                View All News <ArrowRight size={18} />
                            </Button>
                        </div>
                    </motion.div>

                    {/* 2. Events Card (Standard 1 column) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="md:col-span-1"
                    >
                        <Card className="h-full p-8 bg-slate-800/50 border-slate-700/50 hover:border-rose-500 transition duration-300">
                            <Calendar size={30} className="text-rose-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Upcoming Events</h3>
                            <p className="text-lg font-extrabold text-white mb-2 leading-snug">Fall Open House – Oct 26</p>
                            <p className="text-sm text-slate-400 mb-6">Experience our campus and culture.</p>
                            <Button variant="ghost" className="justify-start text-xs uppercase text-rose-400 hover:text-white">
                                Full Calendar <ArrowRight size={18} />
                            </Button>
                        </Card>
                    </motion.div>
                    
                    {/* 3. Virtual Tour Card (Standard 1 column) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="md:col-span-1"
                    >
                        <Card className="h-full p-8 bg-slate-800/50 border-slate-700/50 hover:border-purple-500 transition duration-300">
                            <Play size={30} className="text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Virtual Tour</h3>
                            <p className="text-lg font-extrabold text-white mb-2 leading-snug">Explore From Anywhere</p>
                            <p className="text-sm text-slate-400 mb-6">Take a guided online experience.</p>
                            <Button variant="ghost" className="justify-start text-xs uppercase text-purple-400 hover:text-white">
                                Start Tour <ArrowRight size={18} />
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* PILLARS - Depth and Angled Section */}
            <div className="relative bg-slate-900/50">
                {/* Creative Angled Edge */}
                <div className="absolute top-0 w-full h-40 bg-transparent transform -skew-y-3 origin-top-left -mt-20 z-0">
                    <div className="absolute inset-0 bg-slate-900/50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                </div>

                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <SectionTitle subtitle="Our Philosophy" title="The Pillars of Excellence" center light />
                        <div className="grid md:grid-cols-3 gap-10 mt-16">
                            {[{
                                icon: Microscope,
                                title: "Scientific Inquiry",
                                desc: "Hands-on research, labs, and innovation-driven learning.",
                                color: "text-blue-400",
                                bg: "bg-blue-900/20",
                            }, {
                                icon: Palette,
                                title: "Creative Expression",
                                desc: "Arts programs that inspire originality and confidence.",
                                color: "text-pink-400",
                                bg: "bg-pink-900/20",
                            }, {
                                icon: Globe,
                                title: "Global Citizenship",
                                desc: "Preparing leaders for a connected world.",
                                color: "text-yellow-400",
                                bg: "bg-yellow-900/20",
                            }].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.8, type: "spring", stiffness: 150 }}
                                >
                                    <Card className="h-full p-10 group transition duration-300 shadow-xl hover:shadow-2xl bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500">
                                        <div className={`mb-6 p-4 rounded-full w-fit transition ${item.bg} group-hover:ring-4 ring-emerald-500/30`}>
                                            <item.icon size={36} className={`${item.color} group-hover:scale-110 transition`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-slate-400 text-base mb-6">{item.desc}</p>
                                        <div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${THEME.colors.accentText}`}>
                                            Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>


            {/* TESTIMONIALS - Glassmorphism & High Contrast */}
            <section className="bg-transparent py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Testimonial Card (Glass Effect) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionTitle subtitle="What They Say" title="A Community of Support" light />
                        <Card hover={false} className="shadow-2xl p-8 border-l-4 border-emerald-500 rounded-2xl mt-8 glass bg-slate-800/80 backdrop-blur-md">
                            <Star size={28} className="text-yellow-400 fill-yellow-400 mb-4" />
                            <p className="text-xl italic text-slate-100 mb-6 leading-relaxed">
                                “The faculty support and academic depth are unmatched. My child has thrived in this environment.”
                            </p>
                            <p className="font-extrabold text-base text-white">— Jane S., Parent '25</p>
                        </Card>
                    </motion.div>

                    {/* Right: Key Metric/Alumni Feature (Solid Dark Contrast) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl"
                    >
                        <h3 className="text-5xl font-extrabold text-emerald-400 mb-4">98%</h3>
                        <p className="text-2xl font-semibold mb-6">College Acceptance Rate</p>
                        <p className="text-slate-400 mb-8">
                            Our graduates attend top universities globally. We prepare students not just for college, but for life.
                        </p>
                        <Button variant="accent" className="bg-emerald-400 text-slate-900 hover:bg-emerald-500/20" onClick={() => navigate('admissions')}>
                            See Alumni Success
                        </Button>
                    </motion.div>
                </div>
            </section>


            {/* CTA - Final Dramatic Section */}
            <section className="py-32 px-6 bg-slate-900 relative">
                {/* Abstract Shape Overlay for visual interest */}
                <div className="absolute inset-0 z-0 opacity-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)', background: 'radial-gradient(circle at 10% 90%, rgba(52, 211, 153, 0.2), transparent 70%)' }}></div>
                
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <GraduationCap size={64} className="mx-auto text-emerald-400" />
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                        Ready to <span className="text-emerald-400">Begin Your Journey?</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Explore our admissions process or connect with us for a personalized campus tour.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                        <Button variant="accent" className={THEME.colors.accent} onClick={() => navigate('admissions')}>
                            Apply Now
                        </Button>
                        <Button variant="outline-light">
                            Download Prospectus
                        </Button>
                    </div>
                </div>
            </section>

            {/* Custom Alert (Kept functionality) */}
            {showAlert && (
                <CustomAlert
                    message="Thank you! Your application process has been recorded. Please check your email for next steps."
                    onClose={() => setShowAlert(false)}
                />
            )}
        </div>
    );
};

export default Home;