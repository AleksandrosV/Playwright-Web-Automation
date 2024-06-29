import { expect, test } from '@playwright/test'
import { PageManager } from '../pages/pageManager'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200')
})

test('Fill and submit Using the Grid', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridForm('test@test.com', 'Welcome1', 'Option 2')
    await expect(pm.onFormLayoutsPage().gridEmailField).toHaveValue('test@test.com');
})

test('Fill and submit Inline form', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitInlineForm('Alex Vuros', 'alex@test.com', true)
    await expect(pm.onFormLayoutsPage().inlineEmailField).toHaveValue('alex@test.com');
})