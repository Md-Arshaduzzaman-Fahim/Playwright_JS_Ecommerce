import { test, expect } from "./BaseTest";
import{LoginPage} from "../Pages/LoginPage";
import { SuccessfulAccountCreatePage } from "../Pages/SuccessfulAccountCreatePage";
import users from "../Test-Data/users.json";


test.describe.configure({mode:"serial"});

test("Test Case 1: Register User", async({homepage, loginpage})=>{
await expect(await homepage.verifyTloginLink()).toBeVisible();
await expect(await loginpage.verifyloginpage()).toBeVisible();
const signuppage = await loginpage.navigateToSignup(users.signup1.username, users.signup1.email);
await expect(await signuppage.verifySignupPage()).toBe(true);
const success_message_page = await signuppage.createAccount(users.userInfo1)
await expect(await success_message_page.verifySuccessMessage()).toBe(true);
await expect(await success_message_page.verifySuccessfulNavigationToHomePage()).toBe(true);
})


test("Test Case 2: Login User with correct email and password", async({loggedHomepage})=>{
    await expect(await loggedHomepage.verifySuccessfulLogin()).toBe("Gojo");

})

test("Test Case 3: Login User with incorrect email and password", async({loginpage})=>{
    await expect(await loginpage.login(users.wrongUserCreds.email, users.wrongUserCreds.password)).toBe("Your email or password is incorrect!");

})

test("Test Case 4: Logout User", async({loggedHomepage})=>{
    await expect(await loggedHomepage.logout()).toBe("https://automationexercise.com/login");

})




test("Delete account", async({loggedHomepage})=>{
    await expect(await loggedHomepage.deleteAccount()).toBe("Account Deleted!");
})


