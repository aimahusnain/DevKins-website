'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const AppDeploymentOptimization = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            App Deployment & Optimization
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Optimize and deploy your mobile applications with Devkins' expert app deployment and optimization services.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">Seamless Deployment</h3>
              <p className="text-gray-600">Deploy your applications seamlessly across different platforms and environments.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Optimize your application performance for faster load times and better user experience.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">Continuous Integration & Delivery</h3>
              <p className="text-gray-600">Implement CI/CD pipelines to automate build, test, and deployment processes.</p>
            </motion.div>
            {/* Add more service cards as needed */}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Devkins?</h2>
          <ul className="space-y-4">
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center"
            >
              <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg text-gray-600">Expertise in deploying and optimizing apps for various industries.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center"
            >
              <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg text-gray-600">Proven track record of enhancing app performance and user satisfaction.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center"
            >
              <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-lg text-gray-600">Dedicated support and maintenance to ensure your apps are always optimized.</span>
            </motion.li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Optimize Your App?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how our app deployment and optimization services can benefit your business.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold transition-colors duration-300" href="/contact">
              Contact Us
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <div className="container mx-auto px-6">
          <p>© 2024 Devkins. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppDeploymentOptimization;
