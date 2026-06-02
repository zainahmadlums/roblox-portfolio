import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Shrink navbar logic
      setScrolled(window.scrollY > 0);

      // 2. ScrollSpy logic (track which section is active)
      const sections = ['portfolio', 'about', 'contact'];
      
      // Offset by 200px so it triggers before the section completely hits the absolute top
      const scrollPosition = window.scrollY + 200; 

      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Run it once on mount just in case you refresh halfway down the page
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-secondary text-uppercase fixed-top transition-all ${scrolled ? 'py-1' : 'py-3'}`} id="mainNav" style={{ transition: 'padding 0.3s ease' }}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold fs-4" href="#page-top">Dark Theme</a>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a 
                className={`nav-link py-3 px-0 px-lg-3 rounded text-white fw-bold ${activeSection === 'portfolio' ? 'active' : ''}`} 
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a 
                className={`nav-link py-3 px-0 px-lg-3 rounded text-white fw-bold ${activeSection === 'about' ? 'active' : ''}`} 
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a 
                className={`nav-link py-3 px-0 px-lg-3 rounded text-white fw-bold ${activeSection === 'contact' ? 'active' : ''}`} 
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;