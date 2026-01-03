import { useState } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import Binus from '../../app/components/assets/logo/instansi/binus.png';
import Daha from '../../app/components/assets/logo/instansi/daha.png';
import SMK from '../../app/components/assets/logo/instansi/smk.png';

const experiences = [
  {
    type: 'education',
    title: 'Vocational High School – Software Engineering',
    logo: SMK,
    period: '2023 - 2026',
    style: 'w-30 h-30 object-contain bg-white rounded-lg p-1',
    description:
      'Studied Software Engineering, focusing on web development, programming fundamentals, and basic software project implementation.',
  },
  {
    type: 'work',
    title: 'Full Stack Developer Intern',
    logo: Daha,
    period: '7 July 2025 - 10 December 2025',
    style: 'w-15 h-15 object-contain bg-white rounded-lg p-1',
    description:
      'Interned as a Full Stack Developer, contributing to internal hospital systems by developing and maintaining web-based applications.',
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    logo: Binus,
    period: '2026 - 2030',
    style: 'w-20 h-20 object-contain bg-white rounded-lg p-1',
    description:
      'Bachelor of Computer Science student at BINUS University, with a focus on software engineering and full-stack web development.',
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const filteredData = experiences.filter(
    (item) => item.type === activeTab
  );

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900">
            Experience & <span className="text-[#14532D]">Education</span>
          </h2>

          <p className="text-center text-gray-600 mb-8">
            My professional journey and academic background
          </p>

          {/* BUTTON */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${activeTab === 'work'
                  ? 'bg-[#14532D] text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
            >
              Experience
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${activeTab === 'education'
                  ? 'bg-[#14532D] text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
            >
              Education
            </button>
          </div>
        </AnimatedSection>

        <StaggerContainer key={activeTab} className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#A7C7B7] origin-top hidden md:block"
          />

          <div className="space-y-8">
            {filteredData.map((exp, index) => (
              <StaggerItem key={exp.title}>
                <div className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className="absolute left-6 top-6 w-5 h-5 bg-[#14532D] rounded-full border-4 border-white shadow-lg hidden md:block"
                  />

                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={exp.logo}
                            alt={exp.title}
                            className={exp.style}
                          />
                          <h3 className="text-xl text-gray-900">
                            {exp.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>

                        <p className="text-gray-600">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}