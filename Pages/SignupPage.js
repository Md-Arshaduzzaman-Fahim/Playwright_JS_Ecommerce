export class SignupPage{
    constructor(page){
        this.page = page;
        this.header = this.page.locator("//h2/b[text()='Enter Account Information']");
    }

    async verifySignupPage(){
       return await this.header;
    }
}