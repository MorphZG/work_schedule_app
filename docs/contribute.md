# Contribution Guide

Thank you for considering contributing to this project! We welcome all contributions, whether they involve fixing bugs, implementing new features, or improving documentation. Please read the following guidelines to help you get started.

## Table of Contents

- [Contribution Guide](#contribution-guide)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Set Up Environment:](#set-up-environment)
  - [How to Contribute](#how-to-contribute)
  - [Branching Strategy](#branching-strategy)
  - [Code Guidelines](#code-guidelines)
  - [Commit Messages](#commit-messages)
  - [Submitting Your Contribution](#submitting-your-contribution)

---

## Getting Started

-   Fork the Repository:

Click the "Fork" button on the top-right corner of the repository page.
This creates a copy of the repository under your GitHub account.

-   Clone the Forked Repository:

    ```bash
    git clone https://github.com/your-username/repository-name.git
    cd repository-name
    ```

-   Install Dependencies:

Ensure you have the required libraries installed. There are separate `/backend` and `/frontend` directories, each with it's own list of dependancies. Navigate to both of them and run:

```bash
npm install
```

You can view the required libraries by running:

```bash
npm list
```

## Set Up Environment:

If you open the `/.gitignore` file in the root of the project you will see listed `.env` file. `.env` files usually holds environment variables. Here is the list of important variables for both backend and front end. Consider this to be sensitive data.

```bash
// mongoDB connection string
MONGO_URI="mongodb+srv://your_username:your_password@cluster_url/db_name" # online cluster
LOCALHOST="mongodb://127.0.0.1:27017/<database_name>" # localhost for development
```

To read the data from the `.env` files:

```js
import "dotenv/config";
console.log(process.env.VARIABLE_NAME);
```

## How to Contribute

-   Look for open issues.
-   Propose new features or improvements by creating a new issue or discussing them in an existing one.

## Branching Strategy

Will follow github flow model:

-   Always work on a new branch. Use descriptive names, such as:
    -   `feature/employee-scheduling`
    -   `fix/bug-in-schedule-generator`
-   Base your branch on the `main` branch:

    ```bash
    git checkout -b feature/your-branch-name main
    ```

-   Keep your branch updated by pulling changes from the `main` branch regularly:

    ```bash
    git fetch origin
    git rebase origin/main
    ```

-   Avoid committing directly to the `main` branch.

## Code Guidelines

-   Follow the coding style of the project by formating the code offten. Use the `eslint.config.js` that will hold the list of defined rules.
-   Write clear, concise, and self-documenting code.
-   Ensure your changes do not introduce new linting errors or warnings.

    ```bash
    npm run lint
    ```
-   Open the `package.json` file and look at the list of available scripts. To run the script, simply run the following command:

    ```bash
    npm run <script_name>
    ```

## Commit Messages

Use descriptive commit messages to make it easier to understand what changes were made. Follow this format:

```
[type]: [short description]

[optional longer description or context]

Resolves #[issue-number]
```

Examples:

-   `feat: add ability to randomize employee schedule`
-   `fix: resolve error in statistics endpoint`
-   `docs: update README with new API examples`

---

## Submitting Your Contribution

-   Push your branch to your forked repository:

    ```bash
    git push origin feature/your-branch-name
    ```

-   Open a Pull Request:

    -   Navigate to the original repository and click "New Pull Request."
    -   Ensure the base branch is `main` and compare it to your branch.
    -   Provide a clear description of the changes you’ve made.

-   Respond to Feedback:
    -   Reviewers may leave comments or request changes. Address these promptly to get your changes merged.

Thank you for contributing! If you have any questions, feel free to open an issue or contact the maintainers directly.
