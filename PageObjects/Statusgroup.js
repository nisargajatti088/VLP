const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class Statusgroup{
    constructor(page)
    {
        this.page=page;
        this.sidebar_tog=page.locator(".sidebar-toggle-fab");
        this.setting_dropdown=page.locator(".bi-sliders").last();
        this.statusgroup_tog=page.locator('span').filter({ hasText: 'Status Group' }).last();
        this.enterstatusgroup=page.getByPlaceholder("Enter Status Group");
        this.statusgroupname=faker.lorem.word();
        this.submit=page.getByRole('button', { name: "Submit" });
        this.search=page.getByPlaceholder("Search by Status Group");
        this.editicon=page.locator("//tbody/tr[1]/td[3]/img[1]");
        this.edit=page.getByRole('button', { name: "Edit" });
        this.update=page.getByPlaceholder("Enter Status Group");
        this.updatebutton=page.getByRole('button', { name: "Update" });
    }
    async createstatusgroup()
    {
        await this.sidebar_tog.click();
        await this.setting_dropdown.click();
        await this.statusgroup_tog.click();
        await this.enterstatusgroup.fill(this.statusgroupname);
        await this.submit.click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.search.fill(this.statusgroupname);
    }
    async editstatusgroup()
    {
        await this.editicon.click();
        await this.edit.click();
        await this.update.fill(this.statusgroupname);
        await this.updatebutton.click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.search.fill(this.statusgroupname);
    }
}module.exports = { Statusgroup };
