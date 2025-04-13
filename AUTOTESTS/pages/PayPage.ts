import { Page } from "@playwright/test";
import { HomePage, ProductType } from '../pages/HomePage';

export class PayPage{
    page: Page

constructor(page:Page){
    this.page = page
}

async openPayPage(){
    let homePage: HomePage = new HomePage(this.page)
    await homePage.scrollAndFillPhoneNumber()
}
}