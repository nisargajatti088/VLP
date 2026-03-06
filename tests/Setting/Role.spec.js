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
    await page.locator('span').filter({ hasText: 'Role' }).last().click();

    const roleName = faker.lorem.word();
    await page.locator('[data-placeholder="Role name"]').fill(roleName);

    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());

    await page.locator("[type='checkbox']").first().click();
    await page.getByRole('button', { name: "Add" }).click();
    console.log(await page.locator('div .toast-success').textContent());

    await page.getByRole('button', { name: "Back" }).first().click();

    await expect(page.locator("//tbody/tr[1]/td[2]").first()).toHaveText(roleName);

    await page.locator("//tbody/tr[1]/td[3]").click();
    await page.locator('[type="checkbox"]').nth(2).click();
    await page.getByRole('button', { name: "Update" }).click();
    console.log(await page.locator('div .toast-success').textContent());        

    await page.getByRole('button', { name: "Back" }).first().click();

    await page.locator("//tbody/tr[1]/td[4]/img[1]").click();
    await page.getByRole('button', { name: "Edit" }).click();
    await page.locator('[data-placeholder="Role name"]').clear();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Role name"]').fill(roleName);
    await page.getByRole('button', { name: "Update" }).click();
    console.log(await page.locator('div .toast-success').textContent());

    await expect(page.locator("//tbody/tr[1]/td[2]").first()).toHaveText(roleName);

    


});