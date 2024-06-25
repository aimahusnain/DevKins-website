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

export default function InteractionDesign() {
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
            Interaction Design
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Enhance user engagement with intuitive and seamless interactions.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Interaction Design Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Interaction Design Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in creating interactive experiences that captivate users and enhance usability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'User Flow Design',
                description: 'Craft seamless user journeys with clear paths and intuitive navigation.',
              },
              {
                title: 'Microinteractions',
                description: 'Design subtle animations and feedback that delight users and improve usability.',
              },
              {
                title: 'Gesture-Based Design',
                description: 'Incorporate touch and gesture controls to create natural and intuitive interactions.',
              },
              {
                title: 'Animation Design',
                description: 'Use animations to guide users, provide feedback, and create engaging experiences.',
              },
              {
                title: 'Feedback Mechanisms',
                description: 'Implement feedback loops to keep users informed and engaged throughout interactions.',
              },
              {
                title: 'Responsive Interactions',
                description: 'Ensure interactions adapt seamlessly across devices and screen sizes.',
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for Interaction Design?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'Expertise: Our team has extensive experience in designing engaging and intuitive interactions.',
              'Innovative Solutions: We use cutting-edge tools and techniques to create interactive experiences.',
              'Client Collaboration: We involve you in the design process to ensure your vision and goals are met.',
              'User-Centric Approach: Our designs prioritize user needs and preferences for optimal engagement.',
              'Continuous Improvement: We iterate based on user feedback and analytics to refine interaction designs.',
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {point}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Get Started Section */}
        <section>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Interaction Design</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your app&apos;s user experience with interactive design? Contact us today to discuss your project requirements.
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
