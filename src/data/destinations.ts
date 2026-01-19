export interface Destination {
  id: string;
  title: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  category: 'Mountain' | 'Beach' | 'City' | 'Desert';
}

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Santorini Sunset',
    location: 'Oia, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop',
    price: '$1,200',
    rating: 4.9,
    description: 'Experience the world-famous blue domes and breathtaking sunsets of the Aegean Sea.',
    category: 'Beach',
  },
  {
    id: '2',
    title: 'Amalfi Coast',
    location: 'Positano, Italy',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2000&auto=format&fit=crop',
    price: '$1,800',
    rating: 4.8,
    description: 'A vertical landscape of pastel houses nestled against the Mediterranean cliffs.',
    category: 'Beach',
  },
  {
    id: '3',
    title: 'Swiss Alps Escape',
    location: 'Zermatt, Switzerland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop',
    price: '$2,400',
    rating: 5.0,
    description: 'Breathtaking views of the Matterhorn and world-class luxury skiing resorts.',
    category: 'Mountain',
  },
  {
    id: '4',
    title: 'Kyoto Zen',
    location: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    price: '$1,500',
    rating: 4.9,
    description: 'Ancient temples, traditional tea houses, and the serene beauty of cherry blossoms.',
    category: 'City',
  },
  {
    id: '5',
    title: 'Sahara Nights',
    location: 'Merzouga, Morocco',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2000&auto=format&fit=crop',
    price: '$900',
    rating: 4.7,
    description: 'Glamping under the stars amidst the golden dunes of the world\'s largest desert.',
    category: 'Desert',
  },
  {
    id: '6',
    title: 'Bali Sanctuary',
    location: 'Ubud, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    price: '$850',
    rating: 4.8,
    description: 'Tropical jungles, sacred temples, and soul-healing wellness retreats.',
    category: 'Beach',
  }
];
