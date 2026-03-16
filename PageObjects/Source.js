const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class Source{
    constructor(page)
    {
        this.page=page;
        this.sidebar_tog=page.locator(".sidebar-toggle-fab");
        this.setting_dropdown=page.locator(".bi-sliders").last();
        this.source_tog=page.locator('span').filter({ hasText: 'Source' }).last();
        this.entersource=page.getByPlaceholder("Enter Source");
        this.sourcename=faker.lorem.word();
        this.submit=page.getByRole('button', { name: "Submit" });
        this.search=page.getByPlaceholder("Search by Source");
        this.editicon=page.locator("//tbody/tr[1]/td[3]/img[1]");
        this.edit=page.getByRole('button', { name: "Edit" });
        this.update=page.getByPlaceholder("Enter Source");
        this.updatebutton=page.getByRole('button', { name: "Update" });
    }
    async createsource()
    {
        await this.sidebar_tog.click();
        await this.setting_dropdown.click();
        await this.source_tog.click();
        await this.entersource.fill(this.sourcename);
        await this.submit.click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.search.fill(this.sourcename);
    }   
    async editsource()
    {
        await this.editicon.click();
        await this.edit.click();
        await this.update.fill(this.sourcename);
        await this.updatebutton.click();
        console.log(await this.page.locator('div .toast-success').textContent());
        await this.search.fill(this.sourcename);
    }
}module.exports = { Source };