import{test as base, expect, chromium} from "@playwright/test";
import{HomePage} from "../Pages/HomePage"


export const test = base.extend({
    homepage: async ({browser}, use) => {
    browser = await chromium.launch({ headless: false, channel: "chrome" });
    const page = await browser.newPage();
    await page.goto('https://automationexercise.com/');
    const homepage = new HomePage(page);
    await use(homepage);

    await page.close();
    }
})


export{expect};