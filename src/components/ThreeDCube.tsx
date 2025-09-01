'use client'

import { motion } from 'framer-motion'

export default function ThreeDCube() {
  return (
    <div className="w-full h-[500px] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
      
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
        <div className="absolute w-32 h-32 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-90 border border-white/30 backdrop-blur-sm"
             style={{ transform: 'rotateY(0deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-secondary/80 to-accent/80 opacity-90 border border-white/30 backdrop-blur-sm"
             style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-accent/80 to-primary/80 opacity-90 border border-white/30 backdrop-blur-sm"
             style={{ transform: 'rotateY(180deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-90 border border-white/30 backdrop-blur-sm"
             style={{ transform: 'rotateY(-90deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-secondary/80 to-accent/80 opacity-90 border border-white/30 backdrop-blur-sm"
             style={{ transform: 'rotateX(90deg) translateZ(64px)' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-accent/80 to-primary/80 opacity-90 border border-white/30 backdrop-blur-sm"
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
        className="absolute top-10 left-10 w-2 h-2 bg-primary/80 rounded-full shadow-sm"
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
        className="absolute bottom-10 right-10 w-3 h-3 bg-accent/80 rounded-full shadow-sm"
      />
    </div>
  )
}
