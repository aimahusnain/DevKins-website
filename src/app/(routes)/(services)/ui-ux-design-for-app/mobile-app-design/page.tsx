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

export default function MobileAppDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Mobile App Design
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Creating visually appealing and user-friendly mobile app interfaces that stand out.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Mobile App Design Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Mobile App Design Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer a full range of mobile app design services to create engaging and intuitive interfaces that enhance user experience. Our expert designers are dedicated to delivering high-quality designs that meet your business needs and delight your users.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'User Research and Analysis',
                description: 'Understanding user needs and behaviors through comprehensive research and analysis.'
              },
              {
                title: 'Wireframing and Prototyping',
                description: 'Visualizing app structure and functionality with detailed wireframes and prototypes.'
              },
              {
                title: 'Visual Design',
                description: 'Creating stunning visual designs that align with your brand and engage users.'
              },
              {
                title: 'Usability Testing',
                description: 'Ensuring the app is user-friendly and meets user needs through thorough usability testing.'
              },
              {
                title: 'Interaction Design',
                description: 'Designing seamless and intuitive interactions to enhance user engagement.'
              },
              {
                title: 'Responsive Design',
                description: 'Ensuring the app looks and functions perfectly on all devices, providing a consistent user experience.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expert Designers: Our team has extensive experience in mobile app UI/UX design.',
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
                <svg className="flex-shrink-0 h-6 w-6 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
            Ready to elevate your mobile app with exceptional UI/UX design? Contact us today to learn more about our mobile app design services and how we can help bring your vision to life.
          </p>
          <motion.button
            className="px-8 py-4 bg-teal-600 text-white font-bold rounded-lg shadow hover:bg-teal-700 transition-colors duration-300"
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
