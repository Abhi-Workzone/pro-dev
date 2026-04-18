"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";
import { motion } from "framer-motion";
import { FileText, Code, Calendar, CreditCard, Clock, Shield, AlertTriangle, Users, Mail, Phone, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
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
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center"
                >
                  <FileText className="w-8 h-8 text-purple-400" />
                </motion.div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-2">
                    Terms & <span className="text-purple-500">Conditions</span>
                  </h1>
                  <p className="text-white/50 text-lg">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Agreement to Terms */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Agreement to Terms</h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  By accessing and using PRODEV's website and services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </motion.section>

              {/* Services Description */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Services Description</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Custom website development",
                    "Booking system implementation",
                    "Technical consulting",
                    "Architecture design",
                    "Website maintenance",
                    "Performance optimization"
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-white/80">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Client Responsibilities */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Client Responsibilities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      Information Provision
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Provide accurate, complete, and timely information necessary for project completion.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-400" />
                      Timely Communication
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Respond to project communications within reasonable timeframes for progress.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      Content and Materials
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Ensure provided content is owned or properly licensed without infringement.
                    </p>
                  </motion.div>
                </div>
              </motion.section>

              {/* Payment Terms */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Payment Terms</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/20"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">Pricing Structure</h3>
                    <p className="text-white/70 leading-relaxed">
                      Based on project scope, complexity, and requirements. Detailed pricing in proposals.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl p-6 border border-purple-500/20"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">Payment Schedule</h3>
                    <p className="text-white/70 leading-relaxed">
                      Upfront deposits and milestone-based payments as specified in agreements.
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-2xl p-6 border border-green-500/20"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">Late Payments</h3>
                    <p className="text-white/70 leading-relaxed">
                      Subject to interest charges and may result in project delays or suspension.
                    </p>
                  </motion.div>
                </div>
              </motion.section>

              {/* Intellectual Property Rights */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl p-6 border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Client Ownership</h3>
                    <p className="text-white/80 leading-relaxed">
                      Upon full payment, clients own final deliverables and custom code developed 
                      specifically for their project, excluding third-party components.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl p-6 border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">PRODEV Rights</h3>
                    <p className="text-white/80 leading-relaxed">
                      We retain rights to pre-existing tools and reusable code. Portfolio showcase rights 
                      unless restricted by NDA.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Limitation of Liability */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-3xl p-8 border border-red-500/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Limitation of Liability</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Liability limited to total fees paid",
                    "No liability for indirect damages",
                    "Not responsible for business losses",
                    "Liability within legal limits"
                  ].map((limitation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="text-white/80">{limitation}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl p-8 border border-purple-500/30"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-white/70 text-lg mb-8">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.a 
                    href="mailto:legal@prodev.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <p className="text-white font-medium">legal@prodev.com</p>
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
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <ExternalLink className="w-6 h-6 text-blue-400" />
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
