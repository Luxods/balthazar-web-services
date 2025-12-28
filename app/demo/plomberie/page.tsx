import Image from 'next/image';
import Link from 'next/link';
import { Phone, ShieldCheck, Clock } from 'lucide-react'; // Assure-toi d'avoir installé lucide-react

export default function PlomberiePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar Urgence */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold">
        URGENCE 24/7 : 06 12 34 56 78
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-900">PLOMBERIE<span className="text-blue-500">EXPRESS</span></div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600">Retour Portfolio</Link>
        </div>
      </header>

      {/* Hero Section Split */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
            Problème de plomberie ? <br/>
            <span className="text-blue-600">Intervention en 1h.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Ne laissez pas une fuite gâcher votre journée. Nos artisans certifiés interviennent sur Lille et sa métropole avec une transparence totale sur les prix.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              <Phone size={20} /> Appeler maintenant
            </button>
            <button className="px-6 py-3 rounded-lg border border-slate-300 font-medium hover:bg-slate-100 transition">
              Demander un devis
            </button>
          </div>
        </div>
        
        {/* Carte "Service" intégrée ici */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
           <h3 className="text-lg font-bold mb-4 uppercase text-slate-400 tracking-wider">Pourquoi nous choisir ?</h3>
           <ul className="space-y-4">
             <li className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full text-green-600"><ShieldCheck size={24}/></div>
               <div>
                 <div className="font-bold">Garantie Décennale</div>
                 <div className="text-sm text-slate-500">Tous nos travaux sont assurés</div>
               </div>
             </li>
             <li className="flex items-center gap-3">
               <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Clock size={24}/></div>
               <div>
                 <div className="font-bold">Rapidité</div>
                 <div className="text-sm text-slate-500">Chez vous en moins de 60 min</div>
               </div>
             </li>
           </ul>
        </div>
      </section>

      {/* Section Confiance avec image */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image 
                    src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80"
                    alt="Plombier au travail"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Agréé Assurances</h2>
                <p className="text-slate-600">
                    Nous travaillons directement avec les principaux assureurs pour faciliter vos démarches de remboursement en cas de dégât des eaux. Pas de mauvaise surprise sur la facture.
                </p>
            </div>
        </div>
      </section>
    </main>
  );
}