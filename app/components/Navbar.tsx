import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight">Balthazar.dev</span>
        <div className="space-x-8 text-sm font-medium text-slate-600 hidden md:block">
          <Link href="#portfolio" className="hover:text-blue-600 transition">Réalisations</Link>
          <Link href="#tarifs" className="hover:text-blue-600 transition">Offres</Link>
          <Link href="#contact" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition">
            Me contacter
          </Link>
        </div>
      </div>
    </nav>
  );
}