import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Quiz from "./components/Quiz";
import Chatbot, { ChatMessage } from "./components/Chatbot";
import Footer from "./components/Footer";
import { DESTINATIONS_CATALOG } from "./data/destinationsData"; // 🌟 Importation de notre catalogue étendu

export default function App() {
  // États pour le contrôle de la Conciergerie / Chatbot
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { 
      sender: "bot", 
      text: "Salutations voyageur. Je suis Chronos, l'assistant IA de TimeTravel Agency. Quelle époque mythique rêvez-vous d'explorer parmi nos 9 couloirs quantiques ?" 
    }
  ]);

  // Gestion de l'action déclenchée par le Quiz et la galerie des Destinations
  const handleSelectDestination = (destinationName: string) => {
    setIsChatOpen(true);
    const selected = DESTINATIONS_CATALOG[destinationName];
    
    setChatMessages(prev => [
      ...prev,
      { sender: "user", text: `Je souhaite configurer mon saut pour : ${destinationName}` },
      { 
        sender: "bot", 
        text: `Excellent choix. ${selected ? selected.botDescription : ""} Le coût énergétique requis est fixé à ${selected ? selected.price : "sur demande"}. Souhaitez-vous planifier vos dates d'excursion spatio-temporelle ?` 
      }
    ]);
  };

  // Traitement des messages envoyés manuellement par l'utilisateur dans le Chatbot
  const handleUserMessage = (text: string) => {
    const newMessages: ChatMessage[] = [...chatMessages, { sender: "user", text }];
    setChatMessages(newMessages);

    // Simulation de la réponse de l'IA (Chronos) à l'aide du catalogue
    setTimeout(() => {
      let response = "Je traite votre requête temporelle. Mes capteurs n'ont pas détecté de faille pour cette demande exacte. Essayez une époque phare comme l'Égypte Antique, Kyoto 1603, l'Atlantide ou Paris 1889 !";
      const cleanText = text.toLowerCase();
      
      // 🌟 Détection automatique de n'importe quel mot-clé parmi les 9 destinations
      Object.keys(DESTINATIONS_CATALOG).forEach((key) => {
        const dest = DESTINATIONS_CATALOG[key];
        if (cleanText.includes(dest.id) || cleanText.includes(key.toLowerCase())) {
          response = `${dest.botDescription} Le prix de la distorsion pour ce saut est de ${dest.price}. Nos dômes de confinement garantissent un voyage sans paradoxe temporel.`;
        }
      });

      // Gestion globale des questions sur les tarifs
      if (cleanText.includes("prix") || cleanText.includes("tarif") || cleanText.includes("combien")) {
        response = "Nos tarifs standards s'échelonnent de 14 000 $TC (New York 1925) à 40 000 $TC (L'Atlantide). Indiquez-moi une destination précise pour obtenir ses coordonnées de facturation.";
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
      
      {/* Pied de page autonome */}
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