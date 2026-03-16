const {test,expect} = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("admin@vedalekha.com");
    await page.locator("[type='password']").fill("Admin@123#");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    
    await page.locator(".bi-sliders").last().click();
    await page.locator('span').filter({ hasText: 'Company Policy' }).last().click();

    const policyname = faker.lorem.word();
    await page.getByPlaceholder("Enter Policy Name").fill(policyname);

    const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator(".bi-file-earmark-spreadsheet").click()
    ]);

    await fileChooser.setFiles('C:\\Users\\HELLO\\Downloads\\supermarket_transactions.xlsx');
    
    const password = faker.internet.password();
    await page.getByPlaceholder("Enter Password").fill(password);

    await page.locator("[type='submit']").click();
    console.log(await page.locator("[aria-label='Designation created successfully']").textContent());

    await page.getByPlaceholder("Search by Policy Name").fill(policyname);
    expect(await page.locator("//tbody/tr[1]/td[2]")).first().toHaveText(policyname);

    await page.locator("//tbody/tr[1]/td[3]/img[1]").click();




    



});