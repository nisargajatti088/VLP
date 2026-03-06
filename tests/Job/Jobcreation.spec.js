const {test,expect} = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("admin@vedalekha.com");
    await page.locator("[type='password']").fill("Admin@123#");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    
    const arrows = page.locator('.bi-arrow-down');
    await page.getByText("Create Job").click();

    const jobname = faker.person.jobTitle()
    await page.locator("[role='combobox']").first().click();
    await page.locator("[role='option']").nth(7).click();
    await page.locator("[role='combobox']").nth(1).click();
    await page.locator(".mat-option-text").nth(1).click();
    await page.locator("[role='combobox']").nth(3).click();
    await page.locator(".mat-option-text").nth(1).click();
    await page.locator("[role='combobox']").nth(4).click();
    await page.locator(".mat-option-text").first().click();
    await page.getByText("calendar_today").click();
    await page.getByText("2026 ").click();
    await page.locator("[role='combobox']").nth(5).click();
    await page.getByText(" Tester ").click();
    await page.getByPlaceholder("Enter Budget").fill(faker.string.numeric(4));
    await page.locator("[role='combobox']").nth(6).click(); 
    await page.locator(".mat-option-text").nth(3).click();      
    await page.locator("[role='combobox']").nth(7).click();
    await page.getByPlaceholder("Search Employee").fill("nisa");
    await page.locator(".mat-option-text").first().click();
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());  

    



});