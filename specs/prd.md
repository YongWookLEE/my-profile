# Markdown 파일 생성을 위한 코드
prd_content = """# [PRD] Professional Portfolio Website: 이용욱 (Lee Yong-wook)

## 1. 프로젝트 비전 및 목표
* **비전:** 4년 차 풀스택 개발자로서의 전문성을 증명하고, 기술적 깊이와 현대적인 아키텍처 설계 능력을 시각적으로 전달하는 하이엔드 포트폴리오 구축.
* **핵심 목표:**
    1. **전문성 입증:** 공공 플랫폼 및 관제 시스템 개발 경험을 통한 안정적인 백엔드 구축 역량 강조.
    2. **기술적 현대화:** 레거시 환경에서 최신 기술 스택(Docker, AWS 등)으로의 전환 및 적용 능력 어필.
    3. **사용자 경험(UX):** 채용 담당자와 협업자가 1분 이내에 핵심 역량을 파악할 수 있는 직관적인 인터페이스 제공.

---

## 2. 사용자 및 타겟층 분석
* **주요 타겟:** IT 기업 채용 담당자, 시니어 개발자, 기술 면접관, 협업 파트너.
* **사용자 요구:** 개발자의 기술 스택 숙련도, 실제 프로젝트 기여도, 코드 품질에 대한 태도 확인.

---

## 3. 핵심 기능 요구사항 (Functional Requirements)

### 3.1. 비주얼 브랜딩 및 개인화
* **프로필 이미지 섹션:** 최상단에 신뢰감을 줄 수 있는 고해상도 얼굴 사진 배치. 호버(Hover) 시 인터랙션 추가 가능.
* **네임카드:** 이름, 현재 역할(Full-Stack Developer), 핵심 가치(Value Proposition) 명시.

### 3.2. 프로젝트 포트폴리오 (핵심 섹션)
1. **축산유통정보 다봄 리팩토링 및 개발 (2025.08 ~ 재직 중)**
    * **핵심:** 전체 페이지 버전업 및 성능 개선.
    * **기술:** Java, Spring Boot, MyBatis.
2. **광명 통합플랫폼 리팩토링 (2024.06 ~ 2024.10)**
    * **핵심:** 레거시(JSP)에서 현대적 스택(Thymeleaf, Spring Boot)으로의 성공적 전환.
3. **안양 스마트 도시 정보 플랫폼 (2023.11 ~ 2024.04)**
    * **핵심:** 50여 가지 공공 데이터 연계 및 대시보드 시각화.
4. **서울 건설공사 CCTV 통합 운영 시스템 (2022.10 ~ 2022.12)**
    * **핵심:** 실시간 데이터 모니터링 및 지도 기반 제어 시스템.

### 3.3. 기술 스택 시각화 (Skill Inventory)
* **DevOps:** **Docker** (컨테이너 기반 환경 구성 역량 강조).
* **Backend:** Java, Spring Boot, eGovframework, RestAPI.
* **Frontend:** JavaScript, jQuery, Thymeleaf, HTML5/CSS3.
* **Database:** PostgreSQL, Oracle, MariaDB, MySQL.
* **Geospatial:** GeoServer, OpenLayers, Kakao Map API (특화 기술로 별도 강조).

### 3.4. 커뮤니케이션 채널
* **이메일:** lsd1008@naver.com (네이버 이메일).
* **연락처:** 010-4414-1175.
* **Social:** GitHub, Blog 링크 버튼 연동 가능.

---

## 4. 기술 아키텍처 전략 (Technical Architecture)
* **Frontend:** React.js 또는 Next.js (SEO 최적화 및 빠른 렌더링).
* **Deployment:** **Docker** 컨테이너를 활용한 배포 파이프라인 구성.
* **Styling:** Tailwind CSS (일관된 디자인 시스템 및 반응형 대응).
* **Hosting:** Vercel 또는 AWS S3/CloudFront.

---

## 5. 비기능 요구사항 (Non-functional Requirements)
* **성능:** Lighthouse 성능 점수 90점 이상 달성.
* **반응형:** 모바일, 태블릿, 데스크탑 등 모든 디바이스 최적화.
* **접근성:** 시각적 가독성이 높은 폰트 및 색상 대비 적용.

---

## 6. 향후 확장 계획
* **Side Project 통합:** 현재 진행 중인 AI 기반 주식/코인 인사이트 플랫폼 및 Saju-MBTI 서비스 연동 섹션 추가.
* **Blog CMS:** 기술 블로그 글 자동 로드 기능 구현.
"""

# 파일 저장 로직 (ds_python_interpreter에서 실행됨)