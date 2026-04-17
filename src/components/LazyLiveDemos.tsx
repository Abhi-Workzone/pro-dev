"use client";

import dynamic from "next/dynamic";
import { Section, SectionHeading } from "./Section";
import { CONTENT } from "@/data/content";

const LiveDemos = dynamic(() => import("./LiveDemos").then(mod => ({ default: mod.LiveDemos })), {
  loading: () => (
    <Section id="demos" className="bg-gradient-to-br from-black via-gray-900/95 to-black">
      <SectionHeading 
        title="Live Experience" 
        subtitle="Interact with real-world solutions I've built. No placeholders, just performance."
        centered
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CONTENT.liveDemos.map((_, idx) => (
          <div key={idx} className="aspect-[16/10] bg-white/5 rounded-3xl animate-pulse" />
        ))}
      </div>
    </Section>
  ),
  ssr: false
});

export { LiveDemos as LazyLiveDemos };
