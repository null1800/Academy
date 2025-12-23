/**
 * @component Navbar
 * @description Site-wide navigation bar, handles mobile menu state.
 */
import React, { useState, useEffect } from "react";
import { Menu, X, Search, GraduationCap, HandHelping } from "lucide-react";
import { THEME } from "../../utils/constants.js";
import Button from "../Button.jsx";

export const Navbar = ({ activePage, setActivePage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'news', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const navigate = (id) => {
    setActivePage(id);
    setMobileOpen(false);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      
      // Check for direct page matches
      const page = pages.find(p => 
        p.id.toLowerCase().includes(query) || 
        p.label.toLowerCase().includes(query)
      );
      
      if (page) {
        navigate(page.id);
        setSearchQuery('');
        setIsSearchOpen(false);
        return;
      }

      // Check for donate
      if (query.includes('donate') || query.includes('give')) {
         navigate('donate');
         setSearchQuery('');
         setIsSearchOpen(false);
         return;
      }
      
      alert(`No direct page match for: ${searchQuery}. Global search coming soon!`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header className="fixed w-full z-50 shadow-md backdrop-blur-md bg-slate-950/80 border-b border-white/5">
        {/* Top Accent Bar (Darker Emerald) */}
        <div className="w-full bg-emerald-900/40 py-1 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-right text-xs text-emerald-400 font-medium tracking-widest">
             <span className="hidden sm:inline">Preparing Leaders for Tomorrow's Challenges</span>
          </div>
        </div>
        
        {/* Main Navigation Bar */}
        <nav className="py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => setActivePage('home')}
            >
              <GraduationCap size={24} className="text-emerald-400" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold leading-none tracking-tight text-white group-hover:text-emerald-400 transition-colors">Golden Stars</span>
                <span className="text-xs font-bold tracking-[0.2em] opacity-60 text-slate-400">ACADEMY</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {pages.map(link => (
                <button 
                  key={link.id}
                  onClick={() => navigate(link.id)} 
                  className={`text-sm font-medium hover:text-emerald-400 transition-colors ${activePage === link.id ? 'text-emerald-400 font-bold' : 'text-slate-300'}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pl-4 border-l border-white/10 relative">
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-full px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Search 
                  size={20} 
                  className={`cursor-pointer transition-colors ${isSearchOpen ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`} 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                <Button 
                  variant="accent" 
                  className="px-5 py-2 text-xs"
                  onClick={() => navigate('donate')}
                >
                  <HandHelping size={16}/> Donate
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu size={28} className="text-white" />
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] bg-slate-950 text-white p-8 flex flex-col">
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-2xl font-bold text-emerald-400">Menu</span>
              <button onClick={() => setMobileOpen(false)}><X size={32}/></button>
            </div>
            <div className="flex flex-col gap-6 text-center">
               {pages.map(link => (
                  <button 
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className="text-3xl font-serif hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button variant="accent" className="mt-8" onClick={() => navigate('donate')}>Donate Now</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
