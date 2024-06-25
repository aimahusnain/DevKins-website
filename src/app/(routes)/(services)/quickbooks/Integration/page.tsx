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

export default function QuickBooksIntegration() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            QuickBooks Integration Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Seamlessly integrate QuickBooks with your existing systems for improved efficiency and functionality.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Integration Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Integration Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we provide comprehensive QuickBooks integration services to streamline your business processes and enhance your financial management. Our expert team ensures seamless integration with your existing systems, offering solutions that are tailored to meet your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'API Integration',
                description: 'Integrate QuickBooks with your applications using API connections for seamless data flow and automation.'
              },
              {
                title: 'Third-Party App Integration',
                description: 'Connect QuickBooks with third-party applications like CRM, ERP, and eCommerce platforms to centralize your data.'
              },
              {
                title: 'Custom Solutions',
                description: 'Get custom integration solutions designed specifically for your unique business needs and workflows.'
              },
              {
                title: 'Data Migration',
                description: 'Migrate your data from other accounting systems to QuickBooks smoothly and securely.'
              },
              {
                title: 'Real-Time Synchronization',
                description: 'Ensure real-time synchronization between QuickBooks and your other business systems for up-to-date information.'
              },
              {
                title: 'Ongoing Support',
                description: 'Receive ongoing support and maintenance for your QuickBooks integrations to ensure continuous efficiency.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expert Integration: Our team has extensive experience in integrating QuickBooks with various systems and applications.',
              'Tailored Solutions: We provide customized integration solutions that are designed to meet your specific business requirements.',
              'Seamless Process: Our integration process is smooth and efficient, minimizing disruptions to your operations.',
              'Real-Time Data: Ensure real-time data synchronization and accuracy across all your business systems.',
              'Continuous Support: We offer ongoing support and maintenance to keep your integrations running smoothly.',
              'Comprehensive Services: From API integration to data migration, we cover all aspects of QuickBooks integration.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with QuickBooks Integration</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to integrate QuickBooks with your existing systems? Contact us today to learn more about our integration services and how we can help streamline your business processes.
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
