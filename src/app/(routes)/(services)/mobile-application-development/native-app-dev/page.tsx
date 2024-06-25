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

const NativeAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-12 md:py-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl md:text-5xl font-extrabold" variants={slideInUp}>
            Native App Development Services
          </motion.h2>
          <motion.p className="mt-2 md:mt-4 text-base md:text-lg" variants={slideInUp}>
            Building high-performance, secure, and scalable native mobile applications tailored to your business needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 md:py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Our Native App Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              'iOS App Development',
              'Android App Development',
              'Custom Native App Development',
              'UI/UX Design for Native Apps',
              'App Testing and QA',
              'App Maintenance and Support',
              'App Store Deployment',
              'API Integration',
              'Enterprise App Solutions',
              'Performance Optimization',
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

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Why Choose Our Services?</h2>
          <ul className="space-y-2 md:space-y-4">
            {[
              'Expertise in Native App Development',
              'User-Centric Design Approach',
              'High Performance and Scalability',
              'Cutting-Edge Technology Implementation',
              'Timely Delivery and Cost-Effectiveness',
              'Ongoing Support and Maintenance',
            ].map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-base md:text-lg text-gray-600">{benefit}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Get Started</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Ready to elevate your business with a custom native app? Contact us today to discuss your project!
          </p>
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
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

export default NativeAppDevelopment;
