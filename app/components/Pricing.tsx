import { Monitor, Store, Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Investissez dans votre image</h2>
          <p className="text-slate-500">Des tarifs clairs, sans surprise.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Offre Vitrine */}
          <div className="p-8 border border-slate-200 rounded-2xl hover:shadow-xl transition-shadow bg-slate-50/50">
            <Monitor className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Site Vitrine</h3>
            <p className="text-3xl font-bold mb-6">800€ <span className="text-sm font-normal text-slate-500">/projet</span></p>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex gap-2"><Check size={18} className="text-green-500"/> Design Unique (pas de template)</li>
              <li className="flex gap-2"><Check size={18} className="text-green-500"/> Optimisé SEO & Rapide</li>
              <li className="flex gap-2"><Check size={18} className="text-green-500"/> Page contact & Google Maps</li>
            </ul>
          </div>

          {/* Offre E-commerce / Complexe */}
          <div className="p-8 border border-blue-100 bg-blue-50/30 rounded-2xl relative">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</div>
            <Store className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Site Complet / E-shop</h3>
            <p className="text-3xl font-bold mb-6">Sur Devis</p>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex gap-2"><Check size={18} className="text-indigo-500"/> Paiement en ligne</li>
              <li className="flex gap-2"><Check size={18} className="text-indigo-500"/> Système de réservation</li>
              <li className="flex gap-2"><Check size={18} className="text-indigo-500"/> Formation incluse</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}