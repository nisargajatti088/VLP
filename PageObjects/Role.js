const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class Role{
    constructor(page)
    {
        this.page=page;
        this.sidebar_tog=page.locator(".sidebar-toggle-fab");
        this.setting_dropdown=page.locator(".bi-sliders").last();
        this.role_tog=page.locator('span').filter({ hasText: 'Role' }).last();
        this.enterrole=page.locator('[data-placeholder="Role name"]');
        this.submit=page.locator("[type='submit']");
        this.checkbox=page.locator("[type='checkbox']");
        this.add=page.getByRole('button', { name: "Add" });
        this.update=page.getByRole('button', { name: "Update" });
        this.back=page.getByRole('button', { name: "Back" });
        this.client=page.locator("//tbody/tr[1]/td[3]");
        this.search=page.getByPlaceholder("Search by Role Name");
        this.editicon=page.locator("//tbody/tr[1]/td[4]/img[1]");
        this.edit=page.getByRole('button',{name:"Edit"});
        this.rolename=faker.lorem.word();
    }
    async addrole()
    {
        await this.sidebar_tog.click();
        await this.setting_dropdown.click();
        await this.role_tog.last().click();
        await this.enterrole.fill(this.rolename);
        await this.submit.click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.checkbox.first().click();
        await this.add.click();
        await this.back.first().click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.client.click();
        await this.checkbox.nth(2).click();
        await this.update.click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.back.first().click();
        await this.search.fill(this.rolename);
        await expect(this.page.locator("//tbody/tr/td[2]").first()).toHaveText(this.rolename);
    }
    async editrole()
    {
        await this.editicon.click();
        await this.edit.click();
        await this.enterrole.clear();
        await this.enterrole.fill(this.rolename);
        await this.submit.click();
    }
}module.exports = { Role };