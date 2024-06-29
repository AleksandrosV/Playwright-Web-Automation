import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class FormLayoutsPage extends HelperBase {
    constructor(page: Page) {
        super(page)
    }

    // Locators
    private usingTheGridForm = this.page.locator('nb-card', { hasText: "Using the Grid" })
    private inlineForm = this.page.locator('nb-card', { hasText: "Inline form" })

    get gridEmailField() {
        return this.usingTheGridForm.getByRole('textbox', { name: "Email" })
    }

    get inlineEmailField() {
        return this.inlineForm.getByRole('textbox', { name: "Email" })
    }

    // Methods
    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
        await this.fillTextBox(this.usingTheGridForm, "Email", email)
        await this.fillTextBox(this.usingTheGridForm, "Password", password)
        await this.selectRadioOption(this.usingTheGridForm, optionText)
        await this.clickButton(this.usingTheGridForm)
    }

    async submitInlineForm(name: string, email: string, rememberMe: boolean) {
        await this.fillTextBox(this.inlineForm, "Jane Doe", name)
        await this.fillTextBox(this.inlineForm, "Email", email)
        if (rememberMe) {
            await this.inlineForm.getByRole('checkbox').check({ force: true })
        }
        await this.clickButton(this.inlineForm)
    }

    // Helper methods
    private async fillTextBox(form: Locator, fieldName: string, text: string) {
        await form.getByRole('textbox', { name: fieldName }).fill(text)
    }

    private async selectRadioOption(form: Locator, optionText: string) {
        await form.getByRole('radio', { name: optionText }).check({ force: true })
    }

    private async clickButton(form: Locator) {
        await form.getByRole('button').click()
    }
}