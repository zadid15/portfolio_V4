import { motion } from 'motion/react';
import { Blocks, ChevronsDown, Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function HeroSection() {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  //   },
  // };

  return (
    <section id="home" className="mt-[30px] md:mt-0 relative min-h-screen flex items-center justify-center bg-gradient-to-t from-white to-[#A7C7B7]/10 pt-24 pb-16 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div  className="flex justify-center mb-[50px] relative z-0">
          <Logo className="scale-300 md:scale-500" showText={false} />
        </motion.div>

        <motion.h1
          
          className="text-4xl md:text-6xl font-black italic mb-4 text-gray-900 relative z-10"
        >
          Hello, I'm <span className="text-[#14532D] z-1">Muhammad Zadid</span>
        </motion.h1>

        <motion.h2
          
          className="text-xl md:text-4xl font-normal text-gray-700 mb-6"
        >
          Full Stack Developer & Designer
        </motion.h2>

        <motion.p
          
          className="text-md md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Crafting beautiful, functional, and user-centered digital experiences.
          Passionate about clean code and elegant design solutions.
        </motion.p>

        <motion.div
          
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <motion.a
            href="#projects"
            onClick={(e) => handleClick(e, '#projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#14532D] text-white px-6 md:px-8 py-3 rounded-full hover:bg-[#1a6b3f] transition-colors duration-300 shadow-lg flex items-center gap-2"
          >
            View Projects
            <Blocks size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#14532D] px-6 md:px-8 py-3 rounded-full border-2 border-[#14532D] hover:bg-[#A7C7B7]/20 transition-colors duration-300 flex items-center gap-2"
            onClick={(e) => handleClick(e, '#contact')}
          >
            Get In Touch
            <MessageCircle size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-[#14532D]"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-[#14532D]"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com/izadid_/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-[#14532D]"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href="https://wa.me/6285655639206?text=Halo%2C%20saya%20tertarik%20untuk%20memesan%20jasa%20pembuatan%20website.%20Bisa%20kita%20diskusikan%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-[#14532D]"
          >
            <Phone size={24} />
          </motion.a>
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-[#14532D]"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}