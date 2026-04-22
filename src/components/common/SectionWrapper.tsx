import { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  background?: 'white' | 'gray'
  children: ReactNode
}

// 섹션 공통 래퍼: 모든 섹션의 반복되는 패턴을 통합
export default function SectionWrapper({
  id,
  title,
  subtitle,
  background = 'white',
  children
}: SectionWrapperProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section id={id} className={`py-20 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
