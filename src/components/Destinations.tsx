import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface Destination {
  id: string;
  title: string;
  period: string;
  description: string;
  price: string;
  tags: string[];
  gradient: string;
}

interface DestinationsProps {
  onSelectDestination: (name: string) => void;
}

const DESTINATIONS: Destination[] = [
  {
    id: 'paris',
    title: 'Paris 1889',
    period: 'La Belle Époque',
    description: "Vivez l'effervescence de l'Exposition Universelle, admirez la Tour Eiffel flambant neuve et partagez un verre avec les artistes de Montmartre.",
    price: '15 000 TempCoins',
    tags: ['Culture', 'Architecture', 'Raffinement'],
    gradient: 'from-amber-950/30 to-transparent'
  },
  {
    id: 'cretace',
    title: 'Crétacé -65M',
    period: "L'Ère des Titans",
    description: "Explorez une nature sauvage et primitive totalement démesurée. Observez les majestueux dinosaures sous la protection de nos dômes temporels.",
    price: '25 000 TempCoins',
    tags: ['Aventure', 'Nature', 'Sensations'],
    gradient: 'from-emerald-950/30 to-transparent'
  },
  {
    id: 'florence',
    title: 'Florence 1504',
    period: 'La Haute Renaissance',
    description: "Plongez au cœur du génie humain. Rencontrez Michel-Ange et assistez à la création des chefs-d'œuvre qui façonneront l'histoire du monde.",
    price: '18 000 TempCoins',
    tags: ['Art', 'Culture', 'Histoire'],
    gradient: 'from-blue-950/30 to-transparent'
  }
];

export default function Destinations({ onSelectDestination }: DestinationsProps) {
  return (
    <section id="destinations" className="py-28 bg-black/30 border-y border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-widest block mb-3 font-semibold">Catalogue Exclusif</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide">Explorez nos Portails Temporels</h2>
          <p className="text-luxury-text-muted text-xs sm:text-sm font-light mt-4 leading-relaxed">
            Trois époques mythiques minutieusement balisées et sécurisées pour votre confort et plaisir exclusifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id} 
              className="group relative bg-luxury-card border border-white/5 hover:border-luxury-gold/40 transition-all duration-500 flex flex-col justify-between overflow-hidden h-[440px] shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${dest.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[10px] text-luxury-gold font-mono tracking-widest uppercase bg-luxury-gold/5 px-2 py-1 border border-luxury-gold/10">{dest.period}</span>
                  <MapPin className="h-4 w-4 text-gray-600 group-hover:text-luxury-gold transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-white group-hover:text-luxury-gold transition-colors duration-300">{dest.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed mt-4 opacity-90">{dest.description}</p>
              </div>

              <div className="p-8 relative z-10 mt-auto border-t border-white/5 bg-black/40">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {dest.tags.map(t => (
                    <span key={t} className="text-[9px] uppercase bg-white/5 px-2.5 py-1 tracking-wider text-gray-400 border border-white/5">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[9px] text-gray-500 uppercase block tracking-widest">Tarif standard</span>
                    <span className="text-base font-bold text-luxury-gold font-mono">{dest.price}</span>
                  </div>
                  <button 
                    onClick={() => onSelectDestination(dest.title)}
                    className="bg-white/5 group-hover:bg-luxury-gold group-hover:text-black text-white p-3 transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}