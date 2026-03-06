const{test,expect}=require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Job Type test',async ({page})=>
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

    await page.locator('span').filter({ hasText: 'Job Type' }).last().click();

    const jobTypeName =faker.person.jobType();
    const jobTypePrice = faker.number.int({ min: 100, max: 5000 }).toString();
    const standardTurnaroundTime = faker.number.int({ min: 1, max: 10 }).toString();
    await page.getByPlaceholder("Enter Job Type").fill(jobTypeName);
    await page.getByPlaceholder("Enter Job Price").fill(jobTypePrice);
    await page.getByPlaceholder("Standard Turnaround Time").fill(standardTurnaroundTime);
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());

    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(jobTypeName);

    await page.locator("//tbody/tr[1]/td[5]/img[1]").click();   
    await page.getByRole('button', { name: "Edit" }).click();
    await page.getByPlaceholder("Enter Job Price").clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Enter Job Price").fill(jobTypePrice);

    await page.locator("[type='submit']").click();
    console.log(await page.locator('div .toast-success').textContent());

    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(jobTypeName);
    
    // await page.locator("img[ngbtooltip='Delete']").first().click();
    // await page.getByRole('button', { name: "Delete" }).click(); 
    // console.log(await page.locator('div[aria-label="Job Type deleted successfully"]').textContent());

});