import { test, expect } from '@playwright/test';

test('정상 주문 플로우', async ({ page }) => {
  // 1. 로그인
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);

  // 2. 상품 상세 페이지 → 장바구니 담기
  await page.click('[data-test="item-4-title-link"]');
  await page.click('[data-test="add-to-cart"]');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 3. 장바구니 → 결제
  await page.click('[data-test="shopping-cart-link"]');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'TEST');
  await page.fill('[data-test="lastName"]', 'PLAYWRIGHT');
  await page.fill('[data-test="postalCode"]', '0000');
  await page.click('[data-test="continue"]');

  // 4. 주문 완료
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
