'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function VideoEditing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Video Editing Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Enhance your videos with our creative editing solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Video Editing Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Video Editing Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer professional video editing services to transform your raw footage into polished and engaging videos. Our expert editors bring creativity and technical skill to every project, ensuring high-quality results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                link: 'pro-editing',
                title: 'Professional Editing',
                description: 'Transform raw footage into polished videos with seamless transitions and engaging visuals.'
              },
              {
                link: 'color-grading',
                title: 'Color Grading',
                description: 'Enhance the visual appeal and mood of your videos with professional color grading techniques.'
              },
              {
                link: 'audio-editing',
                title: 'Audio Editing',
                description: 'Ensure clear and high-quality audio with professional editing and sound mixing services.'
              },
              {
                link: 'motion-graphics',
                title: 'Motion Graphics',
                description: 'Integrate dynamic motion graphics and visual effects to enhance storytelling and engagement.'
              },
              {
                link: 'video-optimization',
                title: 'Video Optimization',
                description: 'Optimize videos for various platforms and formats to maximize reach and engagement.'
              },
              {
                link: 'custom-effects',
                title: 'Custom Effects',
                description: 'Create custom effects and animations to add a unique touch to your videos.'
              }
            ].map((service, index) => (
              <Link href={`/VideoEditing/${service.link}`}>
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
                </Link>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Creative Excellence: We combine creativity with technical expertise to deliver stunning video edits.',
              'Custom Solutions: We tailor our editing services to meet your specific needs and objectives.',
              'Experienced Editors: Our team of experienced editors ensures high-quality and professional results.',
              'Timely Delivery: We prioritize timely delivery without compromising on quality or creativity.',
              'Client Collaboration: We value collaboration and involve you in the editing process to ensure your vision is realized.'
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-cyan-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Get Started Section */}
        <motion.section variants={fadeIn} initial="hidden" animate="visible">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Video Editing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your raw footage into captivating videos? Contact us today to discuss your video editing needs and start creating impactful content.
          </p>
          <motion.button
            className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg shadow hover:bg-cyan-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Devkins.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
