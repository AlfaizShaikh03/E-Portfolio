import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import AuroraBackground from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
