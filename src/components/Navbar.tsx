"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/data/content";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { scrollToSection, scrollToContact } from "@/utils/scrollToContact";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"
      )}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tighter text-white">
              <motion.span 
                className="text-blue-500 inline-block"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >&lt;</motion.span>
              {CONTENT.header.logo}
              <motion.span 
                className="text-purple-500 inline-block"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >&gt;</motion.span>
            </div>
            <motion.div 
              className="hidden sm:block text-[8px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-blue-500 transition-colors pt-1"
              whileHover={{ scale: 1.1 }}
            >
               Engineering
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {CONTENT.header.links.map((link) => (
            <motion.div key={link.label} whileHover={{ scale: 1.05 }}>
              <button
                onClick={() => scrollToSection(link.href.replace('#', ''))}
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="relative group rounded-full px-4 py-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold text-sm uppercase tracking-wider border border-blue-500/20 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {CONTENT.header.cta}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 overflow-hidden flex flex-col p-6 gap-6 md:hidden backdrop-blur-3xl"
          >
            {CONTENT.header.links.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  scrollToSection(link.href.replace('#', ''));
                  setMobileMenuOpen(false);
                }}
                className="text-2xl font-bold tracking-tight text-white/60 hover:text-white text-left"
              >
                {link.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold uppercase tracking-wider border border-blue-500/20 shadow-lg shadow-blue-600/25 transition-all duration-300"
              onClick={() => {
                scrollToContact();
                setMobileMenuOpen(false);
              }}
            >
              {CONTENT.header.cta}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
