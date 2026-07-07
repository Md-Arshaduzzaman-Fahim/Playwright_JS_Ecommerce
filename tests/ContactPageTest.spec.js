import { test, expect } from "./BaseTest";
import contactUsData from "../Test-Data/contactUsData.json";
import validationData from "../Test-Data/validationData.json";

test("Test Case 6: Contact Us Form", async({contactpage}) =>{
    await expect(await contactpage.verifyGetinTouchText()).toBe(validationData.contact_page_validation);
    await expect(await contactpage.fillForm(contactUsData)).toBe(validationData.contact_success_message);

   //await contactpage.fillForm(contactUsData);
  
  // 2. ✅ FIX: Use toHaveText on the locator directly. 
  // Playwright will now wait up to 5 seconds for the message to pop up!
  //await expect(contactpage.success_message).toHaveText(validationData.contact_success_message);

})

