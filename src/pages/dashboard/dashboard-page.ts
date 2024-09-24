import { $ } from '@wdio/globals'

export default new class dashboardPage {

    get specificOrder() {
        return $('(//android.widget.ImageView[contains(@content-desc, "test dua ratus satu") and contains(@content-desc, "T")])[1]');
    }

    get tabBelumDikirim() {
        return $('//android.view.View[@content-desc="Belum Dikirim"]');
    }

    get tabSudahDiterima() {
        return $('//android.view.View[contains(@content-desc, "Sudah Diterima")]');
    }

    get cariInvoice() {
        return $('//android.widget.ImageView[@index="3"]');
    }





}