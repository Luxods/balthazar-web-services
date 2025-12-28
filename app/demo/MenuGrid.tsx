// components/demo/MenuGrid.tsx
import Image from 'next/image';

const menuItems = [
  { name: 'Croissant au Beurre', price: '1.20€', img: '/demo/croissant.jpg' },
  { name: 'Pain au Chocolat', price: '1.30€', img: '/demo/pain-choc.jpg' },
  // ... autres items
];

export default function MenuGrid() {
  return (
    <section className="py-12 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Nos Classiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <span className="font-medium text-slate-800">{item.name}</span>
                <span className="text-amber-600 font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}