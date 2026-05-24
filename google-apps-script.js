/**
 * ============================================
 * GOOGLE APPS SCRIPT - Bridge IT Form Handler
 * ============================================
 * 
 * This script receives form submissions from your GitHub Pages site,
 * writes them to a Google Sheet, and sends email notifications.
 * 
 * SETUP INSTRUCTIONS:
 * ==================
 * 
 * 1. CREATE GOOGLE SHEET:
 *    - Go to https://sheets.google.com
 *    - Create a new spreadsheet named "Demandes Bridge IT"
 *    - Note the spreadsheet ID from the URL:
 *      https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
 * 
 * 2. CREATE APPS SCRIPT:
 *    - In your Google Sheet, go to: Extensions > Apps Script
 *    - Delete any existing code
 *    - Copy and paste this entire script
 *    - Update the CONFIG section below with your details
 * 
 * 3. DEPLOY AS WEB APP:
 *    - Click "Deploy" > "New deployment"
 *    - Click the gear icon ⚙️ > Select "Web app"
 *    - Configure:
 *      * Description: "Bridge IT Form Handler"
 *      * Execute as: "Me"
 *      * Who has access: "Anyone" (or "Anyone, even anonymous")
 *    - Click "Deploy"
 *    - Copy the Web App URL
 *    - Authorize the app when prompted
 * 
 * 4. UPDATE YOUR WEBSITE:
 *    - Open bridge-it-form.js
 *    - Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' with your Web App URL
 * 
 * 5. TEST:
 *    - Submit a test form
 *    - Check that data appears in your Google Sheet
 *    - Check that you receive an email notification
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

const CONFIG = {
  // Email address to receive notifications
  NOTIFICATION_EMAIL: 'contact@nipponmboa.com',
  
  // Spreadsheet ID (from the URL)
  // Example: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID_HERE',
  
  // Sheet name (will be created if it doesn't exist)
  SHEET_NAME: 'Demandes',
  
  // Sender name for email notifications
  SENDER_NAME: 'NipponMboa Consulting',
  
  // Enable/disable email notifications
  SEND_EMAIL: true
};

// ============================================
// MAIN FUNCTIONS
// ============================================

/**
 * Handle POST requests from the form
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Write to Google Sheet
    writeToSheet(data);
    
    // Send email notification
    if (CONFIG.SEND_EMAIL) {
      sendEmailNotification(data);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Write form data to Google Sheet
 */
function writeToSheet(data) {
  // Get or create spreadsheet
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    
    // Add headers
    const headers = [
      'Horodatage',
      'Nom complet',
      'Société',
      'Email',
      'Téléphone',
      'Services demandés',
      'Description du projet',
      'Fonctionnalités souhaitées',
      'Type de projet',
      'URL existante',
      'Budget',
      'Délai',
      'Sites de référence',
      'Informations additionnelles',
      'Langue'
    ];
    
    sheet.appendRow(headers);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#c8102e');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    // Set column widths
    sheet.setColumnWidth(1, 150);  // Timestamp
    sheet.setColumnWidth(2, 150);  // Name
    sheet.setColumnWidth(3, 150);  // Company
    sheet.setColumnWidth(4, 200);  // Email
    sheet.setColumnWidth(5, 120);  // Phone
    sheet.setColumnWidth(6, 250);  // Services
    sheet.setColumnWidth(7, 300);  // Description
    sheet.setColumnWidth(8, 250);  // Features
  }
  
  // Prepare row data
  const row = [
    new Date(data.timestamp),
    data.fullName,
    data.company,
    data.email,
    data.phone,
    data.services,
    data.projectDescription,
    data.desiredFeatures,
    data.existingSystem,
    data.existingUrl,
    data.budget,
    data.timeline,
    data.references,
    data.additionalInfo,
    data.language
  ];
  
  // Append data
  sheet.appendRow(row);
  
  // Format new row
  const lastRow = sheet.getLastRow();
  const rowRange = sheet.getRange(lastRow, 1, 1, row.length);
  rowRange.setWrap(true);
  rowRange.setVerticalAlignment('top');
  
  // Alternate row colors
  if (lastRow % 2 === 0) {
    rowRange.setBackground('#f8f9fa');
  }
}

/**
 * Send email notification
 */
