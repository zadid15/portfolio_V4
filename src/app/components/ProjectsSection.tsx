import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjekPPDB from '../../app/components/assets/project/ppdb/ppdb.png';
import Anggaran from '../../app/components/assets/project/anggaran/anggaran.png';

const portfolios = [
  ProjekPPDB,
  Anggaran,
];

export function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = kanan, -1 = kiri  

  useEffect(() => {
    if (isOpen) return;

    const interval = setInterval(() => {
      setActive((prev) =>
        prev === portfolios.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [active, isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);


  const prev = () => {
    setDirection(-1);
    setActive(active === 0 ? portfolios.length - 1 : active - 1);
  };

  const next = () => {
    setDirection(1);
    setActive(active === portfolios.length - 1 ? 0 : active + 1);
  };

  return (
    <section id="projects" className="py-24 px-4 bg-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 z-10
            bg-gray-100 text-black rounded-full p-4 shadow-lg
            hover:bg-gray-200 transition"
                aria-label="Close preview"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={portfolios[active]}
                alt="Preview"
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14">
          <span className="text-[#14532D]">My</span> Projects
        </h2>

        {/* Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-white">

          {/* Arrow Left */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20
              bg-gray-200/50 hover:bg-gray-400/50 md:bg-gray-200 md:hover:bg-gray-400 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          {/* Arrow Right */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20
              bg-gray-200/50 hover:bg-gray-400/50 md:bg-gray-200 md:hover:bg-gray-400 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>

          {/* Image */}
          <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[540px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={portfolios[active]}
                alt="Portfolio"
                onClick={() => setIsOpen(true)}
                className="absolute h-full max-w-full object-contain rounded-3xl bg-white cursor-zoom-in"
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 mt-6">
          {portfolios.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-24 h-14 rounded-lg overflow-hidden border-2 transition
                ${active === i
                  ? 'border-teal-500'
                  : 'border-transparent opacity-60'}
              `}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
