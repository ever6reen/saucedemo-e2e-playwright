import { test, expect } from '@playwright/test';

test('로그인 성공 시나리오', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user'); //
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 로그인 성공 후 페이지 이동 확인
  await expect(page).toHaveURL(/inventory/);
});
