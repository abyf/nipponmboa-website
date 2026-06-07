// Cultural & Tourism Exchange - JavaScript Functionality

// i18n translations for Cultural & Tourism Exchange page
const cteI18n = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_poles: "Pôles",
    nav_contact: "Contact",

    // Hero Section
    cte_hero_title: "Cultural & Tourism Exchange",
    cte_hero_subtitle: "Découvrez et partagez la richesse culturelle entre le Cameroun et le Japon",
    cte_hero_feat1: "Circuits découverte",
    cte_hero_feat2: "Séjours en famille",
    cte_hero_feat3: "Événements culturels",

    // Intro Section
    cte_intro_title: "Votre Pont Culturel entre Deux Mondes",
    cte_intro_p1: "Le pôle <strong>Cultural & Tourism Exchange</strong> vous invite à découvrir et à célébrer la richesse des cultures camerounaise et japonaise à travers des expériences immersives et authentiques.",
    cte_intro_p2: "Des circuits touristiques aux séjours en famille d'accueil, en passant par des événements culturels enrichissants, nous créons des ponts humains qui transcendent les frontières.",
    cte_stat1: "Types d'expériences",
    cte_stat2: "Sens d'échange",
    cte_stat3: "Immersion culturelle",
    cte_flag_cm: "Cameroun",
    cte_flag_jp: "Japon",

    // Services Section
    cte_services_title: "Nos Services Détaillés",
    cte_services_subtitle: "Choisissez l'expérience culturelle qui vous correspond",
    cte_dir_cmr_jpn: "Cameroun vers Japon",
    cte_dir_jpn_cmr: "Japon vers Cameroun",

    // Service badges and common terms
    cte_badge_popular: "Le plus populaire",
    cte_badge_immersion: "Immersion totale",
    cte_badge_event: "Événement sur mesure",
    cte_scenarios: "Scénarios d'utilisation :",
    cte_deliverables: "Livrables :",
    cte_btn_request: "Demander un devis",

    // Service 1 - Circuit Découverte CMR->JPN
    cte_s1_title: "Circuit Découverte",
    cte_s1_cmr_sc1: "Groupe de camerounais visitant le Japon",
    cte_s1_cmr_sc2: "Couple souhaitant découvrir la culture japonaise",
    cte_s1_cmr_sc3: "Professionnels en voyage d'affaires avec extension touristique",
    cte_s1_cmr_del1: "Visite des zones et villes touristiques japonaises",
    cte_s1_cmr_del2: "Guide francophone/anglophone",
    cte_s1_cmr_del3: "Programme culturel personnalisé",
    cte_s1_cmr_del4: "Assistance logistique complète",

    // Service 1 - Circuit Découverte JPN->CMR
    cte_s1_jpn_sc1: "Touriste japonais découvrant le Cameroun",
    cte_s1_jpn_sc2: "Groupe visitant les sites touristiques camerounais",
    cte_s1_jpn_sc3: "Voyageurs individuels ou en famille",
    cte_s1_jpn_del1: "Visite des zones touristiques camerounaises",
    cte_s1_jpn_del2: "Guide japonophone",
    cte_s1_jpn_del3: "Découverte de la culture locale",
    cte_s1_jpn_del4: "Hébergement et transport organisés",

    // Service 2 - Homestay
    cte_s2_title: "Homestay Cameroun",
    cte_s2_sc1: "Touriste japonais souhaitant vivre avec une famille camerounaise",
    cte_s2_sc2: "Volontaire japonais en mission au Cameroun",
    cte_s2_sc3: "Étudiant japonais en échange culturel",
    cte_s2_sc4: "Professionnel en longue mission",
    cte_s2_del1: "Hébergement en famille d'accueil sélectionnée",
    cte_s2_del2: "Repas traditionnels inclus",
    cte_s2_del3: "Immersion culturelle quotidienne",
    cte_s2_del4: "Support et suivi régulier",
    cte_s2_del5: "Programme modulable selon vos priorités",

    // Service 3 - Culture Japonaise au Cameroun
    cte_s3_title: "Célébration de la Culture Japonaise au Cameroun",
    cte_s3_sc1: "Organisation de conférences culturelles",
    cte_s3_sc2: "Ateliers d'arts japonais (calligraphie, ikebana, origami)",
    cte_s3_sc3: "Démonstrations culinaires et cérémonies du thé",
    cte_s3_sc4: "Projections de films et découverte des mangas",
    cte_s3_sc5: "Initiation aux arts martiaux (judo, karaté, aïkido)",
    cte_s3_del1: "Conférences avec experts",
    cte_s3_del2: "Ateliers pratiques animés par des maîtres",
    cte_s3_del3: "Concerts de musique traditionnelle (koto, shamisen)",
    cte_s3_del4: "Matériel et fournitures inclus",
    cte_s3_del5: "Certificats de participation",

    // Service 4 - Culture Camerounaise au Japon
    cte_s4_title: "Célébration de la Culture Camerounaise au Japon",
    cte_s4_sc1: "Présentation de la culture camerounaise au Japon",
    cte_s4_sc2: "Festivals culturels et gastronomiques",
    cte_s4_sc3: "Expositions d'art et d'artisanat camerounais",
    cte_s4_sc4: "Concerts de musique traditionnelle",
    cte_s4_sc5: "Démonstrations de danses traditionnelles",
    cte_s4_del1: "Organisation complète de l'événement",
    cte_s4_del2: "Coordination avec artistes camerounais",
    cte_s4_del3: "Interprétation japonais-français/anglais",
    cte_s4_del4: "Matériel promotionnel bilingue",
    cte_s4_del5: "Gestion logistique complète",

    // Cultural Activities
    cte_activities_title: "Activités Culturelles Disponibles",
    cte_activities_subtitle: "Découvrez la richesse de nos ateliers et expériences culturelles",
    cte_act1_title: "Calligraphie Japonaise",
    cte_act1_desc: "Apprenez l'art ancestral de l'écriture japonaise avec des maîtres calligraphes",
    cte_act2_title: "Ikebana (Art Floral)",
    cte_act2_desc: "Maîtrisez l'art japonais de l'arrangement floral et sa philosophie",
    cte_act3_title: "Origami",
    cte_act3_desc: "Découvrez l'art du pliage de papier, de la grue aux créations complexes",
    cte_act4_title: "Cérémonie du Thé",
    cte_act4_desc: "Participez à une authentique cérémonie du thé et apprenez sa philosophie",
    cte_act5_title: "Cuisine Japonaise",
    cte_act5_desc: "Ateliers de sushi, ramen, et autres spécialités de la gastronomie japonaise",
    cte_act6_title: "Arts Martiaux",
    cte_act6_desc: "Initiations au judo, karaté, aïkido avec instructeurs certifiés",
    cte_act7_title: "Cinéma & Manga",
    cte_act7_desc: "Projections de films japonais et découverte de l'univers des mangas",
    cte_act8_title: "Musique Traditionnelle",
    cte_act8_desc: "Concerts et initiations aux instruments traditionnels (koto, shamisen)",

    // CTA Section
    cte_cta_title: "Prêt à Vivre une Expérience Culturelle Unique ?",
    cte_cta_subtitle: "Contactez-nous pour organiser votre circuit, séjour ou événement culturel sur mesure",
    cte_cta_btn1: "Nous Contacter",
    cte_cta_btn2: "Retour à l'Accueil",

    // Footer
    footer_tagline: "Votre passerelle vers l'excellence Cameroun-Japon",
    footer_copy: "© 2024 NipponMboa Consulting. Tous droits réservés."
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_poles: "Poles",
    nav_contact: "Contact",

    // Hero Section
    cte_hero_title: "Cultural & Tourism Exchange",
    cte_hero_subtitle: "Discover and share the cultural richness between Cameroon and Japan",
    cte_hero_feat1: "Discovery tours",
    cte_hero_feat2: "Family stays",
    cte_hero_feat3: "Cultural events",

    // Intro Section
    cte_intro_title: "Your Cultural Bridge Between Two Worlds",
    cte_intro_p1: "The <strong>Cultural & Tourism Exchange</strong> division invites you to discover and celebrate the richness of Cameroonian and Japanese cultures through immersive and authentic experiences.",
    cte_intro_p2: "From tourist circuits to host family stays, to enriching cultural events, we create human bridges that transcend borders.",
    cte_stat1: "Experience types",
    cte_stat2: "Exchange directions",
    cte_stat3: "Cultural immersion",
    cte_flag_cm: "Cameroon",
    cte_flag_jp: "Japan",

    // Services Section
    cte_services_title: "Our Detailed Services",
    cte_services_subtitle: "Choose the cultural experience that suits you",
    cte_dir_cmr_jpn: "Cameroon to Japan",
    cte_dir_jpn_cmr: "Japan to Cameroon",

    // Service badges and common terms
    cte_badge_popular: "Most popular",
    cte_badge_immersion: "Total immersion",
    cte_badge_event: "Custom event",
    cte_scenarios: "Use cases:",
    cte_deliverables: "Deliverables:",
    cte_btn_request: "Request a quote",

    // Service 1 - Circuit Découverte CMR->JPN
    cte_s1_title: "Discovery Tour",
    cte_s1_cmr_sc1: "Cameroonian group visiting Japan",
    cte_s1_cmr_sc2: "Couple wishing to discover Japanese culture",
    cte_s1_cmr_sc3: "Professionals on business trip with tourist extension",
    cte_s1_cmr_del1: "Visit to Japanese tourist areas and cities",
    cte_s1_cmr_del2: "French/English-speaking guide",
    cte_s1_cmr_del3: "Personalized cultural program",
    cte_s1_cmr_del4: "Complete logistical assistance",

    // Service 1 - Circuit Découverte JPN->CMR
    cte_s1_jpn_sc1: "Japanese tourist discovering Cameroon",
    cte_s1_jpn_sc2: "Group visiting Cameroonian tourist sites",
    cte_s1_jpn_sc3: "Individual or family travelers",
    cte_s1_jpn_del1: "Visit to Cameroonian tourist areas",
    cte_s1_jpn_del2: "Japanese-speaking guide",
    cte_s1_jpn_del3: "Local culture discovery",
    cte_s1_jpn_del4: "Organized accommodation and transport",

    // Service 2 - Homestay
    cte_s2_title: "Cameroon Homestay",
    cte_s2_sc1: "Japanese tourist wanting to live with a Cameroonian family",
    cte_s2_sc2: "Japanese volunteer on mission in Cameroon",
    cte_s2_sc3: "Japanese student on cultural exchange",
    cte_s2_sc4: "Professional on long-term assignment",
    cte_s2_del1: "Accommodation with selected host family",
    cte_s2_del2: "Traditional meals included",
    cte_s2_del3: "Daily cultural immersion",
    cte_s2_del4: "Regular support and follow-up",
    cte_s2_del5: "Program adaptable to your priorities",

    // Service 3 - Culture Japonaise au Cameroun
    cte_s3_title: "Celebrating Japanese Culture in Cameroon",
    cte_s3_sc1: "Organization of cultural conferences",
    cte_s3_sc2: "Japanese arts workshops (calligraphy, ikebana, origami)",
    cte_s3_sc3: "Culinary demonstrations and tea ceremonies",
    cte_s3_sc4: "Film screenings and manga discovery",
    cte_s3_sc5: "Introduction to martial arts (judo, karate, aikido)",
    cte_s3_del1: "Conferences with experts",
    cte_s3_del2: "Practical workshops led by masters",
    cte_s3_del3: "Traditional music concerts (koto, shamisen)",
    cte_s3_del4: "Materials and supplies included",
    cte_s3_del5: "Certificates of participation",

    // Service 4 - Culture Camerounaise au Japon
    cte_s4_title: "Celebrating Cameroonian Culture in Japan",
    cte_s4_sc1: "Presentation of Cameroonian culture in Japan",
    cte_s4_sc2: "Cultural and gastronomic festivals",
    cte_s4_sc3: "Cameroonian art and craft exhibitions",
    cte_s4_sc4: "Traditional music concerts",
    cte_s4_sc5: "Traditional dance demonstrations",
    cte_s4_del1: "Complete event organization",
    cte_s4_del2: "Coordination with Cameroonian artists",
    cte_s4_del3: "Japanese-French/English interpretation",
    cte_s4_del4: "Bilingual promotional material",
    cte_s4_del5: "Complete logistical management",

    // Cultural Activities
    cte_activities_title: "Available Cultural Activities",
    cte_activities_subtitle: "Discover the richness of our workshops and cultural experiences",
    cte_act1_title: "Japanese Calligraphy",
    cte_act1_desc: "Learn the ancient art of Japanese writing with master calligraphers",
    cte_act2_title: "Ikebana (Floral Art)",
    cte_act2_desc: "Master the Japanese art of flower arrangement and its philosophy",
    cte_act3_title: "Origami",
    cte_act3_desc: "Discover the art of paper folding, from cranes to complex creations",
    cte_act4_title: "Tea Ceremony",
    cte_act4_desc: "Participate in an authentic tea ceremony and learn its philosophy",
    cte_act5_title: "Japanese Cuisine",
    cte_act5_desc: "Sushi, ramen workshops, and other Japanese gastronomic specialties",
    cte_act6_title: "Martial Arts",
    cte_act6_desc: "Introduction to judo, karate, aikido with certified instructors",
    cte_act7_title: "Cinema & Manga",
    cte_act7_desc: "Japanese film screenings and discovery of the manga universe",
    cte_act8_title: "Traditional Music",
    cte_act8_desc: "Concerts and introduction to traditional instruments (koto, shamisen)",

    // CTA Section
    cte_cta_title: "Ready to Live a Unique Cultural Experience?",
    cte_cta_subtitle: "Contact us to organize your custom tour, stay or cultural event",
    cte_cta_btn1: "Contact Us",
    cte_cta_btn2: "Back to Home",

    // Footer
    footer_tagline: "Your gateway to Cameroon-Japan excellence",
    footer_copy: "© 2024 NipponMboa Consulting. All rights reserved."
  },

  ja: {
    // Navigation
    nav_home: "ホーム",
    nav_about: "私たちについて",
    nav_poles: "サービス部門",
    nav_contact: "お問い合わせ",

    // Hero Section
    cte_hero_title: "文化・観光交流",
    cte_hero_subtitle: "カメルーンと日本の文化的豊かさを発見し、共有する",
    cte_hero_feat1: "発見ツアー",
    cte_hero_feat2: "ホームステイ",
    cte_hero_feat3: "文化イベント",

    // Intro Section
    cte_intro_title: "二つの世界をつなぐ文化の架け橋",
    cte_intro_p1: "<strong>文化・観光交流</strong>部門は、没入型で本格的な体験を通じて、カメルーンと日本の文化の豊かさを発見し、祝うことを提案します。",
    cte_intro_p2: "観光ツアーからホストファミリーでの滞在、豊かな文化イベントまで、国境を越える人間の架け橋を創造します。",
    cte_stat1: "体験タイプ",
    cte_stat2: "交流方向",
    cte_stat3: "文化的没入",
    cte_flag_cm: "カメルーン",
    cte_flag_jp: "日本",

    // Services Section
    cte_services_title: "詳細サービス",
    cte_services_subtitle: "あなたに合った文化体験をお選びください",
    cte_dir_cmr_jpn: "カメルーンから日本へ",
    cte_dir_jpn_cmr: "日本からカメルーンへ",

    // Service badges and common terms
    cte_badge_popular: "最も人気",
    cte_badge_immersion: "完全没入",
    cte_badge_event: "カスタムイベント",
    cte_scenarios: "利用シーン：",
    cte_deliverables: "成果物：",
    cte_btn_request: "見積もりを依頼",

    // Service 1 - Circuit Découverte CMR->JPN
    cte_s1_title: "発見ツアー",
    cte_s1_cmr_sc1: "日本を訪問するカメルーン人グループ",
    cte_s1_cmr_sc2: "日本文化を発見したいカップル",
    cte_s1_cmr_sc3: "観光延長付きの出張中の専門家",
    cte_s1_cmr_del1: "日本の観光地や都市の訪問",
    cte_s1_cmr_del2: "フランス語/英語ガイド",
    cte_s1_cmr_del3: "カスタマイズされた文化プログラム",
    cte_s1_cmr_del4: "完全なロジスティックサポート",

    // Service 1 - Circuit Découverte JPN->CMR
    cte_s1_jpn_sc1: "カメルーンを発見する日本人観光客",
    cte_s1_jpn_sc2: "カメルーンの観光地を訪問するグループ",
    cte_s1_jpn_sc3: "個人または家族旅行者",
    cte_s1_jpn_del1: "カメルーンの観光地訪問",
    cte_s1_jpn_del2: "日本語ガイド",
    cte_s1_jpn_del3: "現地文化の発見",
    cte_s1_jpn_del4: "手配された宿泊と交通",

    // Service 2 - Homestay
    cte_s2_title: "カメルーン・ホームステイ",
    cte_s2_sc1: "カメルーン家族と一緒に暮らしたい日本人観光客",
    cte_s2_sc2: "カメルーンで任務中の日本人ボランティア",
    cte_s2_sc3: "文化交流の日本人学生",
    cte_s2_sc4: "長期任務の専門家",
    cte_s2_del1: "選ばれたホストファミリーでの宿泊",
    cte_s2_del2: "伝統的な食事込み",
    cte_s2_del3: "日々の文化的没入",
    cte_s2_del4: "定期的なサポートとフォローアップ",
    cte_s2_del5: "優先順位に応じて調整可能なプログラム",

    // Service 3 - Culture Japonaise au Cameroun
    cte_s3_title: "カメルーンでの日本文化の祝祭",
    cte_s3_sc1: "文化会議の企画",
    cte_s3_sc2: "日本芸術ワークショップ（書道、生け花、折り紙）",
    cte_s3_sc3: "料理のデモンストレーションと茶道",
    cte_s3_sc4: "映画上映と漫画の発見",
    cte_s3_sc5: "武道入門（柔道、空手、合気道）",
    cte_s3_del1: "専門家による会議",
    cte_s3_del2: "マスターによる実践ワークショップ",
    cte_s3_del3: "伝統音楽コンサート（琴、三味線）",
    cte_s3_del4: "材料と用品込み",
    cte_s3_del5: "参加証明書",

    // Service 4 - Culture Camerounaise au Japon
    cte_s4_title: "日本でのカメルーン文化の祝祭",
    cte_s4_sc1: "日本でのカメルーン文化の紹介",
    cte_s4_sc2: "文化・美食フェスティバル",
    cte_s4_sc3: "カメルーンの芸術と工芸品の展示",
    cte_s4_sc4: "伝統音楽コンサート",
    cte_s4_sc5: "伝統舞踊のデモンストレーション",
    cte_s4_del1: "イベントの完全な企画",
    cte_s4_del2: "カメルーンのアーティストとの調整",
    cte_s4_del3: "日本語-フランス語/英語通訳",
    cte_s4_del4: "バイリンガルプロモーション資料",
    cte_s4_del5: "完全なロジスティック管理",

    // Cultural Activities
    cte_activities_title: "利用可能な文化活動",
    cte_activities_subtitle: "私たちのワークショップと文化体験の豊かさを発見する",
    cte_act1_title: "日本の書道",
    cte_act1_desc: "書道家マスターと日本の伝統的な筆記芸術を学ぶ",
    cte_act2_title: "生け花（華道）",
    cte_act2_desc: "日本の生け花芸術とその哲学をマスターする",
    cte_act3_title: "折り紙",
    cte_act3_desc: "鶴から複雑な創作まで、紙折り芸術を発見する",
    cte_act4_title: "茶道",
    cte_act4_desc: "本格的な茶道に参加し、その哲学を学ぶ",
    cte_act5_title: "日本料理",
    cte_act5_desc: "寿司、ラーメンワークショップ、その他日本料理の特産品",
    cte_act6_title: "武道",
    cte_act6_desc: "認定インストラクターによる柔道、空手、合気道の入門",
    cte_act7_title: "映画・漫画",
    cte_act7_desc: "日本映画の上映と漫画の世界の発見",
    cte_act8_title: "伝統音楽",
    cte_act8_desc: "伝統楽器（琴、三味線）のコンサートと入門",

    // CTA Section
    cte_cta_title: "ユニークな文化体験を生きる準備はできましたか？",
    cte_cta_subtitle: "カスタムツアー、滞在、文化イベントを企画するために、お問い合わせください",
    cte_cta_btn1: "お問い合わせ",
    cte_cta_btn2: "ホームに戻る",

    // Footer
    footer_tagline: "カメルーンと日本の卓越性への架け橋",
    footer_copy: "© 2024 NipponMboa Consulting. All rights reserved."
  }
};

