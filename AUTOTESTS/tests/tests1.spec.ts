import { test, expect } from '@playwright/test'

test('verifying the block name', async ({ page }) => {
  await page.goto('https://www.mts.by/')
  await expect(page.locator('section.pay h2')).toHaveText(/Онлайн пополнение без комиссии/)
});

test('Checking for logos', async ({ page }) => {
    await page.goto('https://www.mts.by/')
    await page.locator('div.pay__partners ul').scrollIntoViewIfNeeded()
    await expect(page.locator('div.pay__partners ul')).toBeVisible()
})
test('check the link - learn more about the service', async({ page }) => {
    await page.goto('https://www.mts.by/')
    await page.locator('button#cookie-agree').click()
    await page.locator('section.pay a').scrollIntoViewIfNeeded()
    await page.locator('section.pay a').click()
    await expect(page.locator('div.container-fluid h3').first()).toHaveText(/Оплата банковской картой/)
})
test('check the operation of the button - continue', async({ page }) =>{
  await page.goto('https://www.mts.by/')
  await page.locator('button#cookie-agree').click()
  await page.locator('input[placeholder="Номер телефона"]').scrollIntoViewIfNeeded()
  await page.locator('input[placeholder="Номер телефона"]').fill("(29)777-77-77")
  await page.locator('input[placeholder="Сумма"]').first().fill("100")
  await page.locator('button.button__default[type=submit]').first().click()
  const frame = page.frameLocator('iframe.bepaid-iframe')
  await expect(frame.locator('section.payment-page')).toBeVisible()
})

