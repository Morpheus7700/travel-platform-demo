'use client';

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import { motion } from 'framer-motion';
import { Globe, Heart, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-12">
              NomadLux was born from a simple belief: travel should be more than just visiting places. 
              It should be about connection, wonder, and seamless discovery.
            </p>
          </motion.div>
          
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop" 
            alt="About us" 
            className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl mb-24"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              { icon: Globe, title: "Our Mission", desc: "To provide the most seamless and inspiring luxury travel platform in the world." },
              { icon: Heart, title: "Our Passion", desc: "We are travelers first. Every feature we build is designed to solve a traveler's need." },
              { icon: Users, title: "Global Community", desc: "Join over 50,000 global nomads who trust NomadLux for their adventures." },
              { icon: Shield, title: "Trusted Service", desc: "A decade of experience in high-end travel logistics and security." }
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
