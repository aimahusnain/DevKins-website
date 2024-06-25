'use client'
 
import { motion } from 'framer-motion';
import Link from 'next/link';

const BrandingPage: React.FC = () => {
  const services = [
    {
      title: 'Brand Strategy Development',
      description: 'We work closely with you to define your brand\'s core values, mission, and unique selling propositions.',
    },
    {
      title: 'Logo Design',
      description: 'Crafting a memorable and versatile logo that reflects your brand\'s personality and values.',
    },
    {
      title: 'Visual Identity System',
      description: 'Developing a comprehensive visual identity system including color palettes, typography, and imagery guidelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 text-center"
      >
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Branding & Identity Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Explore our comprehensive branding services tailored to meet your business needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how our branding services can elevate your brand&apos;s visual identity.</p>
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

export default BrandingPage;
