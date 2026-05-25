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
  },
  
  ja: {
    // Hero
    heroTitle: 'ITサービス依頼',
    heroSubtitle: 'プロジェクトを説明してください。48時間以内にご返信いたします',
    
    // Success/Error messages
    successTitle: '✓ リクエストが正常に送信されました！',
    successText: '48時間以内にご連絡いたします。',
    errorTitle: '✗ エラー',
    errorText: 'エラーが発生しました。もう一度お試しください。',
    
    // Section titles
    contactSection: '連絡先情報',
    serviceSection: 'サービスタイプ',
    websiteSection: 'ウェブサイトの詳細',
    
    // Contact fields
    fullName: '氏名',
    fullNamePlaceholder: '例：山田太郎',
    email: 'メール',
    emailPlaceholder: 'example@email.com',
    phone: '電話 / WhatsApp',
    phonePlaceholder: '+237 6XX XXX XXX',
    occupation: '職業 / 役職',
    occupationPlaceholder: '例：ディレクター、教師、起業家',
    address: '住所',
    addressPlaceholder: '市区町村、地区',
    
    // Service type
    serviceTypeLabel: 'どのサービスが必要ですか？',
    serviceTypeSelect: '-- サービスを選択 --',
    serviceWebsite: 'ウェブサイト制作',
    serviceManagement: '管理プラットフォーム',
    serviceEcommerce: 'Eコマースサイト',
    serviceCloud: 'クラウドコンピューティング研修',
    serviceAI: '人工知能研修',
    serviceTraining: '企業間・社内研修',
    serviceOther: 'その他（詳細を記入）',
    serviceOtherLabel: 'ニーズを詳しく記入',
    serviceOtherPlaceholder: '必要なサービスを説明してください',
    
    // Structure type
    structureTypeLabel: 'どのような組織向けですか？',
    structureSelect: '-- 選択 --',
    structureSchool: '教育機関 / 研修',
    structureAssociation: '協会 / NGO',
    structureBusiness: 'ビジネス / 中小企業',
    structureCommerce: '商業 / サービス',
    structureReligious: '教会 / 宗教団体',
    structureProfessional: '独立専門家',
    structureHotel: 'ホテル / 観光',
    structureHealth: '医療 / クリニック',
    structureEvents: 'イベント',
    structurePublic: '公共機関',
    structureOther: 'その他',
    
    // Association fields
    associationTypeLabel: '協会の種類',
    associationCultural: '文化協会',
    associationSports: 'スポーツ協会',
    associationNGO: 'NGO / 人道支援',
    associationYouth: '青年協会',
    associationParents: '保護者会',
    associationProfessional: '専門家協会 / ネットワーク',
    associationCooperative: '協同組合',
    associationOther: 'その他（詳細を記入）',
    
    // Site objective
    siteObjectiveLabel: 'サイトの主な目的',
    objShowcase: '協会と活動を紹介する（ショーケース）',
    objRecruit: '新しいメンバーを募集',
    objDonations: 'オンラインで寄付 / 会費を集める',
    objNews: 'ニュースとイベントを公開',
    objMultiple: 'これらの目的の複数（完全サイト）',
    objOther: 'その他',
    
    // Features
    featuresLabel: '希望する機能',
    featuresHint: '必要な機能をすべて選択してください',
    featPresentation: 'プレゼンテーションページ（使命、チーム、歴史）',
    featCalendar: 'イベント / 活動カレンダー',
    featMembership: 'オンライン会員登録フォーム',
    featPayment: '会費 / 寄付の支払い（Mobile Money、カード）',
    featGallery: '写真 / 動画ギャラリー',
    featBlog: 'ブログ / ニュース',
    featMembersArea: '会員エリア（限定アクセス）',
    featNewsletter: 'ニュースレター / メーリングリスト登録',
    featMap: '地図 / 支部の場所',
    featDocuments: '文書ダウンロード（規約、報告書、議事録）',
    featSocial: 'ソーシャルメディアリンク',
    
    // Languages
    languagesLabel: 'サイトの言語',
    langFrench: 'フランス語',
    langEnglish: '英語',
    langJapanese: '日本語',
    langOther: 'その他（コメントに記入）',
    
    // Deadline
    deadlineLabel: '希望スケジュール',
    deadlineUrgent: '緊急（2週間未満）',
    deadlineNormal: '通常（1〜2ヶ月）',
    deadlineFlexible: '柔軟 / 制約なし',
    
    // Description
    descriptionLabel: '協会とこのサイトへの期待を簡単に説明してください',
    descriptionPlaceholder: '例：当協会は2010年から存在し、地域文化の促進を目指しています。活動を紹介し、新しいメンバーを募集するためのサイトが必要です...',
    
    // Content management
    contentMgmtLabel: 'サイト公開後、誰がコンテンツを更新しますか？',
    cmSelf: '自分またはチームメンバー（コードに触れずに変更できる簡単な管理パネルが必要）',
    cmNipponmboa: 'NipponMboaにメンテナンスを任せる（メール/WhatsAppで変更を送り、適用してもらう）',
    cmStatic: 'サイトは頻繁な更新を必要としない（公開後もコンテンツは基本的に同じまま）',
    cmAdvice: 'まだ分からない、アドバイスが欲しい',
    
    // Submit
    submitBtn: 'リクエストを送信',
    submittingBtn: '送信中...',
    
    // Validation
    validationObjective: '目的を選択してください',
    validationLanguages: '少なくとも1つの言語を選択してください',
    validationContent: 'オプションを選択してください'
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
  
  // Update hero
  document.querySelector('.form-hero h1').textContent = t.heroTitle;
  document.querySelector('.form-hero p').textContent = t.heroSubtitle;
  
  // Update messages
  document.querySelector('#successMessage strong').textContent = t.successTitle;
  document.querySelector('#successMessage p').textContent = t.successText;
  document.querySelector('#errorMessage strong').textContent = t.errorTitle;
  document.querySelector('#errorMessage p').textContent = t.errorText;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // Update all placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  // Update submit button
  submitBtn.textContent = t.submitBtn;
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update document language
  document.documentElement.lang = lang;
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
const managementSection = document.getElementById('managementSection');
const ecommerceSection = document.getElementById('ecommerceSection');
const trainingSection = document.getElementById('trainingSection');

serviceTypeSelect.addEventListener('change', function() {
  const selectedValue = this.value;
  
  // Hide all service-specific sections first
  websiteSection.classList.add('hidden');
  managementSection.classList.add('hidden');
  ecommerceSection.classList.add('hidden');
  trainingSection.classList.add('hidden');
  serviceTypeOtherGroup.classList.add('hidden');
  
  // Remove all required attributes
  document.querySelectorAll('#websiteSection [required], #managementSection [required], #ecommerceSection [required], #trainingSection [required]').forEach(field => {
    field.required = false;
  });
  
  // Show relevant section based on selection
  if (selectedValue === 'other') {
    serviceTypeOtherGroup.classList.remove('hidden');
    serviceTypeOtherGroup.querySelector('input').required = true;
  } else if (selectedValue === 'website') {
    websiteSection.classList.remove('hidden');
    document.getElementById('structureType').required = true;
  } else if (selectedValue === 'management') {
    managementSection.classList.remove('hidden');
    document.querySelector('select[name="userCount"]').required = true;
    document.querySelector('textarea[name="managementDescription"]').required = true;
  } else if (selectedValue === 'ecommerce') {
    ecommerceSection.classList.remove('hidden');
    document.querySelector('select[name="productType"]').required = true;
    document.querySelector('select[name="productCount"]').required = true;
    document.querySelector('select[name="deliveryZone"]').required = true;
  } else if (selectedValue === 'cloud' || selectedValue === 'ai' || selectedValue === 'training') {
    trainingSection.classList.remove('hidden');
    document.querySelector('select[name="participantCount"]').required = true;
    document.querySelector('select[name="participantLevel"]').required = true;
    document.querySelector('textarea[name="trainingObjectives"]').required = true;
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

// Show/hide "Other" field for site objective
const siteObjectiveRadios = document.querySelectorAll('input[name="siteObjective"]');
const siteObjectiveOtherGroup = document.getElementById('siteObjectiveOtherGroup');

siteObjectiveRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.value === 'other' && this.checked) {
      siteObjectiveOtherGroup.classList.remove('hidden');
      siteObjectiveOtherGroup.querySelector('input').required = true;
    } else {
      siteObjectiveOtherGroup.classList.add('hidden');
      siteObjectiveOtherGroup.querySelector('input').required = false;
    }
  });
});

