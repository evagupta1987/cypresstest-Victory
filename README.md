
# 🎯 VictoryPlus QA Exercise – Cypress

This project contains automated end-to-end tests using Cypress for the VictoryPlus platform.

## ✅ Tech Stack
- Cypress (JavaScript)
- Mocha-style BDD testing
- Screenshots & video recording enabled

---

## 📂 Folder Structure

```
victoryplus-qa-cypress/
├── cypress/
│   └── e2e/
│       ├── login-and-hub.cy.js
│       └── recently-added.cy.js
├── cypress.config.js
├── README.md
```

---

## 🚀 Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Open Cypress Test Runner
```bash
npx cypress open
```

### 3. Or run headless (CI mode)
```bash
npx cypress run
```

---

## 🧪 Test Scenarios

### `login-and-hub.cy.js`
- Logs in with test credentials
- Checks that the hub page loads
- Verifies all links respond with status < 400
- Ensures all images are visible and loaded

### `recently-added.cy.js`
- Clicks the first item in the Recently Added section
- Ensures the video page loads
- Confirms the video element exists and plays

---

## 📎 Credentials

Update login credentials in `login-and-hub.cy.js`:
```js
cy.get('input[name="email"]').type('your_email@example.com');
cy.get('input[name="password"]').type('your_password');
```

---

## 🎥 Screenshots and Videos

- Saved in:
  - `cypress/screenshots/`
  - `cypress/videos/`

---

## 📬 Submission

Once ready, share your GitHub repo with:
- 📧 Brent Garner – `brent@aparentmedia.com`
- CC: Leina Nhan – `leina@aparentmedia.com`

---

## 🛠️ Notes

- Tests assume the structure of VictoryPlus is unchanged.
- Update selectors if HTML layout is different.

---

## 📄 License

This repository is provided for assessment purposes only.
