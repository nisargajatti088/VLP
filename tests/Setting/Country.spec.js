const { faker } = require('@faker-js/faker');
const {test,expect} = require('@playwright/test');

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
    await page.locator('span').filter({ hasText: 'Country' }).last().click();

    const countryName = faker.location.country();
    await page.getByPlaceholder("Enter Country Name").fill(countryName);
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator("[aria-label='Country created successfully']").textContent());

    await page.getByPlaceholder("Search by Country Name").fill(countryName);
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(countryName);
    
    await page.keyboard.press('Escape')

    await page.locator("//tbody/tr[1]/td[3]/img[1]").click();
    await page.getByRole('button', { name: "Edit" }).click();
    await page.getByPlaceholder("Enter Country Name").clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Enter Country Name").fill(countryName);

    await page.locator("[type='submit']").click();
    console.log(await page.locator("[aria-label='Country updated successfully']").textContent());

    await page.locator(".bi-arrow-down").click();

    await page.getByPlaceholder("Search by Country Name").fill(countryName);
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(countryName);

    // await page.locator("img[ngbtooltip='Delete']").first().click();
    // await page.getByRole('button', { name: "Delete" }).click();
    // console.log(await page.locator("[aria-label='Country deleted successfully']").textContent());



});