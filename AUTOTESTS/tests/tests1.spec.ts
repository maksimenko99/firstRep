import { test, expect } from '@playwright/test'
import { HomePage, ProductType } from '../pages/HomePage';

test('verifying the block name', async ({ page }) => {
  let homePage: HomePage = new HomePage(page)
  await homePage.goTo()
  await homePage.expectOnlineDepositBlockToHaveText()
});

test('Checking for logos', async ({ page }) => {
  let homePage: HomePage = new HomePage(page)
    await homePage.goTo()
    await homePage.expectLogosToBeVisible()

})
test('check the link - learn more about the service', async({ page }) => {
  let homePage: HomePage = new HomePage(page)
    await homePage.goTo()
    await homePage.clickCookie()
    await homePage.scrollAndClickMoreInfo()
    await homePage.expectPayBankCardToHaveText()
})
test('check the operation of the button - continue', async({ page }) =>{
  let homePage: HomePage = new HomePage(page)
  await homePage.goTo()
  await homePage.clickCookie()
  await homePage.scrollAndFillPhoneNumber()
  await homePage.fillAmount()
  await homePage.clickContinue()
  const frame = page.frameLocator('iframe.bepaid-iframe')
  await expect(frame.locator('section.payment-page')).toBeVisible()
})

test('the field for the phone number', async ({ page }) => {
  let homePage: HomePage = new HomePage(page)
  await homePage.goTo()
  await homePage.clickCookie()
  await homePage.scrollIntoViewIfNeeded()
  await homePage.expectPayFormDropToHaveText('Услуги связи')
  await homePage.expectNumbersPhoneToBeVisible()
  await homePage.expectAmountToBeVisible(ProductType.connection)
  await homePage.expectMailToBeVisible()
  await homePage.selectPayFormOption('Домашний интернет')
  await homePage.expectPayFormDropToHaveText('Домашний интернет')
  await homePage.expectNumbersAbonementToBeVisible()
  await homePage.expectAmountToBeVisible(ProductType.internet)
  await homePage.expectInternetMailToBeVisible()
  await homePage.selectPayFormOption('Рассрочка')
  await homePage.expectPayFormDropToHaveText('Рассрочка')
  await homePage.expectAccountNumberToBeVisible()
  await homePage.expectAmountToBeVisible(ProductType.installment)
  await homePage.expectCreditEmailToBeVisible()

})



