"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export const LiveDemos = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <Section id="demos" className="bg-gradient-to-br from-black via-gray-900/95 to-black" style={{ perspective: '1000px' }}>
      <SectionHeading 
        title="Live Experience" 
        subtitle="Interact with real-world solutions I've built. No placeholders, just performance."
        centered
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ transformStyle: 'preserve-3d' }}>
        {CONTENT.liveDemos.map((demo, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30, rotateY: -15, translateZ: -50 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0, translateZ: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 8,
              translateZ: 20,
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)'
            }}
            className="group relative rounded-3xl overflow-hidden glass border-white/10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              {!loadedImages.has(idx) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              )}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src={demo.image.startsWith('/') ? demo.image : `/images/${demo.image.split('/').pop()}`} 
                  alt={demo.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                  quality={75}
                  onLoad={() => handleImageLoad(idx)}
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-8">
              <motion.h3 
                className="text-xl font-bold mb-3"
                whileHover={{ scale: 1.05, color: '#3B82F6' }}
                transition={{ duration: 0.3 }}
              >
                {demo.title}
              </motion.h3>
              <motion.p 
                className="text-white/60 mb-6 text-sm leading-relaxed"
                whileHover={{ color: '#FFFFFFCC' }}
                transition={{ duration: 0.3 }}
              >
                {demo.description}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <ExternalLink size={14} />
                  View Live Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
