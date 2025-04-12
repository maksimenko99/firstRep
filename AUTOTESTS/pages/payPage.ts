import { FrameLocator, Page } from "@playwright/test";


export class PayPage {
    page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    frame = (): FrameLocator => this.page.frameLocator('iframe.bepaid-iframe')
}