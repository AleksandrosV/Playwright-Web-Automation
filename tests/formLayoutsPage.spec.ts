import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { TestData } from '../config/testData';

let pm: PageManager;

test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl);
    await pm.navigateTo().formLayoutsPage();
});

test('Fill and submit Using the Grid', async () => {
    const email = TestData.generateEmail();
    const password = TestData.generatePassword();
    await pm.onFormLayoutsPage().submitUsingTheGridForm(email, password, 'Option 2');
    await expect(pm.onFormLayoutsPage().gridEmailField).toHaveValue(email);
});

test('Fill and submit Inline form', async () => {
    const name = TestData.generateName();
    const email = TestData.generateEmail();
    await pm.onFormLayoutsPage().submitInlineForm(name, email, true);
    await expect(pm.onFormLayoutsPage().inlineEmailField).toHaveValue(email);
});
