const {test,expect,request} = require('@playwright/test');
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("admin@vedalekha.com");
    await page.locator("[type='password']").fill("Admin@123#");
    await page.locator("[type='submit']").click();
    await context.storageState({ path: 'storageState.json' });
    webContext = await browser.newContext({ storageState: 'storageState.json' });
});

test('Validate session storage', async () => {
    const page = await webContext.newPage();
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator(".sidebar-toggle-fab").click();
    // Click on settings/gear icon
    await page.locator(".bi-sliders").last().click();

    // Wait for the Employees element to be visible
    await page.locator('span').filter({ hasText: 'Employees' }).last().waitFor({ state: 'visible' });

    // Click on Employees button
    await page.locator('span').filter({ hasText: 'Employees' }).last().click();
    await page.getByRole('button',{name:"Create Employee"} ).click();
    await page.getByRole('button',{name:"Submit"} ).click();

    const verification= page.locator("#mat-error-0");
    await expect(verification).toHaveText("First Name is required ");
    console.log(await verification.textContent());

    const name= faker.person.firstName();
    const surname= faker.person.lastName();
    const email= faker.internet.email();
    await page.getByPlaceholder('Enter first name').fill(name);
    await page.getByPlaceholder('Enter last name').fill(surname);
    await page.getByPlaceholder('Enter email').fill(email);
    await page.locator(".mat-datepicker-toggle").first().click();
    await page.locator(".mat-calendar-period-button").click();
    await page.locator(".mat-calendar-body-cell-content").filter({ hasText: '2025' }).click();
    await page.locator(".mat-calendar-body-cell-content").filter({ hasText: 'DEC' }).click();
    await page.locator(".mat-calendar-body-cell-content").filter({ hasText: '15' }).click();
    await page.locator("[role='combobox']").first().click();
    await page.locator(".mat-option-text").filter({ hasText: ' TESTER ' }).click();
    await page.getByPlaceholder("Designation").click();
    await page.locator(".mat-option-text").filter({ hasText: 'Automation TESTER' }).click();
    await page.getByPlaceholder("Reporting Manager").click();
    await page.locator(".mat-option-text").filter({ hasText: ' Nisarga Jatti ' }).click();  
    await page.getByPlaceholder("select gender").click(); 
    await page.locator("[role='option']").first().click();
    await page.getByRole('button',{name:"Submit"} ).click();

    const successMessage = page.locator(".toast-message");
    await expect(successMessage).toHaveText(" Employee created successfully ");
    console.log(await successMessage.textContent());

    await expect(page.locator("//tbody/tr/td[2]").first()).toHaveText(name);

    await expect(page.locator("//tbody/tr/td[3]").first()).toHaveText(email);

    await page.locator(".ng-star-inserted td").first().click();
    await page.getByRole('button',{name:"Edit"} ).click();
    await page.getByPlaceholder('Enter first name').clear();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter first name').fill(name);
    await page.getByRole('button',{name:"Update"} ).click();

    await expect(page.locator("//tbody/tr/td[2]").first()).toHaveText(name);

});
