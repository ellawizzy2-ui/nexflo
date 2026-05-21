# NexFlow — Instagram Automation Dashboard

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:3000

### 3. Deploy to GitHub Pages

**First time only:**
1. Push this project to a GitHub repo (e.g. `nexflow`)
2. Go to your repo → Settings → Pages
3. Under "Source" select **GitHub Actions**
4. Open `next.config.js` and change `'/nexflow'` to match your actual repo name

**Every push to `main` auto-deploys via GitHub Actions.**

Your live URL will be:
```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
```

## Project structure
```
nexflow/
  pages/
    index.js          ← App shell + routing
  components/
    Sidebar.jsx       ← Left nav
    Dashboard.jsx     ← Overview + chart
    Contacts.jsx      ← Contact list
    Flows.jsx         ← Automations + keywords
    Broadcast.jsx     ← Bulk email + DM composer
    Billing.jsx       ← Plans + invoices
    Settings.jsx      ← Account + tokens
    UI.jsx            ← Shared components
  styles/
    globals.css       ← Base styles
  next.config.js      ← Static export config
  .github/workflows/  ← Auto-deploy to GitHub Pages
```
