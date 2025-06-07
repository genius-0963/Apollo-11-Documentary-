import { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header = ({ activeSection, mobileMenuOpen, toggleMobileMenu }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'background', label: 'Background' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'aftermath', label: 'Aftermath' },
    { id: 'impact', label: 'Impact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Moon size={24} className="text-zinc-300" />
          <h1 className="text-xl font-bold">Apollo 11</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`py-2 px-1 transition-all hover:text-zinc-300 relative ${
                    activeSection === link.id ? 'text-zinc-300' : 'text-gray-100'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-300" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-xl py-2 px-4 transition-all ${
                    activeSection === link.id ? 'text-zinc-300 font-bold' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;