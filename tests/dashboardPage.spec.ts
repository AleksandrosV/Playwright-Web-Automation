import { expect, test } from '@playwright/test'
import { DashboardPage } from '../pages/dashboardPage'
import { url } from 'inspector'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200')
})

test('Navigate to Form page', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    await navigateTo.formLayoutsPage()
    await expect(page).toHaveURL(/.*layouts/)
})

test('Navigate to Datepicker page', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    await navigateTo.datepickerPage()
    await expect(page).toHaveURL(/.*datepicker/)
})

test('Navigate to Smart Table page', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    await navigateTo.smartTablePage()
    await expect(page).toHaveURL(/.*smart-table/)
})

test('Navigate to Toastr page', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    await navigateTo.toastrPage()
    await expect(page).toHaveURL(/.*toastr/)
})

test('Navigate to Tooltip page', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    await navigateTo.tooltipPage()
    await expect(page).toHaveURL(/.*tooltip/)
})