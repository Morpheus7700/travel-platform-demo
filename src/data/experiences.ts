import { LucideIcon, Camera, Waves, Wind, Mountain } from 'lucide-react';

export interface Experience {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  longDescription: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 'underwater-photography',
    title: "Underwater Photography",
    category: "Adventure",
    price: "$250",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop",
    longDescription: "Capture the hidden wonders of the deep. Our professional underwater photography course takes you through the basics of marine lighting, composition, and equipment handling in crystal clear tropical waters.",
    highlights: ["Professional Gear Provided", "PADI Certified Instructors", "Digital Portfolio Included"]
  },
  {
    id: 'private-yacht',
    title: "Luxury Private Yacht",
    category: "Leisure",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1567891299233-bc37ad04930f?q=80&w=1000&auto=format&fit=crop",
    longDescription: "Sail into the horizon on a 60ft luxury yacht. Perfect for sunset dinners or exploring hidden coves, this private charter includes a full crew, premium catering, and onboard wellness facilities.",
    highlights: ["Gourmet Onboard Chef", "Custom Navigation Routes", "Water Sports Equipment"]
  },
  {
    id: 'hot-air-balloon',
    title: "Hot Air Balloon",
    category: "Romance",
    price: "$450",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    longDescription: "Experience the world from a new perspective. Drift silently over ancient landscapes as the sun rises, followed by a traditional champagne breakfast in the heart of the wilderness.",
    highlights: ["Sunrise Launch", "Champagne Breakfast", "Aerial Photography Session"]
  },
  {
    id: 'summit-trekking',
    title: "Summit Trekking",
    category: "Extreme",
    price: "$600",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    longDescription: "Test your limits on the world's most challenging peaks. This expert-led expedition provides technical training, high-altitude logistics, and the thrill of reaching the world's highest points safely.",
    highlights: ["Expert Alpine Guides", "All Technical Gear", "Summit Certification"]
  },
];
