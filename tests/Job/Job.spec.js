const {test,expect} = require('@playwright/test');

test('Page PLaywright test',async ({page})=>
{
    await page.goto("https://vlp.thestorywallcafe.com/");
    await page.locator('#emailId').fill("Sandeshd@ekfrazo.in");
    await page.locator("[type='password']").fill("1234");
    await page.locator("[type='submit']").click();
    await page.locator(".sidebar-toggle-fab").click();
    
    const arrows = page.locator('.bi-arrow-down');
    for (let i = 0; i < await arrows.count(); i++) {
    await arrows.nth(i).click(); 
    }
    
    await page.locator(".bi-funnel").first().click();
    await page.locator("input[type='text']").pressSequentially("Cod",{delay :150});
    await page.locator("text= Coder ").click();
    await page.waitForTimeout(1000);
    await page.locator(".end-0").click()
    await page.waitForTimeout(1000);
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.keyboard.press('Escape');

    await page.locator(".bi-funnel").nth(1).click();
    await page.locator("input[type='text']").pressSequentially("Apl",{delay :150});
    await page.locator(".mat-pseudo-checkbox").click();
    await page.waitForTimeout(1000);
    await page.locator(".end-0").click()
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.reload();

    await page.locator(".bi-funnel").nth(2).click();
    await page.locator("input[type='text']").pressSequentially("Dav",{delay :150});
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.waitForTimeout(1000);
    await page.locator(".end-0").click()
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.reload();

    await page.locator(".bi-funnel").nth(3).click();
    await page.locator("input[type='text']").pressSequentially("Nav",{delay :150});
    await page.locator('mat-pseudo-checkbox.mat-pseudo-checkbox.ng-star-inserted').first().click();
    await page.waitForTimeout(1000);
    await page.locator(".end-0").click()
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.reload();

    await page.locator(".bi-funnel").nth(4).click();
    await page.locator("input[type='text']").pressSequentially("Job",{delay :150});
    await page.locator('mat-pseudo-checkbox').first().click();
    await page.locator(".end-0").click()
    await page.locator(".mat-pseudo-checkbox").first().click();
    await page.reload();





});