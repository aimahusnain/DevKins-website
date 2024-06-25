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

export default function MobileUIPatterns() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Mobile UI Patterns
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Designing intuitive and engaging user interfaces for mobile applications.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* UI Patterns Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Key Mobile UI Patterns</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we employ a variety of mobile UI patterns to create intuitive and engaging user experiences. These patterns help streamline the user journey and ensure a consistent and enjoyable interaction with your mobile app.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Navigation Bars',
                description: 'Easy access to the main sections of your app with clear and intuitive navigation bars.'
              },
              {
                title: 'Swipe Gestures',
                description: 'Enhanced user interactions through natural and intuitive swipe gestures.'
              },
              {
                title: 'Modals and Pop-ups',
                description: 'Effective use of modals and pop-ups for alerts, actions, and information without disrupting the user flow.'
              },
              {
                title: 'Cards',
                description: 'Organizing content in a visually appealing and accessible card layout.'
              },
              {
                title: 'Forms and Inputs',
                description: 'Designing user-friendly forms and input fields for a seamless data entry experience.'
              },
              {
                title: 'Loading Indicators',
                description: 'Providing feedback during loading times to keep users informed and engaged.'
              }
            ].map((pattern, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800">{pattern.title}</h3>
                <p className="mt-4 text-gray-600">{pattern.description}</p>
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expert Designers: Our team has extensive experience in mobile UI/UX design.',
              'User-Centric Approach: We prioritize user needs to create intuitive and engaging interfaces.',
              'Innovative Solutions: We stay updated with the latest trends and technologies in UI/UX design.',
              'Collaborative Process: We work closely with you throughout the design process.',
              'Comprehensive Services: From initial research to final design, we offer end-to-end services.'
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
            Ready to enhance your mobile app with intuitive and engaging UI patterns? Contact us today to learn more about our mobile UI/UX design services.
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
