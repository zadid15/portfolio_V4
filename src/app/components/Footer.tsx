import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import LogoImage from '../../app/components/assets/logo/2.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export function Footer() {
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
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={LogoImage} className="w-32 mb-4" alt="" />
            <p className="text-gray-400">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  href="#home"
                  className="block text-gray-400 hover:text-[#A7C7B7] transition-colors"
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/zadid15"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#14532D] transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-zadid/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#14532D] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:muhammad.zadid.webdev@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#14532D] transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.instagram.com/izadid_/"
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#14532D] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/6285655639206?text=Halo%2C%20saya%20tertarik%20untuk%20memesan%20jasa%20pembuatan%20website.%20Bisa%20kita%20diskusikan%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-[#14532D] transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2025 Muhammad Zadid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}