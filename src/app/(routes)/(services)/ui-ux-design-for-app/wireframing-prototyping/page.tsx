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

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function WireframingAndPrototyping() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Wireframing and Prototyping
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Visualize and refine your ideas with our wireframing and prototyping services.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Wireframing and Prototyping Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Wireframing and Prototyping Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer comprehensive wireframing and prototyping services to help you visualize and refine the structure and functionality of your website or application before development begins. Our prototyping process ensures that your project starts on the right track, saving time and resources in the long run.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Low-Fidelity Wireframes',
                description: 'Create basic wireframes to outline the layout and structure of your product.'
              },
              {
                title: 'High-Fidelity Prototypes',
                description: 'Develop interactive prototypes with detailed UI elements and user flows.'
              },
              {
                title: 'User Flow Diagrams',
                description: 'Visualize the paths that users will take through your website or application.'
              },
              {
                title: 'Click-through Prototypes',
                description: 'Demonstrate user interactions and simulate how users will navigate through your product.'
              },
              {
                title: 'Iterative Design Process',
                description: 'Refine and iterate on designs based on feedback and usability testing.'
              },
              {
                title: 'Responsive Design Prototypes',
                description: 'Ensure that your designs adapt seamlessly across various devices and screen sizes.'
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
              'Expertise in UI/UX Design: Our team specializes in creating intuitive and user-friendly interfaces.',
              'Efficient Prototyping: We streamline the prototyping process to deliver results quickly and effectively.',
              'Collaborative Approach: We work closely with your team to ensure that our prototypes meet your project requirements.',
              'Feedback-Driven Iteration: We gather feedback early and iterate on designs to achieve optimal user experiences.',
              'Comprehensive Services: From wireframing to clickable prototypes, we offer end-to-end design solutions.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Devkins.dev</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to visualize and refine your ideas with our wireframing and prototyping services? Contact us today to get started on your project.
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
