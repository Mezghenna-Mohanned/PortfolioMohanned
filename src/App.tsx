import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white font-inter">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/50">
        <p>© {new Date().getFullYear()} Mezghenna Mohanned. Tous droits réservés.</p>
        <p className="mt-2">Développé avec React, TypeScript et Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App