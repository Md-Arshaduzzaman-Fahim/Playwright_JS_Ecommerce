import{LoginPage} from "../Pages/LoginPage"

export class HomePage{
    constructor(page){
        this.page = page;
        this.header = "//h1/span[contains(text(), 'Automation')]";
        this.login_signup_link = "//a[text()=' Signup / Login']";  
    }

    async verifyTloginLink(){
        return  await this.page.locator(this.login_signup_link);
    }

    async navigateToLoginSignupPage(){
        await this.page.locator(this.login_signup_link).click()
        return  new LoginPage(this.page);
    }



}