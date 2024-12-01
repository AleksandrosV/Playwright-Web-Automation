import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { TestData } from '../config/testData';

let pm: PageManager;

test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl);
});

test('Verify theme change through all options', async ({ page }) => {
    const body = page.locator('body');
    const themes = ['Dark', 'Cosmic', 'Corporate', 'Light'];
    let currentTheme = 'Light';
    for (const nextTheme of themes) {
        await pm.navigateTo().selectTheme(currentTheme, nextTheme);
        if (nextTheme === 'Light') {
            await expect(body).toHaveClass(/.*nb-theme-default.*/);
        } else {
            await expect(body).toHaveClass(new RegExp(`.*nb-theme-${nextTheme.toLowerCase()}.*`));
        }
        // Update the current theme for the next iteration
        currentTheme = nextTheme;
    }
});

test('Verify theme dropdown options', async () => {
    const expectedOptions = ['Light', 'Dark', 'Cosmic', 'Corporate'];
    const actualOptions = await pm.navigateTo().getThemeOptions();
    expect(actualOptions).toEqual(expectedOptions);
});

test('Navigate to Form page', async ({ page }) => {
    await pm.navigateTo().formLayoutsPage();
    await expect(page).toHaveURL(/.*layouts/);
});

test('Navigate to Datepicker page', async ({ page }) => {
    await pm.navigateTo().datepickerPage();
    await expect(page).toHaveURL(/.*datepicker/);
});

test('Navigate to Smart Table page', async ({ page }) => {
    await pm.navigateTo().smartTablePage();
    await expect(page).toHaveURL(/.*smart-table/);
});

test('Navigate to Tooltip page', async ({ page }) => {
    await pm.navigateTo().tooltipPage();
    await expect(page).toHaveURL(/.*tooltip/);
});

test('Navigate to Toastr page', async ({ page }) => {
    await pm.navigateTo().toastrPage();
    await expect(page).toHaveURL(/.*toastr/);
});
