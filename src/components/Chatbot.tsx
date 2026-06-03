import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
}

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
}

export default function Chatbot({ isOpen, setIsOpen, messages, onSendMessage }: ChatbotProps) {
  const [input, setInput] = useState<string>("");
  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll vers le bas dès qu'un message arrive
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input.trim());
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. Bulle flottante d'ouverture (si fermé) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-luxury-gold hover:bg-yellow-600 text-black p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* 2. Fenêtre de discussion principale (si ouvert) */}
      {isOpen && (
        <div className="bg-[#111114] border border-luxury-gold/30 rounded-lg shadow-2xl w-[90vw] sm:w-[380px] h-[520px] flex flex-col justify-between overflow-hidden animate-fade-in">
          
          {/* Header de Chronos */}
          <div className="bg-black p-4 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white">Chronos</h4>
                <span className="text-[10px] text-gray-500 font-light">Concierge Temporel IA</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Zone des messages */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4 text-xs bg-black/20 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 text-[13px] font-light leading-relaxed rounded ${
                    msg.sender === 'user' 
                      ? 'bg-luxury-gold text-black font-semibold rounded-br-none' 
                      : 'bg-[#18181c] text-gray-200 border border-white/5 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Formulaire d'envoi inférieur */}
          <form onSubmit={handleSubmit} className="p-3 bg-black border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez vos questions sur la timeline..."
              className="flex-1 bg-[#111114] border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <button 
              type="submit" 
              className="bg-luxury-gold hover:bg-yellow-600 text-black px-4 py-2 transition-colors flex items-center justify-center cursor-pointer rounded-sm"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}