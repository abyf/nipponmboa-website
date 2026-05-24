// Smart conditional form with multilingual support for Bridge IT Solutions
const form = document.getElementById('bridgeItForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Your Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyd2VpWQCirH_xc7VmAMSnMZTUEBijQQHIaTeiCmTq2ibMGQ3rfhYDJiGmBpG4G0El6/exec';

// ===================================
// MULTILINGUAL SUPPORT
// ===================================

const translations = {
  fr: {
    // Hero
    heroTitle: 'Demande de Service IT',
    heroSubtitle: 'Décrivez-nous votre projet, nous vous répondrons sous 48h',
    
    // Success/Error messages
    successTitle: '✓ Demande envoyée avec succès !',
    successText: 'Nous vous contacterons dans les 48 heures.',
    errorTitle: '✗ Erreur',
    errorText: 'Une erreur s\'est produite. Veuillez réessayer.',
    
    // Section titles
    contactSection: 'Informations de Contact',
    serviceSection: 'Type de Prestation',
    websiteSection: 'Détails du Site Web',
    
    // Contact fields
    fullName: 'Nom complet',
    fullNamePlaceholder: 'Ex: Jean Dupont',
    email: 'Email',
    emailPlaceholder: 'exemple@email.com',
    phone: 'Téléphone / WhatsApp',
    phonePlaceholder: '+237 6XX XXX XXX',
    occupation: 'Profession / Fonction',
    occupationPlaceholder: 'Ex: Directeur, Enseignant, Entrepreneur',
    address: 'Adresse',
    addressPlaceholder: 'Ville, Quartier',
    
    // Service type
    serviceTypeLabel: 'Quel service souhaitez-vous ?',
    serviceTypeSelect: '-- Sélectionner un service --',
    serviceWebsite: 'Création de Site Web',
    serviceManagement: 'Plateforme de Gestion',
    serviceEcommerce: 'Site E-commerce',
    serviceCloud: 'Formation Cloud Computing',
    serviceAI: 'Formation Intelligence Artificielle',
    serviceTraining: 'Formation Inter/Intra Entreprise',
    serviceOther: 'Autre (préciser)',
    serviceOtherLabel: 'Précisez votre besoin',
    serviceOtherPlaceholder: 'Décrivez le service que vous souhaitez',
    
    // Structure type
    structureTypeLabel: 'Pour quel type de structure ?',
    structureSelect: '-- Sélectionner --',
    structureSchool: 'Établissement scolaire / Formation',
    structureAssociation: 'Association / ONG',
    structureBusiness: 'Entreprise / PME',
    structureCommerce: 'Commerce / Service',
    structureReligious: 'Église / Organisation religieuse',
    structureProfessional: 'Professionnel indépendant',
    structureHotel: 'Hôtel / Tourisme',
    structureHealth: 'Santé / Clinique',
    structureEvents: 'Événementiel',
    structurePublic: 'Institution publique',
    structureOther: 'Autre',
    
    // Association fields
    associationTypeLabel: 'Type d\'association',
    associationCultural: 'Association culturelle',
    associationSports: 'Association sportive',
    associationNGO: 'ONG / Humanitaire',
    associationYouth: 'Association de jeunesse',
    associationParents: 'Association de parents d\'élèves',
    associationProfessional: 'Association professionnelle / Réseau',
    associationCooperative: 'Coopérative',
    associationOther: 'Autre (préciser)',
    
    // Site objective
    siteObjectiveLabel: 'Objectif principal du site',
    objShowcase: 'Présenter l\'association et ses activités (vitrine)',
    objRecruit: 'Recruter de nouveaux membres',
    objDonations: 'Collecter des dons / cotisations en ligne',
    objNews: 'Publier des actualités et événements',
    objMultiple: 'Plusieurs de ces objectifs (site complet)',
    objOther: 'Autre',
    
    // Features
    featuresLabel: 'Fonctionnalités souhaitées',
    featuresHint: 'Sélectionnez toutes les fonctionnalités que vous souhaitez',
    featPresentation: 'Page de présentation (mission, équipe, historique)',
    featCalendar: 'Calendrier d\'événements / activités',
    featMembership: 'Formulaire d\'adhésion en ligne',
    featPayment: 'Paiement de cotisations / dons (Mobile Money, carte)',
    featGallery: 'Galerie photos / vidéos',
    featBlog: 'Blog / actualités',
    featMembersArea: 'Espace membres (accès réservé)',
    featNewsletter: 'Newsletter / inscription à une liste de diffusion',
    featMap: 'Carte / localisation des antennes',
    featDocuments: 'Téléchargement de documents (statuts, rapports, PV)',
    featSocial: 'Liens vers les réseaux sociaux',
    
    // Languages
    languagesLabel: 'Langues du site',
    langFrench: 'Français',
    langEnglish: 'Anglais',
    langJapanese: 'Japonais',
    langOther: 'Autre (préciser dans le commentaire)',
    
    // Deadline
    deadlineLabel: 'Délai souhaité',
    deadlineUrgent: 'Urgent (moins de 2 semaines)',
    deadlineNormal: 'Normal (1 à 2 mois)',
    deadlineFlexible: 'Flexible / pas de contrainte',
    
    // Description
    descriptionLabel: 'Décrivez brièvement votre association et vos attentes pour ce site',
    descriptionPlaceholder: 'Exemple : Notre association existe depuis 2010 et vise à promouvoir la culture locale. Nous avons besoin d\'un site pour présenter nos activités et recruter de nouveaux membres...',
    
    // Content management
    contentMgmtLabel: 'Une fois le site en ligne, qui mettra à jour le contenu ?',
    cmSelf: 'Moi-même ou un membre de mon équipe (Je veux un espace d\'administration simple pour faire mes modifications sans toucher au code)',
    cmNipponmboa: 'Je confie la maintenance à NipponMboa (Je vous envoie les modifications par email/WhatsApp et vous les appliquez pour moi)',
    cmStatic: 'Le site n\'aura pas besoin de mises à jour fréquentes (Le contenu restera essentiellement le même après la mise en ligne)',
    cmAdvice: 'Je ne sais pas encore, conseillez-moi',
    
    // Submit
    submitBtn: 'Envoyer la demande',
    submittingBtn: 'Envoi en cours...',
    
    // Validation
    validationObjective: 'Veuillez sélectionner un objectif',
    validationLanguages: 'Veuillez sélectionner au moins une langue',
    validationContent: 'Veuillez sélectionner une option'
  },
  
  en: {
    // Hero
    heroTitle: 'IT Service Request',
    heroSubtitle: 'Describe your project, we\'ll respond within 48 hours',
    
    // Success/Error messages
    successTitle: '✓ Request sent successfully!',
    successText: 'We will contact you within 48 hours.',
    errorTitle: '✗ Error',
    errorText: 'An error occurred. Please try again.',
    
    // Section titles
    contactSection: 'Contact Information',
    serviceSection: 'Service Type',
    websiteSection: 'Website Details',
    
    // Contact fields
    fullName: 'Full Name',
    fullNamePlaceholder: 'Ex: John Doe',
    email: 'Email',
    emailPlaceholder: 'example@email.com',
    phone: 'Phone / WhatsApp',
    phonePlaceholder: '+237 6XX XXX XXX',
    occupation: 'Occupation / Position',
    occupationPlaceholder: 'Ex: Director, Teacher, Entrepreneur',
    address: 'Address',
    addressPlaceholder: 'City, District',
    
    // Service type
    serviceTypeLabel: 'Which service do you need?',
    serviceTypeSelect: '-- Select a service --',
    serviceWebsite: 'Website Creation',
    serviceManagement: 'Management Platform',
    serviceEcommerce: 'E-commerce Site',
    serviceCloud: 'Cloud Computing Training',
    serviceAI: 'Artificial Intelligence Training',
    serviceTraining: 'Inter/Intra Company Training',
    serviceOther: 'Other (specify)',
    serviceOtherLabel: 'Specify your need',
    serviceOtherPlaceholder: 'Describe the service you need',
    
    // Structure type
    structureTypeLabel: 'For what type of structure?',
    structureSelect: '-- Select --',
    structureSchool: 'Educational Institution / Training',
    structureAssociation: 'Association / NGO',
    structureBusiness: 'Business / SME',
    structureCommerce: 'Commerce / Service',
    structureReligious: 'Church / Religious Organization',
    structureProfessional: 'Independent Professional',
    structureHotel: 'Hotel / Tourism',
    structureHealth: 'Health / Clinic',
    structureEvents: 'Events',
    structurePublic: 'Public Institution',
    structureOther: 'Other',
    
    // Association fields
    associationTypeLabel: 'Type of association',
    associationCultural: 'Cultural association',
    associationSports: 'Sports association',
    associationNGO: 'NGO / Humanitarian',
    associationYouth: 'Youth association',
    associationParents: 'Parents association',
    associationProfessional: 'Professional association / Network',
    associationCooperative: 'Cooperative',
    associationOther: 'Other (specify)',
    
    // Site objective
    siteObjectiveLabel: 'Main objective of the site',
    objShowcase: 'Present the association and its activities (showcase)',
    objRecruit: 'Recruit new members',
    objDonations: 'Collect donations / contributions online',
    objNews: 'Publish news and events',
    objMultiple: 'Several of these objectives (complete site)',
    objOther: 'Other',
    
    // Features
    featuresLabel: 'Desired features',
    featuresHint: 'Select all the features you want',
    featPresentation: 'Presentation page (mission, team, history)',
    featCalendar: 'Events / activities calendar',
    featMembership: 'Online membership form',
    featPayment: 'Payment of contributions / donations (Mobile Money, card)',
    featGallery: 'Photo / video gallery',
    featBlog: 'Blog / news',
    featMembersArea: 'Members area (restricted access)',
    featNewsletter: 'Newsletter / mailing list subscription',
    featMap: 'Map / branch locations',
    featDocuments: 'Document downloads (statutes, reports, minutes)',
    featSocial: 'Social media links',
    
    // Languages
    languagesLabel: 'Site languages',
    langFrench: 'French',
    langEnglish: 'English',
    langJapanese: 'Japanese',
    langOther: 'Other (specify in comment)',
    
    // Deadline
    deadlineLabel: 'Desired timeline',
    deadlineUrgent: 'Urgent (less than 2 weeks)',
    deadlineNormal: 'Normal (1 to 2 months)',
    deadlineFlexible: 'Flexible / no constraint',
    
    // Description
    descriptionLabel: 'Briefly describe your association and your expectations for this site',
    descriptionPlaceholder: 'Example: Our association has existed since 2010 and aims to promote local culture. We need a site to present our activities and recruit new members...',
    
    // Content management
    contentMgmtLabel: 'Once the site is online, who will update the content?',
    cmSelf: 'Myself or a team member (I want a simple admin panel to make changes without touching code)',
    cmNipponmboa: 'I entrust maintenance to NipponMboa (I send you changes by email/WhatsApp and you apply them for me)',
    cmStatic: 'The site won\'t need frequent updates (Content will remain essentially the same after launch)',
    cmAdvice: 'I don\'t know yet, advise me',
    
    // Submit
    submitBtn: 'Send Request',
    submittingBtn: 'Sending...',
    
    // Validation
    validationObjective: 'Please select an objective',
    validationLanguages: 'Please select at least one language',
    validationContent: 'Please select an option'
  }
};

// Detect language from URL parameter or localStorage
let currentLang = new URLSearchParams(window.location.search).get('lang') || 
                  localStorage.getItem('selectedLanguage') || 
                  'fr';

// Apply translations to the page
function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // Update all translatable elements
  document.querySelector('.form-hero h1').textContent = t.heroTitle;
  document.querySelector('.form-hero p').textContent = t.heroSubtitle;
  
  document.querySelector('#successMessage strong').textContent = t.successTitle;
  document.querySelector('#successMessage p').textContent = t.successText;
  document.querySelector('#errorMessage strong').textContent = t.errorTitle;
  document.querySelector('#errorMessage p').textContent = t.errorText;
  
  // Update submit button
  submitBtn.textContent = t.submitBtn;
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    applyTranslations(lang);
    localStorage.setItem('selectedLanguage', lang);
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  });
});

