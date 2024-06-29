import { expect, test } from '@playwright/test'
import { DashboardPage } from '../pages/dashboardPage'
import { FormLayoutsPage } from '../pages/formLayoutsPage'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200')
})

test('Fill and submit Using the Grid', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)
    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
})

test('Fill and submit Inline form', async ({ page }) => {
    const navigateTo = new DashboardPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)
    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitInLineFormWithNameEmailAndCheckbox('Alex Vuros', 'alex@test.com', true)
})