import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, CheckCircle, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const ApplyCareers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    resume: null,
    coverLetter: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted! We will review your details and get back to you soon.");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SectionTitle 
        subtitle="Join Our Team" 
        title="Career Application" 
        center 
        light
      />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-slate-900/60 backdrop-blur-md border-slate-700/50 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-700/50">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Employment Application</h3>
                <p className="text-slate-400 text-sm">Please complete all required fields below.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="Jane" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="jane@example.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="(555) 123-4567" 
                  />
                </div>
              </div>

              {/* Position Info */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Position Applying For *</label>
                  <select 
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                  >
                    <option value="">Select a position...</option>
                    <option value="Senior Mathematics Teacher">Senior Mathematics Teacher</option>
                    <option value="Admissions Coordinator">Admissions Coordinator</option>
                    <option value="Science Laboratory Technician">Science Laboratory Technician</option>
                    <option value="Other">Other (General Application)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Years of Experience *</label>
                  <input 
                    type="number" 
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="e.g. 5" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Portfolio/LinkedIn URL</label>
                  <input 
                    type="url" 
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    placeholder="https://linkedin.com/in/jane-doe" 
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Resume/CV *</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      name="resume"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg p-6 text-center group-hover:border-emerald-500/50 transition-colors">
                      <Upload className="mx-auto text-slate-400 mb-2 group-hover:text-emerald-400" size={24} />
                      <p className="text-sm text-slate-300 font-medium">
                        {formData.resume ? formData.resume.name : "Click to upload Resume"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">PDF, DOCX up to 5MB</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Cover Letter</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      name="coverLetter"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg p-6 text-center group-hover:border-emerald-500/50 transition-colors">
                      <Upload className="mx-auto text-slate-400 mb-2 group-hover:text-emerald-400" size={24} />
                      <p className="text-sm text-slate-300 font-medium">
                         {formData.coverLetter ? formData.coverLetter.name : "Click to upload Cover Letter"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">PDF, DOCX up to 5MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="primary" className="w-full py-4 text-lg shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                  <Send size={18} /> Submit Application
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyCareers;
