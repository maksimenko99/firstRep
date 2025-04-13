import { test, expect } from '@playwright/test'
import { PayPage } from '../pages/PayPage'
import { HomePage } from '../pages/HomePage'

test('PayPage', async ({ page }) => {
let payPage: PayPage = new PayPage(page)
let homePage: HomePage = new HomePage(page)

})