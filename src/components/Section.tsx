"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
}

export const Section = ({ children, className, id, containerClassName, style }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-22 px-6 overflow-hidden", className)}
      style={style}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px", amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn("max-w-7xl mx-auto", containerClassName)}
        style={{ 
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => {
  return (
    <div className={cn("mb-16", centered && "text-center")}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
