import{LoginPage} from "../Pages/LoginPage"

export class HomePage{
    constructor(page){
        this.page = page;
        this.header = this.page.locator("//h1/span[contains(text(), 'Automation')]");
        this.login_signup_link = this.page.locator("//a[text()=' Signup / Login']");  
    }

    async verifyTloginLink(){
        return  await this.login_signup_link;
    }

    async navigateToLoginSignupPage(){
        await this.login_signup_link.click()
        return  new LoginPage(this.page);
    }



}