import { Page } from "@playwright/test"
import { DashboardPage } from '../pages/dashboardPage'
import { DatePickerPage } from '../pages/datePickerPage'
import { FormLayoutsPage } from '../pages/formLayoutsPage'

export class PageManager {
    private readonly page: Page
    private readonly dashboardPage: DashboardPage
    private readonly datePickerPage: DatePickerPage
    private readonly formLayoutsPage: FormLayoutsPage

    constructor(page: Page) {
        this.page = page
        this.dashboardPage = new DashboardPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)
        this.formLayoutsPage = new FormLayoutsPage(this.page)
    }

    navigateTo() {
        return this.dashboardPage
    }

    onFormLayoutsPage() {
        return this.formLayoutsPage
    }

    onDatePIckerPage() {
        return this.datePickerPage
    }
}