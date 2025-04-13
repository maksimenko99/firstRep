import { test, expect } from '@playwright/test'
import { PayPage } from '../pages/PayPage'
import { HomePage } from '../pages/HomePage'

test.only('PayPage', async ({ page }) => {
    let payPage: PayPage = new PayPage(page)
    const amount: string = '100'
    await payPage.openPayPage(amount)
    await payPage.checkingTheCorrectnessOfTheAmount()
    await payPage.checkingThecorrectnessOfTheAmountOnTheButton(amount)
    await payPage.expectCardInputPlaceholderAreVisible()
})



