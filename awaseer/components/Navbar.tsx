
import React, { useState, useEffect } from 'react';
import { FAMILY_NAME } from '../constants';

export type ViewType = 'home' | 'about' | 'glory' | 'initiatives' | 'talents' | 'projects' | 'admin';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  isAdminMode?: boolean;
  onAdminClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, isAdminMode, onAdminClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; view: ViewType }[] = [
    { name: 'الرئيسية', view: 'home' },
    { name: 'عن العائلة', view: 'about' },
    { name: 'لوحة المجد', view: 'glory' },
    { name: 'المبادرات', view: 'initiatives' },
    { name: 'مواهبنا', view: 'talents' },
    { name: 'مشروعي الصغير', view: 'projects' },
  ];

  if (currentView === 'admin') return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled || currentView !== 'home'
        ? 'bg-slate-950/80 backdrop-blur-xl border-b border-emerald-900/30 py-4 shadow-2xl' 
        : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setView('home')} className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
            أ
          </div>
          <span className="text-2xl font-black tracking-tighter text-emerald-400">
            {FAMILY_NAME}
          </span>
          {isAdminMode && (
            <span className="bg-amber-500 text-slate-950 text-[10px] px-2 py-0.5 rounded-full font-black animate-pulse">ADMIN</span>
          )}
        </button>
        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => {
                setView(link.view);
                window.scrollTo(0, 0);
              }}
              className={`text-sm font-bold transition-all hover:text-amber-500 relative py-2 ${
                currentView === link.view 
                  ? 'text-amber-500' 
                  : 'text-slate-300'
              }`}
            >
              {link.name}
              {currentView === link.view && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"></span>
              )}
            </button>
          ))}
          
          {/* Admin Access Button in Navbar */}
          <button
            onClick={onAdminClick}
            className="flex items-center gap-2 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/30 px-4 py-2 rounded-xl text-xs font-black text-emerald-400 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            لوحة التحكم
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
