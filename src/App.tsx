import { useState, useEffect } from 'react';
import { Moon, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Background from './pages/Background';
import TimelineSection from './pages/TimelineSection';
import Aftermath from './pages/Aftermath';
import Impact from './pages/Impact';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white overflow-x-hidden">
      {/* Starfield background with parallax */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Mobile menu button */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-zinc-900/80 backdrop-blur-sm md:hidden"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <Header 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      <main className="relative">
        <section id="home">
          <HomePage />
        </section>
        
        <section id="background">
          <Background />
        </section>
        
        <section id="timeline">
          <TimelineSection />
        </section>
        
        <section id="aftermath">
          <Aftermath />
        </section>
        
        <section id="impact">
          <Impact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;