// Apply translations on page load
applyTranslations(currentLang);

// ===================================
// CONDITIONAL LOGIC
// ===================================

const serviceTypeSelect = document.getElementById('serviceType');
const serviceTypeOtherGroup = document.getElementById('serviceTypeOtherGroup');
const websiteSection = document.getElementById('websiteSection');

serviceTypeSelect.addEventListener('change', function() {
  const selectedValue = this.value;
  
  if (selectedValue === 'other') {
    serviceTypeOtherGroup.classList.remove('hidden');
    serviceTypeOtherGroup.querySelector('input').required = true;
  } else {
    serviceTypeOtherGroup.classList.add('hidden');
    serviceTypeOtherGroup.querySelector('input').required = false;
  }
  
  if (selectedValue === 'website') {
    websiteSection.classList.remove('hidden');
    document.getElementById('structureType').required = true;
  } else {
    websiteSection.classList.add('hidden');
    document.getElementById('structureType').required = false;
    document.querySelectorAll('#websiteSection [required]').forEach(field => {
      field.required = false;
    });
  }
});

const structureTypeSelect = document.getElementById('structureType');
const associationFields = document.getElementById('associationFields');

structureTypeSelect.addEventListener('change', function() {
  const selectedValue = this.value;
  
  associationFields.classList.add('hidden');
  associationFields.querySelectorAll('[required]').forEach(field => {
    field.required = false;
  });
  
  if (selectedValue === 'association') {
    associationFields.classList.remove('hidden');
    document.querySelector('select[name="associationType"]').required = true;
    document.querySelector('select[name="deadline"]').required = true;
  }
});

