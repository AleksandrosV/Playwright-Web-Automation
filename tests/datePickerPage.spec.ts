import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { TestData } from '../config/testData';

let pm: PageManager;

test.beforeEach(async ({ page }) => {
    pm = new PageManager(page);
    await page.goto(TestData.baseUrl);
    await pm.navigateTo().datepickerPage();
});

test('Select a date on Common Datepicker', async () => {
    const dateToAssert = await pm.onDatePIckerPage().selectCommonDatePickerDateFromToday(10);
    const calendarInputField = pm.onDatePIckerPage().page.getByPlaceholder('Form Picker');
    await expect(calendarInputField).toHaveValue(dateToAssert);
});

test('Select a date on Range Datepicker', async () => {
    const { startDate, endDate } = await pm.onDatePIckerPage().selectDatePickerWithRangeFromToday(6, 15);
    const calendarInputField = pm.onDatePIckerPage().page.getByPlaceholder('Range Picker');
    const dateRangeToAssert = `${startDate} - ${endDate}`;
    await expect(calendarInputField).toHaveValue(dateRangeToAssert);
});
