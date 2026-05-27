/* ========================================
   ACADEMIA & CAREER PAGE - JAVASCRIPT
   Interactive Quiz & i18n
   ======================================== */

// Extended i18n translations for Academia & Career page
const academiaI18n = {
  fr: {
    // Navigation (reuse from main site)
    nav_about: "À propos",
    nav_poles: "Nos Pôles",
    nav_services: "Services",
    nav_contact: "Contact",

    // Hero Section
    academy_hero_title: "Ton avenir commence ici",
    academy_hero_subtitle: "Que tu veuilles étudier au Japon, travailler dans une grande entreprise tech ou simplement apprendre le japonais, nous t'accompagnons à chaque étape.",
    academy_hero_cta: "🎯 Trouver mon parcours",

    // Quiz Section
    quiz_title: "🎯 Quel est ton objectif ?",
    quiz_subtitle: "Clique sur ton objectif principal pour découvrir le parcours qui te correspond",
    
    // Goals
    goal_study_japan: "Étudier au Japon",
    goal_study_desc: "Intégrer une université ou école japonaise",
    goal_work_japan: "Travailler au Japon",
    goal_work_desc: "Décrocher un emploi au Japon",
    goal_work_intl: "Travailler à l'international",
    goal_work_intl_desc: "Carrière dans une grande entreprise tech",
    goal_orientation: "Trouver ma voie",
    goal_orientation_desc: "Intégration socio-professionnelle au Cameroun",
    goal_tech: "Faire carrière dans les métiers Data Centers",
    goal_tech_desc: "Amazon, Google, Oracle, Microsoft",

    // Results
    result_recommended: "✅ Parcours recommandé :",
    result_learn_more: "En savoir plus",
    result_contact: "Nous contacter",

    // Packs
    packs_title: "📚 Vue d'ensemble des Packs",
    packs_subtitle: "Nos parcours complets pour réaliser ton projet",
    
    pack_popular: "🎓 Étudiez au Japon en confiance",
    pack_recommended: "🌍 Construisez votre carrière globale",
    pack3_badge: "🧭 Trouvez votre direction",
    
    pack1_title: "Pack Complet Japonais",
    pack1_subtitle: "Pour étudier ou travailler au Japon",
    pack1_feat1: "✓ Séance d'orientation personnalisée",
    pack1_feat2: "✓ Cours de japonais complets (N5 → N2/N3)",
    pack1_feat3: "✓ Préparation JLPT & culture japonaise",
    pack1_feat4: "✓ Club Anglais inclus tout au long",
    pack1_feat5: "✓ Assistance études ou emploi au Japon",
    pack1_feat6: "✓ Newsletter Opportunités (gratuit)",
    
    pack2_title: "Pack Complet Travail International",
    pack2_subtitle: "Pour Amazon, Google, Oracle, Microsoft",
    pack2_feat1: "✓ Orientation & diagnostic de compétences",
    pack2_feat2: "✓ Club Anglais intensif (oral professionnel)",
    pack2_feat3: "✓ Cours de japonais (bases pour le Japon)",
    pack2_feat4: "✓ Mentorat carrière & préparation entretiens",
    pack2_feat5: "✓ Recommandation auprès des entreprises",
    pack2_feat6: "✓ Pack Data Center inclus",
    pack2_feat7: "✓ Newsletter Opportunités (gratuit)",
    
    pack3_title: "Orientation & Mentorat",
    pack3_subtitle: "Tu ne sais pas par où commencer ?",
    pack3_feat1: "✓ 2-3h de diagnostic personnalisé",
    pack3_feat2: "✓ Analyse de ton profil et objectifs",
    pack3_feat3: "✓ Recommandations d'écoles ou employeurs",
    pack3_feat4: "✓ Roadmap personnalisée",
    pack3_feat5: "✓ Suivi après la session",
    
    price_from: "À partir de",

    // Modules
    modules_title: "🎨 Modules à la Carte",
    modules_subtitle: "Compose ton propre parcours selon tes besoins",
    
    module1_title: "Cours de Japonais",
    module1_desc: "Niveau débutant à avancé (N5 → N2)",
    module2_title: "Club Anglais",
    module2_desc: "Perfectionnement oral et confiance",
    module3_title: "Préparation JLPT",
    module3_desc: "Entraînement intensif pour l'examen",
    module4_title: "Orientation seule",
    module4_desc: "Session de diagnostic de 2-3h",
    module5_title: "Culture japonaise",
    module5_desc: "Ateliers thématiques immersifs",
    module6_title: "Coaching Carrière",
    module6_desc: "Préparation CV, entretiens, networking",
    module7_title: "Newsletter Opportunités",
    module7_desc: "Alertes bourses, stages, échanges",

    // FAQ
    faq_title: "❓ Questions Fréquentes",
    faq1_q: "Je n'ai aucune base en japonais, c'est possible ?",
    faq1_a: "Absolument ! Nos cours commencent depuis le niveau débutant complet (N5). Nous t'accompagnons étape par étape, du hiragana jusqu'au niveau requis pour tes études ou ton emploi au Japon.",
    faq2_q: "Combien de temps dure le Pack Complet ?",
    faq2_a: "Le Pack Complet Japonais dure généralement 12 à 18 mois selon ton niveau de départ et ton objectif (N4, N3 ou N2). Le Pack Travail International est plus flexible et peut durer de 6 à 12 mois.",
    faq3_q: "Je peux payer en plusieurs fois ?",
    faq3_a: "Oui ! Nous proposons des facilités de paiement mensuelles pour tous nos packs. Contacte-nous pour établir un plan de paiement adapté à ta situation.",
    faq4_q: "Aidez-vous vraiment à trouver un emploi au Japon ?",
    faq4_a: "Oui ! Nous avons des partenariats avec plusieurs entreprises japonaises et internationales. Après validation de ton niveau de japonais et de tes compétences, nous te recommandons auprès de nos partenaires.",
    faq5_q: "Le Club Anglais est-il vraiment nécessaire ?",
    faq5_a: "L'anglais est essentiel ! La plupart des grandes entreprises tech au Japon (Amazon, Google, Oracle) utilisent l'anglais comme langue de travail. Le Club Anglais renforce ta confiance à l'oral et ton aisance professionnelle.",
    faq6_q: "Qu'est-ce que le Pack Data Center ?",
    faq6_a: "C'est un module spécialisé pour ceux qui visent des postes dans les data centers d'Amazon, Google, Microsoft ou Oracle au Japon. Il inclut des formations techniques spécifiques, du networking et des recommandations ciblées.",

    // CTA Section
    cta_title: "🚀 Prêt à commencer ton parcours ?",
    cta_subtitle: "Contacte-nous pour une consultation gratuite et découvre le parcours qui te correspond",
    cta_whatsapp: "WhatsApp",
    cta_email: "Email",
    cta_form_title: "Ou remplis ce formulaire rapide :",
    
    // Form
    form_name: "Ton nom",
    form_email: "Ton email",
    form_phone: "Téléphone / WhatsApp",
    form_goal_default: "Ton objectif principal",
    form_additional: "Informations complémentaires (optionnel)",
    form_submit: "Envoyer ma demande",

    // Footer
    footer_tagline: "Une expérience unique au service de votre réussite",
    footer_copy: "© 2025 NipponMboa Consulting. Tous droits réservés.",
    
    // Return Home
    return_home_title: "Découvrir tous nos services",
    return_home_subtitle: "Explorez l'ensemble de nos pôles et services",
    return_home_btn: "Retour à l'accueil",
    
    // Timeline labels
    timeline_month: "Mois",
    timeline_total: "Total",
    timeline_total_cost: "Coût Total",
    timeline_starts_month: "Démarre au mois",
    timeline_inscription: "Inscription",
    timeline_annual_fee: "Pension annuelle",
    timeline_payment_options: "Options de paiement",
    timeline_monthly: "Mensuel",
    timeline_six_months: "6 mois",
    timeline_yearly: "Annuel",
    timeline_per_month: "/mois",
    timeline_if_confirmed: "Si",
    timeline_confirmed: "confirmé",
    timeline_included_in_pack: "Inclus dans ce pack :",
    timeline_optional_note: "Paiement mensuel disponible",
  },

  en: {
    nav_about: "About",
    nav_poles: "Our Poles",
    nav_services: "Services",
    nav_contact: "Contact",

    academy_hero_title: "Your future starts here",
    academy_hero_subtitle: "Whether you want to study in Japan, work at a major tech company, or simply learn Japanese, we support you every step of the way.",
    academy_hero_cta: "🎯 Find my path",

    quiz_title: "🎯 What's your goal?",
    quiz_subtitle: "Click on your main objective to discover the path that suits you",
    
    goal_study_japan: "Study in Japan",
    goal_study_desc: "Join a Japanese university or school",
    goal_work_japan: "Work in Japan",
    goal_work_desc: "Get a job in Japan",
    goal_work_intl: "Work internationally",
    goal_work_intl_desc: "Career at a major tech company",
    goal_orientation: "Find my path",
    goal_orientation_desc: "Socio-professional integration in Cameroon",
    goal_tech: "Build a Data Center Career",
    goal_tech_desc: "Amazon, Google, Oracle, Microsoft",

    result_recommended: "✅ Recommended path:",
    result_learn_more: "Learn more",
    result_contact: "Contact us",

    packs_title: "📚 Overview of Packages",
    packs_subtitle: "Our complete programs to achieve your project",
    
    pack_popular: "🎓 Study in Japan with confidence",
    pack_recommended: "🌍 Build your global career",
    pack3_badge: "🧭 Find your direction",
    
    pack1_title: "Complete Japanese Package",
    pack1_subtitle: "To study or work in Japan",
    pack1_feat1: "✓ Personalized guidance session",
    pack1_feat2: "✓ Complete Japanese courses (N5 → N2/N3)",
    pack1_feat3: "✓ JLPT prep & Japanese culture",
    pack1_feat4: "✓ English Club included throughout",
    pack1_feat5: "✓ Study or employment assistance in Japan",
    pack1_feat6: "✓ Opportunities Newsletter (free)",
    
    pack2_title: "Complete International Work Package",
    pack2_subtitle: "For Amazon, Google, Oracle, Microsoft",
    pack2_feat1: "✓ Guidance & skills assessment",
    pack2_feat2: "✓ Intensive English Club (professional speaking)",
    pack2_feat3: "✓ Japanese courses (basics for Japan)",
    pack2_feat4: "✓ Career mentoring & interview prep",
    pack2_feat5: "✓ Referrals to companies",
    pack2_feat6: "✓ Data Center Package included",
    pack2_feat7: "✓ Opportunities Newsletter (free)",
    
    pack3_title: "Guidance & Mentoring",
    pack3_subtitle: "Don't know where to start?",
    pack3_feat1: "✓ 2-3h personalized assessment",
    pack3_feat2: "✓ Analysis of your profile and goals",
    pack3_feat3: "✓ School or employer recommendations",
    pack3_feat4: "✓ Personalized roadmap",
    pack3_feat5: "✓ Follow-up after session",
    
    price_from: "From",

    modules_title: "🎨 À La Carte Modules",
    modules_subtitle: "Build your own path according to your needs",
    
    module1_title: "Japanese Courses",
    module1_desc: "Beginner to advanced level (N5 → N2)",
    module2_title: "English Club",
    module2_desc: "Oral improvement and confidence",
    module3_title: "JLPT Preparation",
    module3_desc: "Intensive exam training",
    module4_title: "Guidance only",
    module4_desc: "2-3h assessment session",
    module5_title: "Japanese Culture",
    module5_desc: "Immersive thematic workshops",
    module6_title: "Career Coaching",
    module6_desc: "CV prep, interviews, networking",
    module7_title: "Opportunities Newsletter",
    module7_desc: "Scholarships, internships, exchanges alerts",

    faq_title: "❓ Frequently Asked Questions",
    faq1_q: "I have no Japanese background, is it possible?",
    faq1_a: "Absolutely! Our courses start from complete beginner level (N5). We guide you step by step, from hiragana to the level required for your studies or job in Japan.",
    faq2_q: "How long does the Complete Package last?",
    faq2_a: "The Complete Japanese Package typically lasts 12 to 18 months depending on your starting level and goal (N4, N3, or N2). The International Work Package is more flexible and can last 6 to 12 months.",
    faq3_q: "Can I pay in installments?",
    faq3_a: "Yes! We offer monthly payment plans for all our packages. Contact us to establish a payment plan suited to your situation.",
    faq4_q: "Do you really help find a job in Japan?",
    faq4_a: "Yes! We have partnerships with several Japanese and international companies. After validating your Japanese level and skills, we recommend you to our partners.",
    faq5_q: "Is the English Club really necessary?",
    faq5_a: "English is essential! Most major tech companies in Japan (Amazon, Google, Oracle) use English as the working language. The English Club strengthens your oral confidence and professional ease.",
    faq6_q: "What is the Data Center Package?",
    faq6_a: "It's a specialized module for those targeting positions in Amazon, Google, Microsoft, or Oracle data centers in Japan. It includes specific technical training, networking, and targeted recommendations.",

    cta_title: "🚀 Ready to start your journey?",
    cta_subtitle: "Contact us for a free consultation and discover the path that suits you",
    cta_whatsapp: "WhatsApp",
    cta_email: "Email",
    cta_form_title: "Or fill out this quick form:",
    
    form_name: "Your name",
    form_email: "Your email",
    form_phone: "Phone / WhatsApp",
    form_goal_default: "Your main goal",
    form_additional: "Additional information (optional)",
    form_submit: "Submit my request",

    footer_tagline: "A unique experience at the service of your success",
    footer_copy: "© 2025 NipponMboa Consulting. All rights reserved.",
    
    // Return Home
    return_home_title: "Discover all our services",
    return_home_subtitle: "Explore all our poles and services",
    return_home_btn: "Back to home",
    
    // Timeline labels
    timeline_month: "Month",
    timeline_total: "Total",
    timeline_total_cost: "Total Cost",
    timeline_starts_month: "Starts at month",
    timeline_inscription: "Subscription",
    timeline_annual_fee: "Annual fee",
    timeline_payment_options: "Payment options",
    timeline_monthly: "Monthly",
    timeline_six_months: "6 months",
    timeline_yearly: "Yearly",
    timeline_per_month: "/month",
    timeline_if_confirmed: "If",
    timeline_confirmed: "confirmed",
    timeline_included_in_pack: "Included in this package:",
    timeline_optional_note: "Monthly payment available",
  },

  ja: {
    nav_about: "私たちについて",
    nav_poles: "サービス部門",
    nav_services: "サービス",
    nav_contact: "お問い合わせ",

    academy_hero_title: "あなたの未来はここから始まります",
    academy_hero_subtitle: "日本で勉強したい、大手テック企業で働きたい、日本語を学びたい――あらゆる段階であなたをサポートします。",
    academy_hero_cta: "🎯 自分に合った道を見つける",

    quiz_title: "🎯 あなたの目標は何ですか？",
    quiz_subtitle: "主な目標をクリックして、あなたに合ったプログラムを見つけましょう",
    
    goal_study_japan: "日本で勉強する",
    goal_study_desc: "日本の大学や学校に入学",
    goal_work_japan: "日本で働く",
    goal_work_desc: "日本で仕事を見つける",
    goal_work_intl: "国際的に働く",
    goal_work_intl_desc: "大手テック企業でのキャリア",
    goal_orientation: "自分の道を見つける",
    goal_orientation_desc: "カメルーンでの社会職業統合",
    goal_tech: "データセンターでキャリアを築く",
    goal_tech_desc: "Amazon・Google・Oracle・Microsoft",

    result_recommended: "✅ おすすめのプログラム：",
    result_learn_more: "詳細を見る",
    result_contact: "お問い合わせ",

    packs_title: "📚 パッケージ一覧",
    packs_subtitle: "あなたの目標を実現するための完全プログラム",
    
    pack_popular: "🎓 安心して日本へ留学",
    pack_recommended: "🌍 グローバルキャリアを築く",
    pack3_badge: "🧭 進路を見つける",
    
    pack1_title: "日本語完全パック",
    pack1_subtitle: "日本での留学・就職向け",
    pack1_feat1: "✓ 個別進路相談セッション",
    pack1_feat2: "✓ 日本語コース完備（N5 → N2/N3）",
    pack1_feat3: "✓ JLPT対策 & 日本文化",
    pack1_feat4: "✓ 英会話クラブ常時受講可能",
    pack1_feat5: "✓ 留学・就職サポート",
    pack1_feat6: "✓ 機会ニュースレター（無料）",
    
    pack2_title: "国際就職完全パック",
    pack2_subtitle: "Amazon・Google・Oracle・Microsoft向け",
    pack2_feat1: "✓ 進路相談 & スキル診断",
    pack2_feat2: "✓ 英会話クラブ集中コース（ビジネス会話）",
    pack2_feat3: "✓ 日本語コース（日本勤務の基礎）",
    pack2_feat4: "✓ キャリアメンタリング & 面接対策",
    pack2_feat5: "✓ 企業への推薦",
    pack2_feat6: "✓ データセンターパック含む",
    pack2_feat7: "✓ 機会ニュースレター（無料）",
    
    pack3_title: "進路相談 & メンタリング",
    pack3_subtitle: "どこから始めればいいかわからない？",
    pack3_feat1: "✓ 2〜3時間の個別診断",
    pack3_feat2: "✓ プロフィールと目標の分析",
    pack3_feat3: "✓ 学校・企業の推薦",
    pack3_feat4: "✓ 個別ロードマップ",
    pack3_feat5: "✓ セッション後のフォローアップ",
    
    price_from: "〜",

    modules_title: "🎨 単品モジュール",
    modules_subtitle: "ニーズに応じて独自のプログラムを構築",
    
    module1_title: "日本語コース",
    module1_desc: "初級から上級レベル（N5 → N2）",
    module2_title: "英会話クラブ",
    module2_desc: "会話力向上と自信",
    module3_title: "JLPT対策",
    module3_desc: "試験集中トレーニング",
    module4_title: "進路相談のみ",
    module4_desc: "2〜3時間の診断セッション",
    module5_title: "日本文化",
    module5_desc: "テーマ別体験ワークショップ",
    module6_title: "キャリアコーチング",
    module6_desc: "履歴書・面接・ネットワーキング対策",
    module7_title: "機会ニュースレター",
    module7_desc: "奨学金・インターンシップ・交換留学情報",

    faq_title: "❓ よくある質問",
    faq1_q: "日本語の知識が全くなくても大丈夫ですか？",
    faq1_a: "もちろんです！コースは完全初心者レベル（N5）から始まります。ひらがなから、留学や就職に必要なレベルまで段階的にサポートします。",
    faq2_q: "完全パックの期間はどれくらいですか？",
    faq2_a: "日本語完全パックは通常、開始レベルと目標（N4、N3、N2）により12〜18ヶ月です。国際就職パックはより柔軟で6〜12ヶ月です。",
    faq3_q: "分割払いは可能ですか？",
    faq3_a: "はい！すべてのパッケージで月払いプランを提供しています。状況に合わせた支払いプランを設定しますので、お問い合わせください。",
    faq4_q: "本当に日本での仕事探しを手伝ってくれますか？",
    faq4_a: "はい！日本および国際企業との提携があります。日本語レベルとスキルを確認後、パートナー企業に推薦します。",
    faq5_q: "英会話クラブは本当に必要ですか？",
    faq5_a: "英語は必須です！日本の大手テック企業（Amazon、Google、Oracle）のほとんどは英語を業務言語として使用します。英会話クラブで会話の自信とビジネスでの流暢さを強化します。",
    faq6_q: "データセンターパックとは何ですか？",
    faq6_a: "日本のAmazon、Google、Microsoft、Oracleのデータセンターでの仕事を目指す方向けの専門モジュールです。専門技術トレーニング、ネットワーキング、ターゲット推薦を含みます。",

    cta_title: "🚀 あなたの道を始める準備はできましたか？",
    cta_subtitle: "無料相談であなたに合ったプログラムを見つけましょう",
    cta_whatsapp: "WhatsApp",
    cta_email: "メール",
    cta_form_title: "または簡単フォームに記入：",
    
    form_name: "お名前",
    form_email: "メールアドレス",
    form_phone: "電話 / WhatsApp",
    form_goal_default: "主な目標",
    form_additional: "追加情報（任意）",
    form_submit: "リクエストを送信",

    footer_tagline: "あなたの成功のためのユニークな体験",
    footer_copy: "© 2025 NipponMboa Consulting. All rights reserved.",
    
    // Return Home
    return_home_title: "すべてのサービスを見る",
    return_home_subtitle: "全部門とサービスをご覧ください",
    return_home_btn: "ホームに戻る",
    
    // Timeline labels
    timeline_month: "月",
    timeline_total: "合計",
    timeline_total_cost: "合計費用",
    timeline_starts_month: "開始月",
    timeline_inscription: "登録料",
    timeline_annual_fee: "年間費用",
    timeline_payment_options: "支払いオプション",
    timeline_monthly: "月払い",
    timeline_six_months: "6ヶ月",
    timeline_yearly: "年払い",
    timeline_per_month: "/月",
    timeline_if_confirmed: "もし",
    timeline_confirmed: "確認済み",
    timeline_included_in_pack: "このパックに含まれるもの：",
    timeline_optional_note: "月払い可能",
  }
};

