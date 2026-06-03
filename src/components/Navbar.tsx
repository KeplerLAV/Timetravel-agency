import React from 'react';
import { Compass } from 'lucide-react';

// Plus d'interface ici, on passe directement la fonction en paramètre
export default function Navbar({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <header className="sticky top-0 z-40 bg-luxury-bg/90 backdrop-blur-md border-b border-white/5 px-6 lg:px-16 py-5 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer group">
        <Compass className="h-6 w-6 text-luxury-gold group-hover:rotate-45 transition-transform duration-500" />
        <span className="font-serif tracking-widest text-lg font-bold uppercase bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          TimeTravel <span className="text-luxury-gold">Agency</span>
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-gray-400">
        <a href="#agence" className="hover:text-luxury-gold transition-colors">L'Agence</a>
        <a href="#destinations" className="hover:text-luxury-gold transition-colors">Destinations</a>
        <a href="#quiz" className="hover:text-luxury-gold transition-colors">Conciergerie IA</a>
      </nav>

      <button 
        onClick={onOpenChat}
        className="border border-luxury-gold hover:bg-luxury-gold hover:text-black text-luxury-gold px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
      >
        Réserver un saut
      </button>
    </header>
  );
}