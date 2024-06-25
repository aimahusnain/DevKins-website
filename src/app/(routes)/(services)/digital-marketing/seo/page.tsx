'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const seoServices = [
  {
    title: 'Keyword Research',
    description: 'Identify and target the most effective keywords to drive traffic to your website.',
  },
  {
    title: 'On-Page SEO',
    description: 'Optimize your website content and structure to improve search engine rankings.',
  },
  {
    title: 'Off-Page SEO',
    description: 'Build high-quality backlinks to increase your website’s authority and ranking.',
  },
  {
    title: 'Technical SEO',
    description: 'Ensure your website is technically sound for search engines with site speed, mobile optimization, and more.',
  },
  {
    title: 'Local SEO',
    description: 'Optimize your online presence to attract more business from relevant local searches.',
  },
  {
    title: 'SEO Audits',
    description: 'Conduct comprehensive SEO audits to identify and resolve issues.',
  },
  {
    title: 'Content Marketing',
    description: 'Create and promote high-quality content to attract and engage your audience.',
  },
];

const SeoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-16 text-center"
      >
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Search Engine Optimization (SEO)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Enhance your online presence with our comprehensive SEO services.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Our SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Boost Your Online Presence?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how our SEO services can help your business grow.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold transition-colors duration-300" href="/contact">
              Contact Us
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 text-white py-6 text-center"
      >
        <div className="container mx-auto px-6">
          <p>© 2024 Devkins. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default SeoPage;
