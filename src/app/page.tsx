'use client';

import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import FeaturedDestinations from '@/components/sections/Destinations';
import Features from '@/components/sections/Features';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Escapade<span className="text-blue-500">Wheels</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your gateway to authentic travel experiences. Founded in 2020 by explorers for explorers. Discover the world on wheels.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {['Destinations', 'Tour Packages', 'Travel Guide', 'Booking Policy'].map((link) => (
                <li key={link}><a href="#" className="hover:text-blue-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              {['Help Center', 'Safety Information', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}><a href="#" className="hover:text-blue-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>hello@nomadlux.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>5th Ave, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 NomadLux Travel. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <Features />
      
      {/* Newsletter Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Travel Club</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Get exclusive travel deals, early access to new destinations, and expert travel tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-4 rounded-2xl text-gray-900 focus:outline-none text-lg"
              />
              <button className="bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}