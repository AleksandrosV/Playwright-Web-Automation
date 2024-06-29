import { expect, test } from '@playwright/test'
import { PageManager } from '../pages/pageManager'
import { TestData } from '../config/testData'

let pm: PageManager

test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl)
})

test('Navigate to Form page', async ({ page }) => {
    await pm.navigateTo().formLayoutsPage()
    await expect(page).toHaveURL(/.*layouts/)
})

test('Navigate to Datepicker page', async ({ page }) => {
    await pm.navigateTo().datepickerPage()
    await expect(page).toHaveURL(/.*datepicker/)
})

test('Navigate to Smart Table page', async ({ page }) => {
    await pm.navigateTo().smartTablePage()
    await expect(page).toHaveURL(/.*smart-table/)
})

test('Navigate to Toastr page', async ({ page }) => {
    await pm.navigateTo().toastrPage()
    await expect(page).toHaveURL(/.*toastr/)
})

test('Navigate to Tooltip page', async ({ page }) => {
    await pm.navigateTo().tooltipPage()
    await expect(page).toHaveURL(/.*tooltip/)
})