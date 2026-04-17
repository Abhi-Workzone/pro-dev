"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Globe, UserCheck, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <GlobalBackground />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 mb-8 group"
              >
                <span className="transform group-hover:-rotate-45 transition-transform duration-300">×</span>
                <span>Back to Home</span>
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center"
                >
                  <Shield className="w-8 h-8 text-blue-400" />
                </motion.div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-2">
                    Privacy <span className="text-blue-500">Policy</span>
                  </h1>
                  <p className="text-white/50 text-lg">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Introduction */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Introduction</h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  At PRODEV, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </motion.section>

              {/* Information We Collect */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-blue-400" />
                      Personal Information
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Name, email address, phone number, and business details when you contact us for services.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-purple-400" />
                      Technical Information
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      IP address, browser type, device information, and browsing behavior to improve services.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-green-400" />
                      Business Information
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Company details, project requirements, and technical specifications for services.
                    </p>
                  </motion.div>
                </div>
              </motion.section>

              {/* How We Use Your Information */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Provide and maintain web development services",
                    "Respond to inquiries and customer support",
                    "Process project proposals and agreements",
                    "Improve website and service offerings",
                    "Communicate project updates",
                    "Comply with legal obligations"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-white/70">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Data Protection */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Data Protection</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-white/70 text-lg leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/20">
                    <p className="text-white/80 leading-relaxed">
                      All sensitive project data is encrypted during transmission and stored securely. 
                      We limit access to your information to employees and contractors who need it 
                      to perform their job duties.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Your Rights */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Access and review information",
                    "Request corrections",
                    "Request deletion",
                    "Opt-out of marketing",
                    "Request data portability"
                  ].map((right, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 text-center"
                    >
                      <span className="text-white/80 font-medium">{right}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/30"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-white/70 text-lg mb-8">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.a 
                    href="mailto:privacy@prodev.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white font-medium">privacy@prodev.com</p>
                    </div>
                  </motion.a>
                  <motion.a 
                    href="tel:+15551234567"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </motion.a>
                  <motion.a 
                    href="https://www.prodev.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                      <ExternalLink className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Website</p>
                      <p className="text-white font-medium">www.prodev.com</p>
                    </div>
                  </motion.a>
                </div>
              </motion.section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
