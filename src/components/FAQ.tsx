"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-gradient-to-br from-black via-gray-900/95 to-black">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <SectionHeading
            title="Questions?"
            subtitle="Everything you need to know about the process and deliverables."
          />
        </div>

        <div className="lg:w-2/3 space-y-4">
          {CONTENT.faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
