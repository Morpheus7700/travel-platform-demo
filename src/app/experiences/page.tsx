'use client';

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import { motion } from 'framer-motion';
import { Camera, Waves, Wind, Mountain, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { experiences } from '@/data/experiences';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <Navbar />
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Curated Experiences</h1>
          <p className="text-gray-500 mt-2">Go beyond the ordinary with our hand-picked activities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/experiences/${exp.id}`} className="relative group rounded-[2.5rem] overflow-hidden aspect-video cursor-pointer block">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20">
                      {/* Note: Icon mapping could be added to data if needed, using standard mapping for now */}
                      <Camera size={24} />
                    </div>
                    <span className="px-4 py-1.5 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">{exp.category}</span>
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold mb-2">{exp.title}</h3>
                     <div className="flex items-center justify-between">
                       <p className="text-xl font-medium text-gray-200">Starting from {exp.price}</p>
                       <div className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                         Explore <ArrowRight size={20} />
                       </div>
                     </div>
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
