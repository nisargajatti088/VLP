class EmployeePage
{
    constructor(page)
    {
        this.page=page;
        this.sidebar_tog=page.locator(".sidebar-toggle-fab").last();
        this.settings = page.locator(".bi-sliders").last();
        this.employeeMenu=page.locator('span').filter({ hasText: 'Employees' }).last();
        this.create_employee=page.getByRole('button',{name:"Create Employee"} );
        this.submit=page.getByRole('button',{name:"Submit"} );
        this.employee_fname=page.getByPlaceholder('Enter first name');
        this.employee_lname=page.getByPlaceholder('Enter last name');
        this.employee_email=page.getByPlaceholder('Enter email');
        this.datetoggler=page.locator(".mat-datepicker-toggle").first();
        this.datedropdown=page.locator(".mat-calendar-period-button");
        this.year=page.locator(".mat-calendar-body-cell-content").filter({ hasText: '2025' });
        this.month=page.locator(".mat-calendar-body-cell-content").filter({ hasText: 'DEC' });
        this.day=page.locator(".mat-calendar-body-cell-content").filter({ hasText: '15' });
        this.role=page.locator("[role='combobox']").first();
        this.roletype=page.locator(".mat-option-text").filter({ hasText: ' TESTER ' });
        this.designation=page.getByPlaceholder("Designation");
        this.designationtype=page.locator(".mat-option-text").filter({ hasText: 'Automation TESTER' });
        this.reportingmanager=page.getByPlaceholder("Reporting Manager");
        this.reportingmanagertype=page.locator(".mat-option-text").filter({ hasText: ' Nisarga Jatti ' })
        this.gender=page.getByPlaceholder("select gender");
        this.gendertype=page.locator("[role='option']").first();
        this.submitcreate=page.getByRole('button',{name:"Submit"} );
        
    }

    async sidebar()
    {
        await this.sidebar_tog.click();
        await this.settings.click();
        await this.employeeMenu.click();
        await this.create_employee.click();
        await this.submit.click();
    }

    async create(fname,lname,email)
    {
        await this.employee_fname.fill(fname);
        await this.employee_lname.fill(lname);
        await this.employee_lname.fill(email);
        await this.datetoggler.click();
        await this.datedropdown.click();
        await this.year.click();
        await this.month.click();
        await this.day.click();
        await this.role.click();
        await this.roletype.click();
        await this.designation.click();
        await this.designationtype.click();
        await this.reportingmanager.click();
        await this.reportingmanagertype.click();
        await this.gender.click();
        await this.gendertype.click();
        await this.submitcreate.click();
       
    }
}

module.exports={EmployeePage}