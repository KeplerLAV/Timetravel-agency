import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070709] py-16 text-center text-xs text-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left md:text-left text-center">
          <p className="font-serif uppercase tracking-[0.2em] text-sm text-white mb-1">
            TimeTravel <span className="text-luxury-gold">Agency</span>
          </p>
          <p className="font-light text-gray-500 text-[11px] uppercase tracking-widest">
            Explorations haut de gamme à travers les âges
          </p>
        </div>

        <div className="flex gap-8 text-[11px] uppercase tracking-widest text-gray-400">
          <a href="#agence" className="hover:text-luxury-gold transition-colors">L'Agence</a>
          <a href="#destinations" className="hover:text-luxury-gold transition-colors">Destinations</a>
          <a href="#quiz" className="hover:text-luxury-gold transition-colors">Conciergerie IA</a>
        </div>

        <div className="text-center md:text-right">
          <p className="uppercase tracking-widest text-gray-500 font-medium mb-1">
            Projet Pédagogique Moodle
          </p>
          <p className="font-light text-gray-600 text-[11px]">
            Master Digital & IA — Groupe 4 Équipiers
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-[10px] text-gray-700 uppercase tracking-widest">
        © 2026 TimeTravel Agency. Tous droits réservés sur la ligne temporelle.
      </div>
    </footer>
  );
}