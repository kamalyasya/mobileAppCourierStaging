import { Given, When, Then } from '@cucumber/cucumber'
import dashboardPage from '../../../src/pages/dashboard/dashboard-page'
import { invoice } from '../../../test/steps/detail-pengiriman/detail-pengiriman-step.ts'

When('user click specific order', async () => {
    await dashboardPage.specificOrder.isDisplayed()
    await dashboardPage.specificOrder.click()
    await browser.pause(3000)
})

When('user click tab sudah diterima', async () => {
    await dashboardPage.tabSudahDiterima.isDisplayed()
    await dashboardPage.tabSudahDiterima.click()
})

When('user search invoice', async () => {
    await dashboardPage.cariInvoice.click()
    await dashboardPage.cariInvoice.setValue(invoice)
})

Then('user successfully memastikan voucher tetap tampil ketika order diterima semua', async () => {
})

Then('user successfully memastikan voucher terlepas ketika order tolakan sebagian by customer', async () => {
})

Then('user successfully memastikan voucher terlepas ketika order tolakan semua by super', async () => {
})

Then('user successfully memastikan voucher terlepas ketika order tolakan semua by customer', async () => {
})

Then('user successfully memastikan voucher tetap tampil ketika order tolakan sebagian by super', async () => {
})

Then('I see information order without super koin adjust', async () => {
})

Then('I see information order with super koin adjusted', async () => {
})

Then('I see information order without super koin deduction', async () => {
})


