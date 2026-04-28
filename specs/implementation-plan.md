# 프로필 사이트 제작 계획

## 프로젝트 개요

이용욱 님의 포트폴리오 사이트 신규 제작

**타겟 사용자:** IT 기업 채용 담당자, 시니어 개발자, 면접관
**핵심 UX:** 1분 이내에 핵심 역량 파악 가능

**주요 결정사항:**
- 테마: 라이트 모드 (밝은 배경 + 어두운 텍스트)
- 범위: 프론트엔드만 (Docker/CI-CD 추후 작업)
- 프로젝트 레이아웃: 타임라인 형식
- 경력: 3년
- 연락처: 이메일, 전화, GitHub

---

## 기술 스택

| 레이어 | 기술 |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data | `/src/data/*.json` (정적 import) |
| 빌드 | Vite SSG |

---

## 프로젝트 구조

```
my-profile-site/
├── .codex/
│   └── rules.md             # Codex 전용 작업 규칙
├── specs/                     # 프로젝트 문서
│   ├── prd.md                # 제품 요구사항
│   ├── trd.md                # 기술 요구사항
│   ├── implementation-plan.md # 이 파일
│   └── hero-resize.md         # Hero 섹션 축소 스펙
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── SectionWrapper.tsx  # 섹션 공통 래퍼 컴포넌트 (v1.4 추가)
│   │   ├── Hero.tsx           # 프로필 소개 섹션
│   │   ├── Projects.tsx       # 타임라인 프로젝트 섹션 (필터링/페이지네이션 포함)
│   │   ├── Skills.tsx         # 기술스택 섹션
│   │   └── Contact.tsx        # 연락처 섹션
│   ├── constants/
│   │   ├── navigation.ts      # 네비게이션 상수 (v1.4 추가)
│   │   └── skillColors.ts     # Skills 색상 매핑 상수 (v1.4 추가)
│   ├── data/
│   │   ├── profile.json       # 프로필 정보
│   │   └── projects.json      # 프로젝트 상세
│   ├── types/
│   │   └── index.ts           # TypeScript 타입
│   ├── App.tsx                # 메인 컴포넌트
│   ├── main.tsx               # 진입점
│   └── index.css              # 글로벌 스타일
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── .gitignore
├── AGENTS.md
└── README.md
```

---

## 섹션별 상세 계획

### 1. Hero (프로필 네임카드)
**목적:** 포트폴리오 첫인상, 주요 연락 방법 제공

**구성:**
- 좌: 프로필 사진 (placeholder 192px)
- 우: 이름, 직책, 경력 요약, 연락처 버튼
- 버튼: Email, GitHub

**특징:**
- 반응형: 모바일에서 단일 스택
- Hover 애니메이션 (사진)

---

### 2. Projects (타임라인)
**목적:** 핵심 프로젝트 경력 시각화

**4개 프로젝트:**
1. 축산유통정보 다봄 리팩토링 (2025.08~진행중)
2. 광명 통합플랫폼 리팩토링 (2024.06~2024.10)
3. 안양 스마트 도시 정보 플랫폼 (2023.11~2024.04)
4. 서울 건설공사 CCTV 통합 운영 시스템 (2022.10~2022.12)

**레이아웃:**
- 데스크탑: 세로 타임라인 + 좌우 교차 카드
- 모바일: 단일 세로 스택

**카드 구성:**
- 기간 배지
- 프로젝트명, 역할
- 설명문
- 주요 성과 (bullet list)
- 기술 태그

---

### 3. Skills (기술스택 시각화)
**목적:** 보유 기술 분류 및 전문성 강조

**카테고리:**
- **Backend:** Java, Spring Boot, MyBatis, eGovframework, REST API
- **Frontend:** JavaScript, jQuery, Thymeleaf, HTML5, CSS3
- **Database:** PostgreSQL, Oracle, MariaDB, MySQL
- **DevOps:** Docker
- **Geospatial (차별화):** GeoServer, OpenLayers, Kakao Map API

