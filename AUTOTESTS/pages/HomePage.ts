import { expect, Locator, Page } from "@playwright/test"

export class HomePage {
    page: Page

    // page.goto('https://www.mts.by/')
    // expect(page.locator('section.pay h2')).toHaveText(/Онлайн пополнение без комиссии/)
    // page.locator('div.pay__partners ul').scrollIntoViewIfNeeded()
    // expect(page.locator('div.pay__partners ul')).toBeVisible()
    // page.locator('button#cookie-agree').click()
    // page.locator('section.pay a').scrollIntoViewIfNeeded()
    // page.locator('section.pay a').click()
    // expect(page.locator('div.container-fluid h3').first()).toHaveText(/Оплата банковской картой/)
    // page.locator('button#cookie-agree').click()
    // page.locator('input[placeholder="Номер телефона"]').scrollIntoViewIfNeeded()
    // page.locator('input[placeholder="Номер телефона"]').fill("(29)777-77-77")
    // page.locator('input[placeholder="Сумма"]').first().fill("100")
    // page.locator('button.button__default[type=submit]').first().click()
    // const frame = page.frameLocator('iframe.bepaid-iframe')
    // expect(frame.locator('section.payment-page')).toBeVisible()
    constructor(page: Page){
        this.page = page

    }

    async goTo(){
       await this.page.goto('https://www.mts.by/')   
    }

    async expectOnlineDepositBlockToHaveText(){
        await expect(this.page.locator('section.pay h2')).toHaveText(/Онлайн пополнение без комиссии/)
    }

    logos: string = 'div.pay__partners ul'
    async scrollIntoViewIfNeeded(){
        await this.page.locator(this.logos).scrollIntoViewIfNeeded()
    }

    async expectLogosToBeVisible(){
        await expect(this.page.locator(this.logos)).toBeVisible()
    }

    async clickCookie(){
        await this.page.locator('button#cookie-agree').click({ force: true })
    }

    links: string = 'section.pay a'
    async scrollAndClickMoreInfo(){
        await this.page.locator(this.links).scrollIntoViewIfNeeded()
        await this.page.locator(this.links).click()
    }

    async expectPayBankCardToHaveText(){
        await expect(this.page.locator('div.container-fluid h3').first()).toHaveText(/Оплата банковской картой/)
    }

    inputs: string = 'input[placeholder="Номер телефона"]'
    async scrollAndFillPhoneNumber(){
        await this.page.locator(this.inputs).scrollIntoViewIfNeeded()
        await this.page.locator(this.inputs).fill("(29)777-77-77")
    }

    async fillAmount(){
        await this.page.locator('input[placeholder="Сумма"]').first().fill("100")
    }

    async clickContinue(){
        await this.page.locator('button.button__default[type=submit]').first().click()
    }

    payFormDrop = 'section.pay button.select__header'
    async expectPayFormDropToHaveText(text: string) {
        await expect(this.page.locator(this.payFormDrop)).toHaveText(text)
    }

    async selectPayFormOption(text: string){
        await this.page.locator(this.payFormDrop).click()
        await this.page.getByRole('paragraph').filter({ hasText: text }).click()
    }

    async expectNumbersPhoneToBeVisible(){
        await expect(this.page.locator('input#connection-phone')).toHaveAttribute('placeholder', 'Номер телефона')
    }

    async expectAmountToBeVisible(productType: ProductType){
        let formLocator: Locator
        if (productType === ProductType.connection) {
            formLocator = this.page.locator('input#connection-sum')
        } else if (productType === ProductType.internet) {
            formLocator = this.page.locator('input#internet-sum')
        } else if (productType === ProductType.installment) {
            formLocator = this.page.locator('input#instalment-sum')
        } else if (productType === ProductType.arrears) {
            formLocator = this.page.locator('input#arrears-sum')
        } else {
            throw Error
        }
        await expect(formLocator).toHaveAttribute('placeholder', 'Сумма')
    }

    async expectMailToBeVisible(){
        await expect(this.page.locator('input#connection-email')).toHaveAttribute('placeholder', 'E-mail для отправки чека')
    }

    async expectNumbersAbonementToBeVisible(){
        await expect(this.page.locator('input#internet-phone')).toHaveAttribute('placeholder', 'Номер абонента')
    }

    async expectInternetMailToBeVisible(){
        await expect(this.page.locator('input#internet-email')).toHaveAttribute('placeholder', 'E-mail для отправки чека')
    }

    async expectAccountNumberToBeVisible(){
        await expect(this.page.locator('input#score-instalment')).toHaveAttribute('placeholder', 'Номер счета на 44')
    }

    async expectCreditEmailToBeVisible(){
        await expect(this.page.locator('input#instalment-email')).toHaveAttribute('placeholder', 'E-mail для отправки чека')
    }
}

export enum ProductType {
    connection = 'Услуги связи',
    installment = 'Рассрочка',
    internet = 'Домашний интернет',
    arrears = 'Задолженость'
}
