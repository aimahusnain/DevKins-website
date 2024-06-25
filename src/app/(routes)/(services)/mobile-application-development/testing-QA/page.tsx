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

const AppTestingQA = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-12 md:py-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl md:text-5xl font-extrabold" variants={slideInUp}>
            App Testing and QA Services
          </motion.h2>
          <motion.p className="mt-2 md:mt-4 text-base md:text-lg" variants={slideInUp}>
            Ensuring your mobile applications are bug-free, secure, and perform flawlessly.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 md:py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6">Our App Testing and QA Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              'Functional Testing',
              'Performance Testing',
              'Security Testing',
              'Usability Testing',
              'Compatibility Testing',
              'Regression Testing',
              'Automated Testing',
              'Manual Testing',
              'Mobile App Testing',
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
              'Comprehensive Testing Solutions',
              'Experienced QA Engineers',
              'State-of-the-Art Testing Tools',
              'High Quality Standards',
              'Timely Delivery and Cost-Effectiveness',
              'Continuous Support and Maintenance',
            ].map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-cyan-600 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 20 20">
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
            Ready to ensure your app is flawless? Contact us today to discuss your testing and QA needs!
          </p>
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 bg-cyan-600 text-white font-bold rounded-lg shadow hover:bg-cyan-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </section>
      </main>
    </div>
  );
};

export default AppTestingQA;
