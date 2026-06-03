import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Quiz from "./components/Quiz";
import Chatbot, { ChatMessage } from "./components/Chatbot";
import Footer from "./components/Footer";

export default function App() {
  // États pour le contrôle de la Conciergerie / Chatbot
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { 
      sender: "bot", 
      text: "Salutations voyageur. Je suis Chronos, l'assistant IA de TimeTravel Agency. Quelle époque mythique rêvez-vous d'explorer ?" 
    }
  ]);

  // Gestion de l'action déclenchée par le Quiz et les Destinations
  const handleSelectDestination = (destinationName: string) => {
    setIsChatOpen(true);
    setChatMessages(prev => [
      ...prev,
      { sender: "user", text: `Je souhaite configurer mon saut pour : ${destinationName}` },
      { 
        sender: "bot", 
        text: `Excellent choix. Le protocole pour rejoindre "${destinationName}" nécessite une validation de vos constantes biologiques. Souhaitez-vous planifier vos dates d'excursion ?` 
      }
    ]);
  };

  // Traitement des messages envoyés par l'utilisateur dans le Chatbot
  const handleUserMessage = (text: string) => {
    const newMessages: ChatMessage[] = [...chatMessages, { sender: "user", text }];
    setChatMessages(newMessages);

    // Simulation de la réponse de l'IA de bord (Chronos)
    setTimeout(() => {
      let response = "Je traite votre requête temporelle. Nos dômes de confinement quantique garantissent un voyage sans altération de la timeline.";
      const cleanText = text.toLowerCase();
      
      if (cleanText.includes("paris") || cleanText.includes("1889")) {
        response = "Paris 1889 (La Belle Époque) est actuellement disponible à partir de 15 000 TempCoins. L'immersion inclut l'accès VIP à l'Exposition Universelle.";
      } else if (cleanText.includes("cretace") || cleanText.includes("dinosaure")) {
        response = "Le Crétacé (-65M) exige une combinaison environnementale de classe 4. Les excursions d'observation des prédateurs géants sont fixées à 25 000 TempCoins.";
      } else if (cleanText.includes("florence") || cleanText.includes("1504") || cleanText.includes("renaissance")) {
        response = "Florence 1504 est accessible pour 18 000 TempCoins. Vous profiterez d'une accréditation exclusive pour visiter l'atelier secret de Michel-Ange.";
      } else if (cleanText.includes("prix") || cleanText.includes("tarif") || cleanText.includes("combien")) {
        response = "Nos tarifs standards de transfert : Paris 1889 (15 000 $TC), Florence 1504 (18 000 $TC), Crétacé -65M (25 000 $TC).";
      }
      
      setChatMessages(prev => [...prev, { sender: "bot", text: response }]);
    }, 700);
  };

  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white antialiased selection:bg-luxury-gold selection:text-black">
      {/* Barre de navigation supérieure */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      
      {/* Sections principales de la Landing Page */}
      <Hero />
      <About />
      
      {/* Catalogue : transmet la fonction de sélection à l'interface */}
      <Destinations onSelectDestination={handleSelectDestination} />
      
      {/* Module Quiz Concierge IA */}
      <Quiz onSelectDestination={handleSelectDestination} />
      
      {/* Pied de page */}
      <Footer />

      {/* Widget Flottant de l'IA (Chatbot) */}
      <Chatbot 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
        messages={chatMessages} 
        onSendMessage={handleUserMessage} 
      />
    </div>
  );
}