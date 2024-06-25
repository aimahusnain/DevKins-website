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

export default function MobileUsabilityTesting() {
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
            Mobile Usability Testing
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Enhance your mobile app's user experience with comprehensive usability testing.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Mobile Usability Testing Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Mobile Usability Testing Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in mobile usability testing to ensure your app is intuitive, user-friendly, and meets the needs of your users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'User-Centric Testing',
                description: 'Conduct tests focused on understanding user behavior and preferences.',
              },
              {
                title: 'Device Compatibility',
                description: 'Test your app across various devices to ensure consistent performance and usability.',
              },
              {
                title: 'Performance Evaluation',
                description: 'Assess app performance metrics like speed, responsiveness, and stability.',
              },
              {
                title: 'Accessibility Testing',
                description: 'Evaluate app accessibility features to ensure inclusivity for all users.',
              },
              {
                title: 'Usability Reports',
                description: 'Provide detailed reports with actionable insights for improving user experience.',
              },
              {
                title: 'Continuous Improvement',
                description: 'Iterate based on user feedback and testing results to enhance app usability over time.',
              },
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
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for Mobile Usability Testing?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expertise: Our team has extensive experience in mobile app usability testing.',
              'Comprehensive Testing: We cover all aspects of mobile UX, from functionality to accessibility.',
              'Client-Centric Approach: We tailor our testing methodologies to meet your specific goals and requirements.',
              'Actionable Insights: Our detailed reports provide clear recommendations for enhancing your app.',
              'Continuous Support: We support you throughout the testing process and beyond to ensure long-term success.',
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
        </section>

        {/* Get Started Section */}
        <section>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Mobile Usability Testing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to improve your app's usability? Contact us today to discuss how our mobile usability testing services can benefit your project.
          </p>
          <motion.button
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </section>
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
