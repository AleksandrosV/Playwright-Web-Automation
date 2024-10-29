import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatePickerPage extends HelperBase {
    constructor(page: Page) {
        super(page);
    }

    async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number): Promise<string> {
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();
        const dateToAssert = await this.selectDateInCalendar(numberOfDaysFromToday);
        return dateToAssert; // Return the date for assertion in the test
    }

    async selectDatePickerWithRangeFromToday(startDateFromToday: number, endDayFromToday: number): Promise<{ startDate: string, endDate: string }> {
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();
        const dateToAssertStart = await this.selectDateInCalendar(startDateFromToday);
        const dateToAssertEnd = await this.selectDateInCalendar(endDayFromToday);
        return { startDate: dateToAssertStart, endDate: dateToAssertEnd }; // Return both dates for assertion in the test
    }

    private async selectDateInCalendar(numberOfDaysFromToday: number): Promise<string> {
        let date = new Date();
        date.setDate(date.getDate() + numberOfDaysFromToday);

        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('en-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('en-US', { month: 'long' });
        const expectedYear = date.getFullYear();
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;

        while (!calendarMonthAndYear?.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent();
        }

        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, { exact: true }).click();
        return dateToAssert;
    }
}
