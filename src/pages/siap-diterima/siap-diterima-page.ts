import { $ } from '@wdio/globals'

export default new class detailPengirimanPage {

    get uploadBuktiKirim() {
        return $('(//android.widget.ImageView[@content-desc="Upload"])[1]')
    }

    get camera() {
        return $('//android.widget.ImageView[2]')
    }

    get simpan() {
        return $('~Simpan')
    }

    get cash() {
        return $('~Cash (COD)')
    }

    get transfer() {
        return $('~Transfer')
    }

    get transferAndCash() {
        return $('~Transfer & Cash (COD)')
    }





}