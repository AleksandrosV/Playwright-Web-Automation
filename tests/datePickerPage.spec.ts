import { expect, test, BrowserContext } from '@playwright/test'
import { PageManager } from '../pages/pageManager'
import { TestData } from '../config/testData'

let context: BrowserContext
let pm: PageManager

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext()
    const page = await context.newPage()
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl)
})

test.afterEach(async () => {
    await context.close()
})

test('Select a date on Common Datepicker', async ({ page }) => {
    await pm.navigateTo().datepickerPage()
    await pm.onDatePIckerPage().selectCommonDatePickerDateFromToday(10)
})

test('Select a date on Range Datepicker', async ({ page }) => {
    await pm.navigateTo().datepickerPage()
    await pm.onDatePIckerPage().selectDatePickerWithRangeFromToday(6, 15)
})