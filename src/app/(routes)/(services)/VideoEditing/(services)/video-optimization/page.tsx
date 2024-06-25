'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const optimizationStrategies = [
  {
    title: 'SEO for Videos',
    description: 'Optimize video titles, descriptions, and tags to improve search engine visibility.',
  },
  {
    title: 'Video Compression',
    description: 'Reduce video file sizes without compromising quality to enhance loading times.',
  },
  {
    title: 'Resolution & Format',
    description: 'Choose the optimal resolution and format for different platforms and devices.',
  },
  {
    title: 'Video Transcoding',
    description: 'Convert videos to different formats to ensure compatibility and playback efficiency.',
  },
  {
    title: 'Playback Speed Optimization',
    description: 'Implement techniques to ensure smooth playback and reduce buffering.',
  },
];

const VideoOptimizationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16 text-center"
      >
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Video Optimization Strategies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Enhance your video performance with effective optimization techniques.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Optimization Strategies Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Key Optimization Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Optimize Your Videos?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to learn how we can optimize your videos for better performance and engagement.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold transition-colors duration-300" href="/contact">
              Contact Us
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 text-white py-6 text-center"
      >
        <div className="container mx-auto px-6">
          <p>© 2024 Devkins. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default VideoOptimizationPage;
