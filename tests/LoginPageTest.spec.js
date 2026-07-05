import { test, expect } from "./BaseTest";
import{LoginPage} from "../Pages/LoginPage";
import { SuccessfulAccountCreatePage } from "../Pages/SuccessfulAccountCreatePage";
import users from "../Test-Data/users.json";

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
signuppage = await loginpage.navigateToSignup(users.signup2.username, users.signup2.email);
await expect(await signuppage.verifySignupPage()).toBe(true);
success_message_page = await signuppage.createAccount(users.userInfo1)
await expect(await success_message_page.verifySuccessMessage()).toBe(true);
await expect(await success_message_page.verifySuccessfulNavigationToHomePage()).toBe(true);
})