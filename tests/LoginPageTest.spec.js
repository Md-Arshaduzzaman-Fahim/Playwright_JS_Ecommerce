import { test, expect } from "./BaseTest";
import{LoginPage} from "../Pages/LoginPage";
let loginpage;
let signuppage;

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
})