import { test, expect } from '@playwright/test'
import { PayPage } from '../pages/PayPage'
import { HomePage } from '../pages/HomePage'

test.beforeEach(async ({ page, context }) => {
    let homePage: HomePage = new HomePage(page)
    await context.addCookies([{name: 'BITRIX_SM_COOKIES_AGREEMENT', value: 'yes', path: '/', domain: 'www.mts.by'}])
    await homePage.goTo()
  })

test('Check pay page modal inputs', async ({ page }) => {
    let payPage: PayPage = new PayPage(page)
    const amount: string = '100'
    await payPage.openPayPage(amount)
    await payPage.expectAmountValueToBeVisible()
    await payPage.expectButtonAmountValueEqual(amount)
    await payPage.expectCardInputPlaceholdersAreVisible()
})



