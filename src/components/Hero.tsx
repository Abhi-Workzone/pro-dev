"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Atom, Code, Globe, Shield } from "lucide-react";
import { Button } from "./ui/Button";
import { scrollToContact } from "@/utils/scrollToContact";

export const Hero = () => {
  const showcaseProjects = [
    { img: "/images/image-6.jpg" },
    { img: "/images/image-7.jpg" },
    { img: "/images/image-8.jpg" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden px-6 pt-25">
      
      {/* Optimized Background Mesh */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
        <motion.div 
          animate={{ 
            opacity: [0.02, 0.06, 0.02]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-grid"
          style={{ 
            willChange: 'opacity',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>

      {/* Optimized Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
            animate={{ 
              y: [0, -30, 0], 
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[20%] text-white/50"
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
        >
            <Shield size={40} strokeWidth={1} />
        </motion.div>
        <motion.div 
            animate={{ 
              y: [0, 30, 0], 
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] right-[20%] text-white/50"
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
        >
            <Atom size={50} strokeWidth={1} />
        </motion.div>
        <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[40%] left-[25%] text-white/30"
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
        >
            <Code size={30} strokeWidth={1} />
        </motion.div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="space-y-6"
           style={{ 
             willChange: 'transform',
             backfaceVisibility: 'hidden'
           }}
        >
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            Building fast, modern <motion.span className="text-purple-500" whileHover={{ scale: 1.05 }}>websites</motion.span>
          </motion.h1>
          <motion.h1 
            className="text-xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            that <motion.span className="inline-block" whileHover={{ scale: 1.1 }}>&lt;grow&gt;</motion.span> your <motion.span className="text-blue-500" whileHover={{ scale: 1.05 }}>business</motion.span>
          </motion.h1>
          
          <p className="text-sm md:text-md text-white/40 max-w-3xl mx-auto font-medium leading-relaxed">
             I'm a freelance web developer who crafts high-converting websites for startups, creators, and small businesses.<br /> Let's turn your idea into reality — pixel by pixel.
          </p>

          <div className="pt-2 flex justify-center">
            <Button 
              size="lg" 
              className="rounded-full h-14 px-8 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2 group"
              onClick={scrollToContact}
            >
              Start Your Project 
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                 <ArrowRight size={16} />
              </div>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Projects Showcase Strip */}
      <div className="relative z-20 w-full max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {showcaseProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.05), duration: 0.4 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: '0 20px 40px -10px rgba(147, 51, 234, 0.3)'
              }}
              className="relative aspect-[14/8] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-1.5 group"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <motion.img
                src={project.img}
                alt={`Showcase ${i + 1}`}
                className="w-full h-full object-cover rounded-[2rem] opacity-60 group-hover:opacity-100 transition-all duration-700"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
          
          {/* Centered Scroll Indicator (Overlapping the cards slightly like in reference) */}
          <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex flex-col items-center">
             <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent mb-4" />
             <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-2xl shadow-purple-600/40"
             >
               <ChevronDown size={26} />
             </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};