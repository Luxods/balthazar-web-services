import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 border border-blue-100">
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
        Disponible pour nouveaux projets
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Je transforme votre commerce <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          en machine à vendre.
        </span>
      </h1>

      <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
        Je m&apos;appelle <strong>Balthazar Buclon</strong>. Je conçois des
        sites web ultra-rapides et sur-mesure pour aider les artisans et
        commerçants à dépasser la concurrence.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#tarifs"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          Voir mes offres
          <ArrowRight size={20} />
        </a>
        <a
          href="#portfolio"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-slate-300 transition-all"
        >
          <Code2 size={20} className="text-slate-500" />
          Voir mes travaux
        </a>
      </div>
    </div>
  );
}
