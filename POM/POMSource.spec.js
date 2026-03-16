const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { Service, Source } = require("../PageObjects/Source");

test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const source= new Source(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';

    await loginPage.goTo();
    await loginPage.validLogin(username, password);

    await source.createsource(  "LinkedIn");
    await source.editsource( );

})
