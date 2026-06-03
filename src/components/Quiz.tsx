import React, { useState } from "react";

interface QuizProps {
  onSelectDestination: (destinationName: string) => void;
}

// Dictionnaire des images correspondant aux résultats du quiz
const QUIZ_DESTINATION_IMAGES: Record<string, string> = {
  "Paris 1889": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80", // Remplace par ton lien d'image Paris
  "Florence 1504": "https://images.unsplash.com/photo-1543428802-66f5b21e3b4d?auto=format&fit=crop&w=1200&q=80", // Remplace par ton lien de Florence
  "Crétacé": "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=1200&q=80" // Remplace par ton lien du Crétacé
};

export default function Quiz({ onSelectDestination }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ paris: 0, florence: 0, cretace: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const questions = [
    {
      question: "Quel type d'expérience recherchez-vous ?",
      answers: [
        { text: "Élégance et raffinement", zone: "paris" },
        { text: "Culturelle et artistique", zone: "florence" },
        { text: "Aventure et nature", zone: "cretace" },
      ],
    },
    {
      question: "Votre période préférée ?",
      answers: [
        { text: "Histoire moderne (XIXe-XXe siècle)", zone: "paris" },
        { text: "Renaissance et classicisme", zone: "florence" },
        { text: "Temps anciens et origines", zone: "cretace" },
      ],
    },
    {
      question: "Vous préférez :",
      answers: [
        { text: "L'effervescence urbaine", zone: "paris" },
        { text: "L'art et l'architecture", zone: "florence" },
        { text: "La nature sauvage", zone: "cretace" },
      ],
    },
    {
      question: "Votre activité idéale :",
      answers: [
        { text: "Visiter des monuments", zone: "paris" },
        { text: "Explorer des musées", zone: "florence" },
        { text: "Observer la faune", zone: "cretace" },
      ],
    },
  ];

  const handleAnswer = (zone: string) => {
    const updatedScores = { ...scores, [zone]: scores[zone as keyof typeof scores] + 1 };
    setScores(updatedScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let finalDestination = "Paris 1889";
      if (updatedScores.florence > updatedScores.paris && updatedScores.florence > updatedScores.cretace) {
        finalDestination = "Florence 1504";
      } else if (updatedScores.cretace > updatedScores.paris && updatedScores.cretace > updatedScores.florence) {
        finalDestination = "Crétacé";
      }

      setRecommendation(finalDestination);
      setIsFinished(true);
      onSelectDestination(finalDestination);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ paris: 0, florence: 0, cretace: 0 });
    setIsFinished(false);
    setRecommendation("");
  };

  return (
    <section id="quiz" className="px-6 lg:px-16 py-20 max-w-6xl mx-auto border-t border-white/5">
      {/* Le conteneur s'adapte dynamiquement si le quiz est fini */}
      <div className={`bg-[#111114] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 ${isFinished ? 'p-0 text-left' : 'p-8 lg:p-12 text-center max-w-4xl mx-auto'}`}>
        
        {!isFinished ? (
          /* En cours : Vue classique des questions au centre */
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl tracking-widest text-luxury-gold uppercase mb-2">
              Conciergerie IA
            </h2>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-10">
              Trouvez votre faille temporelle idéale
            </p>
            <div className="mb-8">
              <span className="text-xs text-luxury-gold tracking-widest uppercase bg-luxury-gold/10 px-3 py-1 rounded-full">
                Question {currentQuestion + 1} / {questions.length}
              </span>
              <h3 className="text-xl font-light mt-4 text-white">
                {questions[currentQuestion].question}
              </h3>
            </div>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              {questions[currentQuestion].answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(answer.zone)}
                  className="w-full py-4 px-6 text-sm bg-black/40 border border-white/10 hover:border-luxury-gold text-gray-300 hover:text-white transition-all duration-300 rounded cursor-pointer uppercase tracking-wider text-left"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Terminé : Changement de disposition en double colonne (Image à gauche, Carte à droite) */
          <div className="grid grid-cols-1 lg:grid-cols-12 animate-fade-in min-h-[450px]">
            
            {/* Colonne gauche (5/12 de la largeur) : L'image de l'époque choisie */}
            <div className="lg:col-span-5 relative overflow-hidden group min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/5">
              <img 
                src={QUIZ_DESTINATION_IMAGES[recommendation]} 
                alt={recommendation}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent lg:to-black/30" />
            </div>

            {/* Colonne droite (7/12 de la largeur) : La carte des réponses poussée à droite */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#111114] to-[#0d0d10]">
              <h2 className="font-serif text-2xl tracking-widest text-luxury-gold uppercase mb-1">
                Conciergerie IA
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">
                Résultat de l'analyse quantique
              </p>
              
              <h3 className="text-3xl font-serif text-white tracking-wider mb-6 uppercase">
                {recommendation}
              </h3>
              
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
                Vos coordonnées psychologiques ont synchronisé les vecteurs de notre dôme vers cette destination. L'IA de bord Chronos est désormais configurée pour planifier votre saut.
              </p>
              
              <button
                onClick={resetQuiz}
                className="text-xs border border-white/10 hover:border-luxury-gold text-gray-400 hover:text-luxury-gold px-8 py-3.5 uppercase tracking-widest transition-all duration-300 cursor-pointer bg-black/20 hover:bg-luxury-gold/5"
              >
                Recommencer le test
              </button>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}