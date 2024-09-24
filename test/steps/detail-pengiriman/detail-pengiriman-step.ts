import { Given, When, Then } from '@cucumber/cucumber'
import detailPengirimanPage from '../../../src/pages/detail-pengiriman/detail-pengiriman-page'

let invoice: string

When('user get invoice', async () => {
    invoice = await detailPengirimanPage.invoice.getAttribute('content-desc')
    console.log(`Captured content-desc: ${detailPengirimanPage.invoice}`)
})
export { invoice }

When('user click pesanan', async () => {
    await detailPengirimanPage.pesanan.click()
})

When('user click pembayaran', async () => {
    await detailPengirimanPage.pembayaran.click()
})

When('user click dropdown status penerimaan', async () => {
    await detailPengirimanPage.pilihStatusPenerimaan.click()
})

When('user choose status penerimaan {string}', async (x) => {
    if (x === 'Diterima Semua') {
        await detailPengirimanPage.diterimaSemua.click()
    } else if (x === 'Ditolak Sebagian') {
        await detailPengirimanPage.ditolakSebagian.click();
    } else if (x === 'Ditolak Semua') {
        await detailPengirimanPage.ditolakSemua.click();
    }
})

When('user click konfirmasi', async () => {
    await detailPengirimanPage.konfirmasi.click()
})

When('user click lihat selengkapnya', async () => {
    await detailPengirimanPage.lihatSelengkapnya.click()
})

When('user shown nominal voucher', async () => {
    await detailPengirimanPage.potonganVoucher.isDisplayed()
})

When('user not shown nominal voucher', async () => {
    await detailPengirimanPage.tidakMenggunakanVoucher.isDisplayed()
})

When('user click siap diterima', async () => {
    await detailPengirimanPage.siapDiterima.click()
    await browser.pause(2000)
})

When('user click tolakan dari {string}', async (x) => {
    if (x === 'Super') {
        await detailPengirimanPage.tolakanDariSuper.click()
    } else if (x === 'Customer') {
        await detailPengirimanPage.tolakanDariCustomer.click();
    }
})

When('user input qty tolakan with value 1 for {string} SKU', async (x) => {
    if (x === 'First') {
        await detailPengirimanPage.addQtyTolakanFirst.click()
    } else if (x === 'Second') {
        await detailPengirimanPage.addQtyTolakanSecond.click()
    } else if (x === 'Third') {
        await detailPengirimanPage.addQtyTolakanThird.click()
    } else if (x === 'Forth') {
        await detailPengirimanPage.addQtyTolakanForth.click()
    }
})

When('user input qty tolakan with value 4 for {string} SKU', async (x) => {
    if (x === 'First') {
        await detailPengirimanPage.addQtyTolakanFirst.click()
        await detailPengirimanPage.addQtyTolakanFirst.click()
        await detailPengirimanPage.addQtyTolakanFirst.click()
        await detailPengirimanPage.addQtyTolakanFirst.click()
    } else if (x === 'Second') {
        await detailPengirimanPage.addQtyTolakanSecond.click()
        await detailPengirimanPage.addQtyTolakanSecond.click()
        await detailPengirimanPage.addQtyTolakanSecond.click()
        await detailPengirimanPage.addQtyTolakanSecond.click()
    } else if (x === 'Third') {
        await detailPengirimanPage.addQtyTolakanThird.click()
        await detailPengirimanPage.addQtyTolakanThird.click()
        await detailPengirimanPage.addQtyTolakanThird.click()
        await detailPengirimanPage.addQtyTolakanThird.click()
    } else if (x === 'Forth') {
        await detailPengirimanPage.addQtyTolakanForth.click()
        await detailPengirimanPage.addQtyTolakanForth.click()
        await detailPengirimanPage.addQtyTolakanForth.click()
        await detailPengirimanPage.addQtyTolakanForth.click()
    }
})

When('user click tolakan dari {string} for {string} SKU', async (x, sku) => {
    if (x === 'Super') {
        if (sku === 'First') {
            await detailPengirimanPage.tolakanDariSuperFirst.click()
        } else if (sku === 'Second') {
            await detailPengirimanPage.tolakanDariSuperSecond.click()
        } else if (sku === 'Third') {
            await detailPengirimanPage.tolakanDariSuperThird.click()
        } else if (sku === 'Forth') {
            await detailPengirimanPage.tolakanDariSuperForth.click()
        }
        
    } else if (x === 'Customer') {
        if (sku === 'First') {
            await detailPengirimanPage.tolakanDariCustomerFirst.click()
        } else if (sku === 'Second') {
            await detailPengirimanPage.tolakanDariCustomerSecond.click()
        } else if (sku === 'Third') {
            await detailPengirimanPage.tolakanDariCustomerThird.click()
        } else if (sku === 'Forth') {
            await detailPengirimanPage.tolakanDariCustomerForth.click()
        }
    }
})

When('user click dropdown update invoice', async () => {
    await detailPengirimanPage.updateInvoice.click()
})

When('user select {string}', async (x) => {
    if (x === 'Terima Semua Invoice') {
        await detailPengirimanPage.terimaSemuaInvoice.click()
    } else if (x === 'Tolak Semua Invoice') {
        await detailPengirimanPage.tolakSemuaInvoice.click();
    }
})
