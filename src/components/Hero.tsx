'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import ThreeDCube from './ThreeDCube'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Alexandre Ginisty
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Développeur Full Stack & Passionné par l'Innovation
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold">Développeur Full-Stack</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mb-8 text-lg leading-relaxed"
            >
              Je crée des expériences web modernes et performantes avec les dernières technologies.
              Passionné par le développement full-stack et l'expérience utilisateur, je mets mon expertise à votre service pour concrétiser vos projets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-primary border-2 border-primary/50 rounded-full font-semibold hover:bg-primary/5 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Découvrir mes compétences
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Me contacter
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <ThreeDCube />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <FiArrowDown className="text-3xl text-gray-400" />
      </motion.div>
    </section>
  )
}

