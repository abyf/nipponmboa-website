/**
 * ============================================
 * GOOGLE APPS SCRIPT V2 - Smart Form Handler
 * ============================================
 * 
 * Handles conditional form data from the improved Bridge IT form
 * with dynamic fields based on service type and structure type.
 */

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  NOTIFICATION_EMAIL: 'contact@nipponmboa.com',
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID_HERE',
  SHEET_NAME: 'Demandes',
  SENDER_NAME: 'NipponMboa Consulting',
  SEND_EMAIL: true
};

// ============================================
// MAIN FUNCTIONS
// ============================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    writeToSheet(data);
    
    if (CONFIG.SEND_EMAIL) {
      sendEmailNotification(data);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function writeToSheet(data) {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    
    // Add headers for all possible fields
    const headers = [
      'Horodatage',
      'Nom complet',
      'Email',
      'Téléphone',
      'Profession',
      'Adresse',
      'Type de service',
      'Service (autre)',
      'Type de structure',
      'Type d\'association',
      'Objectif du site',
      'Fonctionnalités',
      'Langues du site',
      'Délai',
      'Description association',
      'Gestion du contenu'
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
    sheet.setColumnWidth(3, 200);  // Email
    sheet.setColumnWidth(4, 120);  // Phone
    sheet.setColumnWidth(5, 150);  // Occupation
    sheet.setColumnWidth(6, 200);  // Address
    sheet.setColumnWidth(7, 150);  // Service Type
    sheet.setColumnWidth(8, 200);  // Service Other
    sheet.setColumnWidth(9, 150);  // Structure Type
    sheet.setColumnWidth(10, 150); // Association Type
    sheet.setColumnWidth(11, 200); // Site Objective
    sheet.setColumnWidth(12, 300); // Features
    sheet.setColumnWidth(13, 150); // Languages
    sheet.setColumnWidth(14, 120); // Deadline
    sheet.setColumnWidth(15, 400); // Description
    sheet.setColumnWidth(16, 200); // Content Management
  }
  
  // Prepare row data
  const row = [
    new Date(data.timestamp),
    data.fullName,
    data.email,
    data.phone,
    data.occupation,
    data.address,
    getServiceTypeLabel(data.serviceType),
    data.serviceTypeOther,
    getStructureTypeLabel(data.structureType),
    getAssociationTypeLabel(data.associationType),
    getSiteObjectiveLabel(data.siteObjective),
    data.features,
    data.languages,
    getDeadlineLabel(data.deadline),
    data.associationDescription,
    getContentManagementLabel(data.contentManagement)
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

function sendEmailNotification(data) {
  const subject = `🔔 Nouvelle demande Bridge IT - ${data.fullName}`;
  
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
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          <div class="field">
            <span class="label">Téléphone:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
          ${data.occupation !== 'N/A' ? `
          <div class="field">
            <span class="label">Profession:</span>
            <span class="value">${data.occupation}</span>
          </div>
          ` : ''}
          ${data.address !== 'N/A' ? `
          <div class="field">
            <span class="label">Adresse:</span>
            <span class="value">${data.address}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="section">
          <div class="section-title">💼 Type de Prestation</div>
          <div class="field">
            <span class="value">${getServiceTypeLabel(data.serviceType)}</span>
          </div>
          ${data.serviceTypeOther !== 'N/A' ? `
          <div class="field">
            <span class="label">Précision:</span>
            <span class="value">${data.serviceTypeOther}</span>
          </div>
          ` : ''}
        </div>
        
        ${data.structureType !== 'N/A' ? `
        <div class="section">
          <div class="section-title">🌐 Détails du Projet Web</div>
          <div class="field">
            <span class="label">Type de structure:</span>
            <span class="value">${getStructureTypeLabel(data.structureType)}</span>
          </div>
          ${data.associationType !== 'N/A' ? `
          <div class="field">
            <span class="label">Type d'association:</span>
            <span class="value">${getAssociationTypeLabel(data.associationType)}</span>
          </div>
          ` : ''}
          ${data.siteObjective !== 'N/A' ? `
          <div class="field">
            <span class="label">Objectif du site:</span>
            <span class="value">${getSiteObjectiveLabel(data.siteObjective)}</span>
          </div>
          ` : ''}
          ${data.features !== 'N/A' ? `
          <div class="field">
            <span class="label">Fonctionnalités souhaitées:</span>
            <span class="value long">${data.features}</span>
          </div>
          ` : ''}
          ${data.languages !== 'N/A' ? `
          <div class="field">
            <span class="label">Langues du site:</span>
            <span class="value">${data.languages}</span>
          </div>
          ` : ''}
          ${data.deadline !== 'N/A' ? `
          <div class="field">
            <span class="label">Délai souhaité:</span>
            <span class="value">${getDeadlineLabel(data.deadline)}</span>
          </div>
          ` : ''}
          ${data.associationDescription !== 'N/A' ? `
          <div class="field">
            <span class="label">Description:</span>
            <span class="value long">${data.associationDescription}</span>
          </div>
          ` : ''}
          ${data.contentManagement !== 'N/A' ? `
          <div class="field">
            <span class="label">Gestion du contenu:</span>
            <span class="value long">${getContentManagementLabel(data.contentManagement)}</span>
          </div>
          ` : ''}
        </div>
        ` : ''}
      </div>
      
      <div class="footer">
        <p><strong>NipponMboa Consulting</strong></p>
        <p>Une expérience unique au service de votre réussite</p>
      </div>
    </body>
    </html>
  `;
  
  const textBody = `
NOUVELLE DEMANDE BRIDGE IT
===========================

Reçue le: ${new Date(data.timestamp).toLocaleString('fr-FR')}

CONTACT
-------
Nom: ${data.fullName}
Email: ${data.email}
Téléphone: ${data.phone}
Profession: ${data.occupation}
Adresse: ${data.address}

TYPE DE PRESTATION
------------------
${getServiceTypeLabel(data.serviceType)}
${data.serviceTypeOther !== 'N/A' ? 'Précision: ' + data.serviceTypeOther : ''}

${data.structureType !== 'N/A' ? `
PROJET WEB
----------
Type de structure: ${getStructureTypeLabel(data.structureType)}
Type d'association: ${data.associationType}
Objectif: ${data.siteObjective}
Fonctionnalités: ${data.features}
Langues: ${data.languages}
Délai: ${data.deadline}
Description: ${data.associationDescription}
Gestion: ${data.contentManagement}
` : ''}

---
NipponMboa Consulting
  `;
  
  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME
  });
}

// ============================================
// HELPER FUNCTIONS - Label Mappings
// ============================================

function getServiceTypeLabel(value) {
  const labels = {
    'website': 'Création de Site Web',
    'management': 'Plateforme de Gestion',
    'ecommerce': 'Site E-commerce',
    'cloud': 'Formation Cloud Computing',
    'ai': 'Formation Intelligence Artificielle',
    'training': 'Formation Inter/Intra Entreprise',
    'other': 'Autre'
  };
  return labels[value] || value;
}

function getStructureTypeLabel(value) {
  const labels = {
    'school': 'Établissement scolaire / Formation',
    'association': 'Association / ONG',
    'business': 'Entreprise / PME',
    'commerce': 'Commerce / Service',
    'religious': 'Église / Organisation religieuse',
    'professional': 'Professionnel indépendant',
    'hotel': 'Hôtel / Tourisme',
    'health': 'Santé / Clinique',
    'events': 'Événementiel',
    'public': 'Institution publique',
    'other': 'Autre'
  };
  return labels[value] || value;
}

function getAssociationTypeLabel(value) {
  const labels = {
    'cultural': 'Association culturelle',
    'sports': 'Association sportive',
    'ngo': 'ONG / Humanitaire',
    'youth': 'Association de jeunesse',
    'parents': 'Association de parents d\'élèves',
    'professional': 'Association professionnelle / Réseau',
    'cooperative': 'Coopérative',
    'other': 'Autre'
  };
  return labels[value] || value;
}

function getSiteObjectiveLabel(value) {
  const labels = {
    'showcase': 'Présenter l\'association et ses activités (vitrine)',
    'recruit': 'Recruter de nouveaux membres',
    'donations': 'Collecter des dons / cotisations en ligne',
    'news': 'Publier des actualités et événements',
    'multiple': 'Plusieurs de ces objectifs (site complet)',
    'other': 'Autre'
  };
  return labels[value] || value;
}

function getDeadlineLabel(value) {
  const labels = {
    'urgent': 'Urgent (moins de 2 semaines)',
    'normal': 'Normal (1 à 2 mois)',
    'flexible': 'Flexible / pas de contrainte'
  };
  return labels[value] || value;
}

function getContentManagementLabel(value) {
  const labels = {
    'self': 'Moi-même ou un membre de mon équipe (espace d\'administration)',
    'nipponmboa': 'Je confie la maintenance à NipponMboa',
    'static': 'Le site n\'aura pas besoin de mises à jour fréquentes',
    'advice': 'Je ne sais pas encore, conseillez-moi'
  };
  return labels[value] || value;
}

// ============================================
// TEST FUNCTION
// ============================================

function testSetup() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '+237 600000000',
    occupation: 'Directeur',
    address: 'Yaoundé, Bastos',
    serviceType: 'website',
    serviceTypeOther: 'N/A',
    structureType: 'association',
    associationType: 'cultural',
    siteObjective: 'showcase',
    features: 'presentation, calendar, blog',
    languages: 'french, english',
    deadline: 'normal',
    associationDescription: 'Association culturelle depuis 2010',
    contentManagement: 'self'
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
