"use client";

import { Section, SectionHeading } from "./Section";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Alex Thompson",
    role: "Founder, BookWell Solutions",
    text: "We were struggling with our old booking system for months. The new platform he built handles 3x more bookings without any issues. Our team loves the admin dashboard - everything just works.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, GreenLeaf Cafe",
    text: "Honestly, I was skeptical about switching systems again. But this implementation was smooth and the training was thorough. Our daily operations are so much easier now.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO, LocalBiz Connect",
    text: "He delivered exactly what we needed - no fluff, just solid code that works. The site loads fast and our customers are actually using the booking features. Great investment.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-gradient-to-br from-black via-gray-900/95 to-black">
      <SectionHeading 
        title="Client Testimonials" 
        subtitle="Real feedback from businesses I've worked with."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-[2.5rem] glass border-white/5 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-white/80 font-medium leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center font-bold text-blue-500">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
