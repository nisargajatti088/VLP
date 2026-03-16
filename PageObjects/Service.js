class Service{
    constructor(page)
    {
        this.page=page;
        this.sidebar_tog=page.locator(".sidebar-toggle-fab");
        this.setting_dropdown=page.locator(".bi-sliders").last();
        this.service_tog=page.locator('span').filter({ hasText: 'Services' }).last();
        this.enterservice=page.getByPlaceholder("Enter Service");
        this.submit =page.getByRole('button', { name: "Submit" });
        this.search=page.getByPlaceholder("Search by Service");
        this.editservice=page.locator("//tbody/tr[1]/td[3]/img[1]");
        this.edit=page.getByRole('button', { name: "Edit" });
        this.update=page.getByPlaceholder("Enter Service");
        this.updatebutton=page.getByRole('button', { name: "Update" });
        this.delete=page.locator("img[ngbtooltip='Delete']").first();
    }
    
    
        async createserv()
        {
        await this.sidebar_tog.click();
        await this.setting_dropdown.click();
        await this.service_tog.click();
        await this.enterservice("Demo Service");
        await this.submit.click();
        await this.search.fill("Demo Service");
        await expect(page.locator('td:has-text("Demo Service")')).toHaveText("Demo Service");
        await this.editservice.click();
        await this.edit.click();
        await this.update.fill("Demo Service Updated");
        await this.updatebutton.click();
        await this.delete.click();


        }
}
module.exports = { Service };