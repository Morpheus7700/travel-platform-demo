export interface Destination {
  id: string;
  title: string;
  location: string;
  image: string;
  price: string;
  rating: number | string;
  description: string;
  longDescription: string;
  category: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Paradise',
    location: 'Kashmir, India',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2000&auto=format&fit=crop',
    price: '₹25,000',
    rating: 4.9,
    description: 'Experience the magic of Dal Lake and the snow-capped peaks of Gulmarg.',
    longDescription: 'Kashmir, often referred to as "Heaven on Earth," is a stunning destination known for its breathtaking landscapes. From the tranquil waters of Dal Lake to the adventurous slopes of Gulmarg, this tour captures the essence of the valley.',
    category: 'Mountains',
    highlights: ['Shikara Ride on Dal Lake', 'Gondola Ride in Gulmarg', 'Betab Valley Exploration'],
  },
  {
    id: 'andaman-escape',
    title: 'Andaman Bliss',
    location: 'Andaman Islands, India',
    image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2000&auto=format&fit=crop',
    price: '₹35,000',
    rating: 4.8,
    description: 'Pristine white sand beaches and crystal clear turquoise waters.',
    longDescription: 'Explore the tropical paradise of the Andaman Islands. Known for its world-class beaches like Radhanagar and the historic Cellular Jail, this destination offers a perfect mix of history and relaxation.',
    category: 'Beaches',
    highlights: ['Scuba Diving at Havelock', 'Cellular Jail Light & Sound Show', 'Radhanagar Beach Sunset'],
  },
  {
    id: 'ladakh-expedition',
    title: 'Leh Ladakh Expedition',
    location: 'Ladakh, India',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=2000&auto=format&fit=crop',
    price: '₹40,000',
    rating: 5.0,
    description: 'The ultimate road trip to the land of high passes and ancient monasteries.',
    longDescription: 'Ladakh is a region in the Indian state of Jammu and Kashmir that currently extends from the Kunlun mountain range to the main Great Himalayas to the south. It is one of the most sparsely populated regions in India.',
    category: 'Mountains',
    highlights: ['Pangong Lake Camping', 'Khardung La Pass Crossing', 'Magnetic Hill Phenomenon'],
  },
  {
    id: 'spiti-valley',
    title: 'Spiti Valley Tour',
    location: 'Himachal Pradesh, India',
    image: 'https://images.unsplash.com/photo-1586724230410-09257da48ba2?q=80&w=2000&auto=format&fit=crop',
    price: '₹28,000',
    rating: 4.7,
    description: 'Explore the cold desert mountain valley in the Himalayas.',
    longDescription: 'Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the northern Indian state of Himachal Pradesh. The name "Spiti" means "The Middle Land", i.e. the land between Tibet and India.',
    category: 'Trekking',
    highlights: ['Key Monastery Visit', 'Chandratal Lake Trek', 'Hikkim Highest Post Office'],
  },
  {
    id: 'dubai-luxury',
    title: 'Dubai Glamour',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop',
    price: '₹65,000',
    rating: 4.9,
    description: 'Experience luxury, modern architecture, and a lively nightlife scene.',
    longDescription: 'Dubai is a city and emirate in the United Arab Emirates luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline.',
    category: 'Wildlife',
    highlights: ['Burj Khalifa Observation Deck', 'Desert Safari with Dinner', 'Dubai Mall Shopping'],
  },
  {
    id: 'bali-spiritual',
    title: 'Bali Getaway',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    price: '₹55,000',
    rating: 4.8,
    description: 'Beaches, coral reefs, and volcanic mountains in the heart of Indonesia.',
    longDescription: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.',
    category: 'Beaches',
    highlights: ['Uluwatu Temple Visit', 'Ubud Monkey Forest', 'Seminyak Beach Clubbing'],
  }
];
