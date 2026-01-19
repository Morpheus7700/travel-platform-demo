'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, User } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Globe className="text-white" size={24} />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-gray-900" : "text-white"
          )}>
            Nomad<span className="text-blue-500">Lux</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Destinations', href: '/destinations' },
            { label: 'Experiences', href: '/experiences' },
            { label: 'Packages', href: '/destinations' }, // Linking to destinations for now as a fallback
            { label: 'About', href: '/about' },
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className={cn(
                "text-sm font-semibold hover:text-blue-500 transition-colors",
                isScrolled ? "text-gray-600" : "text-gray-200"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth/signin" className={cn(
            "text-sm font-semibold px-4 py-2 rounded-full transition-colors",
            isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}>
            Sign In
          </Link>
          <Link href="/destinations" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-md active:scale-95">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {[
                { label: 'Destinations', href: '/destinations' },
                { label: 'Experiences', href: '/experiences' },
                { label: 'Packages', href: '/destinations' },
                { label: 'About', href: '/about' },
              ].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 font-semibold border-b border-gray-50 pb-2">
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/auth/signin" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 border border-gray-200 rounded-xl font-bold text-center">Sign In</Link>
                <Link href="/destinations" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-center">Book Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
