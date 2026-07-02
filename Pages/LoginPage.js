import { SignupPage } from "./SignupPage";

export class LoginPage{
    constructor(page){
        this.page = page;
        this.verifyloginpagetitle = this.page.locator("//h2[text()='New User Signup!']");
        this.name = this.page.locator("//input[@data-qa='signup-name']");
        this.email = this.page.locator("//input[@data-qa='signup-email']");
        this.button = this.page.getByRole('button',{name:"Signup"});
    }

    async verifyloginpage(){
       return await this.page.locator(this.verifyloginpagetitle);
    }

    async navigateToSignup(name,email){
        await this.name.fill(name);
        await this.email.fill(email);
        await this.button.click();
        return new SignupPage(this.page);
    }
}