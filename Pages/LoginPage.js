import { SignupPage } from "./SignupPage";
import { HomePage } from "./HomePage";

export class LoginPage{
    constructor(page){
        this.page = page;
        this.verifyloginpagetitle = this.page.locator("//h2[text()='New User Signup!']");
        this.name = this.page.locator("//input[@data-qa='signup-name']");
        this.email = this.page.locator("//input[@data-qa='signup-email']");
        this.button = this.page.getByRole('button',{name:"Signup"});

        this.login_email = this.page.locator("input[data-qa='login-email']");
        this.login_password = this.page.locator("input[data-qa='login-password']");
        this.login_button = this.page.getByRole("button",{name: "Login"});

       // this.login_error_msg = this.page.$$("//p[text()='Your email or password is incorrect!']");
        this.login_error_msg = this.page.locator("//p[@style='color: red;' or text()='Your email or password is incorrect!']");
       this.isPresent = false;
    }

    async verifyloginpage(){
       return await this.verifyloginpagetitle;
    }

    async navigateToSignup(name,email){
        await this.name.fill(name);
        await this.email.fill(email);
        await this.button.click();
        return new SignupPage(this.page);
    }

    async login(user_email, password){
        await this.login_email.fill(user_email);
        await this.login_password.fill(password);
        await this.login_button.click();

        try{
            if (await this.login_error_msg.isVisible()){
            this.isPresent = true;
        }

        }

        catch (error){
            console.log("Correct credentials");
        }

        if (this.isPresent){
            return await this.login_error_msg.textContent();
        }

        else{
            return new HomePage(this.page);
        }

    }
}