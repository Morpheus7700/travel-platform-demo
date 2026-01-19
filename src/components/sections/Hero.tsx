'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            Discover the extraordinary
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Explore the World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Beyond Boundaries
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Personalized itineraries, hidden gems, and unforgettable experiences curated just for you. Your journey starts here.
          </p>
        </motion.div>

        {/* Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl p-2 rounded-3xl border border-white/20 shadow-2xl"
        >
          <div className="bg-white rounded-2xl p-2 md:p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <MapPin className="text-blue-500" size={20} />
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Location</p>
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="text-sm font-semibold text-gray-900 focus:outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <Calendar className="text-blue-500" size={20} />
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Check-in</p>
                <p className="text-sm font-semibold text-gray-900">Add Dates</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2">
              <Users className="text-blue-500" size={20} />
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Guests</p>
                <p className="text-sm font-semibold text-gray-900">Add Guests</p>
              </div>
            </div>

            <Link href="/destinations" className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              <Search size={20} />
              Search
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
