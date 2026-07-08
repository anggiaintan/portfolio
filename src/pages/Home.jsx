import Hero from '../components/Hero';
import About from '../components/About';
import ToolsSection from '../components/ToolsSection';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ToolsSection />
      <Work />
      <Experience />
      <Contact />
    </>
  );
}
