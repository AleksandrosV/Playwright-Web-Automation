
# Playwright-Web-Automation

Playwright-Web-Automation is a testing framework built with [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/) to automate the end-to-end testing of web applications. This project is focused on testing the Ngx-Admin test application.

## Technologies Used

- **TypeScript**: Programming language used for writing tests.
- **Playwright**: Testing framework.

## Setup Instructions

### Prerequisites

Before setting up the project, ensure the following software is installed on your system:

- **Node.js**: Version 22.2.0 or higher
- **Git**
- **IDE**: Visual Studio Code (VS Code) recommended
- **Playwright Extension for VS Code**: For a better development experience with Playwright

### Local Application Setup (Ngx-Admin)

1. Clone the Ngx-Admin test application repository:

   ```bash
   git clone https://github.com/bondar-artem/pw-practice-app.git
   ```

2. Open the project in Visual Studio Code:

   ```bash
   cd pw-practice-app
   code .
   ```

3. Install dependencies by running:

   ```bash
   npm install --force
   ```

4. Start the application:

   ```bash
   npm start
   ```

   This will launch the Ngx-Admin application on `http://localhost:4200`.

### Playwright-Web-Automation Project Setup

1. Clone this Playwright-Web-Automation repository.

   ```bash
   git clone https://github.com/AleksandrosV/Playwright-Web-Automation.git
   ```

2. Open the cloned project in Visual Studio Code:

   ```bash
   cd Playwright-Web-Automation
   code .
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Set up Playwright and its browsers:

   ```bash
   npx playwright install
   ```

### Configuration

The main configuration file is `playwright.config.ts`, where you can customize the following:

- **Base URL**: Ensure `baseUrl` in your test configuration points to `http://localhost:4200` (or the URL where the Ngx-Admin app is running).
- **Browser Options**: Define specific options for the browsers (e.g., headless mode, viewport size).
- **Reporters**: Specify reporters such as `list`, `html`, or `json` to generate reports after test execution.

### Running Tests

- **Run All Tests**:

  ```bash
  npx playwright test
  ```

- **Run Tests in a Specific File**:

  ```bash
  npx playwright test tests/<file-name>.spec.ts
  ```

- **Run Tests in Headed Mode**:

  ```bash
  npx playwright test --headed
  ```

- **Generate an HTML Report**:

  After running tests, generate an HTML report with:

  ```bash
  npx playwright show-report
  ```

### Folder Structure

- **`tests`**: Contains all test files, each testing a feature or page of the application.
- **`pages`**: Holds page objects that encapsulate the web pages' UI elements and interactions.
- **`config`**: Includes configuration files and test data for customizing the test runs.
- **`helpers`**: Helper functions and reusable utilities used throughout the test suite.

### Additional Notes

- **Environment Variables**: For sensitive data or different configurations, consider using a `.env` file and the `dotenv` package to securely load environment variables.
- **Error Handling**: Playwright automatically takes screenshots on failures, which can be configured for each test run.
