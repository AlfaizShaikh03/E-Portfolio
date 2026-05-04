import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo">
          <span className="gradient-text">AS.</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li>
            <a href="mailto:alfaiz.shaikh.work@gmail.com" className="btn-hire">Hire Me</a>
          </li>
        </ul>
        <div className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
          <span style={mobileOpen ? { opacity: 0 } : {}} />
          <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="mobile-menu open" style={{ display: 'flex' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
            <a href="mailto:alfaiz.shaikh.work@gmail.com" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
