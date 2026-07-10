import{LoginPage} from "./LoginPage"
import { ContactUsPage } from "./ContactUsPage";
import{ProductPage} from "./ProductPage";

export class HomePage{
    constructor(page){
        this.page = page;
        this.header = this.page.locator("//h1/span[contains(text(), 'Automation')]");
        this.login_signup_link = this.page.locator("//a[text()=' Signup / Login']");  

        this.loggedin_user = this.page.locator("//a/b[text()]");
        this.logoutBtn = this.page.locator("//a[text()=' Logout']");

        this.delete_account = this.page.locator("//a[text()=' Delete Account']");

        this.account_delete_msg = this.page.locator("//h2/b[text()]");

        this.contact_us_link = this.page.getByRole("link", {name: " Contact us"});

        this.product_page_link = this.page.getByRole("link", {name:" Products"});
    }

    async verifyTloginLink(){
        return  await this.login_signup_link;
    }

    async navigateToLoginSignupPage(){
        await this.login_signup_link.click()
        return  new LoginPage(this.page);
    }


    async verifySuccessfulLogin(){
      return await this.loggedin_user.textContent()
    }

    async logout(){
        await this.logoutBtn.click();
        await this.page.waitForURL("https://automationexercise.com/login");
        return this.page.url();
    }


    async deleteAccount(){
        await  this.delete_account.click();
      return  await this.account_delete_msg.textContent();
    }


    async navigateToContactUsPage(){
        await this.contact_us_link.click();
        return new ContactUsPage(this.page)   
        
    }

    async navigateToProductPage(){
        await this.product_page_link.click();
        return new ProductPage(this.page);
    }

}