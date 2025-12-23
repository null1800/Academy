import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Users, GraduationCap, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const Careers = ({ navigate }) => {
  const jobs = [
    {
      id: 1,
      title: "Senior Mathematics Teacher",
      department: "High School Faculty",
      type: "Full-time",
      location: "Cambridge, MA",
      description: "We are seeking an experienced educator to lead our advanced mathematics curriculum, including AP Calculus and Statistics."
    },
    {
      id: 2,
      title: "Admissions Coordinator",
      department: "Administration",
      type: "Full-time",
      location: "Cambridge, MA",
      description: "Join our dynamic admissions team to help welcome the next generation of Golden Stars students and families."
    },
    {
      id: 3,
      title: "Science Laboratory Technician",
      department: "Science Department",
      type: "Part-time",
      location: "Cambridge, MA",
      description: "Support our science faculty in preparing and maintaining laboratory equipment for biology, chemistry, and physics classes."
    }
  ];

  const benefits = [
    { icon: <GraduationCap size={24} />, title: "Professional Development", desc: "Generous budget for conferences and advanced degrees." },
    { icon: <Heart size={24} />, title: "Comprehensive Health", desc: "Top-tier medical, dental, and vision coverage for you and your family." },
    { icon: <Users size={24} />, title: "Community Focus", desc: "A supportive, collaborative environment that values every voice." },
    { icon: <Clock size={24} />, title: "Work-Life Balance", desc: "Respect for personal time with generous leave policies." }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SectionTitle 
        subtitle="Join Our Team" 
        title="Careers at Golden Stars" 
        center 
        light
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-slate-300 text-lg leading-relaxed">
            At Golden Stars Academy, we believe that great education starts with great educators. 
            We are always looking for passionate, innovative, and dedicated professionals to join our community.
          </p>
          <div className="mt-8">
            <a 
              href="/apply-careers"
              onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} // Assuming parent router handles this or use a Link component
              className="inline-block"
            >
              {/* This is a fallback link, the buttons below will handle navigation via parent */}
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-900/40 border-slate-800 p-6 text-center hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-white mb-8 border-b border-slate-800 pb-4">Open Positions</h3>
          
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="group p-6 sm:p-8 bg-slate-900/60 backdrop-blur-md border-slate-700/50 hover:border-emerald-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-emerald-400 uppercase">
                      <span>{job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                      <span>{job.type}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-slate-400 text-sm max-w-2xl">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 pt-2">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} /> Job ID: GSA-{job.id}025
                      </div>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                    <Button 
                      variant="outline" 
                      className="w-full md:w-auto text-sm group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500"
                      onClick={() => navigate && navigate('apply-careers')}
                    >
                      Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">
            Don't see a position that fits? We're always interested in meeting talented individuals.
          </p>
          <a 
            href="mailto:careers@goldenstars.edu" 
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors border-b border-emerald-400/30 hover:border-emerald-300 pb-0.5"
          >
            Send us your resume <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
