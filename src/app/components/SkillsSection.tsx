import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { Code, Database, Figma, Chrome, Github } from 'lucide-react';

const skills = [
  {
    icon: Code,
    name: 'Frontend Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    color: 'from-[#A7C7B7] to-[#14532D]',
  },
  {
    icon: Database,
    name: 'Backend Development',
    technologies: ['Node.js', 'Laravel', 'Go', 'PostgreSQL', 'MySQL'],
    color: 'from-[#14532D] to-[#0f3d21]',
  },
  {
    icon: Figma,
    name: 'UI/UX Design',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
    color: 'from-[#A7C7B7] to-[#14532D]',
  },
  {
    icon: Chrome,
    name: 'Web Technologies',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    color: 'from-[#14532D] to-[#0f3d21]',
  },
  {
    icon: Github,
    name: 'DevOps & Tools',
    technologies: ['Git', 'Docker', 'CI/CD', 'AWS'],
    color: 'from-[#A7C7B7] to-[#14532D]',
  },
  {
    icon: Code,
    name: 'Other Skills',
    technologies: ['Agile', 'Testing', 'Performance', 'Security'],
    color: 'from-[#14532D] to-[#0f3d21]',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900">
            Skills & <span className="text-[#14532D]">Expertise</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <StaggerItem key={index}>
              <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#A7C7B7]/20 text-[#14532D] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}