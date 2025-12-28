// app/portfolio/page.tsx
import { projects } from '@/app/data/portfolio-examples'; // Vérifie que le dossier 'data' est à la racine du projet
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">
      {projects.map((project) => (
        <article key={project.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
          
          {/* Zone Image CORRIGÉE */}
          <div className="relative h-48 w-full bg-slate-100">
            <Image 
              src={project.imagePath} 
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                {project.category}
              </span>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>
            
            {/* Lien d'action */}
            <Link 
                href={project.demoLink} 
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              Voir la démo live <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}