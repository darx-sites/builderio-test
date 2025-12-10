'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

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

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <motion.section
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
        >
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            variants={slideUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Hello World
          </motion.h1>

          <motion.p
            variants={slideUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
          >
            Testing Builder.io space creation alongside Vercel deployment
          </motion.p>

          <motion.div
            variants={slideUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              href="https://www.builder.io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Visit Builder.io
            </motion.a>
            <motion.a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200"
            >
              Visit Vercel
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-16"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Next.js 14</h3>
              <p className="text-gray-600 text-sm">Built with the latest Next.js App Router</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Builder.io Ready</h3>
              <p className="text-gray-600 text-sm">Integrated for visual editing capabilities</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Vercel Deploy</h3>
              <p className="text-gray-600 text-sm">Optimized for seamless deployment</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 max-w-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Setup Instructions</h2>
            <ol className="text-left text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-bold text-white bg-blue-600 rounded-full flex-shrink-0">1</span>
                <span>Create a Builder.io account and get your API key</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-bold text-white bg-blue-600 rounded-full flex-shrink-0">2</span>
                <span>Add NEXT_PUBLIC_BUILDER_API_KEY to your environment variables</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-bold text-white bg-blue-600 rounded-full flex-shrink-0">3</span>
                <span>Deploy to Vercel and connect your Builder.io space</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-bold text-white bg-blue-600 rounded-full flex-shrink-0">4</span>
                <span>Start editing visually with Builder.io's drag-and-drop interface</span>
              </li>
            </ol>
          </motion.div>
        </motion.section>

        <motion.footer
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center py-8 mt-16 border-t border-gray-200"
        >
          <p className="text-gray-600">
            Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ready for Builder.io integration and Vercel deployment
          </p>
        </motion.footer>
      </div>
    </main>
  )
}