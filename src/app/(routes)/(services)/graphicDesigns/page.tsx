'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    link: 'infographic-design',
    title: 'Infographic Design',
    description: 'Create visually appealing and informative infographics for data visualization purposes.',
  },
  {
    link: 'packaging-design',
    title: 'Packaging Design',
    description: 'Offer design services for product packaging, labels, and product branding.',
  },
  {
    link: 'social-media-graphic',
    title: 'Social Media Graphics',
    description: 'Design visuals for social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.',
  },
  {
    link: 'web-graphic',
    title: 'Web Graphics',
    description: 'Design graphics specifically tailored for websites, including banners, icons, buttons, and infographics.',
  },
  {
    title: 'Logo Design',
    link: 'logo-designing',
    description: 'Create a unique and memorable brand identity with our custom logo design services.',
  },
  {
    link: 'branding-and-identity-design',
    title: 'Branding & Identity',
    description: 'Develop a cohesive brand identity across all platforms, from color schemes to typography.',
  },
  {
    title: 'Print Design',
    link: 'print-design',
    description: 'Design eye-catching print materials such as brochures, flyers, and business cards.',
  },
  {
    link: 'digital-illustration',
    title: 'Digital Illustration',
    description: 'Bring concepts to life with custom digital illustrations that captivate and engage.',
  },
];

const GraphicDesignServices = () => {
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
            Graphic Design Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Explore our comprehensive graphic design services tailored to meet your business needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={`/graphicDesigns/${service.link}`}>
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-md p-6"
                >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
                </Link>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how our graphic design services can elevate your brand&apos;s visual identity.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold transition-colors duration-300">
                Contact Us
            </Link>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="bg-gray-800 text-white py-6 text-center"
      >
        <div className="container mx-auto px-6">
          <p>© 2024 Devkins. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default GraphicDesignServices;
