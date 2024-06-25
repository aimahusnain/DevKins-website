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

export default function UXUIAudits() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            UX/UI Audit Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            In-depth analysis and recommendations to optimize your user experience and interface.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* UX/UI Audit Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our UX/UI Audit Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we provide thorough UX/UI audits to identify areas of improvement and optimize your web projects. Our expert team offers detailed insights and actionable recommendations to enhance user satisfaction and engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Heuristic Evaluation',
                description: 'We assess your website against established usability principles to identify usability issues and areas for improvement.'
              },
              {
                title: 'User Journey Analysis',
                description: 'We map out and analyze user journeys to identify pain points and opportunities for enhancing the user experience.'
              },
              {
                title: 'Accessibility Audit',
                description: 'Our accessibility audits ensure that your website is inclusive and usable for all users, including those with disabilities.'
              },
              {
                title: 'Performance Review',
                description: 'We review your website’s performance to identify slowdowns and recommend optimizations for a smoother user experience.'
              },
              {
                title: 'Competitive Benchmarking',
                description: 'We compare your website against competitors to identify strengths and weaknesses, providing insights for staying ahead.'
              },
              {
                title: 'User Feedback Analysis',
                description: 'We analyze user feedback and behavior data to uncover insights and recommendations for improving the user experience.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for UX/UI Audits?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expert Analysis: Our team of experienced UX/UI designers provides thorough and expert analysis of your web projects.',
              'Actionable Recommendations: We offer clear, actionable recommendations to improve your website’s user experience and interface.',
              'User-Centric Approach: We focus on your users, ensuring our audits are tailored to their needs and preferences.',
              'Data-Driven Insights: Our audits are backed by data and user feedback, ensuring our recommendations are grounded in real user experiences.',
              'Comprehensive Service: From heuristic evaluations to user journey analysis, we offer a wide range of audit services to cover all aspects of UX/UI.'
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
            Ready to enhance your web projects with a professional UX/UI audit? Contact us today to learn more about our services and how we can help improve your user experience.
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