// ===================================
// MOBILE MENU
// ===================================

document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ===================================
// FORM SUBMISSION
// ===================================

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  successMessage.classList.remove('show');
  errorMessage.classList.remove('show');
  
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = translations[currentLang].submittingBtn;
  
  try {
    const formData = new FormData(form);
    
    const data = {
      timestamp: new Date().toISOString(),
      language: currentLang,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      occupation: formData.get('occupation') || 'N/A',
      address: formData.get('address') || 'N/A',
      serviceType: formData.get('serviceType'),
      serviceTypeOther: formData.get('serviceTypeOther') || 'N/A',
      structureType: formData.get('structureType') || 'N/A',
      associationType: formData.get('associationType') || 'N/A',
      siteObjective: formData.get('siteObjective') || 'N/A',
      features: formData.getAll('features').join(', ') || 'N/A',
      languages: formData.getAll('languages').join(', ') || 'N/A',
      deadline: formData.get('deadline') || 'N/A',
      associationDescription: formData.get('associationDescription') || 'N/A',
      contentManagement: formData.get('contentManagement') || 'N/A'
    };
    
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    successMessage.classList.add('show');
    form.reset();
    websiteSection.classList.add('hidden');
    serviceTypeOtherGroup.classList.add('hidden');
    associationFields.classList.add('hidden');
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setTimeout(() => successMessage.classList.remove('show'), 10000);
    
  } catch (error) {
    console.error('Form submission error:', error);
    errorMessage.classList.add('show');
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => errorMessage.classList.remove('show'), 10000);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});

