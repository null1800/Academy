/**
 * @component Footer
 * @description Site-wide footer with quick links and contact info.
 */
import React from "react";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export const Footer = ({ navigate }) => {
  const handleNavigation = (pageId) => {
    if (navigate) {
      navigate(pageId);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
        
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
              <GraduationCap size={28} className="text-emerald-400" />
              <h2 className="text-3xl font-serif text-white">Golden Stars Academy</h2>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed text-sm">
            A dedicated institution fostering academic excellence, ethical leadership, and global perspective since 1985.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm font-light text-slate-300">
            <li onClick={() => handleNavigation('about')} className="hover:text-emerald-300 cursor-pointer hover:underline">About the School</li>
            <li onClick={() => handleNavigation('admissions')} className="hover:text-emerald-300 cursor-pointer hover:underline">Admissions Process</li>
            <li onClick={() => handleNavigation('academics')} className="hover:text-emerald-300 cursor-pointer hover:underline">Academic Calendar</li>
            <li onClick={() => handleNavigation('careers')} className="hover:text-emerald-300 cursor-pointer hover:underline">Careers</li>
            <li onClick={() => handleNavigation('contact')} className="hover:text-emerald-300 cursor-pointer hover:underline">Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6">Contact</h4>
          <div className="space-y-3 text-sm text-slate-300">
             <div className="flex items-start gap-2"><MapPin size={16} className="mt-1 text-emerald-400"/> <span>Ndeke<br/>Lusaka</span></div>
             <div className="flex items-center gap-2"><Phone size={16} className="text-emerald-400"/> <span>+26 (077) -584-978</span></div>
             <div className="flex items-center gap-2"><Mail size={16} className="text-emerald-400"/> 
               <span className="underline decoration-emerald-500/50 underline-offset-4">admissions@goldenstars.edu</span>
             </div>
             {/* Font Awesome Social Icons (Loaded in main App component) */}
             <div className="pt-4 flex gap-3 text-white">
               <i className="fa-brands fa-facebook-f p-2 rounded-full border border-slate-700 hover:bg-emerald-600 cursor-pointer transition-colors"></i>
               <i className="fa-brands fa-twitter p-2 rounded-full border border-slate-700 hover:bg-emerald-600 cursor-pointer transition-colors"></i>
               <i className="fa-brands fa-linkedin-in p-2 rounded-full border border-slate-700 hover:bg-emerald-600 cursor-pointer transition-colors"></i>
             </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-wider">
        <p>&copy; 2025 Golden Stars Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
