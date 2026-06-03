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
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-luxury-gold hover:bg-luxury-gold-hover text-black p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-luxury-card border border-luxury-gold/20 shadow-2xl w-[90vw] sm:w-[360px] h-[480px] flex flex-col justify-between animate-fade-in">
          <div className="bg-black p-4 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white">Chronos</h4>
                <span className="text-[9px] text-gray-500 font-light">Concierge Temporel IA</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1 space-y-4 text-xs">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 font-light leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-luxury-gold text-black font-medium' 
                    : 'bg-black text-gray-300 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-black border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez vos questions sur la timeline..."
              className="flex-1 bg-luxury-bg border border-white/10 px-4 py-2.5 text-xs focus:outline-none focus:border-luxury-gold text-white"
            />
            <button type="submit" className="bg-luxury-gold hover:bg-luxury-gold-hover text-black px-4 py-2 transition-colors flex items-center justify-center cursor-pointer">
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}