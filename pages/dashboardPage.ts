import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DashboardPage extends HelperBase {
    constructor(page: Page) {
        super(page);
    }

    private lightButton = this.page.getByRole('button', { name: 'Light' });
    private darkButton = this.page.getByRole('button', { name: 'Dark' });
    private cosmicButton = this.page.getByRole('button', { name: 'Cosmic' });
    private corporateButton = this.page.getByRole('button', { name: 'Corporate' });

    async getThemeOptions(): Promise<string[]> {
        await this.lightButton.click();
        const options = this.page.locator('ul.option-list nb-option');
        return options.allInnerTexts();
    }

    async selectTheme(currentTheme: string, nextTheme: string): Promise<void> {
        let buttonToClick;
        // Select the correct button based on the current theme
        switch (currentTheme) {
            case 'Light':
                buttonToClick = this.lightButton;
                break;
            case 'Dark':
                buttonToClick = this.darkButton;
                break;
            case 'Cosmic':
                buttonToClick = this.cosmicButton;
                break;
            case 'Corporate':
                buttonToClick = this.corporateButton;
                break;
            default:
                throw new Error(`Unknown theme: ${currentTheme}`);
        }
        await buttonToClick.click();
        // Select the next theme option
        await this.page.locator(`nb-option:has-text("${nextTheme}")`).click();
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Form Layouts').click();
    }

    async datepickerPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Datepicker').click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data');
        await this.page.getByText('Smart Table').click();
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Toastr').click();
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Tooltip').click();
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle);
        const expandedState = await groupMenuItem.getAttribute('aria-expanded');
        if (expandedState == "false") {
            await groupMenuItem.click();
        }
    }
}