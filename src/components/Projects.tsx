'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode, FiCpu, FiDatabase, FiUsers } from 'react-icons/fi'
import { SiPython, SiReact, SiDocker, SiFastapi, SiAmazon, SiFlutter } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    id: 1,
    title: "Themesify - Générateur de Playlists Spotify",
    description: "Application web qui analyse vos titres aimés Spotify et génère des playlists basées sur l'humeur et les thèmes musicaux.",
    longDescription: "Utilise l'API Spotify pour analyser les caractéristiques audio des morceaux et créer automatiquement des playlists personnalisées selon l'humeur détectée.",
    image: "/api/placeholder/600/400",
    technologies: ["JavaScript", "Node.js", "Spotify API", "Express", "HTML/CSS"],
    features: [
      "🎵 Analyse automatique des goûts musicaux",
      "🎭 Génération de playlists par humeur",
      "🔗 Intégration complète Spotify API",
      "📊 Visualisation des données audio"
    ],
    github: "https://github.com/Alexandre-Ginisty/themesify",
    demo: null,
    stats: {
      stars: "1★",
      language: "JavaScript",
      updated: "2025"
    }
  },
  {
    id: 2,
    title: "RyuukonPalace - Jeu RPG Java",
    description: "Mon premier jeu de rôle développé en Java avec une interface graphique complète et un système de combat.",
    longDescription: "Jeu RPG complet avec système de combat, gestion d'inventaire, quêtes et progression de personnage. Développé entièrement en Java avec Swing.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Swing", "OOP", "Game Development"],
    features: [
      "⚔️ Système de combat stratégique",
      "🎒 Gestion d'inventaire avancée",
      "📜 Système de quêtes narratives",
      "🏰 Monde ouvert à explorer"
    ],
    github: "https://github.com/Alexandre-Ginisty/RyuukonPalace",
    demo: null,
    stats: {
      language: "Java",
      size: "224 MB",
      type: "Game"
    }
  },
  {
    id: 3,
    title: "Didines - Calculatrice Chimie Flutter",
    description: "Application mobile Flutter pour les calculs de chimie, facilitant les conversions et calculs complexes pour les étudiants.",
    longDescription: "Calculatrice spécialisée en chimie développée avec Flutter, incluant les calculs molaires, conversions d'unités et formules chimiques courantes.",
    image: "/api/placeholder/600/400",
    technologies: ["Flutter", "Dart", "Mobile Development", "Chemistry"],
    features: [
      "🧪 Calculs molaires automatisés",
      "📱 Interface mobile intuitive",
      "🔄 Conversions d'unités multiples",
      "📚 Formules chimiques intégrées"
    ],
    github: "https://github.com/Alexandre-Ginisty/didines",
    demo: null,
    stats: {
      language: "Dart",
      platform: "Mobile",
      framework: "Flutter"
    }
  },
  {
    id: 4,
    title: "MobilityAssist - Aide à la Mobilité PMR",
    description: "Application d'assistance pour personnes à mobilité réduite avec navigation intelligente et reconnaissance d'obstacles.",
    longDescription: "Solution d'aide à la mobilité utilisant l'IA pour détecter les obstacles et guider les personnes à mobilité réduite dans leurs déplacements quotidiens.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Flutter", "AI/ML", "Accessibility", "Navigation"],
    features: [
      "🚶 Navigation assistée par IA",
      "♿ Détection d'obstacles en temps réel",
      "🗺️ Cartographie accessible",
      "👥 Communauté d'entraide"
    ],
    github: "https://github.com/Alexandre-Ginisty/mobility-assist",
    demo: null,
    stats: {
      status: "En développement",
      focus: "Accessibilité",
      impact: "Social"
    }
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Projets Innovants</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solutions de pointe développées avec les dernières technologies et best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
              >
                <div className="glass-effect rounded-2xl overflow-hidden h-full group cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="relative z-10"
                    >
                      {index === 0 && <FiCode className="text-6xl text-primary" />}
                      {index === 1 && <FiCode className="text-6xl text-secondary" />}
                      {index === 2 && <SiFlutter className="text-6xl text-accent" />}
                      {index === 3 && <FiUsers className="text-6xl text-green-500" />}
                    </motion.div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub size={18} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-6">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-300">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <div className="flex gap-6">
                        {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-2xl font-bold gradient-text">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project.id)}
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        En savoir plus →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Intéressé par mes projets ?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Discutons de votre projet
            <FiExternalLink />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
