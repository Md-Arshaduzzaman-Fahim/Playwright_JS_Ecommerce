import{test as base, expect, chromium} from "@playwright/test";
import{HomePage} from "../Pages/HomePage";
import users from "../Test-Data/users.json";

export const test = base.extend({
    homepage: async ({page}, use) => {
    // browser = await chromium.launch({ headless: false, channel: "chrome" });
    // const page = await browser.newPage();
    await page.goto('/');
    const homepage = new HomePage(page);
    await use(homepage);

    // await page.close();
    // await browser.close();
    },

    loginpage: async({homepage}, use) => {
       const loginpage = await homepage.navigateToLoginSignupPage();
        await use(loginpage);
    },

    loggedHomepage: async({loginpage}, use) =>{
        const loggedHomepage = await loginpage.login(users.signup1.email, users.userInfo1.password);
        await use(loggedHomepage);
    },


    contactpage: async({homepage}, use) => {
        const contactpage = await homepage.navigateToContactUsPage();
        await use(contactpage);
    }

})


export{expect};