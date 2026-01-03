import React, { useState } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Thank you for reaching out. I will get back to you soon!',
        confirmButtonColor: '#14532D',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Failed to Send',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#14532D',
      });
    } finally {
      setLoading(false);
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900">
            Get In <span className="text-[#14532D]">Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900 mb-6">Let's work together</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Drop me a message and
                let's create something amazing together!
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:muhammad.zadid.webdev@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-[#A7C7B7]/20 rounded-xl hover:bg-[#A7C7B7]/30 transition-colors duration-300"
                >
                  <div className="p-3 bg-[#14532D] rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900">muhammad.zadid.webdev@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/zadid15"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-[#A7C7B7]/20 rounded-xl hover:bg-[#A7C7B7]/30 transition-colors duration-300"
                >
                  <div className="p-3 bg-[#14532D] rounded-lg">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <div className="text-gray-900">@zadid15</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/muhammad-zadid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-[#A7C7B7]/20 rounded-xl hover:bg-[#A7C7B7]/30 transition-colors duration-300"
                >
                  <div className="p-3 bg-[#14532D] rounded-lg">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="text-gray-900">/in/muhammad-zadid</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          <StaggerContainer>
            <form onSubmit={handleSubmit} className="space-y-4">
              <StaggerItem>
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  className={`w-full px-8 py-4 rounded-xl flex items-center justify-center gap-2
    ${loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#14532D] hover:bg-[#1a6b3f] text-white'}
  `}
                >
                  <Send size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </StaggerItem>
            </form>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}