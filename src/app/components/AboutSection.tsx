import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import MyPhoto from '../../app/components/assets/myphoto/photo.jpg';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900">
            About <span className="text-[#14532D]">Me</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Learn more about my journey and what drives me
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#A7C7B7] to-[#14532D] shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={MyPhoto}
                    alt="My Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              >
                <span className="text-4xl">👋</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-3xl text-gray-900">
                Passionate Developer with a Creative Edge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building
                scalable web applications and intuitive user interfaces. My journey
                in tech started with a curiosity for how things work, and evolved
                into a passion for creating solutions that make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in modern web technologies and love turning complex
                problems into simple, beautiful, and intuitive designs. When I'm
                not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex-1 p-4 bg-[#A7C7B7]/20 rounded-xl">
                  <div className="text-3xl text-[#14532D] mb-2">5+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="flex-1 p-4 bg-[#A7C7B7]/20 rounded-xl">
                  <div className="text-3xl text-[#14532D] mb-2">50+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="flex-1 p-4 bg-[#A7C7B7]/20 rounded-xl">
                  <div className="text-3xl text-[#14532D] mb-2">30+</div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}