const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { EmployeePage } = require("../PageObjects/EmployeePage");


test('Validate login error messages', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const employee = new EmployeePage(page);
    const username='admin@vedalekha.com';
    const password='Admin@123#';

    await loginPage.goTo();
    await loginPage.validLogin(username, password);
    
    await employee.sidebar();

    await employee.create("Sachin","Jatti","sachi@gmail.com")

});