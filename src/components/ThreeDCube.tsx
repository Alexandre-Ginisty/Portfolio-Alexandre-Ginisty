'use client'

import { motion } from 'framer-motion'

export default function ThreeDCube() {
  return (
    <div className="w-full h-[500px] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
      
      {/* Animated CSS Cube */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-32 h-32"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Cube faces */}
        <div className="absolute w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-80 border border-white/20"
             style={{ transform: 'rotateY(0deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-secondary to-accent opacity-80 border border-white/20"
             style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-accent to-primary opacity-80 border border-white/20"
             style={{ transform: 'rotateY(180deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-80 border border-white/20"
             style={{ transform: 'rotateY(-90deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-secondary to-accent opacity-80 border border-white/20"
             style={{ transform: 'rotateX(90deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-accent to-primary opacity-80 border border-white/20"
             style={{ transform: 'rotateX(-90deg) translateZ(64px)' }} />
      </motion.div>
      
      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 right-10 w-3 h-3 bg-accent rounded-full"
      />
    </div>
  )
}
