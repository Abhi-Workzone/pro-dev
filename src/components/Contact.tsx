"use client";

import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";
import { Button } from "./ui/Button";
import { Mail, MessageCircle, Send } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact" className="bg-gradient-to-br from-black via-gray-900/95 to-black">
      <div className="glass rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-2">
                Let's build <br />
                <span className="text-blue-500">something great.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-md">
                Ready to transform your business operations with custom engineering?
              </p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${CONTENT.contact.email}`} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Email</div>
                  <div className="text-lg font-medium">{CONTENT.contact.email}</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                  <MessageCircle size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 font-bold">WhatsApp</div>
                  <div className="text-lg font-medium">{CONTENT.contact.whatsapp}</div>
                </div>
              </a>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <Button size="lg" className="w-full gap-3">
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
