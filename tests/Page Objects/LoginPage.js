class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator("[type='submit']");
        this.username = page.locator('#emailId');
        this.password = page.locator("[type='password']");
    }

    async goTo() {
        await this.page.goto("https://vlp.thestorywallcafe.com/");
    }

    async validLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}

module.exports = { LoginPage };
