'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { Builder } from '@builder.io/react'

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
}

const slideUp: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

function HelloWorldHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-6"
          >
            Hello World
          </motion.h1>
          
          <motion.p
            variants={slideUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-700 mb-8"
          >
            Welcome to your Next.js 14 landing page with Builder.io integration
          </motion.p>
          
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://builder.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl border-2 border-primary-600"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-gray-600">
            Powered by Next.js 14, Builder.io, and Tailwind CSS
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Built with Next.js 14 for optimal performance and SEO
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visual Editing</h3>
            <p className="text-gray-600">
              Integrated with Builder.io for drag-and-drop content management
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fully Responsive</h3>
            <p className="text-gray-600">
              Mobile-first design that looks great on all devices
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start building amazing websites with Next.js and Builder.io today
          </p>
          <motion.a
            href="https://builder.io"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Building Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Builder.io Test. Built with Next.js 14 and Builder.io.
        </p>
      </div>
    </footer>
  )
}

Builder.registerComponent(HelloWorldHero, {
  name: 'Hello World Hero',
  inputs: []
})

Builder.registerComponent(FeaturesSection, {
  name: 'Features Section',
  inputs: []
})

Builder.registerComponent(CTASection, {
  name: 'CTA Section',
  inputs: []
})

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: []
})

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Builder.io components registered successfully')
    }
  }, [])

  return (
    <main className="min-h-screen">
      <HelloWorldHero />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}