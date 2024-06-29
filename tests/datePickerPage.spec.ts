import { expect, test } from '@playwright/test'
import { DashboardPage } from '../pages/dashboardPage'
import { DatePickerPage } from '../pages/datePickerPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200')
})

test('Select a date on Common Datepicker', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    const onDatePIckerPage = new DatePickerPage(page)
    await navigateTo.datepickerPage()
    await onDatePIckerPage.selectCommonDatePickerDateFromToday(10)
})

test('Select a date on Range Datepicker', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    const onDatePIckerPage = new DatePickerPage(page)
    await navigateTo.datepickerPage()
    await onDatePIckerPage.selectDatePickerWithRangeFromToday(6, 15)
})