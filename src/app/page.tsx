import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-dark-900 min-h-screen text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
