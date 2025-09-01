'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
 

const skills = [
  {
    title: "Réaliser un développement d'application",
    description: "Concevoir, développer, tester et intégrer une application complète en respectant les besoins du client, l’ergonomie et les bonnes pratiques de programmation.",
    ce: [
      "Élaborer une application informatique",
      "Faire évoluer une application existante",
      "Maintenir une application en conditions opérationnelles",
    ],
    ac: [
      "Élaborer et implémenter les spécifications fonctionnelles et non-fonctionnelles",
      "Appliquer des principes d’accessibilité et d’ergonomie",
      "Adopter de bonnes pratiques de conception et de programmation",
      "Vérifier et valider la qualité de l’application par les tests",
    ],
    ressources: [
      "Développement web et mobile",
      "Programmation orientée objet et systèmes",
      "Architecture logicielle",
      "Qualité de développement et méthodes de test",
    ],
  },
  {
    title: "Optimiser des applications informatiques",
    description: "Analyser et améliorer les performances des programmes en tenant compte des contraintes (temps, mémoire, consommation) et de l’impact environnemental.",
    ce: [
      "Améliorer les performances dans des contextes contraints",
      "Limiter l’impact environnemental d’une application",
      "Mettre en place des solutions adaptées et innovantes",
    ],
    ac: [
      "Choisir des structures de données complexes adaptées",
      "Utiliser des techniques algorithmiques avancées (optimisation, IA…)",
      "Évaluer l’impact environnemental et sociétal d’une solution",
      "Profiler, analyser et justifier le comportement d’un code",
    ],
    ressources: [
      "Algorithmique et structures de données",
      "Mathématiques appliquées à l’optimisation",
      "Analyse et profilage de code",
      "Parallélisme, calcul formel, intelligence artificielle",
    ],
  },
  {
    title: "Travailler dans une équipe informatique",
    description: "Collaborer efficacement au sein d’une équipe projet en adoptant une communication claire, des méthodes agiles et une gestion collaborative.",
    ce: [
      "Organiser son travail en relation avec celui de l’équipe",
      "Élaborer, gérer et transmettre de l’information",
      "Lancer et piloter un projet en collaboration",
    ],
    ac: [
      "Identifier son rôle et ses missions dans une équipe",
      "Acquérir des compétences interpersonnelles pour collaborer",
      "Comprendre la diversité et la structure d’une organisation informatique",
      "Rendre compte de son activité professionnelle",
    ],
    ressources: [
      "Méthodologies de gestion de projet (Agile, Scrum…)",
      "Outils collaboratifs (Git, Jira, Trello…)",
      "Communication professionnelle",
      "Management et conduite du changement",
    ],
  },
]

const masteredTechs = [
  'HTML/CSS', 'JavaScript', 'PHP', 'Flutter', 'Dart', 'Kotlin', 'Python', 'Java', 'React', 'TypeScript', 'PgSQL', 
  'MySQL', 'SQLite', 'Git', 'GitHub', 'Android', 'JetBrains', 'Chart.js', 'Pandas', 'Flask', 'QR Code', 'API REST'
]

const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'B2 (TOEIC CEFR)' },
  { name: 'Espagnol', level: 'Niveau Scolaire' }
]

const qualities = [
  'Esprit d\'équipe', 'Focus', 'Capacité à apprendre', 'Persévérance'
]

const sportsAndHobbies = [
  'Sports : Musculation, Basketball', 'Musique', 'Jeux vidéo'
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="skills" className="py-20 relative bg-gray-50">
      <div className="absolute inset-0 skill-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mes Compétences</span>
          </h2>
          <p className="text-xl text-gray-600">Expertise technique et savoir-faire professionnel</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3 border-gray-100">{skill.title}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">{skill.description}</p>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Situations professionnelles (CE)
                    </h4>
                    <ul className="space-y-2.5 mt-3">
                      {skill.ce.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1.5">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Apprentissages Critiques (AC)
                    </h4>
                    <ul className="space-y-2.5 mt-3">
                      {skill.ac.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1.5">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Ressources associées
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skill.ressources.map((item: string, i: number) => (
                        <span key={i} className="inline-block bg-white px-3 py-1.5 rounded-full text-sm text-gray-700 border border-gray-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Maîtrisées */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-white p-8 rounded-2xl mb-8 shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Technologies Maîtrisées</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {masteredTechs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:text-primary hover:border-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <h4 className="text-xl font-bold mb-6 pb-3 border-b border-gray-100 text-gray-900">Langues</h4>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700 font-medium">{lang.name}</span>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <h4 className="text-xl font-bold mb-6 pb-3 border-b border-gray-100 text-gray-900">Qualités</h4>
            <div className="grid grid-cols-2 gap-3">
              {qualities.map((quality) => (
                <div key={quality} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm font-medium">{quality}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sports & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <h4 className="text-xl font-bold mb-6 pb-3 border-b border-gray-100 text-gray-900">Sports & Loisirs</h4>
            <div className="space-y-3">
              {sportsAndHobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{hobby}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

