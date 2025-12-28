import Contact from "@/app/components/Contact"; 
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Portfolio from "@/app/components/Portfolio";
import Pricing from "@/app/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section id="accueil">
        <Hero />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="tarifs">
        <Pricing />
      </section>

      {/* Ajout de la section Contact ici */}
      <section id="contact">
        <Contact />
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Balthazar Buclon.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
