import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Terminal, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full transition-all duration-500 max-w-5xl w-full ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
            : 'bg-black/40 backdrop-blur-md border border-white/5 shadow-lg'
        }`}
      >
        {/* Brand / Monogram */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-900 border border-luxury-gold/40 flex items-center justify-center text-luxury-gold text-xs font-serif font-bold group-hover:border-luxury-gold transition-colors duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
            DS
          </div>
          <span className="font-serif text-sm tracking-wider text-white hidden sm:inline-block font-light">
            DHRUV <span className="text-luxury-gold">SATHVARA</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 font-sans text-xs tracking-wider uppercase font-light">
          <button 
            onClick={() => scrollTo('about')}
            className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            About
          </button>
          
          <button 
            onClick={() => scrollTo('experience')}
            className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            Experience
          </button>

          {/* Highlighted Flagship: Dhruva OS */}
          <button 
            onClick={() => scrollTo('dhruva-os')}
            className="px-3.5 py-1.5 rounded-full bg-luxury-gold/15 border border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-300 font-medium flex items-center gap-1.5 shadow-[0_0_12px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>Dhruva OS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block ml-0.5" />
          </button>

          <button 
            onClick={() => scrollTo('projects')}
            className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            Projects
          </button>

          <button 
            onClick={() => scrollTo('terminal')}
            className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
          >
            <Terminal className="w-3 h-3 text-cyan-400" />
            <span>Terminal</span>
          </button>

          <button 
            onClick={() => scrollTo('skills')}
            className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            Skills
          </button>

          <button 
            onClick={() => scrollTo('contact')}
            className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            Contact
          </button>
        </div>

        {/* Action Button: Direct Contact / Hire */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => scrollTo('contact')}
            className="px-4 py-1.5 rounded-full bg-luxury-gold hover:bg-white text-black text-xs font-sans uppercase font-semibold tracking-wider transition-all duration-300 shadow-md hidden sm:inline-flex items-center gap-1"
          >
            <span>Get in Touch</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col space-y-3 font-sans text-xs uppercase tracking-widest text-neutral-300 md:hidden z-50">
          <button 
            onClick={() => scrollTo('about')} 
            className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo('experience')} 
            className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollTo('dhruva-os')} 
            className="text-left py-2.5 px-3 rounded-lg bg-luxury-gold/15 border border-luxury-gold/30 text-luxury-gold flex items-center justify-between font-medium"
          >
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-luxury-gold" />
              <span>Dhruva OS (Live Demo)</span>
            </span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full font-mono">LIVE</span>
          </button>
          <button 
            onClick={() => scrollTo('projects')} 
            className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollTo('terminal')} 
            className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Interactive Terminal</span>
          </button>
          <button 
            onClick={() => scrollTo('skills')} 
            className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="text-left py-2 px-3 rounded-lg bg-luxury-gold text-black font-semibold text-center mt-2"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