// Pack recommendations data
const packRecommendations = {
  'study-japan': {
    title: {
      fr: "Pack Complet Japonais",
      en: "Complete Japanese Package",
      ja: "日本語完全パック"
    },
    hasDetailedTimeline: true,
    timeline: {
      phases: [
        {
          month: 0,
          duration: { fr: "2 heures", en: "2 hours", ja: "2時間" },
          title: { fr: "Orientation (1h début + 1h suivi)", en: "Guidance (1h start + 1h follow-up)", ja: "進路相談（1時間開始 + 1時間フォローアップ）" },
          desc: { fr: "Diagnostic personnalisé, plan d'études et suivi mi-parcours", en: "Personalized assessment, study plan and mid-course follow-up", ja: "個別診断、学習計画、中間フォローアップ" },
          price: 20000,
          icon: "🧭"
        },
        {
          month: 1,
          duration: { fr: "12 mois", en: "12 months", ja: "12ヶ月" },
          title: { fr: "Cours de Japonais", en: "Japanese Courses", ja: "日本語コース" },
          desc: { fr: "Formation intensive N5 → N2/N3", en: "Intensive training N5 → N2/N3", ja: "集中研修 N5 → N2/N3" },
          price: { inscription: 50000, annual: 550000 },
          icon: "🇯🇵",
          parallel: [
            {
              startMonth: 11,
              duration: { fr: "3 mois", en: "3 months", ja: "3ヶ月" },
              title: { fr: "JLPT & Culture Japonaise", en: "JLPT & Japanese Culture", ja: "JLPT & 日本文化" },
              desc: { fr: "Préparation examen + culture (peut démarrer à partir du mois 10)", en: "Exam prep + culture (can start from month 10)", ja: "試験対策 + 文化（10ヶ月目から開始可能）" },
              price: 200000,
              icon: "📝"
            },
            {
              startMonth: 1,
              duration: { fr: "1 an recommandé, sans limite", en: "1 year recommended, unlimited", ja: "1年推奨、無制限" },
              title: { fr: "Club Anglais (Optionnel mais Recommandé)", en: "English Club (Optional but Recommended)", ja: "英会話クラブ（任意だが推奨）" },
              desc: { fr: "Perfectionnement oral et confiance professionnelle", en: "Oral improvement and professional confidence", ja: "会話力向上とプロフェッショナルな自信" },
              price: { subscription: 5000, monthly: 11000, sixMonths: 62000, yearly: 122000 },
              icon: "🗣️"
            }
          ]
        },
        {
          month: 8,
          duration: { fr: "4-6 mois", en: "4-6 months", ja: "4〜6ヶ月" },
          title: { fr: "Assistance Études au Japon", en: "Study Assistance in Japan", ja: "日本留学サポート" },
          desc: { fr: "Processus complet d'inscription", en: "Complete enrollment process", ja: "入学手続き全般" },
          icon: "✈️",
          substeps: [
            {
              step: "d-1",
              title: { fr: "Mise en relation & Visa", en: "University Connection & Visa", ja: "大学紹介 & ビザ" },
              desc: { fr: "Université/école + dossier visa", en: "University/school + visa application", ja: "大学・学校 + ビザ申請" },
              price: 150000,
              condition: null
            },
            {
              step: "d-2",
              title: { fr: "Documentation & Traduction", en: "Documentation & Translation", ja: "書類作成 & 翻訳" },
              desc: { fr: "Assistance docs + paiement frais", en: "Document assistance + fee payment", ja: "書類サポート + 学費支払い" },
              price: 250000,
              condition: "d-1"
            },
            {
              step: "d-3",
              title: { fr: "Recherche Hébergement", en: "Housing Search", ja: "住居探し" },
              desc: { fr: "Assistance logement au Japon", en: "Housing assistance in Japan", ja: "日本での住居サポート" },
              price: 200000,
              condition: "d-2"
            },
            {
              step: "d-4",
              title: { fr: "Intégration (1 mois)", en: "Integration (1 month)", ja: "統合サポート（1ヶ月）" },
              desc: { fr: "Suivi après arrivée au Japon (téléphone mobile, comptes bancaires, besoins quotidiens pour vivre au Japon)", en: "Follow-up after arrival in Japan (mobile phone, bank accounts, daily needs to live in Japan)", ja: "日本到着後のフォローアップ（携帯電話、銀行口座、日常生活のニーズ）" },
              price: 350000,
              condition: "d-3"
            }
          ]
        }
      ],
      totalMin: 1325000,
      totalMax: 1442000
    },
    steps: [
      {
        icon: "🧭",
        title: { fr: "Orientation", en: "Guidance", ja: "進路相談" },
        desc: { fr: "Diagnostic personnalisé", en: "Personalized assessment", ja: "個別診断" }
      },
      {
        icon: "🇯🇵",
        title: { fr: "Cours Japonais", en: "Japanese Courses", ja: "日本語コース" },
        desc: { fr: "N5 → N2/N3", en: "N5 → N2/N3", ja: "N5 → N2/N3" }
      },
      {
        icon: "📝",
        title: { fr: "JLPT & Culture", en: "JLPT & Culture", ja: "JLPT & 文化" },
        desc: { fr: "Préparation examen", en: "Exam preparation", ja: "試験対策" }
      },
      {
        icon: "✈️",
        title: { fr: "Assistance Études", en: "Study Assistance", ja: "留学サポート" },
        desc: { fr: "Inscription & visa", en: "Enrollment & visa", ja: "入学 & ビザ" }
      }
    ],
    extras: {
      fr: [
        "🗣️ Club Anglais (optionnel) : +5 000 FCFA (inscription) + 11 000 FCFA/mois",
        "📬 Newsletter Opportunités : Alertes mensuelles sur bourses et stages"
      ],
      en: [
        "🗣️ English Club (optional): +5,000 FCFA (subscription) + 11,000 FCFA/month",
        "📬 Opportunities Newsletter: Monthly alerts on scholarships and internships"
      ],
      ja: [
        "🗣️ 英会話クラブ（任意）：+5,000 FCFA（登録料）+ 11,000 FCFA/月",
        "📬 機会ニュースレター：奨学金・インターンシップの月次アラート"
      ]
    },
    price: {
      fr: "1 325 000 - 1 442 000 FCFA (Club Anglais en option)",
      en: "1,325,000 - 1,442,000 FCFA (English Club optional)",
      ja: "1,325,000 - 1,442,000 FCFA（英会話クラブ任意）"
    }
  },
  'work-japan': {
    title: {
      fr: "Pack Complet Travailler au Japon",
      en: "Complete Work in Japan Package",
      ja: "日本就職完全パック"
    },
    hasDetailedTimeline: true,
    timeline: {
      phases: [
        {
          month: 0,
          duration: { fr: "2 heures", en: "2 hours", ja: "2時間" },
          title: { fr: "Orientation (1h début + 1h suivi)", en: "Guidance (1h start + 1h follow-up)", ja: "進路相談（1時間開始 + 1時間フォローアップ）" },
          desc: { fr: "Diagnostic personnalisé, plan de carrière et suivi mi-parcours", en: "Personalized assessment, career plan and mid-course follow-up", ja: "個別診断、キャリアプラン、中間フォローアップ" },
          price: 20000,
          icon: "🧭"
        },
        {
          month: 1,
          duration: { fr: "12 mois", en: "12 months", ja: "12ヶ月" },
          title: { fr: "Cours de Japonais", en: "Japanese Courses", ja: "日本語コース" },
          desc: { fr: "Formation intensive N5 → N2", en: "Intensive training N5 → N2", ja: "集中研修 N5 → N2" },
          price: { inscription: 50000, annual: 550000 },
          icon: "🇯🇵",
          parallel: [
            {
              startMonth: 11,
              duration: { fr: "3 mois", en: "3 months", ja: "3ヶ月" },
              title: { fr: "JLPT N2 & Culture Japonaise", en: "JLPT N2 & Japanese Culture", ja: "JLPT N2 & 日本文化" },
              desc: { fr: "Niveau professionnel pour emploi", en: "Professional level for employment", ja: "就職用ビジネスレベル" },
              price: 200000,
              icon: "📝"
            },
            {
              startMonth: 1,
              duration: { fr: "1 an recommandé, sans limite", en: "1 year recommended, unlimited", ja: "1年推奨、無制限" },
              title: { fr: "Club Anglais (Optionnel mais Recommandé)", en: "English Club (Optional but Recommended)", ja: "英会話クラブ（任意だが推奨）" },
              desc: { fr: "Perfectionnement oral et confiance professionnelle", en: "Oral improvement and professional confidence", ja: "会話力向上とプロフェッショナルな自信" },
              price: { subscription: 5000, monthly: 11000, sixMonths: 62000, yearly: 122000 },
              icon: "🗣️"
            }
          ]
        },
        {
          month: 8,
          duration: { fr: "1-6 mois", en: "1-6 months", ja: "1〜6ヶ月" },
          title: { fr: "Mentorat Carrière & Recommandations", en: "Career Mentoring & Referrals", ja: "キャリアメンタリング & 推薦" },
          desc: { fr: "Recommandations vers Amazon, Google, Oracle selon compatibilité du profil", en: "Referrals to Amazon, Google, Oracle based on profile compatibility", ja: "プロフィール適合性に基づくAmazon・Google・Oracle推薦" },
          price: 250000,
          icon: "💼"
        }
      ],
      totalMin: 1075000,
      totalMax: 1192000
    },
    steps: [
      {
        icon: "🧭",
        title: { fr: "Orientation", en: "Guidance", ja: "進路相談" },
        desc: { fr: "Diagnostic carrière", en: "Career assessment", ja: "キャリア診断" }
      },
      {
        icon: "🇯🇵",
        title: { fr: "Cours Japonais", en: "Japanese Courses", ja: "日本語コース" },
        desc: { fr: "N5 → N2", en: "N5 → N2", ja: "N5 → N2" }
      },
      {
        icon: "📝",
        title: { fr: "JLPT N2", en: "JLPT N2", ja: "JLPT N2" },
        desc: { fr: "Niveau professionnel", en: "Professional level", ja: "ビジネスレベル" }
      },
      {
        icon: "💼",
        title: { fr: "Mentorat Carrière", en: "Career Mentoring", ja: "キャリアメンタリング" },
        desc: { fr: "Recommandations entreprises", en: "Company referrals", ja: "企業推薦" }
      }
    ],
    extras: {
      fr: [
        "🗣️ Club Anglais (optionnel) : +5 000 FCFA (inscription) + 11 000 FCFA/mois",
        "📬 Newsletter Opportunités : Alertes mensuelles sur bourses et stages"
      ],
      en: [
        "🗣️ English Club (optional): +5,000 FCFA (subscription) + 11,000 FCFA/month",
        "📬 Opportunities Newsletter: Monthly alerts on scholarships and internships"
      ],
      ja: [
        "🗣️ 英会話クラブ（任意）：+5,000 FCFA（登録料）+ 11,000 FCFA/月",
        "📬 機会ニュースレター：奨学金・インターンシップの月次アラート"
      ]
    },
    price: {
      fr: "1 075 000 - 1 192 000 FCFA (Club Anglais en option)",
      en: "1,075,000 - 1,192,000 FCFA (English Club optional)",
      ja: "1,075,000 - 1,192,000 FCFA（英会話クラブ任意）"
    }
  },
  'work-international': {
    title: {
      fr: "Pack Complet Travail International",
      en: "Complete International Work Package",
      ja: "国際就職完全パック"
    },
    hasDetailedTimeline: true,
    timeline: {
      phases: [
        {
          month: 0,
          duration: { fr: "2 heures", en: "2 hours", ja: "2時間" },
          title: { fr: "Orientation (1h début + 1h suivi)", en: "Guidance (1h start + 1h follow-up)", ja: "進路相談（1時間開始 + 1時間フォローアップ）" },
          desc: { fr: "Diagnostic personnalisé, plan de carrière internationale et suivi mi-parcours", en: "Personalized assessment, international career plan and mid-course follow-up", ja: "個別診断、国際キャリアプラン、中間フォローアップ" },
          price: 20000,
          icon: "🧭"
        },
        {
          month: 1,
          duration: { fr: "6-12 mois", en: "6-12 months", ja: "6〜12ヶ月" },
          title: { fr: "Club Anglais", en: "English Club", ja: "英会話クラブ" },
          desc: { fr: "Perfectionnement oral et confiance professionnelle", en: "Oral improvement and professional confidence", ja: "会話力向上とプロフェッショナルな自信" },
          price: { subscription: 5000, monthly: 11000, sixMonths: 62000, yearly: 122000 },
          icon: "🗣️"
        },
        {
          month: 3,
          duration: { fr: "1-6 mois", en: "1-6 months", ja: "1〜6ヶ月" },
          title: { fr: "Mentorat Carrière & Recommandations", en: "Career Mentoring & Referrals", ja: "キャリアメンタリング & 推薦" },
          desc: { fr: "Recommandations vers Amazon, Google, Oracle selon compatibilité du profil", en: "Referrals to Amazon, Google, Oracle based on profile compatibility", ja: "プロフィール適合性に基づくAmazon・Google・Oracle推薦" },
          price: 250000,
          icon: "💼"
        }
      ],
      totalMin: 342000,
      totalMax: 397000
    },
    steps: [
      {
        icon: "🧭",
        title: { fr: "Orientation", en: "Guidance", ja: "進路相談" },
        desc: { fr: "Diagnostic compétences", en: "Skills assessment", ja: "スキル診断" }
      },
      {
        icon: "🗣️",
        title: { fr: "Club Anglais", en: "English Club", ja: "英会話クラブ" },
        desc: { fr: "Oral professionnel", en: "Professional speaking", ja: "ビジネス会話" }
      },
      {
        icon: "💼",
        title: { fr: "Mentorat Carrière", en: "Career Mentoring", ja: "キャリアメンタリング" },
        desc: { fr: "Recommandations entreprises", en: "Company referrals", ja: "企業推薦" }
      }
    ],
    extras: {
      fr: ["📬 Newsletter Opportunités : Alertes mensuelles sur bourses et stages"],
      en: ["📬 Opportunities Newsletter: Monthly alerts on scholarships and internships"],
      ja: ["📬 機会ニュースレター：奨学金・インターンシップの月次アラート"]
    },
    price: {
      fr: "342 000 - 397 000 FCFA",
      en: "342,000 - 397,000 FCFA",
      ja: "342,000 - 397,000 FCFA"
    }
  },
  'orientation': {
    title: {
      fr: "Orientation & Mentorat",
      en: "Guidance & Mentoring",
      ja: "進路相談 & メンタリング"
    },
    hasDetailedTimeline: true,
    timeline: {
      phases: [
        {
          month: 0,
          duration: { fr: "2-3 heures", en: "2-3 hours", ja: "2〜3時間" },
          title: { fr: "Diagnostic", en: "Assessment", ja: "診断" },
          desc: { fr: "Session personnalisée de diagnostic", en: "Personalized assessment session", ja: "個別診断セッション" },
          price: { perHour: 10000 },
          icon: "🧭"
        },
        {
          month: 0,
          duration: { fr: "1-3 mois", en: "1-3 months", ja: "1〜3ヶ月" },
          title: { fr: "Mentorship", en: "Mentorship", ja: "メンターシップ" },
          desc: { fr: "Accompagnement par le mentor approprié", en: "Guidance by the appropriate mentor", ja: "適切なメンターによる指導" },
          price: 100000,
          icon: "👨‍🏫"
        },
        {
          month: 1,
          duration: { fr: "2-4 semaines", en: "2-4 weeks", ja: "2〜4週間" },
          title: { fr: "Recommandation & Suivi", en: "Recommendation & Follow-up", ja: "推薦 & フォローアップ" },
          desc: { fr: "Recommandations vers écoles/entreprises et suivi personnalisé", en: "Referrals to schools/companies and personalized follow-up", ja: "学校・企業への推薦と個別フォローアップ" },
          price: 50000,
          icon: "🎯"
        }
      ],
      totalMin: 170000,
      totalMax: 180000
    },
    steps: [
      {
        icon: "🧭",
        title: { fr: "Diagnostic", en: "Assessment", ja: "診断" },
        desc: { fr: "2-3h personnalisé", en: "2-3h personalized", ja: "2〜3時間個別" }
      },
      {
        icon: "👨‍🏫",
        title: { fr: "Mentorship", en: "Mentorship", ja: "メンターシップ" },
        desc: { fr: "1-3 mois", en: "1-3 months", ja: "1〜3ヶ月" }
      },
      {
        icon: "🎯",
        title: { fr: "Recommandation", en: "Recommendation", ja: "推薦" },
        desc: { fr: "2-4 semaines", en: "2-4 weeks", ja: "2〜4週間" }
      }
    ],
    extras: {
      fr: [],
      en: [],
      ja: []
    },
    price: {
      fr: "170 000 - 180 000 FCFA",
      en: "170,000 - 180,000 FCFA",
      ja: "170,000 - 180,000 FCFA"
    }
  },
  'tech-giants': {
    title: {
      fr: "Pack Data Center",
      en: "Data Center Package",
      ja: "データセンターパック"
    },
    hasDetailedTimeline: true,
    timeline: {
      phases: [
        {
          month: 0,
          duration: { fr: "1-2 heures", en: "1-2 hours", ja: "1〜2時間" },
          title: { fr: "Orientation", en: "Guidance", ja: "進路相談" },
          desc: { fr: "Diagnostic personnalisé et plan de carrière Data Center", en: "Personalized assessment and Data Center career plan", ja: "個別診断とデータセンターキャリアプラン" },
          price: { perHour: 10000 },
          icon: "🧭"
        },
        {
          month: 0,
          duration: { fr: "Si nécessaire", en: "If needed", ja: "必要な場合" },
          title: { fr: "Club Anglais (Conditionnel)", en: "English Club (Conditional)", ja: "英会話クラブ（条件付き）" },
          desc: { fr: "Perfectionnement oral pour ceux qui ne s'expriment pas couramment en anglais", en: "Oral improvement for those not fluent in English", ja: "英語が流暢でない方向けの会話力向上" },
          price: { subscription: 5000, monthly: 11000, sixMonths: 62000, yearly: 122000 },
          icon: "🗣️"
        },
        {
          month: 1,
          duration: { fr: "6-12 mois", en: "6-12 months", ja: "6〜12ヶ月" },
          title: { fr: "Formation Professionnelle Data Center", en: "Data Center Professional Training", ja: "データセンター専門研修" },
          desc: { fr: "Orientation et assistance training professionnelle précise pour les métiers Data Center", en: "Precise professional training guidance and assistance for Data Center careers", ja: "データセンター職種向けの正確な専門研修指導とサポート" },
          price: { sixMonths: 300000, yearly: 500000 },
          icon: "💻"
        },
        {
          month: 5,
          duration: { fr: "2-3 mois", en: "2-3 months", ja: "2〜3ヶ月" },
          title: { fr: "Coaching & Recommandations", en: "Coaching & Referrals", ja: "コーチング & 推薦" },
          desc: { fr: "Coaching carrière et recommandations vers Amazon, Google, Oracle, Microsoft (débute vers la fin de la formation)", en: "Career coaching and referrals to Amazon, Google, Oracle, Microsoft (starts near end of training)", ja: "キャリアコーチングとAmazon・Google・Oracle・Microsoftへの推薦（研修終了近くに開始）" },
          price: 250000,
          icon: "🤝"
        }
      ],
      totalMin: 582000,
      totalMax: 897000
    },
    steps: [
      {
        icon: "🧭",
        title: { fr: "Orientation", en: "Guidance", ja: "進路相談" },
        desc: { fr: "Diagnostic Data Center", en: "Data Center assessment", ja: "データセンター診断" }
      },
      {
        icon: "🗣️",
        title: { fr: "Club Anglais", en: "English Club", ja: "英会話クラブ" },
        desc: { fr: "Si nécessaire", en: "If needed", ja: "必要な場合" }
      },
      {
        icon: "💻",
        title: { fr: "Formation Data Center", en: "Data Center Training", ja: "データセンター研修" },
        desc: { fr: "6-12 mois", en: "6-12 months", ja: "6〜12ヶ月" }
      },
      {
        icon: "🤝",
        title: { fr: "Coaching & Recommandations", en: "Coaching & Referrals", ja: "コーチング & 推薦" },
        desc: { fr: "Amazon, Google, etc.", en: "Amazon, Google, etc.", ja: "Amazon・Googleなど" }
      }
    ],
    extras: {
      fr: [],
      en: [],
      ja: []
    },
    price: {
      fr: "582 000 - 897 000 FCFA",
      en: "582,000 - 897,000 FCFA",
      ja: "582,000 - 897,000 FCFA"
    }
  }
};

