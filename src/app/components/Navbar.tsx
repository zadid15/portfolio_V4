import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { BotMessageSquare, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'
        }`}
    >
      {/* NAVBAR CONTAINER */}
      <div className="bg-white/95 mt-5 backdrop-blur-md rounded-full shadow-md px-4 py-3 flex items-center justify-between md:gap-8 w-[90vw] md:w-auto">

        {/* LOGO */}
        <AnimatePresence>
          {/* MOBILE: always show logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex md:hidden items-center gap-2"
          >
            <Logo showText={false} />
          </motion.div>

          {/* DESKTOP: show logo only after scroll */}
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-2"
            >
              <Logo showText={false} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative px-6 py-2 transition-colors duration-300 ${activeSection === link.href.substring(1)
                ? 'text-[#14532D]'
                : 'text-gray-700 hover:text-[#A7C7B7]'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <AnimatePresence>
          {isScrolled && (
            <motion.a
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center gap-2 bg-[#14532D] text-white px-6 py-2 rounded-full hover:bg-[#1a6b3f] transition-colors duration-300"
            >
              <BotMessageSquare size={18} />
              Contact
            </motion.a>
          )}
        </AnimatePresence>


        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {/* TOP LINE */}
          <motion.span
            className="absolute h-0.5 w-6 bg-gray-800 rounded"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -6,
            }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          />

          {/* MIDDLE LINE */}
          <motion.span
            className="absolute h-0.5 w-6 bg-gray-800 rounded"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* BOTTOM LINE */}
          <motion.span
            className="absolute h-0.5 w-6 bg-gray-800 rounded"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 6,
            }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 rounded-2xl shadow-xl bg-white p-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleClick(e, link.href);
                  setIsOpen(false);
                }}
                className="text-gray-700 font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => {
                handleClick(e, '#contact');
                setIsOpen(false);
              }}
              className="bg-[#14532D] text-white text-center py-2 rounded-full"
            >
              <Phone className="inline-block mr-2" />
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
