# Bridge IT Form - Deployment Guide

Complete step-by-step guide to deploy the Bridge IT Solutions contact form for NipponMboa Consulting.

## 📋 Overview

This system allows customers to submit IT service requests via your GitHub Pages website. Form data is automatically saved to a Google Sheet and email notifications are sent.

### Architecture

```
GitHub Pages (Static Site)
         ↓
    fetch() POST
         ↓
Google Apps Script (Web App)
         ↓
    ┌────┴────┐
    ↓         ↓
Google Sheet  Email Notification
```

## ✅ Prerequisites

- Google Account (for Google Sheets & Apps Script)
- Access to your GitHub repository: `abyf/nipponmboa-website`
- Email address to receive notifications (e.g., contact@nipponmboa.com)

## 🚀 Step-by-Step Deployment

### Step 1: Create Google Sheet

1. **Go to Google Sheets**
   - Visit: https://sheets.google.com
   - Sign in with your Google account

2. **Create New Spreadsheet**
   - Click "Blank" to create a new spreadsheet
   - Rename it to: `Demandes Bridge IT` (or any name you prefer)

3. **Note the Spreadsheet ID**
   - Look at the URL in your browser:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```
   - Copy the `SPREADSHEET_ID` part (long string of letters/numbers)
   - Example: `1a2BcDeFgHiJkLmNoPqRsTuVwXyZ1234567890`

### Step 2: Set Up Google Apps Script

1. **Open Apps Script Editor**
   - In your Google Sheet, click: `Extensions` → `Apps Script`
   - A new tab will open with the Apps Script editor

2. **Clear Default Code**
   - Delete any existing code in the editor

3. **Copy the Script**
   - Open the file `google-apps-script.js` from your project
   - Copy ALL the code
   - Paste it into the Apps Script editor

4. **Configure the Script**
   - Find the `CONFIG` section (around line 52)
   - Update these values:

   ```javascript
   const CONFIG = {
     // Replace with your email
     NOTIFICATION_EMAIL: 'contact@nipponmboa.com',
     
     // Replace with your Spreadsheet ID from Step 1
     SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID_HERE',
     
     // Keep as is (or change sheet name if you prefer)
     SHEET_NAME: 'Demandes',
     
     // Keep as is
     SENDER_NAME: 'NipponMboa Consulting',
     
     // Set to true to receive emails
     SEND_EMAIL: true
   };
   ```

5. **Save the Script**
   - Click the disk icon 💾 or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
   - Give your project a name: `Bridge IT Form Handler`

### Step 3: Test the Setup (Optional but Recommended)

1. **Run Test Function**
   - In the Apps Script editor, find the function dropdown (top center)
   - Select `testSetup` from the dropdown
   - Click the "Run" button ▶️

2. **Authorize the Script**
   - First time running, you'll see "Authorization required"
   - Click "Review Permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to Bridge IT Form Handler (unsafe)"
     *(This is safe - it's your own script)*
   - Click "Allow"

3. **Check Results**
   - Look at your Google Sheet - you should see:
     - A new sheet tab named "Demandes" (or your chosen name)
     - Headers in red
     - One test row with sample data
   - Check your email - you should receive a test notification

4. **Clean Up Test Data**
   - Delete the test row from your sheet if you want

### Step 4: Deploy as Web App

1. **Create Deployment**
   - In Apps Script editor, click: `Deploy` → `New deployment`

2. **Configure Deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose `Web app`

3. **Set Deployment Options**
   - **Description:** `Bridge IT Form Handler`
   - **Execute as:** `Me (your email)`
   - **Who has access:** `Anyone` (or `Anyone, even anonymous`)
     *(This is required for your website to access it)*

4. **Deploy**
   - Click `Deploy`
   - You may need to authorize again - follow the same steps as before

5. **Copy Web App URL**
   - After deployment, you'll see a URL like:
   ```
   https://script.google.com/macros/s/LONG_STRING_HERE/exec
   ```
   - **COPY THIS URL** - you'll need it in the next step

### Step 5: Update Your Website

1. **Open Your Repository**
   - Go to: https://github.com/abyf/nipponmboa-website

2. **Edit bridge-it-form.js**
   - Navigate to the file `bridge-it-form.js`
   - Click the edit button (pencil icon)
   - Find this line (around line 241):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web App URL from Step 4
   - Should look like:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC...XYZ/exec';
   ```

3. **Commit Changes**
   - Add commit message: `Connect Bridge IT form to Google Apps Script`
   - Click "Commit changes"

4. **Add New Files**
   - Go back to your repository root
   - Click "Add file" → "Upload files"
   - Upload these files:
     - `bridge-it-form.html`
     - `bridge-it-form.js` (if not already added)
   - Commit with message: `Add Bridge IT form`

