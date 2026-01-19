'use client';

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import { destinations } from '@/data/destinations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, MapPin, Search, Filter } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <Navbar />
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Explore Destinations</h1>
            <p className="text-gray-500 mt-2">Discover the world's most beautiful and exclusive locations.</p>
          </div>
          
          <div className="flex gap-4">
             <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input 
                 type="text" 
                 placeholder="Search destinations..." 
                 className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 w-64"
               />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
               <Filter size={18} /> Filters
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/destinations/${item.id}`} className="group cursor-pointer block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold uppercase">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star className="text-yellow-400 fill-current" size={12} />
                    <span className="text-xs font-bold text-gray-900">{item.rating}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                      <MapPin size={14} />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-400 uppercase">From</p>
                    <p className="text-lg font-bold text-blue-600">{item.price}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
