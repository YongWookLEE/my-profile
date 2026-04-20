import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Profile, Project } from './types'
import profileData from './data/profile.json'
import projectsData from './data/projects.json'

function App() {
  const [profile] = useState<Profile>(profileData)
  const [projects] = useState<Project[]>(projectsData)

  useEffect(() => {
    // Set document title
    document.title = `${profile.name} - ${profile.title}`
  }, [profile])

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold text-indigo-600">
            {profile.name}
          </a>
          <div className="flex gap-8">
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero profile={profile} />
        <Projects projects={projects} />
        <Skills techStack={profile.techStack} />
        <Contact contact={profile.contact} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
