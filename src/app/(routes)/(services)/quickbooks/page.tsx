import Link from 'next/link'
import React from 'react'

const Quickbooks = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-800 flex flex-col items-center text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Welcome to Devkins</h1>
          <p className="mt-2 text-lg">Expert QuickBooks Services for Your Business</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800">Our QuickBooks Services</h2>
          <p className="mt-2 text-gray-700">Managing your finances is crucial to the success of your business. That's why at Devkins, we offer a complete range of QuickBooks services designed to help you stay organized, compliant, and focused on what you do best: growing your business.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Link href='/quickbooks/setup' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Setup, Installation and Customization</h3>
              <p className="mt-2 text-gray-700">Getting started with QuickBooks has never been easier. Our experts will set up and customize your QuickBooks account to match your business's unique requirements.</p>
            </Link>
            <Link href='/quickbooks/training' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Training</h3>
              <p className="mt-2 text-gray-700">We provide comprehensive training to ensure you and your team can use QuickBooks with confidence. Plus, our ongoing support means we're always here to help when you need us.</p>
            </Link>
            <Link href='/quickbooks/Integration' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Integration</h3>
              <p className="mt-2 text-gray-700">Integrate QuickBooks with your existing systems to streamline your operations. We can connect QuickBooks with your CRM, e-commerce platform, payroll services, and more.</p>
            </Link>
            <Link href='/quickbooks/Bookkeeping' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Bookkeeping Services</h3>
              <p className="mt-2 text-gray-700">Let us handle your day-to-day bookkeeping so you can focus on running your business. From recording transactions to reconciling accounts, our team will keep your books in perfect order.</p>
            </Link>
            <Link href='/quickbooks/troubleshooting-support' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Troubleshooting and Support</h3>
              <p className="mt-2 text-gray-700">Encountered an issue with QuickBooks? Our troubleshooting services are here to help. We'll diagnose and fix problems quickly, minimizing downtime.</p>
            </Link>
            <Link href='/quickbooks/Consulting' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Consulting</h3>
              <p className="mt-2 text-gray-700">Looking to optimize your use of QuickBooks? Our consulting services provide you with expert advice and strategies to improve your financial management.</p>
            </Link>
            <Link href='/quickbooks/data' className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-800">QuickBooks Data Migration</h3>
              <p className="mt-2 text-gray-700">Assist clients in migrating their financial data from legacy systems to QuickBooks for seamless transition and continuity.</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800">Why Choose Devkins?</h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Expertise and Experience: With years of experience in web development and financial management, our team brings a wealth of knowledge to every project.</li>
            <li>Tailored Solutions: We understand that every business is unique. Our services are customized to meet your specific needs and goals.</li>
            <li>Client-Centric Approach: Your success is our priority. We work closely with you to ensure our services align with your vision and objectives.</li>
            <li>Innovative Technologies: Leveraging the latest technologies, we deliver solutions that are not only effective but also future-proof.</li>
            <li>Reliable Support: Our commitment to customer satisfaction means you can count on us for ongoing support and guidance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-purple-800">Get Started with Devkins</h2>
          <p className="mt-2 text-gray-700">Ready to take your business to the next level with expert QuickBooks services? Contact us today to learn more about how we can help you streamline your financial management and achieve your business goals.</p>
          <button className="mt-6 px-6 py-3 bg-purple-800 text-white rounded-lg">Contact Us</button>
        </section>
      </main>
    </div>
  )
}

export default Quickbooks