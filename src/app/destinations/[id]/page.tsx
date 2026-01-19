'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/sections/Navbar';
import { destinations } from '@/data/destinations';
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle, ArrowLeft } from 'lucide-react';

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <Link href="/destinations" className="absolute top-32 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Destinations
        </Link>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{destination.title}</h1>
            <div className="flex items-center justify-center gap-2 text-white/90 text-xl font-medium">
              <MapPin size={24} />
              {destination.location}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About this journey</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {destination.longDescription}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="font-semibold text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
             <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Pricing</span>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="font-bold">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{destination.price}</p>
                <p className="text-sm text-gray-500 font-medium">Inclusive of all taxes and luxury concierge service.</p>
             </div>

             <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white">
                <h4 className="text-xl font-bold mb-4">Travel Note</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every NomadLux journey is customizable. Use the navigation above to return home and explore other unique destinations.
                </p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
