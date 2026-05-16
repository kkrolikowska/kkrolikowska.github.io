import { useState, useEffect, type FC } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: FC = () => {
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
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-header)' }}>
          Katarzyna<span className="text-accent">.K</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: 500, fontSize: '1rem' }}>
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-nav-toggle">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{ fontSize: '1.5rem', color: 'var(--text-color)' }}
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'center',
              boxShadow: 'var(--card-shadow)',
              borderTop: '1px solid var(--border-color)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.2rem', fontWeight: 600 }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle button { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
