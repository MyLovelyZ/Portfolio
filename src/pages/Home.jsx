import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Navbar />

      <main>
        <Hero />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
