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

export default function CrossPlatformDesign() {
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
            Cross-Platform UI/UX Design for Mobile
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Crafting seamless and engaging user experiences across all mobile platforms.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* UI/UX Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Cross-Platform Design Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in designing intuitive and engaging user interfaces for mobile applications that work seamlessly across different platforms. Our design process ensures consistency, usability, and a great user experience on both iOS and Android devices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Platform-Specific Design',
                description: 'We tailor our designs to meet the specific guidelines and standards of both iOS and Android platforms.'
              },
              {
                title: 'Responsive Layouts',
                description: 'Our designs adapt to various screen sizes and orientations, providing a consistent experience on all devices.'
              },
              {
                title: 'Interactive Prototypes',
                description: 'Developing interactive prototypes to visualize and test interactions before development.'
              },
              {
                title: 'User-Centered Design',
                description: 'We place the user at the center of our design process, ensuring our solutions are intuitive and engaging.'
              },
              {
                title: 'Accessibility',
                description: 'Ensuring our designs are accessible to all users, including those with disabilities.'
              },
              {
                title: 'Performance Optimization',
                description: 'Designing with performance in mind to ensure fast and smooth user experiences.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for Cross-Platform Design?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expert Designers: Our team of skilled designers has extensive experience in cross-platform design.',
              'User-Centric Approach: We prioritize user needs and behaviors to create intuitive and engaging interfaces.',
              'Innovative Solutions: We stay updated with the latest trends and technologies in UI/UX design.',
              'Collaborative Process: We work closely with you throughout the design process to ensure the final product meets your expectations.',
              'Comprehensive Services: From initial research to final design, we offer end-to-end services for all your design needs.'
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
            Ready to create a seamless and engaging user experience across all mobile platforms? Contact us today to learn more about our cross-platform UI/UX design services.
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
