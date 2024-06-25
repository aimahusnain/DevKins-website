"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Service {
  link: string;
  name: string;
  desc: string;
  subServices: Array<{
    title: string;
    link: string;
    desc: string;
  }>;
}

const services: Service[] = [
  {
    link: "/website-development",
    name: "Website Development",
    desc: "Website development is essential for establishing an online presence. Our comprehensive services ensure a seamless blend of technology, creativity, and functionality, delivering a superior user experience. From domain purchase to advanced analytics integration, we cover every aspect to create a responsive and dynamic website.",
    subServices: [
      {
        title: "Domain Purchase",
        link: "/ui-ux-design-for-web/interaction",
        desc: "Secure a memorable domain name that reflects your brand. We assist in choosing and registering the perfect domain to establish your online identity.",
      },
      {
        title: "Hosting Purchased",
        link: "/ui-ux-design-for-web/visual-design",
        desc: "Select and purchase reliable hosting for optimal website performance and security. Our hosting solutions ensure your site is fast, secure, and always accessible.",
      },
      {
        title: "Domain Integration",
        link: "/ui-ux-design-for-web/usability-testing",
        desc: "We select and customize fonts that enhance readability and convey your brand's tone and character.",
      },
      {
        title: "All Devices Responsive Website",
        link: "/ui-ux-design-for-web/wireframing-prototyping",
        desc: "Our responsive designs ensure your website looks great and functions flawlessly across all devices, providing an optimal user experience on desktops, tablets, and smartphones.",
      },
      {
        title: "Content Creation",
        link: "/ui-ux-design-for-web/responsive-design",
        desc: "Engage your audience with quality content. We create compelling copy, blog posts, and multimedia content that drives traffic and improves SEO.",
      },
      {
        title: "Banners Design",
        link: "/ui-ux-design-for-web/URA",
        desc: "Capture attention with custom-designed banners. Our team creates visually appealing banners that align with your brand and marketing goals.",
      },
      {
        title: "Apps Integration",
        link: "/ui-ux-design-for-web/URA",
        desc: "Enhance your website's functionality with seamless app integrations, including e-commerce platforms, social media widgets, and custom applications.",
      },
      {
        title: "Google Analytics Integration",
        link: "/ui-ux-design-for-web/ux-audits",
        desc: "Gain insights into your website's performance with Google Analytics. We provide detailed data on audience behavior, traffic sources, and conversion rates to help you optimize your site.",
      },
      {
        title: "Business Manager Integration",
        link: "/ui-ux-design-for-web/web-design",
        desc: "Streamline your social media and advertising management with Business Manager integration, centralizing your tools for efficient marketing efforts.",
      },
      {
        title: "Google Search Console Setup",
        link: "/ui-ux-design-for-web/ux-design",
        desc: "Improve search engine visibility with Google Search Console. We set up and configure your account to monitor performance, identify issues, and optimize your content.",
      },
      {
        title: "Facebook Pixel Setup",
        link: "/ui-ux-design-for-web/ui-design",
        desc: "Optimize your Facebook ad campaigns with Facebook Pixel integration. Track and analyze ad performance to improve targeting and increase ROI.",
      },
    ],
  },

  {
    link: "/website-development",
    name: "Website Development 2",
    desc: "Website development is essential for establishing an online presence. Our comprehensive services ensure a seamless blend of technology, creativity, and functionality, delivering a superior user experience. From domain purchase to advanced analytics integration, we cover every aspect to create a responsive and dynamic website.",
    subServices: [
      {
        title: "Custom Website Design",
        link: "/ui-ux-design-for-web/interaction",
        desc: "Tailored website designs created from scratch based on client specifications and requirements.",
      },
      {
        title: "Responsive Web Design",
        link: "/ui-ux-design-for-web/visual-design",
        desc: "Ensuring that websites are optimized for various devices and screen sizes, providing an optimal viewing experience for users.",
      },
      {
        title: "E-commerce Website Design",
        link: "/ui-ux-design-for-web/usability-testing",
        desc: "Designing online stores with user-friendly interfaces, secure payment gateways, and seamless shopping experiences.",
      },
      {
        title: "CMS Integration",
        link: "/ui-ux-design-for-web/wireframing-prototyping",
        desc: "Integrating content management systems (CMS) like WordPress, Joomla, or Drupal to allow clients to easily manage and update their website content.",
      },
      {
        title: "SEO-friendly Design",
        link: "/ui-ux-design-for-web/responsive-design",
        desc: "Designing websites with search engine optimization (SEO) best practices in mind to improve visibility and rankings on search engine results pages.",
      },
      {
        title: "Website Redesign",
        link: "/ui-ux-design-for-web/URA",
        desc: "Updating and modernizing existing websites to improve functionality, aesthetics, and performance.",
      },
      {
        title: "Maintenance and Support",
        link: "/ui-ux-design-for-web/URA",
        desc: "Offer ongoing maintenance and support services to ensure websites remain up-to-date, secure, and performing optimally post-launch.",
      },
      {
        title: "Performance Optimization",
        link: "/ui-ux-design-for-web/ux-audits",
        desc: "Discuss your approach to optimizing website performance, including factors such as page load speed, mobile responsiveness, and overall user experience.",
      },
    ],
  },

  {
    link: "/packaging-design",
    name: "Packaging Design",
    desc: "Packaging Design is essential for creating a memorable brand experience and ensuring your product stands out. We specialize in innovative and attractive packaging solutions that protect your product and captivate your audience.",
    subServices: [
      {
        title: "Label Design",
        link: "/ui-ux-design-for-web/interaction",
        desc: "Eye-catching and informative labels that highlight your brand and meet regulatory standards.",
      },
      {
        title: "Box Design",
        link: "/ui-ux-design-for-web/visual-design",
        desc: "Custom-designed boxes that protect your product and enhance the unboxing experience.",
      },
      {
        title: "PR Box Design",
        link: "/ui-ux-design-for-web/usability-testing",
        desc: "Luxurious PR boxes crafted to impress influencers, journalists, and potential customers.",
      },
      {
        title: "Butter Paper Design",
        link: "/ui-ux-design-for-web/wireframing-prototyping",
        desc: "Stylish and practical butter paper designs that keep your product fresh and appealing.",
      },
      {
        title: "Sticker Design",
        link: "/ui-ux-design-for-web/responsive-design",
        desc: "Versatile and vibrant stickers for branding, promotions, and decorative purposes.",
      },
      {
        title: "Product Descriptions",
        link: "/ui-ux-design-for-web/URA",
        desc: "Compelling, SEO-friendly product descriptions that showcase your product's features and benefits.",
      },
      {
        title: "How to use",
        link: "/ui-ux-design-for-web/URA",
        desc: "Clear and visually appealing usage instructions to ensure customer satisfaction and safety.",
      },
      {
        title: "Cautions",
        link: "/ui-ux-design-for-web/ux-audits",
        desc: "Noticeable and effective cautionary information to protect your customers and your brand.",
      },
      {
        title: "QR Codes Design",
        link: "/ui-ux-design-for-web/web-design",
        desc: "Custom QR codes that provide instant access to additional information, seamlessly integrated into your packaging.",
      },
    ],
  },
  {
    link: "/design-and-branding",
    name: "Design & Branding",
    desc: "Welcome to our Design and Branding hub, where creativity meets strategy. We specialize in transforming ideas into captivating visuals and compelling narratives.",
    subServices: [
      {
        title: "Logo Design",
        link: "/ui-ux-design-for-web/interaction",
        desc: "We create unique, memorable logos that embody your brand's identity and resonate with your audience.",
      },
      {
        title: "Colors Palette (CMYK-RGB)",
        link: "/ui-ux-design-for-web/visual-design",
        desc: "Our cohesive color palettes ensure consistency across print (CMYK) and digital (RGB), evoking the right emotions for your brand.",
      },
      {
        title: "Typography",
        link: "/ui-ux-design-for-web/usability-testing",
        desc: "We select and customize fonts that enhance readability and convey your brand's tone and character.",
      },
      {
        title: "Brand Guidelines",
        link: "/ui-ux-design-for-web/wireframing-prototyping",
        desc: "Our detailed brand guidelines ensure consistent use of logos, colors, typography, and imagery across all communications.",
      },
      {
        title: "Developing a Brand Tagline",
        link: "/ui-ux-design-for-web/responsive-design",
        desc: "We craft memorable taglines that encapsulate your brand's essence and differentiate you from competitors.",
      },
      {
        title: "Brand Story",
        link: "/ui-ux-design-for-web/URA",
        desc: "We articulate your journey, values, and vision, creating a compelling narrative that resonates with your audience.",
      },
      {
        title: "Brand Patterns Design",
        link: "/ui-ux-design-for-web/URA",
        desc: "Unique patterns that reinforce your visual identity and add depth to your brand's appearance.",
      },
      {
        title: "Stamp Design",
        link: "/ui-ux-design-for-web/ux-audits",
        desc: "Distinctive stamps for branding documents, packaging, and other materials, enhancing your professional image.",
      },
      {
        title: "Facebook Cover and DP",
        link: "/ui-ux-design-for-web/web-design",
        desc: "Eye-catching Facebook covers and display pictures that reflect your brand’s identity and attract attention.",
      },
      {
        title: "WhatsApp DP",
        link: "/ui-ux-design-for-web/ux-design",
        desc: "Compelling WhatsApp display pictures that represent your brand’s personality consistently across platforms.",
      },
      {
        title: "Letterhead Design",
        link: "/ui-ux-design-for-web/ui-design",
        desc: "Professional letterheads that incorporate your logo, colors, and typography for consistent and credible correspondence.",
      },
      {
        title: "Business Card Design",
        link: "/ui-ux-design-for-web/ui-design",
        desc: "Visually appealing and informative business cards that leave a lasting impression.",
      },
      {
        title: "File Cover Design",
        link: "/ui-ux-design-for-web/ui-design",
        desc: "Custom file covers that are practical and visually consistent with your brand's identity.",
      },
      {
        title: "Envelope Design",
        link: "/ui-ux-design-for-web/ui-design",
        desc: "Distinctive envelopes that complement your brand's visual identity, making your mail stand out.",
      },
    ],
  },

  {
    link: "/ui-ux-design-for-web",
    desc: "",
    name: "UI/UX Design For Web",
    subServices: [
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
    desc: "",

    subServices: [
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
    desc: "",

    subServices: [
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
    desc: "",

    subServices: [
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
    desc: "",

    subServices: [
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
    desc: "",

    subServices: [
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
    desc: "",

    subServices: [
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
                <p className="text-sm font-normal">{hoveredService.desc}</p>
                <div className="flex flex-col">
                  {hoveredService.subServices.map((desc, idx) => (
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
