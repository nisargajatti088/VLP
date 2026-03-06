const {test,expect} = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("Sandeshd@ekfrazo.in");
    await page.locator("[type='password']").fill("1234");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    
    await page.locator('span').filter({ hasText: 'Clients' }).last().click();
    await page.getByText('Create Client').click();

    const clientName = faker.person.firstName();
    await page.getByPlaceholder("Enter Client Name").fill(clientName);

    const clientEmail = faker.internet.email()
    await page.locator('[type="email"]').first().fill(clientEmail);

    await page.locator("[role='combobox']").first().click();
    await page.locator("[role='option']").first().click();

    await page.getByPlaceholder("Enter Address").fill(faker.location.streetAddress());
    await page.locator("[role='combobox']").last().click();
    await page.locator("[role='option']").last().click();

    await page.locator('[aria-label="Open calendar"]').first().click();
    await page.locator(".mat-calendar-period-button").click();

    await page.locator(".mat-calendar-body-today").click();
    await page.locator(".mat-calendar-body-cell-content").filter({ hasText: ' MAR ' }).click();
    await page.locator(".mat-calendar-body-cell-content").filter({ hasText: ' 19 ' }).click(); 
    await page.getByPlaceholder("Enter Name").fill(clientName);
    await page.locator('[type="email"]').last().fill(clientEmail);
    const clientPhone = faker.string.numeric(10);
    await page.locator("[type='number']").fill(clientPhone);
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());

    await page.getByPlaceholder("Search by Client").fill(clientName);
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(clientName);

    await page.locator("//tr/td[2]").click();
    await page.getByText("Groups").click();
    const groupname= faker.lorem.word();
    await page.locator("input[formcontrolname='group_name']").fill(groupname);
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());    

    await page.getByPlaceholder("Search by Group Name").fill(groupname);
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(groupname);

    await page.getByText("End Clients").click();
    const endclientName = faker.person.firstName();
    await page.getByPlaceholder("Enter End Client Name").fill(endclientName);
    await page.locator("[role='combobox']").click();
    await page.locator(".mat-option-text").first().click();
    await page.getByRole('button', { name: "Submit" }).click();
    console.log(await page.locator('div .toast-success').textContent());
    await page.getByPlaceholder("Search by End Client Name").fill(endclientName);
    await expect(page.locator('//tbody/tr/td[2]').first()).toHaveText(endclientName);

    await page.locator(".mat-tab-label").first().click();
    await page.getByRole('button', { name: "Edit" }).click();
    await page.getByPlaceholder("Enter Client Name").clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Enter Client Name").fill(clientName);
    await page.locator("[type='submit']").click();
    console.log(await page.locator('div .toast-success').textContent());
    
    await page.locator("[ngbtooltip='View']").first().click();
    const details = page.locator("//tbody/tr").first();
    console.log(await details.textContent());
    await page.getByRole('button', { name: "Close" }).click();
    
    const arrows = page.locator('.bi-arrow-down');

    for (let i = 0; i < await arrows.count(); i++) {
      await arrows.nth(i).click();
    }

    await page.locator(".bi-funnel").first().click();
    await page.locator("[type='text']").pressSequentially("no",{delay :150});
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.locator(".bi-x-lg").first().click();
    await page.keyboard.press('Escape')

    await page.getByText("History").click();
    await page.reload();
    await expect(page.getByText("Inactive").first()).toBeVisible();
    await page.locator("[ngbtooltip='CSV']").click();
    await page.locator(".mat-raised-button").nth(1).click();


});