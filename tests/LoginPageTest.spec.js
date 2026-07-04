import { test, expect } from "./BaseTest";
import{LoginPage} from "../Pages/LoginPage";
import { SuccessfulAccountCreatePage } from "../Pages/SuccessfulAccountCreatePage";

let loginpage;
let signuppage;
let success_message_page;

test.beforeEach("before test", async ({ homepage }) => {
 
  console.log(await homepage.verifyTloginLink());
  await expect(await homepage.verifyTloginLink()).toBeVisible();
   loginpage = await homepage.navigateToLoginSignupPage();
  
});

test("login test", async()=>{
await expect(await loginpage.verifyloginpage()).toBeVisible();

})

test("signup test", async()=>{
signuppage = await loginpage.navigateToSignup("Gojo","Gojoxsatoru271@gmail.com");
await expect(await signuppage.verifySignupPage()).toBeVisible();
success_message_page = await signuppage.createAccount("1234", "10", "October", "1997", "Gojo", "Satoru", "Jujutsu High", 
  "11/6 miyashima street", "Australia", "Tokyo", "Shinjuku", "1200", "99876546752")
await expect(await success_message_page.verifySuccessMessage()).toBe(true);
await expect(await success_message_page.verifySuccessfulNavigationToHomePage()).toBe(true);
})