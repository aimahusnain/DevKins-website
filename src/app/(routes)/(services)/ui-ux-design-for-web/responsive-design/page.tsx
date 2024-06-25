'use client';

import { motion } from 'framer-motion';

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

export default function InteractionDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Professional Interaction Design Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Crafting seamless and engaging interactions for your web projects.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Interaction Design Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Interaction Design Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in creating intuitive and engaging interactions that enhance user experience and drive user engagement. Our team uses the latest techniques and tools to design interactive elements that resonate with your audience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Interactive Prototyping',
                description: 'Developing interactive prototypes to visualize and test interactions before development.'
              },
              {
                title: 'Microinteractions Design',
                description: 'Creating small, engaging interactions that enhance user experience and provide feedback.'
              },
              {
                title: 'Animation Design',
                description: 'Designing smooth and captivating animations that make your web projects come to life.'
              },
              {
                title: 'Gesture-Based Interfaces',
                description: 'Developing intuitive gesture-based interfaces for mobile and touch-based devices.'
              },
              {
                title: 'Interactive Elements',
                description: 'Designing buttons, forms, and other interactive elements that are user-friendly and engaging.'
              },
              {
                title: 'Interactive Infographics',
                description: 'Creating interactive infographics that present information in an engaging and understandable way.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for Interaction Design?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'User-Focused Design: We prioritize user needs and behaviors to create intuitive interactions.',
              'Innovative Solutions: Our team stays updated with the latest trends and techniques in interaction design.',
              'Engaging Experiences: We craft interactions that captivate and retain user attention.',
              'Comprehensive Approach: From prototyping to final implementation, we cover all aspects of interaction design.',
              'Collaborative Process: We work closely with you to ensure our designs align with your vision and goals.'
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Get Started Section */}
        <motion.section variants={fadeIn} initial="hidden" animate="visible">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Devkins.dev</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to enhance your web projects with engaging and intuitive interactions? Contact us today to learn more about our interaction design services and how we can help you achieve your goals.
          </p>
          <motion.button
            className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition-colors duration-300"
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
