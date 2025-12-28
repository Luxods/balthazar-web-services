"use client"; // Important car on utilise useState

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Simulation d'envoi de formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simule un délai réseau de 1.5 secondes
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSent(true);
  };

  return (
    <div className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* COLONNE GAUCHE : Infos & Conviction */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Vous avez un projet en tête ou vous voulez simplement moderniser votre image sur le web ? 
              Je réponds généralement sous 24h.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a href="mailto:contact@balthazar.dev" className="text-slate-500 hover:text-blue-600 transition">
                    contact@balthazar.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Téléphone</h3>
                  <p className="text-slate-500">06 00 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Localisation</h3>
                  <p className="text-slate-500">France (Disponible en télétravail)</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Le Formulaire */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                <p className="text-slate-500">Merci de m&apos;avoir contacté. Je reviens vers vous très vite.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-blue-600 font-medium hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email professionnel</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="jean@entreprise.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Votre message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white resize-none"
                    placeholder="Parlez-moi de votre projet..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande <Send size={18} />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  Vos données restent confidentielles et ne seront jamais partagées.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}