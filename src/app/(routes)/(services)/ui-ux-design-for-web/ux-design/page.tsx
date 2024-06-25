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

export default function UXDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Professional UX Design Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Enhancing your web projects with user-centered, engaging, and effective designs.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* UX Design Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our UX Design Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer a range of UX design services to create intuitive, engaging, and effective user experiences for your web projects. Our expert team is dedicated to understanding your users and delivering designs that meet their needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'User Research',
                description: 'We conduct comprehensive user research to understand your audience’s needs, behaviors, and motivations, ensuring our designs are user-centric.'
              },
              {
                title: 'Information Architecture',
                description: 'Our information architecture services help organize your website’s content effectively, making it easy for users to find what they need.'
              },
              {
                title: 'Wireframing and Prototyping',
                description: 'We create detailed wireframes and prototypes to visualize and refine the structure and functionality of your website before development.'
              },
              {
                title: 'Interaction Design',
                description: 'We design interactive elements that enhance user engagement and create seamless, intuitive interactions on your website.'
              },
              {
                title: 'Usability Testing',
                description: 'Our usability testing services ensure that your website is easy to use and meets the needs of your users, providing valuable feedback for continuous improvement.'
              },
              {
                title: 'Visual Design',
                description: 'We create visually appealing designs that align with your brand identity and engage your users, making your website both beautiful and functional.'
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Devkins.dev for UX Design?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              'User-Centric Approach: We place your users at the center of our design process, ensuring our solutions are tailored to their needs and preferences.',
              'Experienced Designers: Our team of skilled designers brings a wealth of experience and creativity to every project, delivering high-quality results.',
              'Data-Driven Design: We use data and insights to inform our design decisions, creating interfaces that are both intuitive and effective.',
              'Collaborative Process: We work closely with you throughout the design process, incorporating your feedback to achieve the best outcomes.',
              'Comprehensive Services: From research and analysis to design and testing, we offer end-to-end UX design services to ensure your project’s success.'
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
        </motion.section>

        {/* Get Started Section */}
        <motion.section variants={fadeIn} initial="hidden" animate="visible">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get Started with Devkins.dev</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your web projects with exceptional UX design? Contact us today to learn more about how our services can transform your user experience and interface.
          </p>
          <motion.button
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg shadow hover:bg-purple-700 transition-colors duration-300"
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
