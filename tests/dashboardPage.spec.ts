import { expect, test } from '@playwright/test'
import { PageManager } from '../pages/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200')
})

test('Navigate to Form page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await expect(page).toHaveURL(/.*layouts/)
})

test('Navigate to Datepicker page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().datepickerPage()
    await expect(page).toHaveURL(/.*datepicker/)
})

test('Navigate to Smart Table page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().smartTablePage()
    await expect(page).toHaveURL(/.*smart-table/)
})

test('Navigate to Toastr page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().toastrPage()
    await expect(page).toHaveURL(/.*toastr/)
})

test('Navigate to Tooltip page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().tooltipPage()
    await expect(page).toHaveURL(/.*tooltip/)
})