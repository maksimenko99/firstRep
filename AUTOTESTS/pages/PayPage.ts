import { expect, Page } from "@playwright/test";
import { HomePage } from '../pages/HomePage';

export class PayPage {
    page: Page

    constructor(page:Page){
        this.page = page
    }

    getFrame() {
        return this.page.frameLocator('iframe.bepaid-iframe')
    }

    async openPayPage(amount: string){
        let homePage: HomePage = new HomePage(this.page)
        await homePage.fillPayFormPhoneNumber()
        await homePage.fillPayFormAmount(amount)
        await homePage.clickPayFormContinue()
    }
    
    async expectAmountValueToBeVisible(){
        await expect(this.getFrame().locator('div.payment-page__order-description.pay-description')).toBeVisible()
    }

    async expectButtonAmountValueEqual(amount: string){
        await expect(this.getFrame().getByRole('button', { name: `Оплатить  ${amount}.00 BYN` })).toBeVisible()
    }

    async expectCardInputPlaceholdersAreVisible() {
        const placeholders = ['Номер карты', 'Срок действия', 'CVC', 'Имя и фамилия на карте']
        for (let i = 0; i < placeholders.length; i++) {
            await expect(this.getFrame().locator('label').nth(i)).toHaveText(placeholders[i])
        }
    }
}