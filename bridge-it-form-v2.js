// Smart conditional form logic for Bridge IT Solutions
const form = document.getElementById('bridgeItForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Replace with your Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgLRzXmaNcfJRZnp1AOn1rEzVlWEJV38G5H_e7uK5WwVXPhyXFLXL15Kq3ybFiPpt6/exec';

// ===================================
// CONDITIONAL LOGIC
// ===================================

// Service Type Selection
const serviceTypeSelect = document.getElementById('serviceType');
const serviceTypeOtherGroup = document.getElementById('serviceTypeOtherGroup');
const websiteSection = document.getElementById('websiteSection');

serviceTypeSelect.addEventListener('change', function() {
  const selectedValue = this.value;
  
  // Show "Other" input if "other" is selected
  if (selectedValue === 'other') {
    serviceTypeOtherGroup.classList.remove('hidden');
    serviceTypeOtherGroup.querySelector('input').required = true;
  } else {
    serviceTypeOtherGroup.classList.add('hidden');
    serviceTypeOtherGroup.querySelector('input').required = false;
  }
  
  // Show website section if "website" is selected
  if (selectedValue === 'website') {
    websiteSection.classList.remove('hidden');
    // Make structure type required
    document.getElementById('structureType').required = true;
  } else {
    websiteSection.classList.add('hidden');
    // Remove required from all website fields
    document.getElementById('structureType').required = false;
    document.querySelectorAll('#websiteSection [required]').forEach(field => {
      field.required = false;
    });
  }
});

// Structure Type Selection (for website)
const structureTypeSelect = document.getElementById('structureType');
const associationFields = document.getElementById('associationFields');

structureTypeSelect.addEventListener('change', function() {
  const selectedValue = this.value;
  
  // Hide all structure-specific fields first
  associationFields.classList.add('hidden');
  
  // Remove required from all conditional fields
  associationFields.querySelectorAll('[required]').forEach(field => {
    field.required = false;
  });
  
  // Show relevant fields based on structure type
  if (selectedValue === 'association') {
    associationFields.classList.remove('hidden');
    
    // Make association-specific fields required
    document.querySelector('select[name="associationType"]').required = true;
    document.querySelector('select[name="deadline"]').required = true;
    
    // Radio buttons and checkboxes will be validated via custom validation
  }
  // TODO: Add other structure types (school, business, etc.) as needed
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
  
  // Hide previous messages
  successMessage.classList.remove('show');
  errorMessage.classList.remove('show');
  
  // Disable button and show loading
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = 'Envoi en cours...';
  
  try {
    // Collect form data
    const formData = new FormData(form);
    
    // Build data object with all fields
    const data = {
      timestamp: new Date().toISOString(),
      // Contact Information
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      occupation: formData.get('occupation') || 'N/A',
      address: formData.get('address') || 'N/A',
      
      // Service Type
      serviceType: formData.get('serviceType'),
      serviceTypeOther: formData.get('serviceTypeOther') || 'N/A',
      
      // Website Details (if applicable)
      structureType: formData.get('structureType') || 'N/A',
      
      // Association-specific fields (if applicable)
      associationType: formData.get('associationType') || 'N/A',
      siteObjective: formData.get('siteObjective') || 'N/A',
      
      // Features (checkboxes)
      features: formData.getAll('features').join(', ') || 'N/A',
      
      // Languages (checkboxes)
      languages: formData.getAll('languages').join(', ') || 'N/A',
      
      // Other association fields
      deadline: formData.get('deadline') || 'N/A',
      associationDescription: formData.get('associationDescription') || 'N/A',
      contentManagement: formData.get('contentManagement') || 'N/A'
    };
    
    // Send to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    // Show success message
    successMessage.classList.add('show');
    form.reset();
    
    // Reset conditional sections
    websiteSection.classList.add('hidden');
    serviceTypeOtherGroup.classList.add('hidden');
    associationFields.classList.add('hidden');
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide success message after 10 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 10000);
    
  } catch (error) {
    console.error('Form submission error:', error);
    errorMessage.classList.add('show');
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setTimeout(() => {
      errorMessage.classList.remove('show');
    }, 10000);
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});

// ===================================
// CUSTOM VALIDATION FOR RADIO/CHECKBOX GROUPS
// ===================================

// Ensure at least one radio button is selected for site objective
const siteObjectiveRadios = document.querySelectorAll('input[name="siteObjective"]');
siteObjectiveRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    // Remove custom validity when one is selected
    siteObjectiveRadios.forEach(r => r.setCustomValidity(''));
  });
});

// Ensure at least one checkbox is selected for languages
const languageCheckboxes = document.querySelectorAll('input[name="languages"]');
const validateLanguages = () => {
  const isAssociationVisible = !associationFields.classList.contains('hidden');
  if (isAssociationVisible) {
    const isChecked = Array.from(languageCheckboxes).some(cb => cb.checked);
    languageCheckboxes.forEach(cb => {
      if (!isChecked) {
        cb.setCustomValidity('Veuillez sélectionner au moins une langue');
      } else {
        cb.setCustomValidity('');
      }
    });
  }
};

languageCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', validateLanguages);
});

// Validate before form submission
form.addEventListener('submit', function(e) {
  // Check if association fields are visible
  const isAssociationVisible = !associationFields.classList.contains('hidden');
  
  if (isAssociationVisible) {
    // Validate site objective
    const siteObjectiveChecked = Array.from(siteObjectiveRadios).some(r => r.checked);
    if (!siteObjectiveChecked) {
      siteObjectiveRadios[0].setCustomValidity('Veuillez sélectionner un objectif');
      siteObjectiveRadios[0].reportValidity();
      e.preventDefault();
      return;
    }
    
    // Validate languages
    const languagesChecked = Array.from(languageCheckboxes).some(cb => cb.checked);
    if (!languagesChecked) {
      languageCheckboxes[0].setCustomValidity('Veuillez sélectionner au moins une langue');
      languageCheckboxes[0].reportValidity();
      e.preventDefault();
      return;
    }
    
    // Validate content management
    const contentManagementRadios = document.querySelectorAll('input[name="contentManagement"]');
    const contentManagementChecked = Array.from(contentManagementRadios).some(r => r.checked);
    if (!contentManagementChecked) {
      contentManagementRadios[0].setCustomValidity('Veuillez sélectionner une option');
      contentManagementRadios[0].reportValidity();
      e.preventDefault();
      return;
    }
  }
});
