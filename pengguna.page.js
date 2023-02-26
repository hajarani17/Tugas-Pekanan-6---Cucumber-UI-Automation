import Page from './page.js';

class PenggunaPage{

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get headerKasirAja(){
        return $('h3.chakra-heading')
    }

    get btnTambah () {
        return $('a[href="/users/create"]');
    }

    get fieldNama(){
        return $('#nama');
    }

    get fieldEmail(){
        return $('#email');
    }

    get fieldPassword(){
        return $('#password');
    }

    get btnSimpan(){
        return $('button.chakra-button');
    }

    get errorAlert(){
        return $('.chakra-alert');
    }

    get successAlert(){
        return $('.chakra-alert__desc');
    }


    async openUrl(){
        await browser.url('/');
        await expect(await browser.getUrl()).to.include('/login');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async clickMenuPengguna(){
        await (await this.btnMenuPengguna).waitForDisplayed();
        await (await this.btnMenuPengguna).click();
        await expect(await browser.getUrl()).to.include('/customers');
    }

    async clickTambahPengguna(){
        await (await this.btnTambahPengguna).waitForDisplayed();
        await (await this.btnTambahPengguna).click();
        await expect(await browser.getUrl()).to.include('/customers/create');
    }

    async emptyForm(){
        await (await this.fieldNama).waitForDisplayed();
        await expect(await (await this.fieldNama).getValue()).to.be.empty;
        await expect(await (await this.fieldEmail).getValue()).to.be.empty;
        await expect(await (await this.fieldPassword).getValue()).to.be.empty;
    }

    async inputName(nama){
        await (await this.fieldNama).addValue(nama);
    }

    async inputEmail(email){
        await (await this.fieldEmail).addValue(email);
    }

    async inputPassword(password){
        await (await this.fieldPassword).addValue(password);
    }

    async clickSimpan(){
        await (await this.btnSimpan).click();
    }

    async verifyErrorAlertMessageFieldNama(){
        await (await this.errorAlert).waitForDisplayed();
        await expect(await (await this.errorAlert).getText()).to.equal('"nama" is not allowed to be empty');
        await browser.reloadSession();
    }

    async verifySuccessAlertMessageFieldName(){
        await (await this.successAlert).waitForDisplayed();
        await expect(await (await this.successAlert).getText()).to.equal('success item ditambahkan');
        await browser.reloadSession();
    }

}

export default new PenggunaPage();
