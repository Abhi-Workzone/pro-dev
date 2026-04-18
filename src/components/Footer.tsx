"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";
import Link from "next/link";
import { ExternalLink, X, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "./BrandIcons";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900/95 to-black border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="group">
              <div className="text-3xl font-black tracking-tighter text-white mb-4">
                <span className="text-blue-500">&lt;</span>
                {CONTENT.header.logo}
                <span className="text-purple-500">&gt;</span>
              </div>
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-blue-500 transition-colors">
                 Engineering Excellence
              </div>
            </Link>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              High-performance engineering for modern businesses. Specializing in booking systems and scalable web applications.
            </p>
            <div className="flex gap-3 pt-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-2 h-2 bg-purple-500 rounded-full"
              />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-2 h-2 bg-pink-500 rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {CONTENT.header.links.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="group text-white/40 hover:text-white transition-all duration-300 text-sm flex items-center gap-2">
                    <motion.div 
                      className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-blue-500 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail size={14} className="text-white/60 group-hover:text-blue-400 transition-colors" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-white/20 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-white/60 text-sm group-hover:text-white transition-colors">{CONTENT.contact.email}</div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-600/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Phone size={14} className="text-white/60 group-hover:text-green-400 transition-colors" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-white/20 uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-white/60 text-sm group-hover:text-white transition-colors">{CONTENT.contact.whatsapp}</div>
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Follow</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center hover:border-blue-500/30 transition-all duration-300 text-white/60 hover:text-white group"
              >
                <X size={18} className="group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center hover:border-blue-500/30 transition-all duration-300 text-white/60 hover:text-white group"
              >
                <LinkedInIcon size={18} className="group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center hover:border-purple-500/30 transition-all duration-300 text-white/60 hover:text-white group"
              >
                <GithubIcon size={18} className="group-hover:text-purple-400 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-xs font-medium uppercase tracking-[0.15em]"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-white/40"> {new Date().getFullYear()} PRODEV. All rights reserved.</span>
          </motion.div>
          <div className="flex gap-8">
            {/* <motion.a 
              href="/privacy-policy" 
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-white/30 hover:text-white/60 transition-all duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms-and-conditions" 
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-white/30 hover:text-white/60 transition-all duration-300"
            >
              Terms of Service
            </motion.a> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
