import { TechStack } from '../types'

interface SkillsProps {
  techStack: TechStack
}

interface SkillCategory {
  label: string
  skills: string[]
  color: string
  bgColor: string
}

export default function Skills({ techStack }: SkillsProps) {
  const categories: SkillCategory[] = [
    {
      label: 'Backend',
      skills: techStack.backend,
      color: 'bg-blue-100 text-blue-800',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Frontend',
      skills: techStack.frontend,
      color: 'bg-green-100 text-green-800',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Database',
      skills: techStack.database,
      color: 'bg-purple-100 text-purple-800',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'DevOps',
      skills: techStack.devops,
      color: 'bg-orange-100 text-orange-800',
      bgColor: 'bg-orange-50'
    },
    {
      label: 'Geospatial (Specialty)',
      skills: techStack.geospatial,
      color: 'bg-red-100 text-red-800',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-xl text-gray-600">
            다양한 기술 스택을 활용한 풀스택 개발 경험
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.label}
              className={`${category.bgColor} rounded-lg p-6 border border-gray-200`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${category.color} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Geospatial Highlight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-500">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📍</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Geospatial Expertise
              </h3>
              <p className="text-gray-700">
                GeoServer, OpenLayers, Kakao Map API를 활용한 지리 공간 데이터 처리 및 지도 기반 시각화에 특화되어 있습니다.
                공공 데이터 통합 및 실시간 모니터링 시스템 구축 경험이 풍부합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
