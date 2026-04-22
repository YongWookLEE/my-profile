import { useEffect } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Profile, Project } from './types'
import { NAV_ITEMS } from './constants/navigation'
import profileData from './data/profile.json'
import projectsData from './data/projects.json'

// 정적 JSON 데이터 — 변경되지 않으므로 state 불필요
const profile = profileData as Profile
const projects = projectsData as Project[]

function App() {
  useEffect(() => {
    // 문서 제목 설정
    document.title = `${profile.name} - ${profile.title}`
  }, [])

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold text-indigo-600">
            {profile.name}
          </a>
          <div className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
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
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
