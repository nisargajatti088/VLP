const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class JobstatusPage
{
    constructor(page)
    {
        this.page = page;

        this.sidebar_tog = page.locator(".sidebar-toggle-fab").last();
        this.settings = page.locator(".bi-sliders").last();
        this.jobstatuspage = page.locator('span').filter({ hasText: 'Job Status' });

        this.statusgroup = page.getByPlaceholder("Status Group");
        this.jobstatus = page.getByPlaceholder("Enter Job Status");
        this.percentage = page.getByPlaceholder("Enter Percentage Of Completion");

        this.submit = page.locator("[type='submit']");

        this.editicon = page.locator("//tbody/tr[1]/td[5]/img[1]");
        this.edit = page.getByRole('button',{name:"Edit"});

        this.search = page.getByPlaceholder("Search by Job Status");

        this.jobstatusname = faker.lorem.word();
        this.jobpercentage = faker.number.int({ min: 1, max: 100 }).toString();
    }

    async addjobstatus()
    {
        await this.sidebar_tog.click();
        await this.settings.click();
        await this.jobstatuspage.last().click();

        await this.statusgroup.click();
        await this.page.locator(".mat-option-text").first().click();

        await this.jobstatus.fill(this.jobstatusname);
        await this.percentage.fill(this.jobpercentage);

        await this.submit.click();

        await this.search.fill(this.jobstatusname);

        await expect(this.page.locator("//tbody/tr/td[3]").last()).toHaveText(this.jobstatusname);
    }

    async editjobstatus()
    {
        await this.editicon.click();
        await this.edit.click();

        await this.jobstatus.clear();
        await this.jobstatus.fill(this.jobstatusname);

        await this.submit.click();
    }
}

module.exports = { JobstatusPage };