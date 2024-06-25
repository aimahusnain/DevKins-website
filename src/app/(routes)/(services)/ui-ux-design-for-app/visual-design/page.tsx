'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function VisualDesign() {
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
            Visual Design Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Elevate your brand with stunning visual designs tailored to engage your audience.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Visual Design Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Visual Design Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in creating captivating visual designs that enhance brand identity and user engagement. From concept to execution, our team delivers designs that resonate with your target audience and elevate your digital presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Brand Identity Design',
                description: 'Craft unique visual identities that reflect your brand values and resonate with your audience.',
              },
              {
                title: 'UI/UX Design',
                description: 'Create intuitive and user-friendly interfaces that enhance usability and delight users.',
              },
              {
                title: 'Website Redesign',
                description: 'Revamp your existing website with modern, visually appealing designs that improve user experience.',
              },
              {
                title: 'Mobile App Design',
                description: 'Design mobile interfaces that are responsive, engaging, and optimized for usability on all devices.',
              },
              {
                title: 'Graphic Design',
                description: 'Develop eye-catching graphics for marketing materials, social media, and digital campaigns.',
              },
              {
                title: 'Illustration and Animation',
                description: 'Create custom illustrations and animations that bring your brand story to life.',
              },
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
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Creative Expertise: Our team of designers brings creativity and innovation to every project.',
              'User-Centric Approach: We focus on understanding your audience to create designs that resonate.',
              'Collaborative Process: We work closely with you to ensure our designs align with your vision and goals.',
              'Quality Assurance: Rigorous testing and refinement ensure high-quality deliverables that meet your expectations.',
              'Comprehensive Solutions: From concept to execution, we offer end-to-end visual design services.',
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
        </section>

        {/* Get Started Section */}
        <section>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Devkins.dev</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your brand with our visual design services? Contact us today to discuss how we can help you achieve your design goals.
          </p>
          <motion.button
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </section>
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
