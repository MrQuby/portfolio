import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (currentPosition >= top && currentPosition <= top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-600 shadow-md py-3' : 'bg-blue-600 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Portfolio
              <span className="text-white">.</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`
                  font-medium transition-colors
                  ${activeSection === link.id 
                    ? 'text-white font-semibold' 
                    : 'text-blue-100 hover:text-white'}
                `}
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              Let's Talk
            </a>
          </div>
          
          {/* Mobile menu button - Only visible on small screens */}
          <div className="block md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-blue-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'text-white bg-primary-dark'
                    : 'text-blue-100 hover:text-white hover:bg-primary-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="block px-3 py-2 mt-4 text-center bg-white text-blue-600 font-medium rounded-md hover:bg-blue-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