// Current language
let currentLang = 'fr';

// Apply translations
function applyLang(lang) {
  currentLang = lang;
  const t = cteI18n[lang];
  document.documentElement.lang = lang;

  // Apply translations to elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Store language preference
  localStorage.setItem('preferred-language', lang);
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize direction selector
  initDirectionSelector();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize language switcher
  initLanguageSwitcher();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Load saved language preference or default to French
  const savedLang = localStorage.getItem('preferred-language') || 'fr';
  applyLang(savedLang);
});

// Direction Selector Functionality
function initDirectionSelector() {
  const directionBtns = document.querySelectorAll('.cte-direction-btn');
  
  directionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const direction = this.dataset.direction;
      
      // Update active button
      directionBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update service cards content
      updateServiceContent(direction);
    });
  });
}

function updateServiceContent(direction) {
  // Update scenarios
  const scenarios = document.querySelectorAll('.cte-scenarios');
  scenarios.forEach(scenario => {
    const scenarioDirection = scenario.dataset.direction;
    if (scenarioDirection === direction) {
      scenario.style.display = 'block';
    } else if (scenarioDirection && scenarioDirection !== direction) {
      scenario.style.display = 'none';
    }
  });
  
  // Update deliverables (for Circuit Découverte)
  const deliverables = document.querySelectorAll('.cte-deliverables ul[data-direction]');
  deliverables.forEach(deliverable => {
    const deliverableDirection = deliverable.dataset.direction;
    if (deliverableDirection === direction) {
      deliverable.style.display = 'block';
    } else {
      deliverable.style.display = 'none';
    }
  });
  
  // Update pricing
  const prices = document.querySelectorAll('.cte-price');
  prices.forEach(price => {
    const priceDirection = price.dataset.direction;
    if (priceDirection === direction) {
      price.style.display = 'block';
    } else if (priceDirection && priceDirection !== direction) {
      price.style.display = 'none';
    }
  });
  
  // Add animation
  const serviceCards = document.querySelectorAll('.cte-service-card');
  serviceCards.forEach(card => {
    card.style.animation = 'none';
    setTimeout(() => {
      card.style.animation = 'fadeIn 0.5s ease';
    }, 10);
  });
}

