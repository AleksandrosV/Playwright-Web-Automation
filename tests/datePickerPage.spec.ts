import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { TestData } from '../config/testData';

let pm: PageManager;

test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl);
    await pm.navigateTo().datepickerPage();
});

test('Select a date on Common Datepicker', async ({ page }) => {
    await pm.onDatePIckerPage().selectCommonDatePickerDateFromToday(10);
});

test('Select a date on Range Datepicker', async ({ page }) => {
    await pm.onDatePIckerPage().selectDatePickerWithRangeFromToday(6, 15);
});
