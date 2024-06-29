import { expect, test } from '@playwright/test'
import { PageManager } from '../pages/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200')
})

test('Select a date on Common Datepicker', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().datepickerPage()
    await pm.onDatePIckerPage().selectCommonDatePickerDateFromToday(10)
})

test('Select a date on Range Datepicker', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().datepickerPage()
    await pm.onDatePIckerPage().selectDatePickerWithRangeFromToday(6, 15)
})