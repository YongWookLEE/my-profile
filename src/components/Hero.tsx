import { Profile } from '../types'

interface HeroProps {
  profile: Profile
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="hero" className="flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4 py-12">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={profile.name}
                className="w-56 h-72 rounded-lg object-cover shadow-lg border border-gray-200"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-indigo-600 font-semibold uppercase tracking-widest text-sm">Welcome to my portfolio</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {profile.name}
              </h1>
              <p className="text-xl text-gray-700 font-light">
                {profile.title}
              </p>
            </div>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                {profile.yearsOfExperience}년 경력의 풀스택 개발자입니다.
              </p>
              <p>
                {profile.summary}
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
