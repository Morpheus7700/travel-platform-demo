'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/sections/Navbar';
import { experiences } from '@/data/experiences';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = experiences.find(e => e.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Experience not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <Link href="/experiences" className="absolute top-32 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Experiences
        </Link>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-1.5 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-4 inline-block">
              {experience.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{experience.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {experience.longDescription}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experience.highlights.map((highlight, i) => (
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
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Investment</span>
                  <Tag size={18} className="text-blue-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{experience.price}</p>
                <p className="text-sm text-gray-500 font-medium">Per person. Includes all necessary equipment and transport.</p>
             </div>

             <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-blue-400" />
                  <h4 className="text-xl font-bold">End-of-Path</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This curated experience has no further action buttons. Explore other adventures using the top navigation.
                </p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
