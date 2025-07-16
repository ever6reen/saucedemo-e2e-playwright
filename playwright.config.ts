// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 테스트 파일들이 들어 있는 폴더

  // 병렬 테스트 설정
  retries: 0,
  workers: 3, // 기본값: CPU 수만큼 병렬 실행

  // 테스트 공통 설정
  use: {
    headless: true, // 창 없이 실행
    storageState: 'auth/storageState.json', // 로그인 상태 저장
    screenshot: 'only-on-failure', // 실패 시 스크린샷
    video: 'retain-on-failure',    // 실패 시 비디오 저장
    trace: 'on-first-retry',       // 실패 시 트레이스 파일 생성
  },

  // 브라우저별 테스트 프로젝트 정의
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
