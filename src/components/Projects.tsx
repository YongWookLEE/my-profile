import { Project } from '../types'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  // Sort projects by start date descending (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const aYear = parseInt(a.period.start.split('.')[0])
    const bYear = parseInt(b.period.start.split('.')[0])
    return bYear - aYear
  })

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            주요 프로젝트 경력을 시간순으로 정렬했습니다
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 to-indigo-200"></div>

          <div className="space-y-12">
            {sortedProjects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-indigo-600">
                    {/* Date badge */}
                    <div className="inline-block mb-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                      {project.period.start} ~ {project.period.end}
                    </div>

                    {/* Title and role */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-4">
                      {project.role}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        주요 성과
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
