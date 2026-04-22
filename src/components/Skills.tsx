import { TechStack } from '../types'
import { SKILL_CATEGORY_COLORS } from '../constants/skillColors'
import SectionWrapper from './common/SectionWrapper'

interface SkillsProps {
  techStack: TechStack
}

export default function Skills({ techStack }: SkillsProps) {
  // 외부 상수에서 카테고리 정의를 가져와 현재 techStack과 결합
  const categories = SKILL_CATEGORY_COLORS.map((cat) => ({
    ...cat,
    skills: techStack[cat.techStackKey]
  }))

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Tech Stack"
      subtitle="다양한 기술 스택을 활용한 풀스택 개발 경험"
      background="white"
    >
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

      {/* 지오스패셜 전문성 하이라이트 */}
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
    </SectionWrapper>
  )
}
