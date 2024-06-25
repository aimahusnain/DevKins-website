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

export default function QuickBooksBookkeeping() {
  return (
    <div className="min-h-screen bg-gray-50">``
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            QuickBooks Bookkeeping Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Keep your finances in order with our expert bookkeeping solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Bookkeeping Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Bookkeeping Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we provide comprehensive QuickBooks bookkeeping services designed to help you manage your finances efficiently. Our experienced bookkeepers ensure that your financial records are accurate and up-to-date.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Transaction Recording',
                description: 'Accurately record all your financial transactions, ensuring your books are always up-to-date.'
              },
              {
                title: 'Reconciliation',
                description: 'Reconcile your bank statements with your QuickBooks records to ensure accuracy and identify discrepancies.'
              },
              {
                title: 'Accounts Payable',
                description: 'Manage your bills and payments efficiently, ensuring timely payments and accurate record-keeping.'
              },
              {
                title: 'Accounts Receivable',
                description: 'Track your invoices and payments, ensuring you get paid on time and maintain healthy cash flow.'
              },
              {
                title: 'Financial Reporting',
                description: 'Generate detailed financial reports that provide insights into your business performance and help you make informed decisions.'
              },
              {
                title: 'Payroll Processing',
                description: 'Handle your payroll processing, ensuring your employees are paid accurately and on time.'
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
              'Expert Bookkeepers: Our team of experienced bookkeepers has the expertise to manage your QuickBooks bookkeeping efficiently.',
              'Accurate Records: We ensure that your financial records are accurate and up-to-date, providing you with reliable financial information.',
              'Customized Services: Our bookkeeping services are tailored to meet the specific needs of your business, ensuring you get the support you need.',
              'Time-Saving Solutions: We handle your bookkeeping tasks, allowing you to focus on running your business and achieving your goals.',
              'Comprehensive Support: From transaction recording to financial reporting, we offer a full range of bookkeeping services to support your business.',
              'Client-Centric Approach: We prioritize your needs and work closely with you to provide the best bookkeeping solutions for your business.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with QuickBooks Bookkeeping</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to streamline your bookkeeping processes and ensure accurate financial records? Contact us today to learn more about our QuickBooks bookkeeping services and how we can help you manage your finances efficiently.
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
