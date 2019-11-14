import { Selector } from 'testcafe';
import Page from './model';
import config from './config';

const page = new Page();

fixture `Fixture`
    .page `${config.baseUrl}`;

test('gagal login', async t => {
    await t
    .maximizeWindow()
    .click(page.closePopUp)
    .click(page.clickMasukDaftar)
    .typeText(page.inputEmail, 'faris')
    .typeText(page.inputPass,'test')
    .click(page.clickLogin)
    .expect(Selector('#signInSubmitPopLogin').textContent).contains('Masuk')
});

