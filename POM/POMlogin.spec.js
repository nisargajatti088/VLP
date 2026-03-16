const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { log } = require('node:console');

test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';

    await loginPage.goTo();
    await loginPage.validLogin("Sand@.in", "");

    await expect(page.getByText("Email Id is invalid.")).toBeVisible();
    await expect(page.getByText("Password is required.")).toBeVisible();

    await loginPage.validLogin("Sandesh@ekra.in", "12");
    console.log(await page.locator('.ng-trigger-flyInOut').textContent());

    await loginPage.validLogin(username, password);
    console.log(await page.locator('[aria-label*="Login"]').textContent());
   
    await expect(page).toHaveTitle("VLP");

    await loginPage.logout();
    console.log(await page.locator('.toast-success').first().textContent());

    await loginPage.forgot("");


});
