const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Page Objects/LoginPage');

test('Page Playwright test', async ({ page }) => {

    const username = "sandeshd@ekfrazo.in";
    const password = "1234";

    const loginPage = new LoginPage(page);

    await loginPage.goTo();   
    await loginPage.validLogin(username, password);   

});
