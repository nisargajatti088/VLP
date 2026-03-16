const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { Statusgroup } = require("../PageObjects/Statusgroup");

test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const statusgroup= new Statusgroup(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';
    
    await loginPage.goTo();
    await loginPage.validLogin(username, password); 
    await statusgroup.createstatusgroup( );
    await statusgroup.editstatusgroup( );

});