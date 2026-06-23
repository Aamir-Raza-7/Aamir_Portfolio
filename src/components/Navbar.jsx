import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 dark:bg-forest/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Left spacer to balance flex */}
          <div className="hidden md:block w-1/4"></div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-wider text-charcoal/80 dark:text-cream-soft/80 hover:text-emerald-deep dark:hover:text-gold-dark transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center justify-end w-full md:w-1/4 space-x-4">
            {/* Desktop Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="hidden md:block p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-charcoal dark:text-cream-soft" aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Buttons */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Logo removed, keeping spacing */}
              <div></div>
              <div className="flex space-x-4">
                <button onClick={toggleDarkMode} className="p-2 rounded-full text-charcoal dark:text-cream-soft">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal dark:text-cream-soft">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream dark:bg-forest border-t border-charcoal/10 dark:border-white/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold uppercase tracking-wider text-charcoal dark:text-cream-soft hover:bg-black/5 dark:hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
