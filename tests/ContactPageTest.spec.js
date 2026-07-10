import { test, expect } from "./BaseTest";
import contactUsData from "../Test-Data/contactUsData.json";
import validationData from "../Test-Data/validationData.json";

test("Test Case 6: Contact Us Form", async({contactpage}) =>{
    await expect(await contactpage.verifyGetinTouchText()).toBe(validationData.contact_page_validation);
    await expect(await contactpage.fillForm(contactUsData)).toBe(validationData.contact_success_message);

   
})
