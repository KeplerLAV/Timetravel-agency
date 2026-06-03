import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="agence" className="py-28 px-6 lg:px-16 max-w-6xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-luxury-gold text-xs uppercase tracking-widest block font-semibold">Concept Unique</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-snug">Une sécurité absolue, <br />une immersion totale.</h2>
          <p className="text-luxury-text-muted text-sm font-light leading-relaxed">
            Chez TimeTravel Agency, nous ne faisons pas que simuler le passé : nous vous y transportons. Grâce à notre technologie brevetée de confinement quantique, voyagez au cœur de l'Histoire sans risquer de créer le moindre paradoxe.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white">Zéro Interférence</h4>
                <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">Sécurité temporelle stricte validée par la charte internationale.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <UserCheck className="h-6 w-6 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white">Conciergerie 5★</h4>
                <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">Un agent expert dédié vous accompagne à chaque seconde de votre saut.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-luxury-card border border-white/5 p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl" />
          <h3 className="text-lg font-medium mb-6 text-luxury-gold tracking-wide">Spécifications d'Exploration</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex justify-between py-2 border-b border-white/5"><span>Flotte de Transport</span> <span className="text-white font-mono">Chronos-Cruiser V8 Quantum</span></li>
            <li className="flex justify-between py-2 border-b border-white/5"><span>Précision Spatio-Temporelle</span> <span className="text-white font-mono">+/- 12 millisecondes</span></li>
            <li className="flex justify-between py-2 border-b border-white/5"><span>Indice d'Immersion Reconstitution</span> <span className="text-white font-mono">100% Physique & Tangible</span></li>
            <li className="flex justify-between py-2"><span>Devise de Bord</span> <span className="text-white font-mono">TempCoins ($TC)</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}