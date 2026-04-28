# My Profile Site

이용욱의 포트폴리오 웹사이트입니다.

## 🚀 프로젝트 개요

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design Theme**: Light Mode (밝은 배경 + 어두운 텍스트)

## 📁 프로젝트 구조

```
my-profile-site/
├── specs/              # 요구사항 문서
│   ├── prd.md         # 프로덕트 요구사항
│   ├── trd.md         # 기술 요구사항
│   └── implementation-plan.md # 구현 계획 및 변경 이력
├── src/
│   ├── components/    # React 컴포넌트
│   │   ├── common/
│   │   │   └── SectionWrapper.tsx # 섹션 공통 래퍼
│   │   ├── Hero.tsx           # 프로필 소개 섹션
│   │   ├── Projects.tsx       # 타임라인 프로젝트 섹션
│   │   ├── Skills.tsx         # 기술스택 섹션
│   │   └── Contact.tsx        # 연락처 섹션
│   ├── constants/     # 상수 정의
│   │   ├── navigation.ts      # 네비게이션 항목
│   │   └── skillColors.ts     # Skills 색상 매핑
│   ├── data/          # 정적 JSON 데이터
│   │   ├── profile.json       # 프로필 정보
│   │   └── projects.json      # 프로젝트 상세 데이터
│   ├── types/         # TypeScript 타입 정의
│   │   └── index.ts
│   ├── App.tsx        # 메인 애플리케이션 컴포넌트
│   ├── main.tsx       # 진입점
│   └── index.css      # 전역 스타일
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 에 접속하시면 됩니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

### 4. 빌드된 파일 미리보기
```bash
npm run preview
```

## 📝 데이터 수정

### 프로필 정보 수정
`src/data/profile.json` 파일에서 다음 항목을 수정할 수 있습니다:
- 이름, 직책
- 경력년수
- 기술스택 (Backend, Frontend, Database, DevOps, Geospatial)
- 연락처 (이메일, 전화, GitHub)

### 프로젝트 정보 수정
`src/data/projects.json` 파일에서 프로젝트 정보를 수정할 수 있습니다:
- 프로젝트명, 역할
- 기간 (`YYYY.MM` 형식, 최신순 자동 정렬)
- 설명, 성과
- 기술 태그 (태그 필터링에 자동 반영)
- `url`: 프로젝트 링크 (선택, 있으면 카드에 링크 표시)
- `category`: 분류 (선택, 예: `'web'`, `'gis'`, `'infra'`)

## 🎨 섹션 설명

### Hero Section
- 프로필 사진 (placeholder)
- 이름, 직책, 경력 요약
- 이메일 / GitHub 버튼

### Projects Section
- 시간순 타임라인 레이아웃 (년+월 기준 자동 정렬)
- 데스크탑: 좌우 교차 배치
- 모바일: 좌측 도트 타임라인
- 태그 필터링: 기술 태그 클릭으로 프로젝트 필터링
- 더보기: 초기 4개 표시 후 4개씩 추가 로드

### Skills Section
- 카테고리별 기술 뱃지
- Geospatial 전문성 강조
- 시각적 계층 구조

### Contact Section
- 이메일, 전화, GitHub 카드
- Hover 효과

## ✨ 특징

- ✅ 완전 반응형 (모바일 / 태블릿 / 데스크탑)
- ✅ TypeScript로 타입 안전성 확보
- ✅ Tailwind CSS로 일관된 스타일링
- ✅ 정적 JSON 데이터 (DB 불필요)
- ✅ SEO 최적화 (메타태그)
- ✅ 태그 기반 프로젝트 필터링
- ✅ 더보기 페이지네이션 (UX 최적화)
- ✅ SectionWrapper 공통 컴포넌트로 일관된 섹션 구조

## 📱 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 📄 라이선스

MIT License

---

**Created with React + Vite + TypeScript + Tailwind CSS**
