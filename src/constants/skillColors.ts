import { TechStack } from '../types'

export interface CategoryColorConfig {
  label: string
  techStackKey: keyof TechStack
  color: string    // 배지 색상 클래스
  bgColor: string  // 카드 배경 클래스
}

export const SKILL_CATEGORY_COLORS: CategoryColorConfig[] = [
  {
    label: 'Backend',
    techStackKey: 'backend',
    color: 'bg-blue-100 text-blue-800',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Frontend',
    techStackKey: 'frontend',
    color: 'bg-green-100 text-green-800',
    bgColor: 'bg-green-50'
  },
  {
    label: 'Database',
    techStackKey: 'database',
    color: 'bg-purple-100 text-purple-800',
    bgColor: 'bg-purple-50'
  },
  {
    label: 'DevOps',
    techStackKey: 'devops',
    color: 'bg-orange-100 text-orange-800',
    bgColor: 'bg-orange-50'
  },
  {
    label: 'Geospatial (Specialty)',
    techStackKey: 'geospatial',
    color: 'bg-red-100 text-red-800',
    bgColor: 'bg-red-50'
  }
]
