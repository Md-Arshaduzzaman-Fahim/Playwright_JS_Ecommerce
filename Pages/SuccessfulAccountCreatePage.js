export class SuccessfulAccountCreatePage{
    constructor(page){
        this.page = page;
        this.success_message = this.page.locator("h2[data-qa='account-created']");
        this.continue_btn = this.page.locator("a[data-qa='continue-button']");
        this.login_as = this.page.locator("//a[text()=' Logged in as ']");
    }


    async verifySuccessMessage(){
      return  await this.success_message.isVisible();
    }

    async verifySuccessfulNavigationToHomePage(){
        await this.continue_btn.click();
        return  await this.login_as.isVisible();
    } 

}