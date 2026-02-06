const {test,expect} = require('@playwright/test');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("Sandesh@.in");
    await page.locator("[type='password']").fill("");
    await page.locator("[type='submit']").click()
    console.log(await page.getByText('Email Id is invalid.').textContent());
    console.log(await page.getByText("Password is required.").textContent());
 
    await page.locator('#emailId').fill("Sandesh@ekra.in");
    await page.locator("[type='password']").fill("12");
    await page.locator("[type='submit']").click()
    console.log(await page.locator('.ng-trigger-flyInOut').textContent());
    await page.waitForTimeout(5000);

    await page.locator('#emailId').fill("Sandeshd@ekfrazo.in");
    await page.locator("[type='password']").fill("1234");
    await page.locator("[type='submit']").click()
    
    const successMessage = page.locator('[aria-label*="Login"]');
    await expect(successMessage).toBeVisible();
    console.log(await successMessage.textContent());

    console.log(await page.title())
    await expect(page).toHaveTitle("VLP")

    await page.locator("[aria-label='Logout']").click()
    await page.locator(".btn-yes").click()
    
    const logoutMessage = page.locator('.toast-success').first();
    await expect(logoutMessage).toBeVisible({ timeout: 5000 });
    console.log(await logoutMessage.textContent());

    await page.locator('[href="/forgotPassword"]').click()
    await page.locator("#emailId").fill("")
    await page.getByText("Submit").click()
    console.log(await page.getByText("Email Id is required.").textContent());

    await page.getByText("Go back to Login").click();
    await page.locator('#emailId').fill("Sandesh@ekfrazo.in");
    await page.locator("[type='password']").fill("1234");
    await page.locator("[type='submit']").click()
    
});