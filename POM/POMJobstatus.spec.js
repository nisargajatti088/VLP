const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { JobstatusPage } = require('../PageObjects/Jobstatus');

test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const jobstatusPage = new JobstatusPage(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';

    await loginPage.goTo();
    await loginPage.validLogin(username, password);
    await jobstatusPage.addjobstatus();
    await jobstatusPage.editjobstatus();

});