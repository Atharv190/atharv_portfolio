
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;