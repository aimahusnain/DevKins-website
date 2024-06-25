// pages/backend-development.js

'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const BackendDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Backend Development - Devkins.dev</title>
        <meta name="description" content="Explore our backend development services for mobile applications at Devkins.dev." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 md:py-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl md:text-5xl font-extrabold" variants={slideInUp}>
            Backend Development for Mobile Applications
          </motion.h2>
          <motion.p className="mt-2 md:mt-4 text-base md:text-lg" variants={slideInUp}>
            Build robust and scalable backend solutions tailored for mobile apps with our expertise.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 md:py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Our Backend Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              'RESTful API Development',
              'Database Design and Management',
              'Cloud Integration (AWS, Azure, Google Cloud)',
              'Authentication and Authorization Systems',
              'Backend as a Service (BaaS) Solutions',
              'Real-Time Data Syncing and WebSockets',
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <p className="text-lg text-gray-800">{service}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Technologies We Use</h2>
          <ul className="space-y-2 md:space-y-4">
            {[
              'Node.js',
              'Express.js',
              'MongoDB, PostgreSQL, MySQL',
              'Firebase',
              'GraphQL',
              'Docker, Kubernetes',
              'Microservices Architecture',
            ].map((technology, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-indigo-600 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-base md:text-lg text-gray-600">{technology}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Get Started</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Ready to build a powerful backend for your mobile app? Contact us today!
          </p>
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Devkins.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BackendDevelopment;
