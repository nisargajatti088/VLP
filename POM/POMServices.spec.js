const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { Service } = require("../PageObjects/Service");


test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const service= new Service(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';

    await loginPage.goTo();
    await loginPage.validLogin(username, password);

    await service.createserv();

});