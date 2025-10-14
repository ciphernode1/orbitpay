"use client";

import { motion } from "framer-motion";

export default function Home() {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          OrbitPay<span className="text-blue-400">®</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
          Seamless Checkout. Infinite Reach. <br />
          The most elegant way to accept crypto payments worldwide.
        </p>
        <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={scrollToPricing}>
          <span className="text-gray-400">Scroll for pricing</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="text-2xl">⬇️</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0f172a] text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Starter Kit */}
          <motion.div
            className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">🌱 Starter Kit</h3>
            <p className="text-gray-600 mb-6">
              Begin your journey with seamless crypto checkout. Perfect for small businesses and creators.
            </p>
            <p className="text-3xl font-bold mb-6">$19.99</p>
            <a
              href="YOUR_STARTER_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Starter
            </a>
          </motion.div>

          {/* Growth Kit */}
          <motion.div
            className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">🚀 Growth Kit</h3>
            <p className="text-gray-600 mb-6">
              Scale your business with enhanced tools. Ideal for startups ready to expand globally.
            </p>
            <p className="text-3xl font-bold mb-6">$49.99</p>
            <a
              href="YOUR_GROWTH_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Growth
            </a>
          </motion.div>

          {/* Enterprise Kit */}
          <motion.div
            className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">🏢 Enterprise Kit</h3>
            <p className="text-gray-600 mb-6">
              Unlock full power with global crypto payments. Tailored for corporations and power users.
            </p>
            <p className="text-3xl font-bold mb-6">$199.99</p>
            <a
              href="YOUR_ENTERPRISE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Enterprise
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0a0f1c] text-center border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-400 mb-6">We’re here to help with any questions you may have.</p>
        <p className="text-gray-300">
          📧 <a href="mailto:support@orbitpay.com" className="underline">support@orbitpay.com</a>
        </p>
        <p className="text-gray-300 mt-2">
          📞 +1 (555) 123-4567
        </p>
      </section>
    </div>
  );
}
