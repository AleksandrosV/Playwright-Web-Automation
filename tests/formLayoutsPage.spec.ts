import { expect, test } from '@playwright/test'
import { PageManager } from '../pages/pageManager'
import { TestData } from '../config/testData'

let pm: PageManager

test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl)
    await pm.navigateTo().formLayoutsPage()
})

test('Fill and submit Using the Grid', async () => {
    await pm.onFormLayoutsPage().submitUsingTheGridForm('test@test.com', 'Welcome1', 'Option 2')
    await expect(pm.onFormLayoutsPage().gridEmailField).toHaveValue('test@test.com')
})

test('Fill and submit Inline form', async () => {
    await pm.onFormLayoutsPage().submitInlineForm('Alex Vuros', 'alex@test.com', true)
    await expect(pm.onFormLayoutsPage().inlineEmailField).toHaveValue('alex@test.com')
})