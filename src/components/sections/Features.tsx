'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="text-blue-500" size={32} />,
    title: "Curated Experiences",
    desc: "Every destination and activity is hand-picked by our travel experts to ensure premium quality."
  },
  {
    icon: <Shield className="text-blue-500" size={32} />,
    title: "Secure Booking",
    desc: "Integrated state-of-the-art encryption and protection for every transaction you make."
  },
  {
    icon: <Clock className="text-blue-500" size={32} />,
    title: "Instant Confirmation",
    desc: "Get real-time availability and immediate confirmation for your flights and stays."
  },
  {
    icon: <Headphones className="text-blue-500" size={32} />,
    title: "24/7 Concierge",
    desc: "Our dedicated support team is available around the clock to assist your journey."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">The NomadLux Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
