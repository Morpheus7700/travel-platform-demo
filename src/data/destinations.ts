export interface Destination {
  id: string;
  title: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  longDescription: string;
  category: 'Mountain' | 'Beach' | 'City' | 'Desert';
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'santorini',
    title: 'Santorini Sunset',
    location: 'Oia, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop',
    price: '$1,200',
    rating: 4.9,
    description: 'Experience the world-famous blue domes and breathtaking sunsets of the Aegean Sea.',
    longDescription: 'Santorini is the supermodel of the Greek islands, a head-turner whose face is instantly recognizable around the world. The island’s stunning beauty is the result of a massive volcanic eruption around 1600 BC, which created the dramatic caldera that now defines its landscape. Oia, perched at the northern tip, offers the most iconic views of whitewashed houses spilling down the cliffs.',
    category: 'Beach',
    highlights: ['Private Sunset Cruise', 'Wine Tasting in Volcanic Vineyards', 'Luxury Caldera Suites'],
  },
  {
    id: 'amalfi',
    title: 'Amalfi Coast',
    location: 'Positano, Italy',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2000&auto=format&fit=crop',
    price: '$1,800',
    rating: 4.8,
    description: 'A vertical landscape of pastel houses nestled against the Mediterranean cliffs.',
    longDescription: 'The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula. It is a popular holiday destination, with sheer cliffs and a rugged shoreline dotted with small beaches and pastel-colored fishing villages. Positano is the most picturesque town, where steep streets and stairways are lined with boutiques and cafes.',
    category: 'Beach',
    highlights: ['Path of the Gods Hike', 'Boat Trip to Capri', 'Authentic Limoncello Tours'],
  },
  {
    id: 'swiss-alps',
    title: 'Swiss Alps Escape',
    location: 'Zermatt, Switzerland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop',
    price: '$2,400',
    rating: 5.0,
    description: 'Breathtaking views of the Matterhorn and world-class luxury skiing resorts.',
    longDescription: 'Zermatt, in southern Switzerland’s Valais canton, is one of the world’s premier mountain resorts, renowned for skiing, climbing, and hiking. The town lies at an elevation of 1,600m, below the iconic, pyramid-shaped Matterhorn peak. Its main street, Bahnhofstrasse, is lined with luxury boutiques, hotels, and restaurants.',
    category: 'Mountain',
    highlights: ['Gornergrat Railway Journey', 'Glacier Paradise Access', 'Luxury Chalet Stays'],
  },
  {
    id: 'kyoto',
    title: 'Kyoto Zen',
    location: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    price: '$1,500',
    rating: 4.9,
    description: 'Ancient temples, traditional tea houses, and the serene beauty of cherry blossoms.',
    longDescription: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It’s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes.',
    category: 'City',
    highlights: ['Arashiyama Bamboo Grove', 'Fushimi Inari Shrine', 'Traditional Tea Ceremony'],
  },
  {
    id: 'sahara',
    title: 'Sahara Nights',
    location: 'Merzouga, Morocco',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2000&auto=format&fit=crop',
    price: '$900',
    rating: 4.7,
    description: 'Glamping under the stars amidst the golden dunes of the world\'s largest desert.',
    longDescription: 'The Sahara is the world’s largest hot desert, covering much of North Africa. In Morocco, the Erg Chebbi dunes near Merzouga provide a spectacular gateway to this vast sea of sand. Experience the silence of the desert, the hospitality of the Berber people, and the incredible clarity of the night sky.',
    category: 'Desert',
    highlights: ['Camel Trekking at Sunset', 'Berber Music around a Campfire', 'Luxury Desert Glamping'],
  },
  {
    id: 'bali',
    title: 'Bali Sanctuary',
    location: 'Ubud, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    price: '$850',
    rating: 4.8,
    description: 'Tropical jungles, sacred temples, and soul-healing wellness retreats.',
    longDescription: 'Ubud is considered the cultural heart of Bali. Located in the uplands, it is among rice paddies and steep ravines in the central foothills of the Gianyar regency. It is home to several royal palaces and many Hindu temples, providing a spiritual and serene environment for travelers seeking rejuvenation.',
    category: 'Beach',
    highlights: ['Tegalalang Rice Terrace', 'Monkey Forest Sanctuary', 'Yoga and Wellness Retreats'],
  }
];