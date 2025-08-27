'use client'

import { motion } from 'framer-motion'
import { FiX, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import type { MouseEvent } from 'react'

interface SkillDetailsProps {
  skill: any
  onClose: () => void
}

export default function SkillDetails({ skill, onClose }: SkillDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className="glass-effect max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
              <skill.icon className="text-white text-3xl" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{skill.title}</h2>
            <p className="text-gray-400 text-lg">{skill.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Composantes Essentielles (CE) */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Composantes Essentielles (CE)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skill.situations.map((situation: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="tech-card"
              >
                <h4 className="text-xl font-semibold mb-3 text-white">{situation.title}</h4>
                <p className="text-gray-400 mb-4">{situation.details}</p>
                <div className="flex flex-wrap gap-2">
                  {situation.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apprentissages Critiques (AC) */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Apprentissages Critiques (AC)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skill.apprentissages.map((apprentissage: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <FiCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{apprentissage.title}</h4>
                  <p className="text-gray-400 mb-3">{apprentissage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ressources */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Ressources</h3>
          <div className="space-y-6">
            {Object.entries(skill.technologies).map(([category, techs]: [string, any], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-3 text-white capitalize">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech: string) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 glass-effect rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-6 gradient-text">Réalisations Clés</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {skill.achievements.map((achievement: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 glass-effect rounded-xl"
              >
                <FiArrowRight className="text-primary" />
                <span className="text-white">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

