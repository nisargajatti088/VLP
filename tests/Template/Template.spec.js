const { faker } = require('@faker-js/faker');
const { test, expect } = require('@playwright/test');

test('Page Playwright test', async ({ page }) => {

    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("admin@vedalekha.com");
    await page.locator("[type='password']").fill("Admin@123#");
    await page.locator("[type='submit']").click();

    await page.locator(".sidebar-toggle-fab").click();
    await page.locator(".bi-sliders").last().click();
    await page.locator('span').filter({ hasText: 'Templates' }).last().click();

    const templateName = faker.lorem.words();
    await page.getByPlaceholder("Enter Template Name").fill(templateName);

    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator(".bi-file-earmark-spreadsheet").click()
    ]);

    await fileChooser.setFiles('C:\\Users\\HELLO\\Downloads\\supermarket_transactions.xlsx');
    
    const password = faker.internet.password();
    await page.getByPlaceholder("Enter Password").fill(password);

    const whentouse = faker.lorem.sentence();
    await page.getByPlaceholder("When to use").fill(whentouse);

    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator("[aria-label='Template created successfully']").textContent());

    await page.getByPlaceholder("Search by Template Name").fill(templateName);
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(templateName);

    await page.locator("//tbody/tr[1]/td[3]/img[1]").click();





});
