'use client';

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import { motion } from 'framer-motion';
import { Globe, Heart, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000&auto=format&fit=crop" 
            alt="Escapade on Wheels Journey" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Our Story
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Redefining travel through passion and exploration since 2020.
          </p>
        </div>
      </section>

      <div className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-500 leading-relaxed mb-12">
              Escapade on Wheels (EOW) is a travel organization founded in 2020 by a group of passionate travelers and explorers. 
              Our mission is to provide unique and authentic travel experiences that connect people with the world and with themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              { icon: Globe, title: "Our Mission", desc: "To redefine travel by creating journeys that are as responsible as they are adventurous." },
              { icon: Heart, title: "Curated Tours", desc: "Every tour is meticulously planned by our experts who have personally explored these terrains." },
              { icon: Users, title: "Growing Community", desc: "Join hundreds of happy travelers who have discovered the world's hidden gems with EOW." },
              { icon: Shield, title: "Safety First", desc: "We prioritize your safety with expert guides, reliable logistics, and 24/7 on-ground support." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}