// ===================================
// VALIDATION
// ===================================

const siteObjectiveRadios = document.querySelectorAll('input[name="siteObjective"]');
siteObjectiveRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    siteObjectiveRadios.forEach(r => r.setCustomValidity(''));
  });
});

const languageCheckboxes = document.querySelectorAll('input[name="languages"]');
languageCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const isChecked = Array.from(languageCheckboxes).some(cb => cb.checked);
    languageCheckboxes.forEach(cb => {
      cb.setCustomValidity(isChecked ? '' : translations[currentLang].validationLanguages);
    });
  });
});

form.addEventListener('submit', function(e) {
  const isAssociationVisible = !associationFields.classList.contains('hidden');
  
  if (isAssociationVisible) {
    const siteObjectiveChecked = Array.from(siteObjectiveRadios).some(r => r.checked);
    if (!siteObjectiveChecked) {
      siteObjectiveRadios[0].setCustomValidity(translations[currentLang].validationObjective);
      siteObjectiveRadios[0].reportValidity();
      e.preventDefault();
      return;
    }
    
    const languagesChecked = Array.from(languageCheckboxes).some(cb => cb.checked);
    if (!languagesChecked) {
      languageCheckboxes[0].setCustomValidity(translations[currentLang].validationLanguages);
      languageCheckboxes[0].reportValidity();
      e.preventDefault();
      return;
    }
    
    const contentManagementRadios = document.querySelectorAll('input[name="contentManagement"]');
    const contentManagementChecked = Array.from(contentManagementRadios).some(r => r.checked);
    if (!contentManagementChecked) {
      contentManagementRadios[0].setCustomValidity(translations[currentLang].validationContent);
      contentManagementRadios[0].reportValidity();
      e.preventDefault();
      return;
    }
  }
});
