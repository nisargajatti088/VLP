const {test,expect} = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("admin@vedalekha.com");
    await page.locator("[type='password']").fill("Admin@123#");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    // Click on settings/gear icon
    await page.locator(".bi-sliders").last().click();

    // Wait for the Employees element to be visible
    await page.locator('span').filter({ hasText: 'Settings' }).last().waitFor({ state: 'visible' });
    await page.locator('span').filter({ hasText: 'Job Status' }).last().click();

    await page.getByPlaceholder("Status Group").click();
    await page.locator(".mat-option-text").first().click();

    const jobStatusName = faker.lorem.word();
    await page.getByPlaceholder("Enter Job Status").fill(jobStatusName);

    const jobpercentage = faker.number.int({ min: 1, max: 100 }).toString();
    await page.getByPlaceholder("Enter Percentage Of Completion").fill(jobpercentage);
    
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator("div .toast-success").textContent());

    await page.waitForTimeout(1000);
    await expect(page.locator("//tbody/tr/td[3]").last()).toHaveText(jobStatusName);

    const arrows = page.locator('.bi-arrow-down');
    for (let i = 0; i < await arrows.count(); i++) {
    await arrows.nth(i).click(); 
    }

    await page.locator("//tbody/tr[1]/td[5]/img[1]").click();
    await page.getByRole('button', { name: "Edit" }).click();   
    await page.getByPlaceholder("Enter Job Status").clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Enter Job Status").fill(jobStatusName);
    await page.locator("[type='submit']").click();
    console.log(await page.locator("div .toast-message").textContent());

    await expect(page.locator("//tbody/tr/td[3]").last()).toHaveText(jobStatusName);
    

});