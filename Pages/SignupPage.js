import{SuccessfulAccountCreatePage} from "../Pages/SuccessfulAccountCreatePage";

export class SignupPage{
    constructor(page){
        this.page = page;
        this.header = this.page.locator("//h2/b[text()='Enter Account Information']");
        this.title = this.page.locator("#id_gender1");
        this.passwrd = this.page.locator("#password");
        this.birth_date = this.page.locator("#days");
        this.birth_month = this.page.locator("#months");
        this.birth_year = this.page.locator("#years");
        this.offer = this.page.locator("#optin"); 
        this.first_name = this.page.locator("#first_name");
        this.last_name = this.page.locator("#last_name");
        this.company = this.page.locator("#company");
        this.address1 = this.page.locator("#address1");
        this.country = this.page.locator("#country");
        this.state = this.page.locator("#state");
        this.city = this.page.locator("#city");
        this.zipcode = this.page.locator("#zipcode");
        this.mobile_number = this.page.locator("#mobile_number");
        this.create_button = this.page.locator("button[data-qa='create-account']");
    }

    async verifySignupPage(){
       return await this.header.isVisible();
    }

    async createAccount(user){
        await this.title.check();
        await this.passwrd.fill(user.password);
        await this.birth_date.selectOption({value: user.birthdate});
        await this.birth_month.selectOption({label: user.birthmonth})
        await this.birth_year.selectOption({value: user.birthyear})
        await this.offer.check();
        await this.first_name.fill(user.fname);
        await this.last_name.fill(user.lname);
        await this.company.fill(user.company);
        await this.address1.fill(user.address);
        await this.country.selectOption({value: user.country});
        await this.state.fill(user.state);
        await this.city.fill(user.city);
        await this.zipcode.fill(user.zipcode);
        await this.mobile_number.fill(user.mobile);
        await this.create_button.click();

        return new SuccessfulAccountCreatePage(this.page);
    }
}