## 🧪 SauceDemo E2E 테스트 자동화 (Playwright 기반)

이 프로젝트는 [SauceDemo](https://www.saucedemo.com/) 사이트를 대상으로 **Playwright** + **TypeScript** 기반의 E2E 테스트 자동화 시연을 목적으로 합니다.

### 📋 테스트 시나리오

1. 로그인 페이지 접속
2. 사용자 ID/PW 입력 후 로그인
3. 상품 1개를 장바구니에 담기
4. 장바구니 페이지에서 상품 확인
5. 결제 진행 (Checkout)
6. 사용자 정보 입력
7. 결제 완료 후 “Thank you for your order!” 메시지 확인

### ▶️ 테스트 실행

```bash
npx playwright test
```

### 🔍 브라우저 커버리지

Playwright 설정 파일(playwright.config.ts)을 통해
다음 3가지 브라우저에서 테스트가 병렬 실행되도록 구성되어 있습니다.

- ✅ Chromium (Chrome, Edge)
- ✅ Firefox
- ✅ WebKit (Safari engine)

### ⚙️ 주요 설정 요약

- **headless mode** 로 테스트 실행
- 브라우저별 **병렬 테스트** 실행
- 실패 시 **스크린샷, 비디오, trace 파일 자동 저장**

### 📁 폴더 구조

saucedemo-e2e-playwright/
├── tests/
│   └── order-flow.spec.ts        # 테스트 코드
├── playwright.config.ts          # Playwright 설정
├── test-results/                 # 실행 결과 (자동 생성)
├── package.json
├── tsconfig.json
└── README.md

### 📦 기술 스택 

- 테스트 도구: Playwright
- 언어: TypeScript
- 실행환경: Node.js
- 테스트 대상: SauceDemo (쇼핑몰 시뮬레이션 사이트)