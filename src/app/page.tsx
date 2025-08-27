'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ParticlesBackground from '@/components/ParticlesBackground'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollIndicator from '@/components/ScrollIndicator'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <>
      <ParticlesBackground />
      <Navigation />
      <ScrollIndicator />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p>© 2024 Portfolio. Tous droits réservés.</p>
      </footer>
    </>
  )
}

