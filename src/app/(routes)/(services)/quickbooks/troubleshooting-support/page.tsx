'use client'

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

export default function QuickBooksTroubleshooting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            QuickBooks Troubleshooting and Support
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Resolve issues quickly and efficiently with our expert support.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Troubleshooting Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Troubleshooting and Support Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we provide comprehensive QuickBooks troubleshooting and support services designed to help you resolve any issues quickly and efficiently. Our experienced support team is ready to assist you with any QuickBooks-related problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Error Resolution',
                description: 'Diagnose and fix QuickBooks errors to ensure your software runs smoothly.'
              },
              {
                title: 'Data Recovery',
                description: 'Recover lost or corrupted data to prevent data loss and ensure business continuity.'
              },
              {
                title: 'Performance Optimization',
                description: 'Optimize QuickBooks performance for faster and more efficient operation.'
              },
              {
                title: 'Software Updates',
                description: 'Ensure your QuickBooks software is up-to-date with the latest patches and updates.'
              },
              {
                title: 'Integration Support',
                description: 'Resolve issues related to QuickBooks integration with other software and services.'
              },
              {
                title: 'User Training',
                description: 'Provide training and support to help your team effectively use QuickBooks.'
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
              'Expert Support Team: Our team of experienced QuickBooks experts is ready to assist you with any issues.',
              'Fast Resolution: We work quickly to resolve your issues, minimizing downtime and disruption to your business.',
              'Comprehensive Services: From error resolution to data recovery, we offer a full range of support services.',
              'Client-Focused Approach: We prioritize your needs and provide personalized support to ensure your satisfaction.',
              'Proactive Support: We offer proactive support to prevent issues before they occur, ensuring smooth operation.',
              'Affordable Solutions: Our support services are competitively priced, offering excellent value for your investment.'
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-pink-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Get Started Section */}
        <motion.section variants={fadeIn} initial="hidden" animate="visible">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with QuickBooks Support</h2>
          <p className="text-lg text-gray-600 mb-8">
            Need help with QuickBooks? Contact us today to learn more about our troubleshooting and support services and how we can help you resolve your QuickBooks issues quickly and efficiently.
          </p>
          <motion.button
            className="px-8 py-4 bg-pink-600 text-white font-bold rounded-lg shadow hover:bg-pink-700 transition-colors duration-300"
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
