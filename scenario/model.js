import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.closePopUp = Selector('#bulat');
        this.clickMasukDaftar = Selector('span').withText('Masuk');
        this.inputEmail = Selector('.nick');
        this.inputPass = Selector('#password');
        this.clickLogin = Selector('#signInSubmitPopLogin');


    }

}