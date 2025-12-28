// data/portfolio-examples.ts

export interface WebProject {
  id: string;
  title: string;
  category: 'Restauration' | 'Service';
  description: string;
  features: string[];
  imagePath: string; // On utilise une URL directe ici
  demoLink: string;
}

export const projects: WebProject[] = [
  {
    id: 'boulangerie-pain-dore',
    title: 'Le Pain Doré',
    category: 'Restauration',
    description: 'Site vitrine chaleureux avec présentation des produits.',
    features: ['Design Responsive', 'Photos HD', 'Appel à l\'action'],
    // Image de boulangerie pour la miniature
    imagePath: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=800&q=80',
    demoLink: '/demo/boulangerie',
  },
  {
    id: 'plomberie-rapide',
    title: 'Plomberie Express',
    category: 'Service',
    description: 'Landing page corporate axée sur la prise de contact urgente.',
    features: ['Bouton d\'appel', 'Confiance', 'Services clairs'],
    // Image de plomberie pour la miniature
    imagePath: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    demoLink: '/demo/plomberie',
  },
];