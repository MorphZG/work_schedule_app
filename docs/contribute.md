# Contribution Guide

Thank you for considering contributing to this project! We welcome all contributions, whether they involve fixing bugs, implementing new features, or improving documentation. Please read the following guidelines to help you get started.

## Table of Contents

- [Contribution Guide](#contribution-guide)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Set Up Environment](#set-up-environment)
  - [How to Contribute](#how-to-contribute)
  - [Branching Strategy](#branching-strategy)
    - [Github Flow model](#github-flow-model)
    - [How it works?](#how-it-works)
    - [Example](#example)
      - [Starting a New Feature](#starting-a-new-feature)
      - [Make Changes](#make-changes)
      - [Push the Branch](#push-the-branch)
      - [Open a Pull Request](#open-a-pull-request)
      - [Collaborate](#collaborate)
      - [Merge](#merge)
    - [Why GitHub Flow?](#why-github-flow)
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
    git clone https://github.com/MorphZG/work_schedule_app/
    cd work_schedule_app
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

## Set Up Environment

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

### Github Flow model

GitHub Flow is a lightweight, branch-based workflow for software development. It’s designed to help teams and individuals collaborate on projects efficiently, regardless of size. It’s particularly popular for continuous deployment and small-to-medium-sized projects.

### How it works?

- Start with the `main` branch  
   - The `main` branch should always contain production-ready code.  
   - It represents the stable, deployable version of the project.

- Create a branch for every new feature or fix  
   - Each change, whether it's a bug fix, a feature, or a documentation update, gets its own branch.  
   - Branch names should describe the work being done, e.g., `feature/add-login`, `fix/schedule-bug`.

- Work on the branch  
   - Make changes in the branch and commit them incrementally.  
   - Push your branch to the remote repository frequently to back up your work and share it with collaborators.

- Open a Pull Request (PR)  
   - When your branch is ready for review, open a PR to merge it into `main`.  
   - PRs allow team members to review, discuss, and suggest changes before merging.  
   - You can create a draft PR early to get feedback while still working on your branch.

- Review and get approval  
   - At least one team member should review the PR for code quality, functionality, and consistency.  
   - Once all feedback is addressed, the reviewer approves the PR.

- Merge into `main`  
   - After approval, the branch is merged into `main`.  
   - This ensures that only completed and reviewed changes reach the `main` branch.

- Deploy immediately (optional)  
   - If you practice continuous deployment, changes can be deployed to production directly after merging into `main`.

### Example

#### Starting a New Feature

```bash
# Switch to the main branch
git checkout main

# Create a new branch
git checkout -b <branch_name>
```

#### Make Changes

- Work on your feature, fix bugs, and make incremental commits.

```bash
git add .
git commit -m "feature: add user login functionality"
```

#### Push the Branch

```bash
git push origin <branch_name>
```

#### Open a Pull Request

- Navigate to the repository on GitHub.  
- Click "Compare & pull request" next to your branch.

#### Collaborate

- Team members review the PR, add comments, or request changes.  
- Push updates as needed:

  ```bash
  git add .
  git commit -m "fix: update login validation"
  git push origin <branch_name>
  ```
#### Merge
- Once approved, merge the PR into `main`.  
- Optionally delete the branch:

  ```bash
  git branch -d <branch_name>
  git push origin --delete <branch_name>
  ```

### Why GitHub Flow?

- Simplicity: A straightforward, branch-based model that avoids unnecessary complexity.  
- Collaboration: Pull Requests facilitate team collaboration, code reviews, and discussions.  
- Continuous Deployment: Merging directly into `main` allows immediate deployment for teams using CI/CD pipelines.  
- Transparency: The PR and branch history provide a clear record of changes.

GitHub Flow is ideal for projects where you want to maintain a stable `main` branch while allowing frequent changes, making it especially suited for web apps and modern software projects. For larger teams or projects with strict release cycles, Gitflow or Trunk-based Development may be more appropriate.


## Code Guidelines

-   Follow the coding style of the project by formating the code offten. Use the `eslint.config.js` that will hold the list of defined rules. If you have proposals for `eslint.config.js` first consult with [official documentation](https://eslint.org/docs/latest/use/configure/configuration-files). Create an issue with your proposal.
-   Write clear, concise, and self-documenting code.

    ```bash
    npm run format
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

-   `feature: add ability to randomize employee schedule`
-   `fix: resolve error in statistics endpoint`
-   `docs: update README with new API examples`

## Submitting Your Contribution

-   Push your branch to your forked repository:

    ```bash
    git push origin <branch_name>
    ```

-   Open a Pull Request:

    -   Navigate to the original repository and click "New Pull Request."
    -   Ensure the base branch is `main` and compare it to your branch.
    -   Provide a clear description of the changes you’ve made.

-   Respond to Feedback:
    -   Reviewers may leave comments or request changes. Address these promptly to get your changes merged.

Thank you for contributing! If you have any questions, feel free to open an issue or contact the maintainers directly.
