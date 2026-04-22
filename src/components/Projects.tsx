import { useState, useMemo, useEffect } from 'react'
import { Project } from '../types'
import SectionWrapper from './common/SectionWrapper'

interface ProjectsProps {
  projects: Project[]
}

// "YYYY.MM" 형식의 날짜를 정수로 변환하여 정렬에 사용
// 예: "2025.08" → 202508, 월 정보가 없으면 01로 처리
const parsePeriod = (start: string): number => {
  const [year, month = '01'] = start.split('.')
  return parseInt(year) * 100 + parseInt(month)
}

const INITIAL_COUNT = 4
const LOAD_MORE_COUNT = 4

export default function Projects({ projects }: ProjectsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  // 최신순 정렬 (년도 + 월 기준)
  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => parsePeriod(b.period.start) - parsePeriod(a.period.start)),
    [projects]
  )

  // 중복 제거 후 정렬된 전체 태그 목록
  const allTags = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tags))].sort(),
    [projects]
  )

  // 선택된 태그로 필터링
  const filteredProjects = useMemo(
    () => selectedTag ? sortedProjects.filter((p) => p.tags.includes(selectedTag)) : sortedProjects,
    [sortedProjects, selectedTag]
  )

  // 필터 변경 시 표시 개수 초기화
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT)
  }, [selectedTag])

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProjects.length

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag))
  }

  return (
    <SectionWrapper
      id="projects"
      title="Project Portfolio"
      subtitle="주요 프로젝트 경력을 시간순으로 정렬했습니다"
      background="gray"
    >
      {/* 태그 필터 버튼 */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTag === null
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          전체
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 필터 결과 없음 메시지 */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          해당 태그의 프로젝트가 없습니다.
        </p>
      )}

      {/* 타임라인 */}
      <div className="relative">
        {/* 데스크탑 중앙 수직선 */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 to-indigo-200"></div>

        {/* 모바일 좌측 수직선 */}
        <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-200"></div>

        <div className="space-y-12">
          {visibleProjects.map((project, index) => (
            <div key={project.id} className="relative pl-10 md:pl-0">
              {/* 모바일 타임라인 도트 */}
              <div className="md:hidden absolute left-3 top-8 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-md -translate-x-1/2"></div>

              {/* 데스크탑 타임라인 도트 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">
                <div className="w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* 카드: 모바일 전체폭, 데스크탑 좌우 교번 */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-indigo-600">
                  {/* 날짜 배지 */}
                  <div className="inline-block mb-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                    {project.period.start} ~ {project.period.end}
                  </div>

                  {/* 제목 및 역할 */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-4">
                    {project.role}
                  </p>

                  {/* 설명 */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 주요 성과 */}
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

                  {/* 기술 태그 */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedTag === tag
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* 프로젝트 링크 (url 필드가 있을 때만 표시) */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      프로젝트 보기 →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 더보기 버튼 */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors"
          >
            더보기 ({filteredProjects.length - visibleCount}개 남음)
          </button>
        </div>
      )}
    </SectionWrapper>
  )
}
