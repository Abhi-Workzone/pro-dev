import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhoIHelp } from "@/components/WhoIHelp";
import { Services } from "@/components/Services";
import { LiveDemos } from "@/components/LiveDemos";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { WhyChooseMe, About } from "@/components/AboutSections";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <WhoIHelp />
        <Services />
        <Projects />
        <LiveDemos />
        <About />
        <Process />
        <WhyChooseMe />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
