import React, { useState } from "react";
import { DESTINATIONS_CATALOG } from "../data/destinationsData";

interface QuizProps {
  onSelectDestination: (destinationName: string) => void;
}

export default function Quiz({ onSelectDestination }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [profile, setProfile] = useState({ art: 0, aventure: 0, mystere: 0, luxe: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const questions = [
    {
      question: "Quelle atmosphère appelle votre âme aujourd'hui ?",
      answers: [
        { text: "Les salons dorés, les bals mondains et le raffinement", trait: "luxe" },
        { text: "Les musées d'art universels, les ateliers et la philosophie", trait: "art" },
        { text: "La nature brute, sauvage, dangereuse et inexplorée", trait: "aventure" },
        { text: "Les mythes oubliés, les secrets occultes et les enquêtes", trait: "mystere" },
      ],
    },
    {
      question: "Si vous deviez rencontrer une figure historique, ce serait :",
      answers: [
        { text: "Un pharaon bâtisseur ou un empereur Shogun", trait: "luxe" },
        { text: "Léonard de Vinci ou Socrate", trait: "art" },
        { text: "Un prédateur alpha du Crétacé", trait: "aventure" },
        { text: "Un détective légendaire ou une reine de l'Atlantide", trait: "mystere" },
      ],
    },
    {
      question: "Quel est votre rapport à la technologie et aux structures urbaines ?",
      answers: [
        { text: "L'effervescence des premières mégalopoles et de l'industrie", trait: "luxe" },
        { text: "L'harmonie des cités de pierre, des temples et du marbre", trait: "art" },
        { text: "L'absence totale de civilisation, juste l'horizon", trait: "aventure" },
        { text: "Des technologies perdues ou une brume mystique", trait: "mystere" },
      ],
    },
    {
      question: "Choisissez votre activité temporelle idéale :",
      answers: [
        { text: "Assister au lancement de structures architecturales folles", trait: "luxe" },
        { text: "Participer à un banquet philosophique ou peindre", trait: "art" },
        { text: "Faire un safari à hauts risques dans une jungle primitive", trait: "aventure" },
        { text: "Infiltrer un club clandestin ou décoder des artefacts", trait: "mystere" },
      ],
    },
  ];

  const handleAnswer = (trait: string) => {
    const updatedProfile = { ...profile, [trait]: profile[trait as keyof typeof profile] + 1 };
    setProfile(updatedProfile);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Algorithme de tri croisé pour trouver la destination idéale parmi les 9
      let finalDest = "Paris 1889";

      const maxTrait = Object.keys(updatedProfile).reduce((a, b) => 
        updatedProfile[a as keyof typeof profile] > updatedProfile[b as keyof typeof profile] ? a : b
      );

      if (maxTrait === "luxe") {
        const rand = Math.random();
        finalDest = rand < 0.33 ? "Paris 1889" : rand < 0.66 ? "Kyoto 1603" : "New York 1925";
      } else if (maxTrait === "art") {
        finalDest = Math.random() < 0.5 ? "Florence 1504" : "Athènes antique";
      } else if (maxTrait === "aventure") {
        finalDest = Math.random() < 0.5 ? "Crétacé" : "Égypte Antique";
      } else if (maxTrait === "mystere") {
        finalDest = Math.random() < 0.5 ? "Atlantide" : "Londres 1888";
      }

      setRecommendation(finalDest);
      setIsFinished(true);
      onSelectDestination(finalDest); // Transmet l'info à App.tsx
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setProfile({ art: 0, aventure: 0, mystere: 0, luxe: 0 });
    setIsFinished(false);
    setRecommendation("");
  };

  return (
    <section id="quiz" className="px-6 lg:px-16 py-20 max-w-6xl mx-auto border-t border-white/5">
      <div className={`bg-[#111114] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 ${isFinished ? 'p-0 text-left' : 'p-8 lg:p-12 text-center max-w-4xl mx-auto'}`}>
        {!isFinished ? (
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl tracking-widest text-luxury-gold uppercase mb-2">Conciergerie IA</h2>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-10">9 Époques modélisées en temps réel</p>
            <div className="mb-8">
              <span className="text-xs text-luxury-gold tracking-widest uppercase bg-luxury-gold/10 px-3 py-1 rounded-full">Question {currentQuestion + 1} / {questions.length}</span>
              <h3 className="text-xl font-light mt-4 text-white">{questions[currentQuestion].question}</h3>
            </div>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              {questions[currentQuestion].answers.map((answer, idx) => (
                <button key={idx} onClick={() => handleAnswer(answer.trait)} className="w-full py-4 px-6 text-sm bg-black/40 border border-white/10 hover:border-luxury-gold text-gray-300 hover:text-white transition-all duration-300 rounded cursor-pointer uppercase tracking-wider text-left">{answer.text}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 animate-fade-in min-h-[450px]">
            <div className="lg:col-span-5 relative overflow-hidden min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/5">
              <img src={DESTINATIONS_CATALOG[recommendation]?.image} alt={recommendation} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/90 via-transparent to-transparent" />
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#111114] to-[#0d0d10]">
              <p className="text-xs text-luxury-gold uppercase tracking-widest mb-1">{DESTINATIONS_CATALOG[recommendation]?.era}</p>
              <h3 className="text-3xl font-serif text-white tracking-wider mb-6 uppercase">{recommendation}</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-4 font-light leading-relaxed">Le dôme quantique a calculé vos affinités historiques. Tarif estimé : <span className="text-luxury-gold font-medium">{DESTINATIONS_CATALOG[recommendation]?.price}</span>.</p>
              <button onClick={resetQuiz} className="text-xs border border-white/10 hover:border-luxury-gold text-gray-400 hover:text-luxury-gold px-8 py-3.5 uppercase tracking-widest transition-all duration-300 cursor-pointer bg-black/20">Recommencer le test</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}