### Step 6: Update Main Site Navigation (Optional)

To add a link to your form from the main site:

1. **Edit index.html**
   - Find the pole 4 card section (around line 143)
   - Change the link from:
   ```html
   <a href="#services" class="pole-link" data-i18n="pole_link"></a>
   ```
   - To:
   ```html
   <a href="bridge-it-form.html" class="pole-link" data-i18n="pole_link"></a>
   ```

2. **Or add a direct button in the services section**
   - In the `#s4` tab content (Pole 4 services), add:
   ```html
   <div class="service-card" style="grid-column: 1 / -1; text-align: center;">
     <a href="bridge-it-form.html" class="btn btn-primary">
       📝 Demande de devis / Request a Quote
     </a>
   </div>
   ```

## 🧪 Testing

### Test the Complete Flow

1. **Visit Your Form**
   - Go to: `https://abyf.github.io/nipponmboa-website/bridge-it-form.html`

2. **Fill Out the Form**
   - Enter test data (use your real email so you can verify)
   - Select at least one service
   - Fill required fields
   - Click "Envoyer la demande"

3. **Verify Success**
   - You should see a green success message
   - Check your Google Sheet - new row should appear
   - Check your email - you should receive a notification

### Troubleshooting

#### Form doesn't submit / Shows error message
- **Check:** Did you update the `GOOGLE_SCRIPT_URL` in `bridge-it-form.js`?
- **Check:** Is the Apps Script Web App deployed with "Anyone" access?
- **Check:** Open browser console (F12) and look for errors

#### No email received
- **Check:** Is `SEND_EMAIL` set to `true` in your Apps Script config?
- **Check:** Is the `NOTIFICATION_EMAIL` correct?
- **Check:** Check your spam folder
- **Check:** Gmail quota: 100 emails/day for free accounts

#### Data not appearing in sheet
- **Check:** Is the `SPREADSHEET_ID` correct in your Apps Script config?
- **Check:** Did you authorize the script properly?
- **Check:** Check the Apps Script execution logs:
  - In Apps Script editor: `Executions` tab (left sidebar)

#### "Authorization required" when form submits
- **Check:** Web App must be deployed with "Anyone" access
- **Redeploy:** Try creating a new deployment with correct settings

## 📊 Managing Form Submissions

### View Submissions

1. Open your Google Sheet: `Demandes Bridge IT`
2. All submissions appear in chronological order
3. Each row contains:
   - Timestamp
   - Contact information
   - Project details
   - Budget & timeline
   - Additional info

### Export Data

- **Excel:** File → Download → Microsoft Excel (.xlsx)
- **CSV:** File → Download → Comma Separated Values (.csv)
- **PDF:** File → Download → PDF document

### Organize Data

- **Filter:** Use Data → Create a filter
- **Sort:** Click column header → Sort A-Z
- **Search:** Ctrl+F to find specific submissions

## 🔒 Security Notes

- ✅ The form uses HTTPS (secure)
- ✅ Apps Script runs on Google's secure infrastructure
- ✅ No sensitive API keys in client-side code
- ✅ Form data is only stored in your Google account
- ⚠️ Anyone can submit the form (by design)
- ⚠️ Consider adding reCAPTCHA if you receive spam

## 🎨 Customization

### Change Form Fields

1. Edit `bridge-it-form.html` - modify HTML form fields
2. Edit `bridge-it-form.js` - update translations and data collection
3. Edit `google-apps-script.js` - update sheet headers and email template

### Change Colors/Styling

- Edit the `<style>` section in `bridge-it-form.html`
- Main brand color: `#c8102e` (NipponMboa red)

### Change Email Template

- Edit the `sendEmailNotification` function in `google-apps-script.js`
- Modify HTML in the `htmlBody` variable

## 🌍 Multilingual Support

The form currently supports:
- 🇫🇷 French (Français)
- 🇬🇧 English
- 🇯🇵 Japanese (日本語)

Language is automatically saved with each submission.

## 📞 Support

If you encounter issues:

1. **Check this guide** - most issues are covered here
2. **Check Apps Script logs** - Extensions → Apps Script → Executions
3. **Browser console** - F12 → Console tab
4. **Test the `testSetup()` function** - verifies Google Sheet connection

## ✨ Success!

Your Bridge IT form is now live! Customers can submit service requests, and you'll receive instant notifications.

**Form URL:** `https://abyf.github.io/nipponmboa-website/bridge-it-form.html`

---

**Created for:** NipponMboa Consulting  
**Date:** May 2026  
**Architecture:** GitHub Pages → Google Apps Script → Google Sheets + Email
