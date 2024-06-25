'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const WebGraphics = () => {
  const services = [
    {
      title: 'Banner Design',
      description: 'Create eye-catching banners that drive engagement and conversions on your website.',
    },
    {
      title: 'Icon Design',
      description: 'Design unique and intuitive icons that enhance user experience and visual appeal.',
    },
    {
      title: 'Button Design',
      description: 'Craft attractive and clickable buttons that encourage user interaction and conversions.',
    },
    {
      title: 'Infographic Design',
      description: 'Visualize complex data and information with engaging and informative infographics.',
    },
  ];

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
            Web Graphics Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Design graphics that enhance your website's visual appeal and user experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Enhance Your Website's Appeal</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how our web graphics services can elevate your website's visual presence.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold transition-colors duration-300" href="/contact">
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

export default WebGraphics;
