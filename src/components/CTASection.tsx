"use client";

import { Section } from "./Section";
import { CONTENT } from "@/data/content";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { scrollToContact } from "@/utils/scrollToContact";

export const CTASection = () => {
  return (
    <Section className="bg-gradient-to-br from-black via-gray-900/95 to-black pb-32">
      <div className="relative glass rounded-[4rem] p-12 md:p-24 text-center overflow-hidden">
        {/* Cinematic light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-purple-600/5 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 text-gradient">
            {CONTENT.ctaSection.headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Stop losing potential revenue. Let's build a system that converts visitors into loyal customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-xl font-bold rounded-2xl" onClick={scrollToContact}>
              {CONTENT.ctaSection.button}
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
