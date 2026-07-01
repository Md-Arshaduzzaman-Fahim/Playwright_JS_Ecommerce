export class SignupPage{
    constructor(page){
        this.page = page;
        this.header = "//h2/b[text()='Enter Account Information']";
    }

    async verifySignupPage(){
       return await this.page.locator(this.header);
    }
}