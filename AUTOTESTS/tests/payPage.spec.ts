import { test, expect } from '@playwright/test'
import { PayPage } from '../pages/PayPage'
import { HomePage } from '../pages/HomePage'

test('Check pay page modal inputs', async ({ page }) => {
    let payPage: PayPage = new PayPage(page)
    const amount: string = '100'
    await payPage.openPayPage(amount)
    await payPage.expectAmountValueToBeVisible()
    await payPage.expectButtonAmountValueEqual(amount)
    await payPage.expectCardInputPlaceholdersAreVisible()
})