function sendEmailNotification(data) {
  // Email subject
  const subject = `🔔 Nouvelle demande Bridge IT - ${data.fullName}`;
  
  // Email body (HTML)
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #c8102e 0%, #a00d24 100%);
          color: #fff;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          background: #fff;
          padding: 30px;
          border: 1px solid #e0e0e0;
          border-top: none;
        }
        .section {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }
        .section:last-child {
          border-bottom: none;
        }
        .section-title {
          color: #c8102e;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .field {
          margin-bottom: 12px;
        }
        .label {
          font-weight: 600;
          color: #555;
          display: block;
          margin-bottom: 4px;
        }
        .value {
          color: #333;
          padding: 8px 12px;
          background: #f8f9fa;
          border-radius: 4px;
          display: block;
        }
        .value.long {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-radius: 0 0 8px 8px;
        }
        .timestamp {
          background: #fff3cd;
          color: #856404;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 20px;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>💻 Nouvelle Demande Bridge IT</h1>
      </div>
      
      <div class="content">
        <div class="timestamp">
          📅 Reçue le: ${new Date(data.timestamp).toLocaleString('fr-FR')}
        </div>
        
        <div class="section">
          <div class="section-title">👤 Informations de Contact</div>
          <div class="field">
            <span class="label">Nom complet:</span>
            <span class="value">${data.fullName}</span>
          </div>
          <div class="field">
            <span class="label">Société:</span>
            <span class="value">${data.company}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          <div class="field">
            <span class="label">Téléphone:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">💼 Services Demandés</div>
          <div class="field">
            <span class="value">${data.services}</span>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">📋 Détails du Projet</div>
          <div class="field">
            <span class="label">Description:</span>
            <span class="value long">${data.projectDescription}</span>
          </div>
          ${data.desiredFeatures !== 'N/A' ? `
          <div class="field">
            <span class="label">Fonctionnalités souhaitées:</span>
            <span class="value long">${data.desiredFeatures}</span>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Type de projet:</span>
            <span class="value">${data.existingSystem}</span>
          </div>
          ${data.existingUrl !== 'N/A' ? `
          <div class="field">
            <span class="label">URL existante:</span>
            <span class="value"><a href="${data.existingUrl}" target="_blank">${data.existingUrl}</a></span>
          </div>
          ` : ''}
        </div>
        
        <div class="section">
          <div class="section-title">💰 Budget et Délai</div>
          <div class="field">
            <span class="label">Budget:</span>
            <span class="value">${data.budget}</span>
          </div>
          <div class="field">
            <span class="label">Délai:</span>
            <span class="value">${data.timeline}</span>
          </div>
        </div>
        
        ${data.references !== 'N/A' || data.additionalInfo !== 'N/A' ? `
        <div class="section">
          <div class="section-title">📝 Informations Complémentaires</div>
          ${data.references !== 'N/A' ? `
          <div class="field">
            <span class="label">Sites de référence:</span>
            <span class="value long">${data.references}</span>
          </div>
          ` : ''}
          ${data.additionalInfo !== 'N/A' ? `
          <div class="field">
            <span class="label">Autres informations:</span>
            <span class="value long">${data.additionalInfo}</span>
          </div>
          ` : ''}
        </div>
        ` : ''}
        
        <div class="section">
          <div class="section-title">🌍 Langue du formulaire</div>
          <div class="field">
            <span class="value">${data.language.toUpperCase()}</span>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>NipponMboa Consulting</strong></p>
        <p>Une expérience unique au service de votre réussite</p>
        <p>Cette notification a été générée automatiquement par le système Bridge IT.</p>
      </div>
    </body>
    </html>
  `;
  
  // Plain text version (fallback)
  const textBody = `
NOUVELLE DEMANDE BRIDGE IT
===========================

Reçue le: ${new Date(data.timestamp).toLocaleString('fr-FR')}

CONTACT
-------
Nom: ${data.fullName}
Société: ${data.company}
Email: ${data.email}
Téléphone: ${data.phone}

SERVICES DEMANDÉS
-----------------
${data.services}

PROJET
------
Description: ${data.projectDescription}

Fonctionnalités: ${data.desiredFeatures}

Type: ${data.existingSystem}
URL existante: ${data.existingUrl}

BUDGET & DÉLAI
--------------
Budget: ${data.budget}
Délai: ${data.timeline}

INFORMATIONS COMPLÉMENTAIRES
-----------------------------
Références: ${data.references}

Autres: ${data.additionalInfo}

Langue: ${data.language}

---
NipponMboa Consulting
Une expérience unique au service de votre réussite
  `;
  
  // Send email
  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME
  });
}

/**
 * Test function - run this to verify your setup
 */
function testSetup() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    company: 'Test Company',
    email: 'test@example.com',
    phone: '+237 600000000',
    services: 'website, ecommerce',
    projectDescription: 'This is a test submission to verify the setup.',
    desiredFeatures: 'Contact form, payment gateway',
    existingSystem: 'new',
    existingUrl: 'N/A',
    budget: '1M-2M',
    timeline: '2-3months',
    references: 'https://example.com',
    additionalInfo: 'This is a test',
    language: 'fr'
  };
  
  try {
    writeToSheet(testData);
    if (CONFIG.SEND_EMAIL) {
      sendEmailNotification(testData);
    }
    Logger.log('✓ Test successful! Check your sheet and email.');
  } catch (error) {
    Logger.log('✗ Test failed: ' + error.toString());
  }
}
