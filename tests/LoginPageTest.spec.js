import { test, expect } from "./BaseTest";
import{LoginPage} from "../Pages/LoginPage";
let loginpage;

test.beforeEach("before test", async ({ homepage }) => {
 
  console.log(await homepage.verifyTloginLink());
  await expect(await homepage.verifyTloginLink()).toBeVisible();
   loginpage = await homepage.navigateToLoginSignupPage();
  
});

test("login test", async()=>{
await expect(await loginpage.verifyloginpage()).toBeVisible();
})