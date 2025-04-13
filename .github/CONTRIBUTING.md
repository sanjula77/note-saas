# Contributing to Note SaaS

Thank you for considering contributing to **Note SaaS**! We welcome contributions of all kinds. Please follow these guidelines to make the process smooth and easy for everyone.

## 🚀 Getting Started

### 1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/sanjula77/note-saas.git
cd note-saas
```
### 2. Install dependencies
Next, install the dependencies required for the project:
```bash
cd server
npm install

cd ../frontend
npm install
```
### 3. Set up the database
Setup your MongoDB connection by creating the `.env` file in your `server` directory with your MongoDB URL
```bash
cd ../server
echo 'dbURL="your_mongodb_uri_here"' > .env
```

### 4. Run the application
Start the application by running the following commands in separate terminals:
Start the server
```bash
npm run dev
```
 Start the frontend (in a separate terminal)
```bash
cd ../frontend
npm run dev
```
## ✨ Making Changes
### 1. Create a new branch
Before making changes, create a new branch based on the dev branch:
```bash
git checkout dev
git pull origin dev
git checkout -b <your-branch-name> 
```
Replace <your-branch-name> with a descriptive name for your branch, such as feature/add-note.

 ### 🌿 Branch Naming Convention
  Please use the following branch naming conventions:
 
  - `feature/`: For new features (e.g., `feature/add-login-page`)
  - `fix/`: For bug fixes (e.g., `fix/navbar-alignment`)
  - `hotfix/`: For critical fixes in production (e.g., `hotfix/critical-bug`)
  - `chore/`: For maintenance tasks (e.g., `chore/update-dependencies`)
  - `docs/`: For documentation updates (e.g., `docs/update-readme`)
 
### 2. Make your changes
Make the necessary changes to the codebase. This could involve adding new features, fixing bugs, or improving documentation.

### 3. Commit your changes
Once you've made your changes, commit them with a clear and descriptive commit message. Follow the Conventional Commits style for your commit messages.
```bash
git add .
git commit -m "feat: add ability to edit notes"
```
### 📝 Commit Message Guidelines
Use **[Conventional Commits](https://www.conventionalcommits.org/)** for all commit messages.

Examples:
- `feat: add filtering to notes list`
- `fix: resolve crash on empty input`
- `chore: update dependencies`


### 4. Push your changes
Push your changes to the remote repository.
```bash
git push origin <your-branch-name>
```
### 5. Create a pull request
Create a pull request to merge your branch into the dev branch. This will allow other team members to
review your changes before they are merged into the main codebase.




   