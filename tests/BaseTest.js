import{test as base, expect, chromium} from "@playwright/test";
import{HomePage} from "../Pages/HomePage"


export const test = base.extend({
    homepage: async ({page}, use) => {
    // browser = await chromium.launch({ headless: false, channel: "chrome" });
    // const page = await browser.newPage();
    await page.goto('https://automationexercise.com/');
    const homepage = new HomePage(page);
    await use(homepage);

    // await page.close();
    // await browser.close();
    },

    loginpage: async({homepage}, use) => {
       const loginpage = await homepage.navigateToLoginSignupPage();
        await use(loginpage);
    }
})


export{expect};