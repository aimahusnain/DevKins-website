"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Service {
  link: string;
  name: string;
  description: Array<{
    title: string;
    link: string;
    desc: string;
  }>;
}

const services: Service[] = [
  {
    link: "/ui-ux-design-for-web",

    name: "UI/UX Design For Web",
    description: [
      {
        title: "Interaction Design",
        link: "/ui-ux-design-for-web/interaction",
        desc: "We design interactive elements that enhance user engagement and create seamless, intuitive interactions on your website.",
      },
      {
        title: "Visual Design",
        link: "/ui-ux-design-for-web/visual-design",
        desc: "We create stunning visual designs that align with your brand identity and engage your users, making your website both beautiful and functional.",
      },
      {
        title: "Usability Testing",
        link: "/ui-ux-design-for-web/usability-testing",
        desc: "Our usability testing services ensure that your website is easy to use and meets the needs of your users, providing valuable feedback for continuous improvement.",
      },
      {
        title: "Wireframing and Prototyping",
        link: "/ui-ux-design-for-web/wireframing-prototyping",
        desc: "Creating wireframes and prototypes to visualize the website's layout, structure, and user flow before development begins.",
      },
      {
        title: "Responsive Design",
        link: "/ui-ux-design-for-web/responsive-design",
        desc: "Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.",
      },
      {
        title: "User Research and Analysis",
        link: "/ui-ux-design-for-web/URA",
        desc: "We conduct thorough user research and analysis to understand your audience's needs and behaviors, ensuring our designs are user-centric and data-driven.",
      },
      {
        title: "UI/UX Audits",
        link: "/ui-ux-design-for-web/ux-audits",
        desc: "Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.",
      },
      {
        title: "Website Design",
        link: "/ui-ux-design-for-web/web-design",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "User Experience (UX) Design",
        link: "/ui-ux-design-for-web/ux-design",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "User Interface (UI) Design",
        link: "/ui-ux-design-for-web/ui-design",
        desc: "Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.",
      },
    ],
  },

  {
    link: "/ui-ux-design-for-app",
    name: "UI/UX Design For Mobile",
    description: [
      {
        title: "User Research and Analysis",
        link: "/ui-ux-design-for-app/user-research-&-analysis",
        desc: "We conduct thorough user research and analysis to understand your audience's needs and behaviors, ensuring our designs are user-centric and data-driven.",
      },
      {
        title: "Interaction Design",
        link: "/ui-ux-design-for-app/interaction",
        desc: "We design interactive elements that enhance user engagement and create seamless, intuitive interactions on your mobile application.",
      },
      {
        title: "Wireframing and Prototyping",
        link: "/ui-ux-design-for-app/wireframing-prototyping",
        desc: "Our wireframing and prototyping services help you visualize and refine the structure and functionality of your mobile application before development begins.",
      },
      {
        title: "Mobile App Design",
        link: "/ui-ux-design-for-app/mobile-app-design",
        desc: "Designing intuitive and engaging mobile app interfaces for iOS and Android platforms, considering platform-specific guidelines and best practices.",
      },
      {
        title: "Responsive Mobile Design",
        link: "/ui-ux-design-for-app/responsive-design",
        desc: "Adapting website designs for mobile devices, optimizing layouts and interactions for touchscreens and smaller screens.",
      },
      {
        title: "Mobile Usability Testing",
        link: "/ui-ux-design-for-app/mobile-usability-testing",
        desc: "Conducting usability testing sessions with real users to gather feedback and refine mobile app designs based on user insights.",
      },
      {
        title: "Cross-Platform Design",
        link: "/ui-ux-design-for-app/cross-platform",
        desc: "Designing mobile apps that work seamlessly across different devices and operating systems, ensuring a consistent user experience.",
      },
      {
        title: "Mobile UI Patterns",
        link: "/ui-ux-design-for-app/mobile-ui-patterns",
        desc: "Implementing mobile UI design patterns and conventions to create familiarity and improve usability for users.",
      },
    ],
  },

  {
    link: "/mobile-application-development",
    name: "Mobile Application Development",
    description: [
      {
        title: "iOS App Development",
        link: "/mobile-application-development/ios-app-dev",
        desc: "Specializing in creating applications specifically for Apple's iOS platform.",
      },
      {
        title: "Android App Development",
        link: "/mobile-application-development/android-app-dev",
        desc: "Focusing on building applications tailored for Android devices.",
      },
      {
        title: "Cross-Platform App Development",
        link: "/mobile-application-development/CP-app-dev",
        desc: "Offering development solutions that work seamlessly across multiple platforms, such as iOS, Android, and web.",
      },
      {
        title: "App Maintenance and Support",
        link: "/mobile-application-development/app-maintenance-&-support",
        desc: "Offering ongoing maintenance services to keep mobile applications up-to-date with the latest technologies and to address any issues or bugs that arise post-launch.",
      },
      {
        title: "App Store Optimization (ASO)",
        link: "/mobile-application-development/aso-app-dev",
        desc: "Optimizing mobile applications for better visibility and ranking in app stores, including keyword optimization, metadata enhancement, and performance monitoring.",
      },
      {
        title: "Backend Development",
        link: "/mobile-application-development/backend-dev",
        desc: "Building robust backend systems to support the functionality of mobile applications, including databases, APIs, and servers.",
      },
      {
        title: "Native App Development",
        link: "/mobile-application-development/native-app-dev",
        desc: "We specialize in building native mobile applications tailored to iOS and Android platforms, ensuring optimal performance and user experience.",
      },
      {
        title: "App Testing and QA",
        link: "/mobile-application-development/testing-QA",
        desc: "We conduct rigorous testing to ensure your app functions flawlessly, delivering a seamless experience to your users.",
      },
      {
        title: "App Deployment and Optimization",
        link: "/mobile-application-development/AppDeploymentOptimization",
        desc: "We assist in deploying your app to app stores and optimize its performance to reach a wider audience and maximize downloads.",
      },
    ],
  },
  {
    link: "/graphicDesigns",
    name: "Graphic Design",
    description: [
      {
        title: "Logo Design",
        link: "/graphicDesigns/logo-designing",
        desc: "Offer logo design services for businesses looking to establish their brand identity.",
      },
      {
        title: "Print Design",
        link: "/graphicDesigns/print-design",
        desc: "Offer design services for printed materials such as business cards, brochures, flyers, posters, and packaging.",
      },
      {
        title: "Digital Illustration",
        link: "/graphicDesigns/digital-illustration",
        desc: "Provide custom illustrations for websites, social media, presentations, and other digital platforms.",
      },
      {
        title: "Web Graphics",
        link: "/graphicDesigns/web-graphic",
        desc: "Design graphics specifically tailored for websites, including banners, icons, buttons, and infographics.",
      },
      {
        title: "Social Media Graphics",
        link: "/graphicDesigns/social-media-graphic",
        desc: "Design visuals for social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.",
      },
      {
        title: "Packaging Design",
        link: "/packaging-design",
        desc: "Offer design services for product packaging, labels, and product branding.",
      },
      {
        title: "Infographic Design",
        link: "/graphicDesigns/infographic-design",
        desc: "Create visually appealing and informative infographics for data visualization purposes.",
      },
    ],
  },
  {
    link: "/digital-marketing",
    name: "Digital Marketing",
    description: [
      {
        title: "Analytics and Performance Tracking",
        link: "/digital-marketing/ap-tracking",
        desc: "Monitor and analyze campaign performance to optimize strategies and maximize ROI.",
      },
      {
        title: "Search Engine Optimization (SEO)",
        link: "/digital-marketing/seo",
        desc: "Optimizing websites to rank higher in search engine results pages (SERPs) and attract organic traffic.",
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        link: "/digital-marketing/ppc",
        desc: "Creating and managing paid advertising campaigns on platforms like Google Ads, Bing Ads, and social media platforms to drive targeted traffic.",
      },
      {
        title: "Social Media Marketing (SMM)",
        link: "/digital-marketing/smm",
        desc: "Developing and executing strategies to engage audiences, build brand awareness, and drive traffic through social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.",
      },
      {
        title: "Content Marketing",
        link: "/digital-marketing/content-marketing",
        desc: "Creating and distributing valuable, relevant content to attract and retain a clearly defined audience and drive profitable customer action.",
      },
      {
        title: "Email Marketing",
        link: "/digital-marketing/email-marketing",
        desc: "Designing and implementing email campaigns to nurture leads, engage subscribers, and drive conversions.",
      },
      {
        title: "Influencer Marketing",
        link: "/digital-marketing/influencer-marketing",
        desc: "Collaborating with influencers or industry experts to promote products or services and reach a wider audience.",
      },
      {
        title: "Online Reputation Management (ORM)",
        link: "/digital-marketing/orm",
        desc: "Monitoring and managing online reviews, mentions, and feedback to maintain a positive brand image and address any negative sentiment.",
      },
      {
        title: "Marketing Automation",
        link: "/digital-marketing/marketing-automation",
        desc: "Implementing tools and workflows to automate repetitive marketing tasks, personalize customer experiences, and streamline marketing operations.",
      },
    ],
  },
  {
    link: "/VideoEditing",
    name: "Video Editing",
    description: [
      {
        title: "Professional Editing",
        link: "/VideoEditing/pro-editing",
        desc: "Transform raw footage into polished videos with seamless transitions and engaging visuals.",
      },
      {
        title: "Color Grading",
        link: "/VideoEditing/color-grading",
        desc: "Enhance the visual appeal and mood of your videos with professional color grading techniques.",
      },
      {
        title: "Audio Editing",
        link: "/VideoEditing/audio-editing",
        desc: "Ensure clear and high-quality audio with professional editing and sound mixing services.",
      },
      {
        title: "Motion Graphics",
        link: "/VideoEditing/motion-graphics",
        desc: "Integrate dynamic motion graphics and visual effects to enhance storytelling and engagement.",
      },
      {
        title: "Video Optimization",
        link: "/VideoEditing/video-optimization",
        desc: "Optimize videos for various platforms and formats to maximize reach and engagement.",
      },
      {
        title: "Custom Effects",
        link: "/VideoEditing/custom-effects",
        desc: "Create custom effects and animations to add a unique touch to your videos.",
      },
    ],
  },
  {
    link: "/quickbooks",
    name: "QuickBooks",
    description: [
      {
        title: "QuickBooks Setup, Installation Customization",
        link: "/quickbooks/setup",
        desc: "Help clients set up QuickBooks software tailored to their business needs.",
      },
      {
        title: "QuickBooks Training",
        link: "/quickbooks/training",
        desc: "Offer training sessions to educate clients on how to effectively use QuickBooks for their business accounting needs.",
      },

      {
        title: "QuickBooks Integration Services",
        link: "/quickbooks/Integration",
        desc: "Integrate QuickBooks with other software solutions used by clients to streamline business operations.",
      },
      {
        link: "/quickbooks/troubleshooting-support",
        title: "QuickBooks Troubleshooting and Support",
        desc: "Offer ongoing support to troubleshoot issues and resolve any challenges clients encounter while using QuickBooks.",
      },
      {
        link: "/quickbooks/Consulting",
        title: "QuickBooks Consulting",
        desc: "Looking to optimize your use of QuickBooks? Our consulting services provide you with expert advice and strategies to improve your financial management.",
      },
      {
        title: "QuickBooks Data Migration",
        link: "/quickbooks/data",
        desc: "Assist clients in migrating their financial data from legacy systems to QuickBooks for seamless transition and continuity.",
      },
    ],
  },
];

const ServicesDropdown = () => {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleLinkClick = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button variant="ghost">Services</Button>
      <div
        className={`fixed top-12 left-0 w-full h-[80vh] p-4 bg-white z-50 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full">
          <div className="w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
            {services.map((service, index) => (
              <Link onClick={handleLinkClick} href={`${service.link}`}>
                <div
                  key={index}
                  onMouseEnter={() => setHoveredService(service)}
                  className="p-2 my-2 text-lg w-full font-semibold cursor-pointer hover:bg-gray-300 rounded-lg"
                >
                  {service.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="w-3/4 p-4 rounded-lg bg-gray-100 overflow-y-auto max-h-[70vh]">
            {hoveredService ? (
              <div className="">
                <h2 className="text-2xl font-bold">{hoveredService.name}</h2>
                <div className="flex flex-col">
                  {hoveredService.description.map((desc, idx) => (
                    <Link
                      onClick={handleLinkClick}
                      href={desc.link}
                      key={idx}
                      className="my-6"
                    >
                      <h3 className="text-xl font-semibold">{desc.title}</h3>
                      <p>{desc.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">
                Hover over a service to see the details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
