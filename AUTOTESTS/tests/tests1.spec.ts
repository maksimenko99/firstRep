import { test, expect } from '@playwright/test'
import { HomePage, PayFormProductType } from '../pages/HomePage';

test('Check pay form block name', async ({ page }) => {
  let homePage: HomePage = new HomePage(page)
  await homePage.goTo()
  await homePage.expectOnlineDepositBlockToHaveText()
});

test('Check pay form logos', async ({ page }) => {
  let homePage: HomePage = new HomePage(page)
    await homePage.goTo()
    await homePage.expectLogosToBeVisible()

})
test('Check pay form learn more link', async({ page }) => {
  let homePage: HomePage = new HomePage(page)
    await homePage.goTo()
    await homePage.clickCookie()
    await homePage.scrollAndClickMoreInfo()
    await homePage.expectPayBankCardToHaveText()
})
test('Check fulfilling pay form fields', async({ page }) =>{
  let homePage: HomePage = new HomePage(page)
  await homePage.goTo()
  await homePage.clickCookie()
  await homePage.fillPayFormPhoneNumber()
  await homePage.fillPayFormAmount('100')
  await homePage.clickPayFormContinue()
  const frame = page.frameLocator('iframe.bepaid-iframe')
  await expect(frame.locator('section.payment-page')).toBeVisible()
})

test('Check pay form product type widgets inputs', async ({ page }) => {
  let homePage: HomePage = new HomePage(page)
  await homePage.goTo()
  await homePage.clickCookie()
  await homePage.scrollIntoViewIfNeeded()
  await homePage.expectPayFormDropToHaveText('Услуги связи')
  await homePage.expectPayFormPhoneNumberToBeVisible()
  await homePage.expectPayFormAmountPlaceholderToBeVisible(PayFormProductType.connection)
  await homePage.expectPayFormEmailToBeVisible()
  await homePage.selectPayFormOption('Домашний интернет')
  await homePage.expectPayFormDropToHaveText('Домашний интернет')
  await homePage.expectPayFormAbNumberToBeVisible()
  await homePage.expectPayFormAmountPlaceholderToBeVisible(PayFormProductType.internet)
  await homePage.expectPayFormInternetEmailToBeVisible()
  await homePage.selectPayFormOption('Рассрочка')
  await homePage.expectPayFormDropToHaveText('Рассрочка')
  await homePage.expectPayFormAccountNumberToBeVisible()
  await homePage.expectPayFormAmountPlaceholderToBeVisible(PayFormProductType.installment)
  await homePage.expectPayFormCreditEmailToBeVisible()

})