// Show/hide "Other" field for languages
const langOtherCheckbox = document.getElementById('lang_other');
const languagesOtherGroup = document.getElementById('languagesOtherGroup');

langOtherCheckbox.addEventListener('change', function() {
  if (this.checked) {
    languagesOtherGroup.classList.remove('hidden');
    languagesOtherGroup.querySelector('input').required = true;
  } else {
    languagesOtherGroup.classList.add('hidden');
    languagesOtherGroup.querySelector('input').required = false;
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
      
      // Website fields
      structureType: formData.get('structureType') || 'N/A',
      associationType: formData.get('associationType') || 'N/A',
      siteObjective: formData.get('siteObjective') || 'N/A',
      siteObjectiveOther: formData.get('siteObjectiveOther') || 'N/A',
      features: formData.getAll('features').join(', ') || 'N/A',
      languages: formData.getAll('languages').join(', ') || 'N/A',
      languagesOther: formData.get('languagesOther') || 'N/A',
      deadline: formData.get('deadline') || 'N/A',
      associationDescription: formData.get('associationDescription') || 'N/A',
      contentManagement: formData.get('contentManagement') || 'N/A',
      
      // Management platform fields
      managementType: formData.getAll('managementType').join(', ') || 'N/A',
      userCount: formData.get('userCount') || 'N/A',
      managementDescription: formData.get('managementDescription') || 'N/A',
      
      // E-commerce fields
      productType: formData.get('productType') || 'N/A',
      productCount: formData.get('productCount') || 'N/A',
      paymentMethods: formData.getAll('paymentMethods').join(', ') || 'N/A',
      deliveryZone: formData.get('deliveryZone') || 'N/A',
      ecommerceDescription: formData.get('ecommerceDescription') || 'N/A',
      
      // Training fields
      participantCount: formData.get('participantCount') || 'N/A',
      trainingType: formData.get('trainingType') || 'N/A',
      participantLevel: formData.get('participantLevel') || 'N/A',
      trainingObjectives: formData.get('trainingObjectives') || 'N/A',
      trainingDuration: formData.get('trainingDuration') || 'N/A'
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
