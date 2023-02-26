import { Given, When, Then } from '@wdio/cucumber-framework';

import PenggunaPage from '../pageobjects/pengguna.page';


Given(/^I am on the login page$/, async () => {
    await penggunaPage.openUrl();
});

When(/^I login with "(.*)" and "(.*)"$/, async (email, password) => {
    await penggunaPage.login(username, password)
});

Then(/^I click menu pengguna$/, async () => {
    await PenggunaPage.clickMenuPengguna();
});

Then(/^I click button (.*)$/, async (button) => {
    switch (button) {
        case 'tambah':
            await PelangganPage.clickTambahPengguna();
            break;

        case 'simpan':
            await PenggunaPage.clickSimpan();
            break;
    
        default:
            break;
    }
});


Then(/^I (.*) field$/, async (scenario) => {
    switch (scenario) {
        case 'dont input any':
            await PenggunaPage.emptyForm();
            break;

        case 'input invalid data to email':
            await PenggunaPage.inputNama('Rani')
            await PenggunaPage.inputEmail('12345')
            await PenggunaPage.inputPassword('hajarani17')
            break;
    
        default:
            break;
    }
});


