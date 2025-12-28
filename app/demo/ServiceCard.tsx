// components/demo/ServiceCard.tsx
import { Check } from 'lucide-react'; // Assure-toi d'avoir lucide-react installé

export default function ServiceCard() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-slate-900">Intervention Urgence</h3>
      <div className="mt-4 flex items-baseline text-slate-900">
        <span className="text-4xl font-extrabold tracking-tight">80€</span>
        <span className="ml-1 text-xl font-semibold text-slate-500">/heure</span>
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Déplacement inclus dans la métropole lilloise. Intervention sous 2h.
      </p>
      <ul className="mt-6 space-y-4">
        {['Fuite d\'eau', 'Débouchage', 'Diagnostic complet'].map((feature) => (
          <li key={feature} className="flex">
            <Check className="flex-shrink-0 h-5 w-5 text-blue-600" />
            <span className="ml-3 text-sm text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 block w-full bg-blue-600 py-3 px-6 border border-transparent rounded-md text-center font-medium text-white hover:bg-blue-700 transition-colors">
        Appeler maintenant
      </button>
    </div>
  );
}