// Mobile Navigation
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
      
      // Update icon
      if (navLinks.classList.contains('active')) {
        this.innerHTML = '&times;';
      } else {
        this.innerHTML = '&#9776;';
      }
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.innerHTML = '&#9776;';
      });
    });
  }
}

// Language Switcher
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      applyLang(lang);
    });
  });
}

// Smooth Scroll
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal anchors
      if (href === '#' || !href) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe service cards and activity cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.cte-service-card, .cte-activity-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0.5;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Service Card Interaction Enhancement
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.cte-service-card');
  
  serviceCards.forEach(card => {
    // Add hover effect for better UX
    card.addEventListener('mouseenter', function() {
      if (this.classList.contains('cte-featured')) {
        this.style.transform = 'translateY(-8px)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      if (this.classList.contains('cte-featured')) {
        this.style.transform = 'translateY(-5px)';
      }
    });
  });
});

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // Adjust layouts if needed on resize
    adjustLayoutsOnResize();
  }, 250);
});

function adjustLayoutsOnResize() {
  const width = window.innerWidth;
  
  // Close mobile nav if window is resized to desktop
  if (width > 768) {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.innerHTML = '&#9776;';
    }
  }
}

// Scroll to top functionality
window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
  // Add shadow to navbar on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (scrollTop > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});

// Print-friendly formatting
window.addEventListener('beforeprint', function() {
  // Expand all collapsed content for printing
  const scenarios = document.querySelectorAll('.cte-scenarios');
  scenarios.forEach(scenario => {
    scenario.style.display = 'block';
  });
});

window.addEventListener('afterprint', function() {
  // Restore original state after printing
  const activeDirection = document.querySelector('.cte-direction-btn.active');
  if (activeDirection) {
    updateServiceContent(activeDirection.dataset.direction);
  }
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
  // Escape key closes mobile nav
  if (e.key === 'Escape') {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.innerHTML = '&#9776;';
    }
  }
});

// Add focus visible class for better keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-nav');
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      console.warn('Failed to load image:', this.src);
      // You could set a placeholder here if needed
      // this.src = 'path/to/placeholder.png';
    });
  });
});

// Console log for debugging (remove in production)
console.log('Cultural & Tourism Exchange page loaded successfully');
