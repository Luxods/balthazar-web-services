export default function Portfolio() {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Mes dernières réalisations</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Projet 1 (Concept) */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
            <div className="h-64 bg-slate-200 flex items-center justify-center group-hover:bg-slate-300 transition-colors">
              <span className="text-slate-400 font-medium">
                Image du projet &quot;Boulangerie Moderne&quot;
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-1">Boulangerie Artisanale</h3>
              <p className="text-slate-500 text-sm">
                Refonte complète de l&apos;identité visuelle et click & collect.
              </p>
            </div>
          </div>

          {/* Projet 2 (Concept) */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
            <div className="h-64 bg-slate-200 flex items-center justify-center group-hover:bg-slate-300 transition-colors">
              <span className="text-slate-400 font-medium">
                Image du projet &quot;Coiffeur Local&quot;
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-1">Salon de Coiffure</h3>
              <p className="text-slate-500 text-sm">
                Site vitrine avec module de prise de RDV.
              </p>
            </div>
          </div>
        </div>

        {/* Note honnête */}
        <p className="text-center text-slate-400 text-sm mt-8 italic">
          * Certains projets ci-dessus sont des concepts démontrant mes
          capacités techniques.
        </p>
      </div>
    </div>
  );
}
