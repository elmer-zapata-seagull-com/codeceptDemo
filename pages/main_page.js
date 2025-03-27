const { I } = inject();

class MainPage {
    constructor() {
        this.locator = {
            signIn: '(//a[contains(text(), "Sign in")])[2]'
        };
    }

    get signIn() {
        return this.locator.signIn;
    }

    clickSignIn() {
        I.click(this.signIn);
        I.wait(2);
    }
}

// 👇 Exportación compatible con CommonJS (para usar con require)
module.exports = new MainPage();
