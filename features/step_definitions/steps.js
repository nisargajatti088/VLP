const { Given, When, Then } = require('@cucumber/cucumber')
const { EmployeePage } = require("../../PageObjects/EmployeePage.js");
const { LoginPage } = require("../../PageObjects/LoginPage.js");
const { expect } = require('@playwright/test');
const playwright = require('playwright');

Given('a login to the VLP application with {string} and {string}', async function (username, password) {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    this.loginPage = new LoginPage(page);
    this.employee = new EmployeePage(page);

    await this.loginPage.goTo();
    await this.loginPage.validLogin(username,password);
});

When('I create a new employee', async function () {
    await this.employee.sidebar();
    await this.employee.create("Sachin","Jatti","sachi@gmail.com");
});

Then('verify that the employee is created successfully', async function () {
    const successMessage = this.employee.page.locator(".toast-message");
    await expect(successMessage).toHaveText(" Employee created successfully ");
});