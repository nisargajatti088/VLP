const {test,expect} = require('@playwright/test');

test.only('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("Sandeshd@ekfrazo.in");
    await page.locator("[type='password']").fill("1234");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    await page.locator(".bi-sliders").last().click();
    await page.waitForTimeout(1000);
    await page.locator('span').filter({ hasText: 'Employees' }).first().click();
    await page.getByRole('button',{name:"Create Employee"} ).click();
    
    const verification= page.locator("#mat-error-0");
    await expect(verification).toHaveText("First Name ");
    console.log(await verification.textContent());





});
