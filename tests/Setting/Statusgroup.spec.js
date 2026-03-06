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
    await page.locator('span').filter({ hasText: 'Status Group' }).last().click();

    const statusGroupName = faker.lorem.word();
    await page.getByPlaceholder("Enter Status Group").fill(statusGroupName);
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());

    await expect(page.locator("//tbody/tr[1]/td[2]").first()).toHaveText(statusGroupName);

    await page.locator("//tbody/tr[1]/td[3]/img[1]").click();
    await page.getByRole('button', { name: "Edit" }).click();
    
    await page.getByPlaceholder("Enter Status Group").clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Enter Status Group").fill(statusGroupName);
    await page.locator("[type='submit']").click();
    console.log(await page.locator('div .toast-success').textContent());

    await expect(page.locator("//tbody/tr[1]/td[2]").first()).toHaveText(statusGroupName);


});