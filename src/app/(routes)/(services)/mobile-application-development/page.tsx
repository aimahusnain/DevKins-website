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

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Mobile App Development Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Building innovative and user-friendly mobile apps to meet your
            business needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Mobile App Development Services Section */}
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Our Mobile App Development Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer a full spectrum of mobile app development
            services designed to bring your ideas to life. From initial concept
            to deployment, our team ensures your app is both functional and
            user-friendly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                link: "/mobile-application-development/backend-dev",
                title: "Backend Development",
                description:
                  "Building robust backend systems to support the functionality of mobile applications, including databases, APIs, and servers.",
              },
              {
                link: "/mobile-application-development/aso-app-dev",
                title: "ASO App Development",
                description:
                  "Optimizing mobile applications for better visibility and ranking in app stores, including keyword optimization, metadata enhancement, and performance monitoring",
              },
              {
                link: "/mobile-application-development/android-app-dev",
                title: "Android App Development",
                description:
                  "Focusing on building applications tailored for Android devices.",
              },
              {
                link: "/mobile-application-development/ios-app-dev",
                title: "iOS App Development",
                description:
                  "Specializing in creating applications specifically for Apple's iOS platform.",
              },
              {
                link: "/mobile-application-development/native-app-dev",
                title: "Native App Development",
                description:
                  "We specialize in building native mobile applications tailored to iOS and Android platforms, ensuring optimal performance and user experience.",
              },

              {
                link: "/mobile-application-development/CP-app-dev",
                title: "Cross-Platform App Development",
                description:
                  "Using frameworks like React Native and Flutter, we develop cross-platform apps that run smoothly on multiple devices with a single codebase.",
              },
              {
                link: "/ui-ux-design-for-app",
                title: "UI/UX Design for Mobile Apps",
                description:
                  "Our expert designers create intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
              },
              {
                link: "/mobile-application-development/testing-QA",
                title: "App Testing and QA",
                description:
                  "We conduct rigorous testing to ensure your app functions flawlessly, delivering a seamless experience to your users.",
              },
              {
                link: "/mobile-application-development/app-maintenance-&-support",
                title: "App Maintenance and Support",
                description:
                  "Beyond launch, we provide ongoing maintenance and support to keep your app updated, secure, and performing optimally.",
              },
              {
                link: "/mobile-application-development/AppDeploymentOptimization",
                title: "App Deployment and Optimization",
                description:
                  "We assist in deploying your app to app stores and optimize its performance to reach a wider audience and maximize downloads.",
              },
            ].map((service, index) => (
              <Link key={index} href={`${service.link}`}>
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
              "Expertise in Mobile Development: Our team has extensive experience in developing high-quality mobile applications across various platforms.",
              "User-Centric Approach: We focus on understanding your users&apos; needs to create apps that deliver value and enhance user satisfaction.",
              "Innovative Solutions: We stay updated with the latest technologies and trends to provide innovative solutions that set your app apart.",
              "Comprehensive Services: From design to deployment and maintenance, we offer end-to-end mobile app development services.",
              "Client Satisfaction: We prioritize transparent communication and collaboration to ensure your project meets expectations and deadlines.",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideInUp}
              >
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-600 mr-2"
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
            Get Started with Mobile App Development
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to turn your app idea into reality? Contact us today to
            discuss how we can help you build a successful mobile application.
          </p>
          <motion.button
            className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition-colors duration-300"
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
