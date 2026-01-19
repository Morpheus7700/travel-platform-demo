'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '@/data/destinations';

export default function FeaturedDestinations() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Top Picks</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Explore Popular Destinations</h2>
          </div>
          <Link href="/destinations" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all underline underline-offset-8">
            View All Destinations <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                     <p className="text-sm line-clamp-2 text-gray-200">{item.description}</p>
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
    </section>
  );
}
