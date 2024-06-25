"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function UIUXMobile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-400 to-teal-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Mobile UI/UX Design Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Creating intuitive and engaging designs for your mobile
            applications.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* UI/UX Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Our Mobile UI/UX Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we specialize in designing user-friendly and
            visually appealing mobile applications. Our team is dedicated to
            enhancing the user experience and interface of your mobile projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                link: 'cross-platform',
                title: "Cross-Platform Design",
                description:
                "Designing mobile apps that work seamlessly across different devices and operating systems, ensuring a consistent user experience.",
              },
              {
                link: 'mobile-ui-patterns',
                title: "Mobile UI Patterns",
                description:
                "Implementing mobile UI design patterns and conventions to create familiarity and improve usability for users.",
              },
              {
                link: 'mobile-app-design',
                title: "Mobile App Design",
                description:
                "Designing intuitive and engaging mobile app interfaces for iOS and Android platforms, considering platform-specific guidelines and best practices.",
              },
              {
                link: 'user-research-&-analysis',
                title: "User Research and Analysis",
                description:
                "We conduct thorough user research and analysis to understand your audience's needs and behaviors, ensuring our designs are user-centric and data-driven.",
              },
              {
                link: 'wireframing-prototyping',
                title: "Wireframing and Prototyping",
                description:
                "Our wireframing and prototyping services help you visualize and refine the structure and functionality of your mobile application before development begins.",
              },
              {
                title: "Visual Design",
                link: 'visual-design',
                description:
                "We create stunning visual designs that align with your brand identity and engage your users, making your mobile application both beautiful and functional.",
              },
              {
                title: "Mobile Usability Testing",
                link: 'mobile-usability-testing',
                description:
                "Our usability testing services ensure that your mobile application is easy to use and meets the needs of your users, providing valuable feedback for continuous improvement.",
              },
              {
                link: 'interaction',
                title: "Interaction Design",
                description:
                "We design interactive elements that enhance user engagement and create seamless, intuitive interactions on your mobile application.",
              },
              {
                link: 'responsive-design',
                title: "Responsive Mobile Design",
                description:
                "Our responsive design services ensure that your mobile application looks and functions perfectly on all devices, providing a consistent user experience across platforms.",
              },
            ].map((service, index) => (
              <Link key={index} href={`/ui-ux-design-for-app/${service.link}`}>
              <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
              </Link>
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
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Why Choose Devkins.dev?
          </h2>
          <ul className="space-y-4 text-lg text-gray-600">
            {[
              "User-Centric Approach: We place your users at the center of our design process, ensuring our solutions are tailored to their needs and preferences.",
              "Experienced Designers: Our team of skilled designers brings a wealth of experience and creativity to every project, delivering high-quality results.",
              "Data-Driven Design: We use data and insights to inform our design decisions, creating interfaces that are both intuitive and effective.",
              "Collaborative Process: We work closely with you throughout the design process, incorporating your feedback to achieve the best outcomes.",
              "Comprehensive Services: From research and analysis to design and testing, we offer end-to-end UI/UX services to ensure your project's success.",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-teal-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Get Started Section */}
        <motion.section variants={fadeIn} initial="hidden" animate="visible">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Get Started with Mobile UI/UX Design
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your mobile application with exceptional UI/UX
            design? Contact us today to learn more about how our services can
            transform your mobile user experience and interface.
          </p>
          <motion.button
            className="px-8 py-4 bg-teal-600 text-white font-bold rounded-lg shadow hover:bg-teal-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
}
