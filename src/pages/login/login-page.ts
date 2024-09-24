import { $ } from '@wdio/globals'

export default new class loginPage {

    get masukSekarang() {
         return $('~Masuk Sekarang')
    }

    get username() {
        return $('//android.widget.EditText[1]')
    }

    get password() {
        return $('//android.widget.EditText[2]')
    }

    get login() {
        return $('~Login')
    }

    get phoneNumber() {
        return $('//android.widget.EditText')
    }

    get lanjut() {
        return $('~Lanjut')
    }

}
