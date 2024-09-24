import { $ } from '@wdio/globals'

export default new class detailPengirimanPage {

    get invoice() {
        return $('//android.view.View[contains(@content-desc, "T")]');
    }

    get pengiriman() {
        return $('//android.view.View[contains(@content-desc, "Pengiriman")]')
    }

    get pesanan() {
        return $('//android.view.View[contains(@content-desc, "Pesanan")]')
    }

    get pembayaran() {
        return $('//android.view.View[contains(@content-desc, "Pembayaran")]')
    }

    get pilihStatusPenerimaan() {
        return $('~Pilih status penerimaan')
    }

    get diterimaSemua() {
        return $('~Diterima Semua')
    }

    get ditolakSebagian() {
        return $('~Ditolak Sebagian')
    }

    get ditolakSemua() {
        return $('~Ditolak Semua')
    }

    get konfirmasi() {
        return $('~Konfirmasi')
    }

    get lihatSelengkapnya() {
        return $('~Lihat Selengkapnya')
    }

    get potonganVoucher() {
        return $('~Potongan voucher')
    }

    get tidakMenggunakanVoucher() {
        return $('~Tidak menggunakan voucher')
    }

    get siapDiterima() {
        return $('~Siap Diterima')
    }

    get tolakanDariSuper() {
        return $('~//android.widget.ImageView[@content-desc="Super"]')
    }

    get tolakanDariCustomer() {
        return $('//android.widget.ImageView[@content-desc="Customer"]')
    }

    get tolakanDariSuperFirst() {
        return $('(//android.widget.ImageView[@content-desc="Super"])[1]')
    }

    get tolakanDariSuperSecond() {
        return $('(//android.widget.ImageView[@content-desc="Super"])[2]')
    }

    get tolakanDariSuperThird() {
        return $('(//android.widget.ImageView[@content-desc="Super"])[3]')
    }

    get tolakanDariSuperForth() {
        return $('(//android.widget.ImageView[@content-desc="Super"])[4]')
    }

    get tolakanDariCustomerFirst() {
        return $('(//android.widget.ImageView[@content-desc="Customer"])[1]')
    }

    get tolakanDariCustomerSecond() {
        return $('(//android.widget.ImageView[@content-desc="Customer"])[2]')
    }

    get tolakanDariCustomerThird() {
        return $('(//android.widget.ImageView[@content-desc="Customer"])[3]')
    }

    get tolakanDariCustomerForth() {
        return $('(//android.widget.ImageView[@content-desc="Customer"])[4]')
    }

    get addQtyTolakan() {
        return $('//android.widget.ScrollView//android.widget.ImageView[2]')
    }

    get addQtyTolakanFirst() {
        return $('//android.widget.EditText[1]/../android.widget.ImageView[2]')
    }

    get addQtyTolakanSecond() {
        return $('//android.widget.EditText[2]/../android.widget.ImageView[2]')
    }

    get addQtyTolakanThird() {
        return $('//android.widget.EditText[3]/../android.widget.ImageView[2]')
    }

    get addQtyTolakanForth() {
        return $('//android.widget.EditText[4]/../android.widget.ImageView[2]')
    }

    get updateInvoice() {
        return $('~Update Semua Invoice')
    }

    get terimaSemuaInvoice() {
        return $('~Terima Semua Invoice')
    }

    get tolakSemuaInvoice() {
        return $('~Tolak Semua Invoice')
    }

    get expandProductRokok() {
        return $('~')
    }






}