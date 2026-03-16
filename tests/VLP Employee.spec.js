const {test,expect} = require('@playwright/test');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("Sandeshd@ekfrazo.in");
    await page.locator("[type='password']").fill("1234");
    await page.locator("[type='submit']").click();
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

    await page.getByPlaceholder('Enter first name').fill("Sachin");
    await page.getByPlaceholder('Enter last name').fill("Jatti");
    await page.getByPlaceholder('Enter email').fill("nisarga@gmail.com");
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

    const employeeName = page.locator(".ng-star-inserted td ").filter({ hasText: 'Sachin Jatti' }).first();
    await expect(employeeName).toBeVisible();
    console.log(await employeeName.textContent());

    const employeeemail = page.locator(".ng-star-inserted td ").filter({ hasText: 'nisarga@gmail.com' }).first();
    await expect(employeeemail).toBeVisible();
    console.log(await employeeemail.textContent());

    await page.locator(".ng-star-inserted td").first().click();
    await page.getByRole('button',{name:"Edit"} ).click();
    await page.getByPlaceholder('Enter first name').fill("Sachi");
    await page.getByRole('button',{name:"Update"} ).click();

    const updateMessage = page.locator(".toast-message");
    await expect(updateMessage).toHaveText(" Employee updated successfully ");
    console.log(await updateMessage.textContent());

    await page.locator(".ng-star-inserted td").first().click();
    await page.getByRole('button',{name:" Delete"} ).click();
    await page.getByRole('button',{name:"Delete"} ).click();

    const deleteMessage = page.locator(".toast-success");
    await expect(deleteMessage).toHaveText(" Employee deleted successfully ");
    console.log(await deleteMessage.textContent());
});
