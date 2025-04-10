# Cypress API and Web Tests

This project contains automated tests for API and web functionalities using Cypress. For the projects:

• Frontend: https://front.serverest.dev/
• Swagger API: https://serverest.dev/

## Project Structure

- **`api-tests/cypress/e2e/`**: Contains API test cases, such as product registration, user registration and login.
- **`web-tests/cypress/e2e/`**: Contains web UI test cases, such as product registration, product search and user
  registration.
- **`cypress/support/commands.js`**: Custom Cypress commands for reusable test logic.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Cypress (v12 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/flaviogoncalvesdias/automation_web_api_cypress.git
   ```
2. install dependencies using node package manager (npm):
   ```bash
      npm install
   ```
3. Access the project directory:
   
    ```bash
      cd /api-tests #For run api tests
    ```
    or
    ```bash
     cd /web-tests #For run web tests
    ```

4. Run the tests:
      ```bash
       npx cypress open 
      ```