// Current language
let currentLang = 'fr';

// Apply translations
function applyLang(lang) {
  currentLang = lang;
  const t = academiaI18n[lang];
  document.documentElement.lang = lang;

  // Apply translations to elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Apply translations to placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    
    // If a quiz result is currently displayed, regenerate it in the new language
    const resultSection = document.getElementById('quiz-result');
    if (resultSection && resultSection.style.display !== 'none') {
      const activeCard = document.querySelector('.quiz-card.active');
      if (activeCard) {
        const goal = activeCard.dataset.goal;
        showQuizResult(goal);
      }
    }
  });
});

// Mobile navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// Quiz functionality
document.querySelectorAll('.quiz-card').forEach(card => {
  card.addEventListener('click', () => {
    const goal = card.dataset.goal;
    
    // Remove active class from all cards
    document.querySelectorAll('.quiz-card').forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked card
    card.classList.add('active');
    
    // Show result
    showQuizResult(goal);
  });
});

function showQuizResult(goal) {
  console.log('showQuizResult called with goal:', goal);
  const result = packRecommendations[goal];
  if (!result) {
    console.error('No result found for goal:', goal);
    return;
  }

  console.log('Result found:', result);
  const resultSection = document.getElementById('quiz-result');
  const titleEl = document.getElementById('result-pack-title');
  const stepsEl = document.getElementById('result-steps');
  const extrasEl = document.getElementById('result-extras');
  const pricingEl = document.getElementById('result-pricing');

  // Set title
  titleEl.textContent = result.title[currentLang];
  console.log('Title set:', result.title[currentLang]);

  // Check if this pack has a detailed timeline
  if (result.hasDetailedTimeline && result.timeline) {
    console.log('Building detailed timeline...');
    // Build detailed timeline HTML
    const timeline = result.timeline;
    let timelineHTML = '<div class="detailed-timeline">';
    
    timeline.phases.forEach((phase, index) => {
      // Start phase container
      timelineHTML += '<div class="timeline-phase">';
      
      // Timeline marker
      timelineHTML += '<div class="timeline-marker">';
      timelineHTML += `<span class="timeline-icon">${phase.icon}</span>`;
      timelineHTML += `<span class="timeline-month">${academiaI18n[currentLang].timeline_month} ${phase.month}</span>`;
      timelineHTML += '</div>';
      
      // Timeline content
      timelineHTML += '<div class="timeline-content">';
      timelineHTML += `<h4>${phase.title[currentLang]}</h4>`;
      timelineHTML += `<p class="timeline-duration">${phase.duration[currentLang]}</p>`;
      timelineHTML += `<p class="timeline-desc">${phase.desc[currentLang]}</p>`;
      
      // Price section
      if (phase.price) {
        if (typeof phase.price === 'number') {
          // Simple price (e.g., 250000)
          timelineHTML += '<div class="timeline-price">';
          timelineHTML += `<strong>${phase.price.toLocaleString()} FCFA</strong>`;
          timelineHTML += '</div>';
        } else if (phase.price.perHour && !phase.price.inscription && !phase.price.subscription) {
          // Hourly rate
          timelineHTML += '<div class="timeline-price">';
          timelineHTML += `<strong>10 000 FCFA/heure</strong>`;
          timelineHTML += '</div>';
        } else if (phase.price.inscription) {
          // Inscription + annual fee
          timelineHTML += '<div class="timeline-price">';
          timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_inscription}:</strong> ${phase.price.inscription.toLocaleString()} FCFA</div>`;
          timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_annual_fee}:</strong> ${phase.price.annual.toLocaleString()} FCFA</div>`;
          timelineHTML += '</div>';
        } else if (phase.price.subscription) {
          // Subscription + payment options (for main phases like Club Anglais)
          timelineHTML += '<div class="timeline-price">';
          timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_inscription}:</strong> ${phase.price.subscription.toLocaleString()} FCFA</div>`;
          timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_payment_options}:</strong></div>`;
          timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_monthly}: ${phase.price.monthly.toLocaleString()} FCFA${academiaI18n[currentLang].timeline_per_month}</div>`;
          timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_six_months}: ${phase.price.sixMonths.toLocaleString()} FCFA</div>`;
          timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_yearly}: ${phase.price.yearly.toLocaleString()} FCFA</div>`;
          timelineHTML += '</div>';
        } else if (phase.price.sixMonths && phase.price.yearly) {
          // Six months and yearly options (for Data Center training)
          timelineHTML += '<div class="timeline-price">';
          timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_payment_options}:</strong></div>`;
          timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_six_months}: <strong>${phase.price.sixMonths.toLocaleString()} FCFA</strong></div>`;
          timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_yearly}: <strong>${phase.price.yearly.toLocaleString()} FCFA</strong></div>`;
          timelineHTML += '</div>';
        }
      }
      
      // Parallel activities
      if (phase.parallel && phase.parallel.length > 0) {
        phase.parallel.forEach(par => {
          timelineHTML += '<div class="timeline-parallel">';
          timelineHTML += `<div class="parallel-marker">${par.icon}</div>`;
          timelineHTML += '<div class="parallel-content">';
          timelineHTML += `<strong>${par.title[currentLang]}</strong>`;
          timelineHTML += `<p>${par.desc[currentLang]}</p>`;
          timelineHTML += `<p class="parallel-timing">${academiaI18n[currentLang].timeline_starts_month} ${par.startMonth} • ${par.duration[currentLang]}</p>`;
          
          // Handle different price formats
          if (typeof par.price === 'number') {
            timelineHTML += `<div class="parallel-price">${par.price.toLocaleString()} FCFA</div>`;
          } else if (par.price.subscription) {
            timelineHTML += '<div class="parallel-price">';
            timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_inscription}:</strong> ${par.price.subscription.toLocaleString()} FCFA</div>`;
            timelineHTML += `<div><strong>${academiaI18n[currentLang].timeline_payment_options}:</strong></div>`;
            timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_monthly}: ${par.price.monthly.toLocaleString()} FCFA${academiaI18n[currentLang].timeline_per_month}</div>`;
            timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_six_months}: ${par.price.sixMonths.toLocaleString()} FCFA</div>`;
            timelineHTML += `<div>• ${academiaI18n[currentLang].timeline_yearly}: ${par.price.yearly.toLocaleString()} FCFA</div>`;
            timelineHTML += '</div>';
          }
          
          timelineHTML += '</div>';
          timelineHTML += '</div>';
        });
      }
      
      // Substeps
      if (phase.substeps && phase.substeps.length > 0) {
        timelineHTML += '<div class="timeline-substeps">';
        phase.substeps.forEach(substep => {
          const conditionalClass = substep.condition ? 'conditional' : '';
          timelineHTML += `<div class="substep ${conditionalClass}">`;
          timelineHTML += '<div class="substep-header">';
          timelineHTML += `<span class="substep-label">${substep.step}</span>`;
          timelineHTML += `<strong>${substep.title[currentLang]}</strong>`;
          if (substep.condition) {
            timelineHTML += `<span class="condition-badge">${academiaI18n[currentLang].timeline_if_confirmed} ${substep.condition} ${academiaI18n[currentLang].timeline_confirmed}</span>`;
          }
          timelineHTML += '</div>';
          timelineHTML += `<p>${substep.desc[currentLang]}</p>`;
          timelineHTML += `<div class="substep-price">${substep.price.toLocaleString()} FCFA</div>`;
          timelineHTML += '</div>';
        });
        timelineHTML += '</div>';
      }
      
      // Close timeline content and phase
      timelineHTML += '</div>';
      timelineHTML += '</div>';
    });
    
    // Add total price summary
    timelineHTML += '<div class="timeline-phase">';
    timelineHTML += `<div class="timeline-marker"><span class="timeline-icon">💰</span><span class="timeline-month">${academiaI18n[currentLang].timeline_total}</span></div>`;
    timelineHTML += '<div class="timeline-content">';
    timelineHTML += `<h4>${academiaI18n[currentLang].timeline_total_cost}</h4>`;
    timelineHTML += '<div class="timeline-price">';
    timelineHTML += `<strong>${timeline.totalMin.toLocaleString()} - ${timeline.totalMax.toLocaleString()} FCFA</strong>`;
    timelineHTML += '</div>';
    timelineHTML += '</div>';
    timelineHTML += '</div>';
    
    timelineHTML += '</div>';
    stepsEl.innerHTML = timelineHTML;
    console.log('Timeline HTML built successfully');
  } else {
    // Build simple steps HTML (original version)
    const stepsHTML = `
      <div class="journey-steps">
        ${result.steps.map(step => `
          <div class="journey-step">
            <div class="step-icon">${step.icon}</div>
            <div class="step-title">${step.title[currentLang]}</div>
            <div class="step-desc">${step.desc[currentLang]}</div>
          </div>
        `).join('')}
      </div>
    `;
    stepsEl.innerHTML = stepsHTML;
  }

  // Build extras HTML
  if (result.extras[currentLang].length > 0) {
    const extrasHTML = `
      <h4>${academiaI18n[currentLang].timeline_included_in_pack}</h4>
      <ul>
        ${result.extras[currentLang].map(extra => `<li>${extra}</li>`).join('')}
      </ul>
    `;
    extrasEl.innerHTML = extrasHTML;
    extrasEl.style.display = 'block';
  } else {
    extrasEl.style.display = 'none';
  }

  // Build pricing HTML
  const priceText = typeof result.price === 'string' ? result.price : result.price[currentLang];
  const pricingHTML = `
    <h4>${academiaI18n[currentLang].price_from}</h4>
    <div class="price">${priceText}</div>
  `;
  pricingEl.innerHTML = pricingHTML;

  // Show result section with animation
  resultSection.style.display = 'block';
  
  // Scroll to result
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// FAQ functionality
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Toggle active class
    item.classList.toggle('active');
    
    // Close other items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});

// Form submission handler
function handleAcademySubmit(event) {
  event.preventDefault();
  const btn = event.target.querySelector('[type=submit]');
  const originalText = btn.textContent;
  
  const msgs = {
    fr: '✓ Demande envoyée !',
    en: '✓ Request sent!',
    ja: '✓ 送信完了！'
  };
  
  btn.textContent = msgs[currentLang];
  btn.style.background = '#28a745';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    event.target.reset();
  }, 3000);
}

// Initialize page
applyLang('fr');

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || !href) return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
