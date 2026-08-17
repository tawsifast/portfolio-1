import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Navbar />
      <div className="space-y-12 py-12">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
