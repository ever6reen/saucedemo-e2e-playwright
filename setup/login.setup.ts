// setup/login.setup.ts
import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // 로그인 성공 확인
  await page.waitForURL(/inventory/);

  // 로그인 세션 저장
  await page.context().storageState({ path: 'auth/storageState.json' });

  await browser.close();
  console.log('✅ 로그인 상태 저장 완료: auth/storageState.json');
})();
