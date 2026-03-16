const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { JobtypePage } = require('../PageObjects/Jobtype');

test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const jobtypePage = new JobtypePage(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';
    
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
    await jobtypePage.addjobtype();
    await jobtypePage.editjobtype();

});