"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LazyThreeBackground } from "./LazyThreeBackground";

export const GlobalBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    scale: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client side to prevent hydration mismatch
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.3 + 0.2,
      duration: Math.random() * 15 + 15,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
      {/* Deep Base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* 3D Animated Gradients */}
      <motion.div 
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"
        style={{ 
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      />
      
      <motion.div 
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"
        style={{ 
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      />


      <motion.div 
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-grid opacity-20"
        style={{ 
          willChange: 'opacity',
          backfaceVisibility: 'hidden'
        }}
      />

      {/* Optimized Particle System */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden'
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.6, 0],
            scale: [particle.scale, particle.scale * 1.2, particle.scale],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.8,
          }}
        />
      ))}

      <motion.div 
        className="absolute inset-0 bg-grain mix-blend-overlay"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          willChange: 'opacity',
          backfaceVisibility: 'hidden'
        }}
      />
      

      {/* Simplified Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-6 h-6 border border-cyan-500/15 rotate-45"
        animate={{
          rotate: [45, 405],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-purple-500/15 rounded-full"
        animate={{
          rotate: [0, -360],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Lazy-loaded Three.js Background */}
      <LazyThreeBackground />
    </div>
  );
};
