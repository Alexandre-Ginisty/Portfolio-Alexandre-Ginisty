'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success('Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.', {
      duration: 5000,
      style: {
        background: '#1f2937',
        color: '#fff',
        border: '1px solid #6366f1',
      },
    })

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'alexandre.ginisty@email.com',
      link: 'mailto:alexandre.ginisty@email.com'
    },
    {
      icon: FiMapPin,
      title: 'Localisation',
      value: 'Paris, France',
      link: '#'
    },
    {
      icon: FiPhone,
      title: 'Téléphone',
      value: '+33 7 62 34 97 36',
      link: 'tel:+33762349736'
    }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/alexandre-ginisty', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/alexandre-ginisty-72233628b/', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Créons Ensemble</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Prêt à transformer vos idées en réalité ? Discutons de votre prochain projet innovant
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    required
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    required
                    rows={6}
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <FiSend />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-effect rounded-xl p-6 flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <p className="text-white text-lg group-hover:gradient-text transition-all">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-white">Suivez-moi</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-green-500 font-semibold">Disponible pour de nouveaux projets</span>
              </div>
              <p className="text-gray-400">
                Je suis actuellement ouvert à de nouvelles opportunités et collaborations. 
                N'hésitez pas à me contacter pour discuter de vos idées !
              </p>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
            >
              <p className="text-2xl font-bold gradient-text mb-2">Réponse sous 24h</p>
              <p className="text-gray-400">Je m'engage à vous répondre rapidement</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
