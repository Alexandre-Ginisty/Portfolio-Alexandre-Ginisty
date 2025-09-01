'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCode, FiLayers, FiBriefcase, FiMail } from 'react-icons/fi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#home', icon: FiCode },
    { name: 'Compétences', href: '#skills', icon: FiLayers },
    { name: 'Projets', href: '#projects', icon: FiBriefcase },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold"
        >
          <span className="text-primary font-bold text-2xl">AG</span>
          <span className="text-gray-800 ml-2 hidden sm:inline font-medium">Ginisty</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors font-medium"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 z-50"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-6 p-8 pt-20">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-lg">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
