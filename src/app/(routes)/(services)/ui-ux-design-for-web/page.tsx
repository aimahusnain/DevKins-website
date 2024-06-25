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

export default function UIUX() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-24"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-5xl font-extrabold" variants={slideInUp}>
            Professional UI/UX Services
          </motion.h2>
          <motion.p className="mt-4 text-lg" variants={slideInUp}>
            Enhancing your web projects with intuitive, engaging, and visually
            appealing designs.
          </motion.p>
        </div>
      </motion.section>

      <main className="container mx-auto px-6 py-16">
        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Our UI/UX Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            At Devkins.dev, we offer a comprehensive range of UI/UX services
            designed to enhance the user experience and interface of your web
            projects. Our expert team is dedicated to creating intuitive,
            engaging, and visually appealing designs that resonate with your
            target audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                link: "web-design",
                title: "Website Design",
                description:
                  "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
              },
              {
                title: "UX/Audits",
                link: "ux-audits",
                description:
                  "Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.",
              },
              {
                title: "User Experience (UX) Design",
                link: "ux-design",
                description:
                  "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
              },
              {
                link: "ui-design",
                title: "User Interface (UI) Design",
                description:
                  "Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.",
              },
              {
                title: "User Research and Analysis",
                link: "URA",
                description:
                  "We conduct thorough user research and analysis to understand your audience's needs and behaviors, ensuring our designs are user-centric and data-driven.",
              },
              {
                title: "Wireframing and Prototyping",
                link: "wireframing-prototyping",
                description:
                  "Our wireframing and prototyping services help you visualize and refine the structure and functionality of your website before development begins.",
              },
              {
                title: "Visual Design",
                link: "visual-design",
                description:
                  "We create stunning visual designs that align with your brand identity and engage your users, making your website both beautiful and functional.",
              },
              {
                link: "usability-testing",
                title: "Usability Testing",
                description:
                  "Our usability testing services ensure that your website is easy to use and meets the needs of your users, providing valuable feedback for continuous improvement.",
              },
              {
                link: "/interaction",
                title: "Interaction Design",
                description:
                  "We design interactive elements that enhance user engagement and create seamless, intuitive interactions on your website.",
              },
              {
                link: "/responsive-design",
                title: "Responsive Design",
                description:
                  "Our responsive design services ensure that your website looks and functions perfectly on all devices, providing a consistent user experience across platforms.",
              },
            ].map((service, index) => (
              <Link key={index} href={`/ui-ux-design-for-web/${service.link}`}>
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
                  className="flex-shrink-0 h-6 w-6 text-purple-600 mr-2"
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
            Get Started with Devkins.dev
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your web projects with exceptional UI/UX design?
            Contact us today to learn more about how our services can transform
            your user experience and interface.
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
    </div>
  );
}
