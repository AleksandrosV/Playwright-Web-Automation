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
    const dateToAssert = await pm.onDatePIckerPage().selectCommonDatePickerDateFromToday(10);

    // Assert that the selected date is displayed in the input field
    const calendarInputField = pm.onDatePIckerPage().page.getByPlaceholder('Form Picker');
    await expect(calendarInputField).toHaveValue(dateToAssert);
});

test('Select a date on Range Datepicker', async ({ page }) => {
    const { startDate, endDate } = await pm.onDatePIckerPage().selectDatePickerWithRangeFromToday(6, 15);

    // Assert that the selected range is displayed in the input field
    const calendarInputField = pm.onDatePIckerPage().page.getByPlaceholder('Range Picker');
    const dateRangeToAssert = `${startDate} - ${endDate}`;
    await expect(calendarInputField).toHaveValue(dateRangeToAssert);
});
