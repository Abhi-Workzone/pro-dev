"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <Section id="projects" className="bg-gradient-to-br from-black via-gray-900/95 to-black" style={{ perspective: '1000px' }}>
      <SectionHeading
        title="Case Studies"
        subtitle="Real problems solved with precision engineering."
        centered
      />

      <div className="flex flex-col gap-16" style={{ transformStyle: 'preserve-3d' }}>
        {CONTENT.projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, rotateY: idx % 2 === 0 ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className="flex-1 w-full"
              whileHover={{ scale: 1.02, translateZ: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 glass-dark">
                <motion.img 
                  src={project.image.startsWith('/') ? project.image : `/public${project.image}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div>
                <motion.h3 
                  className="text-3xl font-bold mb-4 text-gradient"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div 
                  className="h-1 w-20 bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '5rem' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <motion.div 
                    className="mt-1 text-red-400"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-1">Problem</h4>
                    <motion.p 
                      className="text-white/80"
                      whileHover={{ color: '#FFFFFFE6' }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.problem}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.div 
                    className="mt-1 text-blue-400"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Lightbulb size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-1">Solution</h4>
                    <motion.p 
                      className="text-white/80"
                      whileHover={{ color: '#FFFFFFE6' }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.solution}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <motion.div 
                    className="mt-1 text-green-400"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-1">Outcome</h4>
                    <motion.p 
                      className="text-white/80 font-medium"
                      whileHover={{ color: '#FFFFFFF2' }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.outcome}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
