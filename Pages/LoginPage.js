export class LoginPage{
    constructor(page){
        this.page = page;
        this.verifyloginpagetitle = "//h2[text()='New User Signup!']"
    }

    async verifyloginpage(){
       return await this.page.locator(this.verifyloginpagetitle);
    }
}