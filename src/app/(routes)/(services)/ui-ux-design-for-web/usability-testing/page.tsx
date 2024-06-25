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

export default function UsabilityTesting() {
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
            Professional Usability Testing Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Ensuring your web projects are user-friendly, efficient, and effective.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Usability Testing Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Usability Testing Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer comprehensive usability testing services to ensure your web projects are intuitive and user-friendly. Our team uses various methods and tools to identify usability issues and provide actionable insights for improvement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'User Testing',
                description: 'Conducting tests with real users to gather feedback and identify usability issues in your web projects.'
              },
              {
                title: 'Heuristic Evaluation',
                description: 'Evaluating your web projects against established usability principles to find and fix usability problems.'
              },
              {
                title: 'Usability Surveys',
                description: 'Using surveys to gather user feedback and insights on the usability of your web projects.'
              },
              {
                title: 'Task Analysis',
                description: 'Analyzing user tasks to ensure they can be completed efficiently and effectively on your web projects.'
              },
              {
                title: 'A/B Testing',
                description: 'Comparing different versions of your web projects to determine which one provides a better user experience.'
              },
              {
                title: 'Accessibility Testing',
                description: 'Ensuring your web projects are accessible to all users, including those with disabilities.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for Usability Testing?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'User-Centered Approach: We prioritize your users&apos; needs and preferences in our testing processes.',
              'Experienced Team: Our team of usability experts brings extensive experience and insights to every project.',
              'Actionable Insights: We provide clear, actionable recommendations to improve the usability of your web projects.',
              'Comprehensive Testing: We use a variety of methods and tools to thoroughly test all aspects of your web projects.',
              'Continuous Improvement: We help you iterate and improve your web projects based on user feedback and testing results.'
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
            Ready to ensure your web projects are user-friendly and efficient? Contact us today to learn more about our usability testing services and how we can help improve your user experience.
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
