'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const PackagingDesign = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Packaging Design Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Offering design services for product packaging, labels, and product branding.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Details Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">Custom Packaging Designs</h3>
              <p className="text-gray-600">Tailored designs that reflect your brand&apos;s identity and enhance product visibility.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">Label Design</h3>
              <p className="text-gray-600">Create labels that communicate key product information and attract customer attention.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">Branding Integration</h3>
              <p className="text-gray-600">Ensure cohesive branding across all packaging materials for brand recognition.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Enhance Your Product Appeal</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how our packaging design services can elevate your brand&apos;s product presentation.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold transition-colors duration-300" href="/contact">
                Contact Us
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default PackagingDesign;
