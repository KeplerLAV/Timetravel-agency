import React, { useState, useEffect } from 'react';

// Tableau contenant les visuels de tes 3 destinations temporelles
const HERO_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80", // Paris 1889 (Valide)
  "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1920&q=80", // Florence 1504 (Nouvelle URL fonctionnelle 🌟)
  "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=1920&q=80"  // Crétacé (Valide)
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Changement automatique d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_BACKGROUNDS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0A0A0C]">
      
      {/* 🌟 ARRIÈRE-PLAN ANIMÉ MULTI-IMAGES */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {HERO_BACKGROUNDS.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              // L'image active prend une transition de zoom très lente (effet Ken Burns)
              transitionProperty: 'opacity, transform',
              transitionDuration: index === currentImageIndex ? '5000ms, 5000ms' : '1000ms'
            }}
          />
        ))}
        
        {/* Voile sombre dégradé pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/50 via-[#0A0A0C]/80 to-[#0A0A0C]" />
        
        {/* Halo lumineux central diffus (conservé de ton code d'origine) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-luxury-gold/15 to-purple-950/20 rounded-full blur-[120px] animate-pulse-slow" />
        
        {/* Grille de points subtile (conservée) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Contenu Principal (z-10 pour être au-dessus des images) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-20 animate-fade-in">
        {/* Surtitre */}
        <span className="text-luxury-gold text-xs uppercase tracking-[0.6em] font-medium block mb-8 opacity-90">
          L'excellence par-delà les siècles
        </span>

        {/* Titre Ultra-Premium */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-tight mb-8 leading-[1.1] font-extralight text-white">
          Le Temps N'est Plus Une <br />
          <span className="italic font-light text-luxury-gold block mt-2">Frontière</span>.
        </h1>

        {/* Description épurée */}
        <p className="text-luxury-text-muted text-sm sm:text-base max-w-2xl mx-auto mb-14 font-light leading-[1.8] tracking-wide opacity-80">
          Osez l'impossible. Rejoignez l'élite des voyageurs temporels et explorez les époques les plus somptueuses de notre histoire avec un confort et une discrétion absolus.
        </p>

        {/* Boutons d'Action (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <a 
            href="#destinations"
            className="bg-luxury-gold hover:bg-luxury-gold-hover text-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl shadow-luxury-gold/5 hover:shadow-luxury-gold/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Découvrir nos Époques
          </a>
          <a 
            href="#quiz"
            className="bg-white/[0.02] hover:bg-white/[0.06] text-white border border-white/10 px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer"
          >
            Trouver mon Époque idéale
          </a>
        </div>
      </div>

      {/* Indicateur de défilement discret en bas de page */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-30 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}