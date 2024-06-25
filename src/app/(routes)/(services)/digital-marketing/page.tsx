'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Digital Marketing Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Drive growth and engagement with our comprehensive digital marketing strategies.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Digital Marketing Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Digital Marketing Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer a wide range of digital marketing services designed to help your business thrive in the digital age. From SEO to social media management, we tailor our strategies to meet your goals and drive results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                link: 'seo',
                title: 'Search Engine Optimization (SEO)',
                description: 'Collaborating with influencers or industry experts to promote products or services and reach a wider audience.'
              },
              {
                link: 'marketing-automation',
                title: 'Marketing Automation',
                description: 'Implementing tools and workflows to automate repetitive marketing tasks, personalize customer experiences, and streamline marketing operations.'
              },
              {
                link: 'orm',
                title: 'Online Reputation Management (ORM)',
                description: 'Monitoring and managing online reviews, mentions, and feedback to maintain a positive brand image and address any negative sentiment.'
              },
              {
                link: 'influencer-marketing',
                title: 'Influencer Marketing',
                description: 'Engage your audience and build brand loyalty through strategic social media campaigns.'
              },
              {
                link: 'smm',
                title: 'Social Media Marketing (SMM)',
                description: 'Engage your audience and build brand loyalty through strategic social media campaigns.'
              },
              {
                link: 'ppc',
                title: 'Pay-Per-Click Advertising (PPC)',
                description: 'Drive targeted traffic to your website with effective PPC campaigns on search engines and social platforms.'
              },
              {
                link: 'content-marketing',
                title: 'Content Marketing',
                description: 'Create valuable and relevant content to attract, inform, and engage your target audience.'
              },
              {
                link: 'email-marketing',
                title: 'Email Marketing',
                description: 'Build and nurture relationships with your audience through personalized email campaigns.'
              },
              {
                link: 'ap-tracking',
                title: 'Analytics and Performance Tracking',
                description: 'Monitor and analyze campaign performance to optimize strategies and maximize ROI.'
              }
            ].map((service, index) => (
              <Link key={index} href={`/digital-marketing/${service.link}`}>
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
                </Link>
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
              'Customized Strategies: We develop tailored digital marketing strategies to meet your unique business objectives.',
              'Experienced Team: Our team of digital marketing experts brings years of experience and proven results to every project.',
              'Data-Driven Approach: We leverage data and analytics to make informed decisions and optimize campaign performance.',
              'Continuous Optimization: We continuously monitor, test, and optimize campaigns to ensure maximum ROI and growth.',
              'Transparent Reporting: We provide clear and transparent reporting to keep you informed about campaign progress and results.'
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Get Started Section */}
        <motion.section variants={fadeIn} initial="hidden" animate="visible">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Digital Marketing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to grow your business with effective digital marketing strategies? Contact us today to discuss how we can help you achieve your goals.
          </p>
          <motion.button
            className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg shadow hover:bg-orange-700 transition-colors duration-300"
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
