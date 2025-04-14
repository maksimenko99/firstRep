import { expect, Locator, Page } from "@playwright/test"

export class HomePage {
    page: Page

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
    async fillPayFormPhoneNumber(){
        await this.page.locator(this.inputs).fill("(29)777-77-77")
    }

    async fillPayFormAmount(amount: string){
        await this.page.locator('input[placeholder="Сумма"]').first().fill(amount)
    }

    async clickPayFormContinue(){
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

    async expectPayFormPhoneNumberToBeVisible(){
        await expect(this.page.locator('input#connection-phone')).toHaveAttribute('placeholder', 'Номер телефона')
    }

    async expectPayFormAmountPlaceholderToBeVisible(productType: PayFormProductType){
        let formLocator: Locator
        if (productType === PayFormProductType.connection) {
            formLocator = this.page.locator('input#connection-sum')
        } else if (productType === PayFormProductType.internet) {
            formLocator = this.page.locator('input#internet-sum')
        } else if (productType === PayFormProductType.installment) {
            formLocator = this.page.locator('input#instalment-sum')
        } else if (productType === PayFormProductType.arrears) {
            formLocator = this.page.locator('input#arrears-sum')
        } else {
            throw Error
        }
        await expect(formLocator).toHaveAttribute('placeholder', 'Сумма')
    }

    async expectPayFormEmailToBeVisible(){
        await expect(this.page.locator('input#connection-email')).toHaveAttribute('placeholder', 'E-mail для отправки чека')
    }

    async expectPayFormAbNumberToBeVisible(){
        await expect(this.page.locator('input#internet-phone')).toHaveAttribute('placeholder', 'Номер абонента')
    }

    async expectPayFormInternetEmailToBeVisible(){
        await expect(this.page.locator('input#internet-email')).toHaveAttribute('placeholder', 'E-mail для отправки чека')
    }

    async expectPayFormAccountNumberToBeVisible(){
        await expect(this.page.locator('input#score-instalment')).toHaveAttribute('placeholder', 'Номер счета на 44')
    }

    async expectPayFormCreditEmailToBeVisible(){
        await expect(this.page.locator('input#instalment-email')).toHaveAttribute('placeholder', 'E-mail для отправки чека')
    }
}

export enum PayFormProductType {
    connection = 'Услуги связи',
    installment = 'Рассрочка',
    internet = 'Домашний интернет',
    arrears = 'Задолженость'
}
