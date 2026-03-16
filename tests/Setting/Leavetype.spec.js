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
    await page.locator('span').filter({ hasText: 'Leave Type' }).last().click();

    await page.locator("span").filter({ hasText: 'Create Leave type' }).click();
    
    const leaveTypeName = faker.lorem.word();
    await page.getByPlaceholder("Enter Leave Type").fill(leaveTypeName);

    const leaveTypeDescription = faker.lorem.sentence();
    await page.getByPlaceholder("Enter Description").fill(leaveTypeDescription);

    await page.getByText('leave_for', { exact: true }).click();
    await page.locator(".mat-option-text").nth(3).click();

    const leaveday=faker.number.int({ min: 1, max: 10 }).toString();
    await page.locator('[formcontrolname="utilization_before"]').first().fill(leaveday);
    await page.locator('[formcontrolname="utilization_after"]').first().fill(leaveday);
    await page.locator('[formcontrolname="utilization_before"]').last().fill(leaveday);
    await page.locator('[formcontrolname="utilization_after"]').last().fill(leaveday);
    await page.getByPlaceholder("Effective after").fill(leaveday);
    await page.getByPlaceholder("Effective Period").click();
    await page.locator(".mat-option-text").filter({ hasText: "Yearly" }).click();
    await page.getByPlaceholder("Status Group").click();
    await page.locator(".mat-option-text").filter({ hasText: " Date Of Joining " }).click();
    await page.getByPlaceholder("Leave Accrual Cycle").last().click();
    await page.locator(".mat-option-text").filter({ hasText: " Yearly " }).click();
    await page.getByPlaceholder("Accrual Month").click();
    await page.locator(".mat-option-text").filter({ hasText: " January " }).click();
    await page.getByPlaceholder("Day of Accrual").click();
    await page.getByText('1st', { exact: true }).click();
    await page.getByRole('button', { name: "Add" }).click();

});