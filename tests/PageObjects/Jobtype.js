const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class JobtypePage
{
    constructor(page)
    {
        this.page = page;

        this.sidebar_tog = page.locator(".sidebar-toggle-fab").last();
        this.settings = page.locator(".bi-sliders").last();
        this.jobMenu = page.locator('span').filter({ hasText: 'Job Type' }).last();

        this.jobtype = page.getByPlaceholder("Enter Job Type");
        this.jobprice = page.getByPlaceholder("Enter Job Price");
        this.standardtime = page.getByPlaceholder("Standard Turnaround Time");

        this.submit = page.locator("[type='submit']");

        this.editicon = page.locator("//tbody/tr[1]/td[5]/img[1]");
        this.edit = page.getByRole('button', { name: "Edit" });

        this.search = page.getByPlaceholder("Search by  Job Type");

        this.jobtypevalue = faker.lorem.word();
        this.jobpricevalue = faker.number.int({ min: 1, max: 100 }).toString();
        this.standardtimevalue = faker.number.int({ min: 1, max: 100 }).toString();
    }

    async addjobtype()
    {
        await this.sidebar_tog.click();
        await this.settings.click();
        await this.jobMenu.click();

        await this.jobtype.fill(this.jobtypevalue);
        await this.jobprice.fill(this.jobpricevalue);
        await this.standardtime.fill(this.standardtimevalue);

        await this.submit.click();

        await this.search.fill(this.jobtypevalue);

        await expect(this.page.locator("//tbody/tr/td[2]").first()).toHaveText(this.jobtypevalue);
    }

    async editjobtype()
    {
        await this.editicon.click();
        await this.edit.click();

        await this.jobtype.clear();
        await this.jobtype.fill(this.jobtypevalue);

        await this.jobprice.clear();
        await this.jobprice.fill(this.jobpricevalue);

        await this.standardtime.clear();
        await this.standardtime.fill(this.standardtimevalue);

        await this.submit.click();
    }
}

module.exports = { JobtypePage };