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

export default function UserResearchAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Professional User Research and Analysis Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Understand your users better and enhance your web projects with data-driven insights.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* User Research and Analysis Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our User Research and Analysis Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer comprehensive user research and analysis services to help you understand your audience’s needs, behaviors, and motivations. Our expert team uses a variety of methods to gather valuable insights and inform your design decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Surveys and Questionnaires',
                description: 'We design and conduct surveys to gather quantitative data on user preferences, behaviors, and demographics.'
              },
              {
                title: 'User Interviews',
                description: 'Our team conducts one-on-one interviews to gain deep insights into user experiences and uncover unmet needs.'
              },
              {
                title: 'Usability Testing',
                description: 'We perform usability testing to identify pain points and areas for improvement in your existing designs.'
              },
              {
                title: 'Focus Groups',
                description: 'We organize focus groups to collect diverse perspectives and gain a better understanding of user expectations.'
              },
              {
                title: 'Behavioral Analytics',
                description: 'Our experts analyze user behavior on your website to identify trends and inform data-driven design decisions.'
              },
              {
                title: 'Competitor Analysis',
                description: 'We conduct competitor analysis to understand the market landscape and identify opportunities for differentiation.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for User Research and Analysis?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'In-depth Understanding: We help you gain a deep understanding of your users, ensuring that your designs are user-centric.',
              'Experienced Researchers: Our team of skilled researchers brings extensive experience and expertise to every project.',
              'Data-Driven Insights: We use data and insights to inform our research and analysis, providing actionable recommendations.',
              'Collaborative Approach: We work closely with you throughout the research process, incorporating your feedback to achieve the best outcomes.',
              'Comprehensive Services: From surveys and interviews to usability testing and competitor analysis, we offer a full range of user research services.'
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
            Ready to gain valuable insights into your users and improve your web projects with data-driven design? Contact us today to learn more about our user research and analysis services.
          </p>
          <motion.button
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg shadow hover:bg-purple-700 transition-colors duration-300"
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
