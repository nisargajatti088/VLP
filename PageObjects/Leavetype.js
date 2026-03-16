const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

class Leavetype{
    constructor(page)
    {
        this.page=page;
        this.sidebar_tog=page.locator(".sidebar-toggle-fab");
        this.setting_dropdown=page.locator(".bi-sliders").last();
        this.leavetype_tog=page.locator('span').filter({ hasText: 'Leave Type' }).last();
        this.enterleavetype=page.getByPlaceholder("Enter Leave Type");




    }
}module.exports = { Leavetype };