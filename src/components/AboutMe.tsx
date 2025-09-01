'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-base-100 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Photo */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl bg-gray-200">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/img/photo-pro.jpg`}
                alt="Alexandre Ginisty"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-red-100 text-red-700 p-4 text-center">
                      Image non trouvée: ${target.src}
                    </div>
                  `;
                }}
              />
            </div>
          </div>
          
          {/* About Text */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">À propos de moi</h2>
            <div className="h-1 w-20 bg-accent"></div>
            
            <p className="text-lg md:text-xl text-base-content">
              Je m'appelle <span className="font-semibold text-primary">Alexandre Ginisty</span>, j'ai 20 ans et je suis un développeur full-stack passionné par la création de solutions numériques innovantes.
            </p>
            
            <div className="space-y-4">
              <p>
                Actuellement en alternance au service SINUM à la préfecture du Val-de-Marne, je travaille sur des projets variés allant du développement web au mobile, en passant par la gestion de bases de données.
              </p>
              
              <p>
                Je suis actuellement en BUT Informatique option développement d'application à l'IUT de Vitry-sur-Seine (UPEC), avec une intégration prévue en cycle ingénieur à l'Efrei en spécialisation LSI à partir de septembre 2025.
              </p>
              
          
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