**레이아웃:**
- 3열 그리드 (모바일: 1열)
- 카테고리별 색상 구분
- Geospatial 별도 강조 박스

---

### 4. Contact (연락처)
**목적:** 용이한 연락처 제공

**3가지 연락처:**
1. Email (lsd1008@naver.com)
2. Phone (010-4414-1175)
3. GitHub (https://github.com/YongWookLEE)

**특징:**
- 카드 레이아웃
- Hover 배경색 변화
- 아이콘 + 텍스트

---

## 데이터 스키마

### profile.json
```json
{
  "name": "이용욱",
  "title": "Full-Stack Developer",
  "yearsOfExperience": 3,
  "summary": "복잡한 시스템을 단순하게 만드는 것을 좋아하는 풀스택 개발자입니다...",
  "techStack": {
    "backend": ["Java", "Spring Boot", ...],
    "frontend": ["JavaScript", "jQuery", ...],
    "devops": ["Docker"],
    "database": ["PostgreSQL", "Oracle", ...],
    "geospatial": ["GeoServer", "OpenLayers", ...]
  },
  "contact": {
    "email": "lsd1008@naver.com",
    "phone": "010-4414-1175",
    "github": "https://github.com/YongWookLEE"
  }
}
```

### projects.json (배열)
```json
[
  {
    "id": 1,
    "title": "축산유통정보 다봄 리팩토링",
    "role": "풀스택 개발",
    "period": { "start": "2025.08", "end": "진행중" },
    "description": "레거시 축산 유통 정보 시스템을...",
    "achievements": [
      "Spring Boot를 이용한 마이그레이션...",
      "MyBatis 쿼리 최적화로...",
      ...
    ],
    "tags": ["Java", "Spring Boot", "MyBatis", ...]
  },
  ...
]
```

---

## TypeScript 인터페이스

```typescript
// Contact
interface Contact {
  email: string;
  phone: string;
  github: string;
}

// TechStack
interface TechStack {
  backend: string[];
  frontend: string[];
  devops: string[];
  database: string[];
  geospatial: string[];
}

// Profile
interface Profile {
  name: string;
  title: string;
  yearsOfExperience: number;
  summary: string;
  techStack: TechStack;
  contact: Contact;
}

// Period
interface Period {
  start: string;
  end: string;
}

// Project (v1.4: category?, url? 추가)
interface Project {
  id: number;
  title: string;
  role: string;
  period: Period;
  description: string;
  achievements: string[];
  tags: string[];
  category?: string; // 'web' | 'gis' | 'infra' 등 (선택)
  url?: string;      // 프로젝트 링크 (선택)
}
```

---

## 구현 체크리스트

### 초기 설정
- [x] specs 폴더 생성 (prd.md, trd.md 이동)
- [x] Vite + React + TypeScript 프로젝트 초기화
- [x] Tailwind CSS 설정
- [x] 타입 정의 (`src/types/index.ts`)
- [x] 데이터 파일 작성 (`profile.json`, `projects.json`)
- [x] `.gitignore`, `README.md` 작성

### 컴포넌트 구현
- [x] **Hero.tsx** — 프로필, 이름, 연락처 버튼
- [x] **Projects.tsx** — 타임라인 레이아웃, 4개 프로젝트 표시
- [x] **Skills.tsx** — 카테고리별 기술 뱃지, Geospatial 강조
- [x] **Contact.tsx** — 이메일/전화/GitHub 카드
- [x] **App.tsx** — 섹션 조합, 네비게이션, 푸터
- [x] **index.css** — Tailwind 글로벌 스타일

### 아키텍처 개선 (v1.4)
- [x] **SectionWrapper.tsx** — 섹션 공통 래퍼 컴포넌트 추출 (Projects, Skills, Contact 적용)
- [x] **constants/navigation.ts** — 네비게이션 항목 상수 분리
- [x] **constants/skillColors.ts** — Skills 색상 매핑 상수 분리 (`keyof TechStack` 타입 안전성)
- [x] **App.tsx** — `useState` 제거 (정적 데이터 모듈 레벨 상수로 전환), 저작권 연도 동적화
- [x] **types/index.ts** — Project 인터페이스에 `category?`, `url?` 옵셔널 필드 추가

### Projects 확장성 개선 (v1.4)
- [x] **정렬 로직** — `parsePeriod()` YYYYMM 정수 비교로 월 단위 정확 정렬
- [x] **태그 필터링** — 전체/태그 버튼 UI, 동일 태그 재클릭 시 토글 해제
- [x] **더보기 페이지네이션** — 초기 4개 표시, 4개씩 추가 로드, 필터 변경 시 초기화
- [x] **모바일 타임라인** — 숨김 → 좌측 도트+수직선 방식으로 개선
- [x] **카드 태그 클릭** — 카드 내 태그 클릭 시 필터 연동
- [x] **프로젝트 링크** — `url` 필드 있을 때 "프로젝트 보기 →" 링크 표시

### 스타일링 및 반응형
- [x] 라이트 모드 컬러 스킴
- [x] 모바일 (375px) 반응형
- [x] 태블릿 (768px) 반응형
- [x] 데스크탑 (1280px) 반응형
- [x] Hover 애니메이션

### 빌드 및 배포 준비
- [x] `npm run build` 성공
- [x] 번들 크기 최적화 (JS 50.58kB gzip)
- [x] 정적 빌드 확인

### 개발 규칙 정리 (v1.4.1)
- [x] **.codex/rules.md** — Codex 전용 작업 규칙 문서 분리
- [x] **AGENTS.md** — Codex 규칙 문서 참조 추가
- [x] **tsconfig.node.json** — `vite.config.ts` 선언 파일 출력 경로를 `.cache`로 분리해 `vite.config.js` 재생성 방지
- [x] **.gitignore** — `*.tsbuildinfo`, `.cache` 무시 규칙 추가 및 빌드 산출물 추적 정리

---

## 추가 작업 (선택)

### 단기 (프로덕션 배포 전)
- [x] 프로필 사진 실제 이미지로 교체
- [ ] Lighthouse 점수 90+ 달성 (Performance, Accessibility)
- [ ] 모바일 환경 최종 테스트
- [ ] SEO 메타태그 검증

### 중기
- [ ] Docker + Nginx 배포 환경 구성
- [ ] GitHub Actions CI/CD 자동화
- [ ] AWS EC2 배포

### 장기
- [ ] 블로그 섹션 추가
- [ ] 사이드 프로젝트 섹션 (AI 주식/코인, Saju-MBTI)
- [ ] CMS 연동 (Sanity 등)
- [ ] 다국어 지원

---

## 개발 및 빌드 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 버전 히스토리

| 버전 | 날짜 | 변경사항 |
|---|---|---|
| v1.0 | 2024 | 초기 구현 완료 (4개 섹션) |
| v1.1 | 2024 | Hero 섹션 축소 |
| v1.2 | 2026-04-16 | 프로필 사진 실제 이미지 적용 (public/profile.jpg) |
| v1.3 | 2026-04-16 | 프로필 사진 영역 확대 (192px → 224×288px) + 회색 테두리 추가 |
| v1.4 | 2026-04-22 | 아키텍처 개선 (SectionWrapper, constants 분리, App useState 제거) + Projects 확장성 개선 (태그 필터링, 더보기 페이지네이션, 모바일 타임라인) |
| v1.4.1 | 2026-04-28 | Codex 전용 규칙 문서 분리, AGENTS 연결 추가, Vite/TypeScript 빌드 산출물 추적 정리 |

---

## 참고 문서

- `prd.md` — 제품 요구사항 명세
- `trd.md` — 기술 요구사항 명세
- `hero-resize.md` — Hero 섹션 축소 상세 스펙
