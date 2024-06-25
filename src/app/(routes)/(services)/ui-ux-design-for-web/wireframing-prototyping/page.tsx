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

export default function WireframingPrototyping() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Professional Wireframing and Prototyping Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Visualize and refine the structure and functionality of your web projects with our expert services.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Wireframing and Prototyping Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Wireframing and Prototyping Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in creating detailed wireframes and interactive prototypes to help you visualize and perfect your web projects before development begins. Our expert team ensures that every design element is thoughtfully planned and aligned with your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Low-Fidelity Wireframes',
                description: 'Quick sketches and low-fidelity wireframes to visualize the basic structure and layout of your website.'
              },
              {
                title: 'High-Fidelity Wireframes',
                description: 'Detailed wireframes that include finer details and design elements for a clearer representation of the final product.'
              },
              {
                title: 'Interactive Prototypes',
                description: 'Clickable prototypes that simulate the user experience, allowing you to test and refine interactions and navigation.'
              },
              {
                title: 'User Flow Diagrams',
                description: 'Visual representations of the user journey through your website, ensuring a seamless and intuitive experience.'
              },
              {
                title: 'Usability Testing Prototypes',
                description: 'Prototypes designed specifically for usability testing to gather feedback and make data-driven improvements.'
              },
              {
                title: 'Collaborative Design Sessions',
                description: 'Work closely with our design team through collaborative sessions to ensure your vision is accurately realized.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for Wireframing and Prototyping?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Clear Visualization: We provide clear and detailed wireframes and prototypes to help you visualize your project’s structure and functionality.',
              'Experienced Designers: Our team of skilled designers brings extensive experience and creativity to every project.',
              'Interactive Testing: Our interactive prototypes allow you to test and refine user interactions, ensuring a smooth user experience.',
              'Collaborative Process: We work closely with you throughout the design process, incorporating your feedback to achieve the best outcomes.',
              'Comprehensive Services: From low-fidelity wireframes to high-fidelity prototypes, we offer a full range of wireframing and prototyping services.'
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
            Ready to bring your web project to life with detailed wireframes and interactive prototypes? Contact us today to learn more about our wireframing and prototyping services.
          </p>
          <motion.button
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
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
