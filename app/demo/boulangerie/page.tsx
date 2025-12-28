import Image from 'next/image';
import Link from 'next/link';

// Données simulées pour la démo
const products = [
  { name: 'Tradition Graines', price: '1.40€', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { name: 'Croissant Beurre', price: '1.20€', img: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=600&q=80' },
  { name: 'Tarte aux Fraises', price: '3.50€', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80' },
];

export default function BoulangeriePage() {
  return (
    <main className="min-h-screen bg-[#FFFBF0] font-serif text-stone-800">
      {/* Navbar simplifiée */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">Le Pain Doré</div>
        <Link href="/" className="text-sm uppercase tracking-widest hover:underline">Retour Portfolio</Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600&q=80"
          alt="Boulangerie ambiance"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Artisan Boulanger</h1>
          <p className="text-xl md:text-2xl italic">Depuis 1998 au cœur de Lille</p>
          <button className="mt-8 px-8 py-3 bg-amber-600 hover:bg-amber-700 transition text-white rounded-full font-sans font-bold">
            Commander en ligne
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos produits phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-end border-b border-stone-300 pb-2">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <span className="text-amber-700 font-bold text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer Info */}
      <footer className="bg-stone-900 text-stone-300 py-12 text-center font-sans">
        <p>Ouvert tous les jours de 6h30 à 20h00</p>
        <p className="mt-2 text-sm text-stone-500">Exemple de site réalisé par [Ton Prénom]</p>
      </footer>
    </main>
  );
}