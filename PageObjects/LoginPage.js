class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator("[type='submit']");
        this.username = page.locator('#emailId');
        this.password = page.locator("[type='password']");
        this.loginerror = page.locator('.ng-trigger-flyInOut');
        this.logoutButton = page.locator("[aria-label='Logout']");
        this.logoutConfirmButton = page.locator(".btn-yes");
        this.forgotPasswordLink = page.locator('[href="/forgotPassword"]');
        

    }

    async goTo() {
        await this.page.goto("https://vlp.thestorywallcafe.com/");
    }

    async validLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

    async logout() {
        await this.logoutButton.click();
        await this.logoutConfirmButton.click();
    }

    async forgot(username)
    {
        await this.forgotPasswordLink.click();
        await this.username.fill(username);
        await this.loginbutton.click(); 
    }
}

module.exports = { LoginPage };
