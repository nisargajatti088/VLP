const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test.only('Page PLaywright test', async ({ page }) => {

    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("admin@vedalekha.com");
    await page.locator("[type='password']").fill("Admin@123#");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    await page.locator(".bi-sliders").last().click();
    await page.locator('span').filter({ hasText: 'Settings' }).last().waitFor({ state: 'visible' });
    await page.locator('span').filter({ hasText: 'Designation' }).last().click();

    const Designation = faker.person.jobTitle();

    await page.getByPlaceholder("Enter Designation Name").fill(Designation);
    await page.getByPlaceholder("Select Role").click();
    await page.locator('span').filter({ hasText: ' Tester ' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    console.log(await page.locator("[aria-label='Designation created successfully']").textContent());

    // Assertion to verify that the new designation is added
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(Designation);

    
    await page.locator("//tbody/tr[1]/td[4]/img[1]").click();
    await page.getByRole('button', { name: "Edit" }).click();

    await page.getByPlaceholder("Enter Designation Name").clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Enter Designation Name").fill(Designation);
    await page.locator("[type='submit']").click();
    console.log(await page.locator("[aria-label='Designation updated successfully']").textContent());

    // Assertion to verify that the designation is updated
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(Designation);




});
