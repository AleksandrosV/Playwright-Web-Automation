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

test('Fill and submit Using the Grid', async () => {
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridForm('test@test.com', 'Welcome1', 'Option 2')
    await expect(pm.onFormLayoutsPage().gridEmailField).toHaveValue('test@test.com')
})

test('Fill and submit Inline form', async () => {
    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitInlineForm('Alex Vuros', 'alex@test.com', true)
    await expect(pm.onFormLayoutsPage().inlineEmailField).toHaveValue('alex@test.com')
})