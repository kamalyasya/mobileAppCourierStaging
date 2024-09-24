import { Given, When, Then } from '@cucumber/cucumber'
import siapDiterimaPage from '../../../src/pages/siap-diterima/siap-diterima-page'

When('user upload bukti kirim', async () => {
    await siapDiterimaPage.uploadBuktiKirim.click()
    await siapDiterimaPage.camera.click()
    await siapDiterimaPage.simpan.isDisplayed()
    await siapDiterimaPage.simpan.click()
})

When('user select tipe pembayaran {string}', async (x) => {
    if (x === 'Cash') {
        await siapDiterimaPage.cash.click()
    } else if (x === 'Transfer') {
        await siapDiterimaPage.transfer.click();
    } else if (x === 'Transfer & Cash') {
        await siapDiterimaPage.transferAndCash.click();
    }
})


