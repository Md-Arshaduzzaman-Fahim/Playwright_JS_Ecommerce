import { SignupPage } from "./SignupPage";

export class LoginPage{
    constructor(page){
        this.page = page;
        this.verifyloginpagetitle = "//h2[text()='New User Signup!']"
        this.name = "//input[@data-qa='signup-name']";
        this.email = "//input[@data-qa='signup-email']";
        this.button = "Signup";
    }

    async verifyloginpage(){
       return await this.page.locator(this.verifyloginpagetitle);
    }

    async navigateToSignup(name,email){
        await this.page.locator(this.name).fill(name);
        await this.page.locator(this.email).fill(email);
        await this.page.getByRole('button',{name:this.button}).click();
        return new SignupPage(this.page);
    }
}