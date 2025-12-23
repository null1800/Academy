import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, GraduationCap, Calendar, User, FileText } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

const ApplyStudent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Info
    studentFirstName: '',
    studentLastName: '',
    dob: '',
    gradeLevel: '',
    currentSchool: '',
    
    // Parent Info
    parentFirstName: '',
    parentLastName: '',
    email: '',
    phone: '',
    address: '',
    
    // Academic Info
    gpa: '',
    interests: '',
    essay: '',
    
    // Documents
    transcripts: null,
    recommendation: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Application Submitted! We will contact you for the next steps.");
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SectionTitle 
        subtitle="Admissions" 
        title="Student Application" 
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
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 -z-10 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
              
              {[1, 2, 3].map((num) => (
                <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors ${
                  step >= num 
                    ? 'bg-emerald-500 border-emerald-900 text-white' 
                    : 'bg-slate-800 border-slate-900 text-slate-500'
                }`}>
                  {num}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <User className="text-emerald-400" /> Student Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Student First Name *</label>
                      <input 
                        type="text" 
                        name="studentFirstName"
                        required
                        value={formData.studentFirstName}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Student Last Name *</label>
                      <input 
                        type="text" 
                        name="studentLastName"
                        required
                        value={formData.studentLastName}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Date of Birth *</label>
                      <input 
                        type="date" 
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Grade Applying For *</label>
                      <select 
                        name="gradeLevel"
                        required
                        value={formData.gradeLevel}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                      >
                        <option value="">Select Grade...</option>
                        <option value="9">9th Grade (Freshman)</option>
                        <option value="10">10th Grade (Sophomore)</option>
                        <option value="11">11th Grade (Junior)</option>
                        <option value="12">12th Grade (Senior)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Current School</label>
                    <input 
                      type="text" 
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                      placeholder="School Name, City, State"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="button" variant="primary" onClick={nextStep} className="px-8">Next Step</Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <User className="text-emerald-400" /> Parent/Guardian Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Parent First Name *</label>
                      <input 
                        type="text" 
                        name="parentFirstName"
                        required
                        value={formData.parentFirstName}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Parent Last Name *</label>
                      <input 
                        type="text" 
                        name="parentLastName"
                        required
                        value={formData.parentLastName}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
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
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Mailing Address</label>
                    <textarea 
                      name="address"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="px-8">Back</Button>
                    <Button type="button" variant="primary" onClick={nextStep} className="px-8">Next Step</Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="text-emerald-400" /> Academic & Documents
                  </h3>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Academic Interests / Extracurriculars</label>
                    <textarea 
                      name="interests"
                      rows="3"
                      value={formData.interests}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                      placeholder="Tell us about the student's interests..."
                    ></textarea>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Previous Transcripts</label>
                      <div className="relative group">
                        <input 
                          type="file" 
                          name="transcripts"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg p-4 text-center group-hover:border-emerald-500/50 transition-colors">
                          <Upload className="mx-auto text-slate-400 mb-2 group-hover:text-emerald-400" size={20} />
                          <p className="text-sm text-slate-300 font-medium">
                            {formData.transcripts ? formData.transcripts.name : "Upload Transcripts"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Recommendation Letter</label>
                      <div className="relative group">
                        <input 
                          type="file" 
                          name="recommendation"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg p-4 text-center group-hover:border-emerald-500/50 transition-colors">
                          <Upload className="mx-auto text-slate-400 mb-2 group-hover:text-emerald-400" size={20} />
                          <p className="text-sm text-slate-300 font-medium">
                            {formData.recommendation ? formData.recommendation.name : "Upload Recommendation"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={prevStep} className="px-8">Back</Button>
                    <Button type="submit" variant="primary" className="px-8 shadow-lg shadow-emerald-500/20">Submit Application</Button>
                  </div>
                </motion.div>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyStudent;
