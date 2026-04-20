# [TRD] 이용욱 프로필 웹사이트 기술 요구사항 정의서 (v1.0)

## 1. 개요 (Overview)
본 문서는 이용욱 개발자의 개인 프로필 및 포트폴리오 웹사이트 구축을 위한 기술적 구현 방안을 정의합니다. 

* **설계 원칙:** 유지보수가 용이한 정적 웹(Static Web) 기반 접근.
* **핵심 제약:** 별도의 백엔드 API 서버와 RDBMS를 구축하지 않으며, 모든 동적 데이터는 클라이언트 사이드에서 정적 JSON 파일을 읽어와 렌더링합니다.

## 2. 시스템 아키텍처 (System Architecture)
데이터베이스 조회와 서버 사이드 비즈니스 로직이 없으므로, 클라이언트 중심의 렌더링(CSR) 또는 정적 사이트 생성(SSG) 방식을 채택합니다.

* **프론트엔드 (Client-Side):**
    * 컴포넌트 기반 아키텍처를 통해 재사용성을 극대화합니다.
    * 빌드 시점에 JSON 데이터를 병합하여 정적인 HTML/JS/CSS 에셋으로 산출합니다.
* **데이터 흐름 (Data Flow):**
    * 브라우저 -> 정적 웹 서버 (Index.html 요청) -> 정적 에셋 및 JSON 데이터 다운로드 -> 브라우저에서 DOM 렌더링.
* **배포 아키텍처 (Deployment):**
    * AWS EC2(Ubuntu) 인스턴스 환경에서 Docker Compose를 활용해 Nginx 웹 서버 컨테이너를 띄우고, 빌드된 정적 웹사이트 산출물을 서빙합니다.

## 3. 기술 스택 (Tech Stack)
| 구분 | 기술 스택 | 비고 |
| :--- | :--- | :--- |
| **Core** | React.js / Next.js | SSG(Static Site Generation) 기능 활용 |
| **Language** | TypeScript | 데이터 타입 안정성 확보 |
| **Styling** | Tailwind CSS | Utility-first CSS를 통한 빠른 퍼블리싱 |
| **Data Source** | JSON Files | `/src/data/*.json` 경로에서 관리 |
| **Infrastructure** | Docker / Nginx | 컨테이너 기반 웹 서빙 |
| **CI/CD** | GitHub Actions | 코드 푸시 시 자동 빌드 및 배포 |

## 4. 데이터 구조 설계 (Data Schema)

### 4.1 Profile Data (`profile.json`)
기본 인적 사항 및 핵심 기술 스택을 정의합니다.
```json
{
  "name": "이용욱",
  "title": "Software Engineer",
  "yearsOfExperience": 4,
  "summary": "공공 플랫폼 및 공간 정보 처리(GeoServer) 경험을 보유한 백엔드/아키텍처 전문가입니다.",
  "techStack": {
    "core": ["Java 8", "Spring", "JSP", "Oracle", "MyBatis"],
    "modern": ["Spring AI", "Docker", "Kubernetes", "React"]
  },
  "contacts": {
    "email": "example@email.com",
    "github": "https://github.com/your-id"
  }
}
```

### 4.2 Projects Data (`projects.json`)
진행한 프로젝트의 상세 이력을 리스트 형태로 관리합니다.
```json
[
  {
    "id": "project-01",
    "title": "공공 공간정보 플랫폼 구축",
    "role": "Backend / Infrastructure",
    "period": "202X.XX - 202X.XX",
    "description": "GeoServer를 활용한 공간 데이터 렌더링 및 공공 데이터 API 연동",
    "achievements": [
      "Docker 기반의 컨테이너화로 배포 환경 표준화",
      "대용량 공간 데이터 처리 속도 30% 개선"
    ],
    "tags": ["GeoServer", "Docker", "Spring", "Oracle"]
  }
]
```

## 5. 핵심 기능 구현 방안 (Functional Implementation)

### 5.1 JSON 데이터 바인딩
* 컴포넌트 단위로 JSON 데이터를 `import`하여 정적으로 바인딩합니다.
* TypeScript Interface를 정의하여 데이터 필드 누락을 방지합니다.

### 5.2 UI/UX 및 반응형 레이아웃
* **Zero-Loading:** 모든 데이터가 로컬 에셋에 포함되어 있어 네트워크 지연 없는 즉각적인 렌더링을 제공합니다.
* **Responsive Design:** Tailwind CSS의 Breakpoints를 활용하여 모바일, 태블릿, 데스크탑(4K) 환경에 최적화된 레이아웃을 제공합니다.

### 5.3 SEO (검색 엔진 최적화)
* Next.js 사용 시 `next export`를 통해 정적 페이지별로 메타 태그를 생성하여 검색 엔진 노출 확률을 높입니다.

## 6. 향후 확장성 (Future Scalability)
* 추후 관리자 페이지나 동적 데이터 추가가 필요할 경우, 본 구조를 유지하면서 Firebase나 Headless CMS(Sanity 등)로 소스만 교체하여 유연하게 확장 가능하도록 설계합니다.