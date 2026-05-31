// Business & Technology Bridge - JavaScript Functionality

// i18n translations for Business & Technology Bridge page
const btbI18n = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_poles: "Pôles",
    nav_contact: "Contact",

    // Hero Section
    btb_hero_title: "Business & Technology Bridge",
    btb_hero_subtitle: "Facilitez vos échanges commerciaux et technologiques entre le Cameroun et le Japon",
    btb_hero_feat1: "Matchmaking B2B",
    btb_hero_feat2: "Accompagnement complet",
    btb_hero_feat3: "Missions commerciales",

    // Intro Section
    btb_intro_title: "Votre Passerelle vers l'Excellence Commerciale",
    btb_intro_p1: "Le pôle <strong>Business & Technology Bridge</strong> est votre partenaire stratégique pour établir des connexions commerciales durables entre le Cameroun et le Japon.",
    btb_intro_p2: "De la simple mise en relation à l'accompagnement complet dans vos projets d'expansion, nous vous offrons une gamme complète de services adaptés à vos besoins spécifiques.",
    btb_stat1: "Services sur mesure",
    btb_stat2: "Sens d'échange",
    btb_stat3: "Accompagnement",
    btb_flag_cm: "Cameroun",
    btb_flag_jp: "Japon",

    // Services Section
    btb_services_title: "Nos Services Détaillés",
    btb_services_subtitle: "Choisissez le service adapté à vos besoins commerciaux",
    btb_dir_cmr_jpn: "Cameroun vers Japon",
    btb_dir_jpn_cmr: "Japon vers Cameroun",

    // Service badges and common terms
    btb_badge_beginner: "Recommandé pour débutants",
    btb_badge_popular: "Le plus populaire",
    btb_badge_immersion: "Immersion terrain",
    btb_badge_value: "Meilleur rapport qualité/prix",
    btb_badge_risk: "Sans risque initial",
    btb_scenarios: "Scénarios d'utilisation :",
    btb_deliverables: "Livrables :",
    btb_modalities: "Modalités :",
    btb_btn_request: "Demander ce service",

    // Service Titles
    btb_s1_title: "Matchmaking Simple",
    btb_s2_title: "Accompagnement Complet",
    btb_s3_title: "Mission Commerciale Organisée",
    btb_s4_title: "Abonnement Annuel",
    btb_s5_title: "Paiement à la Performance",

    // Service 1 - Matchmaking scenarios CMR->JPN
    btb_s1_cmr_sc1: "PME camerounaise cherche fournisseur de pièces détachées",
    btb_s1_cmr_sc2: "PME camerounaise cherche partenaire technologique",
    btb_s1_cmr_sc3: "PME camerounaise cherche distributeur japonais",
    btb_s1_cmr_sc4: "Startup camerounaise cherche investisseur japonais",
    
    // Service 1 - Matchmaking scenarios JPN->CMR
    btb_s1_jpn_sc1: "PME japonaise cherche distributeur exclusif au Cameroun",
    btb_s1_jpn_sc2: "PME japonaise cherche sous-traitant local",
    btb_s1_jpn_sc3: "PME japonaise cherche partenaire pour co-développement",
    btb_s1_jpn_sc4: "Startup japonaise cherche partenaire pour test terrain",
    
    // Service 1 - Matchmaking deliverables
    btb_s1_del1: "3-5 profils de partenaires préqualifiés",
    btb_s1_del2: "Introduction écrite par courriel",
    btb_s1_del3: "Organisation d'une réunion (visio/présentiel)",

    // Service 2 - Complete Support scenarios CMR->JPN
    btb_s2_cmr_sc1: "PME camerounaise veut signer une licence de fabrication",
    btb_s2_cmr_sc2: "PME camerounaise veut acquérir un équipement industriel avec SAV",
    btb_s2_cmr_sc3: "PME camerounaise veut créer une co-entreprise au Japon",
    
    // Service 2 - Complete Support scenarios JPN->CMR
    btb_s2_jpn_sc1: "PME japonaise veut établir un contrat de distribution exclusive",
    btb_s2_jpn_sc2: "PME japonaise veut sous-traiter une production au Cameroun",
    btb_s2_jpn_sc3: "PME japonaise veut créer une filiale ou un joint-venture",
    
    // Service 2 - Complete Support deliverables
    btb_s2_del1: "Étude marché ciblée & due diligence",
    btb_s2_del2: "Organisation de 2-3 réunions stratégiques",
    btb_s2_del3: "LOI bilingue (Letter of Intent)",
    btb_s2_del4: "Roadmap d'implémentation",

    // Service 3 - Trade Mission scenarios CMR->JPN
    btb_s3_cmr_sc1: "Délégation sectorielle (agri, énergie, numérique)",
    btb_s3_cmr_sc2: "Mission acheteurs pour sourcing fournisseurs",
    btb_s3_cmr_sc3: "PME camerounaise visite des usines et salons",
    
    // Service 3 - Trade Mission scenarios JPN->CMR
    btb_s3_jpn_sc1: "Visites d'usines et de sites potentiels",
    btb_s3_jpn_sc2: "Délégation japonaise rencontre distributeurs",
    btb_s3_jpn_sc3: "Mission explorative pour implantation",
    
    // Service 3 - Trade Mission deliverables CMR->JPN
    btb_s3_cmr_del1: "5-7 jours d'accompagnement",
    btb_s3_cmr_del2: "Assistance hébergement",
    btb_s3_cmr_del3: "2-4 rendez-vous qualifiés",
    btb_s3_cmr_del4: "Accès salon professionnel",
    
    // Service 3 - Trade Mission deliverables JPN->CMR
    btb_s3_jpn_del1: "5-7 jours d'accompagnement",
    btb_s3_jpn_del2: "Assistance logement & transport local",
    btb_s3_jpn_del3: "Interprète professionnel",
    btb_s3_jpn_del4: "3-5 rendez-vous qualifiés",
    btb_s3_jpn_del5: "Visites terrain organisées",

    // Service 4 - Annual Subscription scenarios CMR->JPN
    btb_s4_cmr_sc1: "Entreprise cherchant partenaires récurrents",
    btb_s4_cmr_sc2: "Structure d'accompagnement (incubateur, chambre de commerce)",
    btb_s4_cmr_sc3: "PME camerounaise veut une veille continue sur opportunités Japon",
    
    // Service 4 - Annual Subscription scenarios JPN->CMR
    btb_s4_jpn_sc1: "PME japonaise veut présence commerciale sans engagement lourd",
    btb_s4_jpn_sc2: "Veille sur appels d'offres et partenaires locaux",
    btb_s4_jpn_sc3: "Test de marché sur 12 mois",
    
    // Service 4 - Annual Subscription deliverables CMR->JPN
    btb_s4_cmr_del1: "6 dossiers de partenaires/an",
    btb_s4_cmr_del2: "Newsletter bimensuelle",
    btb_s4_cmr_del3: "Accès prioritaire événements",
    btb_s4_cmr_del4: "1 webinaire gratuit",
    
    // Service 4 - Annual Subscription deliverables JPN->CMR
    btb_s4_jpn_del1: "4-7 dossiers de partenaires",
    btb_s4_jpn_del2: "1 rapport sectoriel personnalisé",
    btb_s4_jpn_del3: "Accès prioritaire événements",
    btb_s4_jpn_del4: "Participation gratuite à 1 salon",

    // Service 5 - Performance-Based scenarios CMR->JPN
    btb_s5_cmr_sc1: "Client réticent à payer d'avance",
    btb_s5_cmr_sc2: "Premier test de collaboration",
    btb_s5_cmr_sc3: "Projet avec fort potentiel mais budget limité",
    
    // Service 5 - Performance-Based scenarios JPN->CMR
    btb_s5_jpn_sc1: "Entreprise japonaise testant le marché",
    btb_s5_jpn_sc2: "Projet pilote sans certitude de résultat",
    btb_s5_jpn_sc3: "Contrat de représentation temporaire",
    
    // Service 5 - Performance-Based modality
    btb_s5_modality: "Commission sur résultats obtenus",

    // À la Carte Section
    btb_carte_title: "Prestations à la Carte",
    btb_carte_subtitle: "Services ponctuels disponibles dans les deux sens",
    btb_carte1_title: "Interprétariat Visio",
    btb_carte1_desc: "Réunion B2B, négociation, présentation technique",
    btb_carte1_duration: "1/2 journée",
    btb_carte2_title: "Interprétariat Présentiel",
    btb_carte2_desc: "Visite d'usine, salon, mission commerciale",
    btb_carte2_duration: "1 journée (défraiements en sus)",
    btb_carte3_title: "Traduction Technique Certifiée",
    btb_carte3_desc: "Contrat, manuel, spécifications techniques, cahier des charges",
    btb_carte3_duration: "10 pages",
    btb_carte4_title: "Vérification KYC d'un Partenaire",
    btb_carte4_desc: "Due diligence légale, vérification d'existence, extrait Kbis, références",
    btb_carte4_duration: "Par dossier",
    btb_carte5_title: "Organisation Webinaire B2B",
    btb_carte5_desc: "Présentation sectorielle, démonstration produit, Q&A",
    btb_carte5_duration: "2 heures",

    // CTA Section
    btb_cta_title: "Prêt à Développer Votre Business ?",
    btb_cta_subtitle: "Contactez-nous pour discuter de vos projets et obtenir un devis personnalisé",
    btb_cta_btn1: "Nous Contacter",
    btb_cta_btn2: "Retour à l'Accueil",

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
    btb_hero_title: "Business & Technology Bridge",
    btb_hero_subtitle: "Facilitate your commercial and technological exchanges between Cameroon and Japan",
    btb_hero_feat1: "B2B Matchmaking",
    btb_hero_feat2: "Complete Support",
    btb_hero_feat3: "Trade Missions",

    // Intro Section
    btb_intro_title: "Your Gateway to Commercial Excellence",
    btb_intro_p1: "The <strong>Business & Technology Bridge</strong> division is your strategic partner for establishing lasting commercial connections between Cameroon and Japan.",
    btb_intro_p2: "From simple networking to complete support in your expansion projects, we offer you a full range of services adapted to your specific needs.",
    btb_stat1: "Customized Services",
    btb_stat2: "Exchange Directions",
    btb_stat3: "Support",
    btb_flag_cm: "Cameroon",
    btb_flag_jp: "Japan",

    // Services Section
    btb_services_title: "Our Detailed Services",
    btb_services_subtitle: "Choose the service suited to your business needs",
    btb_dir_cmr_jpn: "Cameroon to Japan",
    btb_dir_jpn_cmr: "Japan to Cameroon",

    // Service badges and common terms
    btb_badge_beginner: "Recommended for beginners",
    btb_badge_popular: "Most popular",
    btb_badge_immersion: "Field immersion",
    btb_badge_value: "Best value",
    btb_badge_risk: "No upfront risk",
    btb_scenarios: "Use cases:",
    btb_deliverables: "Deliverables:",
    btb_modalities: "Terms:",
    btb_btn_request: "Request this service",

    // Service Titles
    btb_s1_title: "Simple Matchmaking",
    btb_s2_title: "Complete Support",
    btb_s3_title: "Organized Trade Mission",
    btb_s4_title: "Annual Subscription",
    btb_s5_title: "Performance-Based Payment",

    // Service 1 - Matchmaking scenarios CMR->JPN
    btb_s1_cmr_sc1: "Cameroonian SME seeks spare parts supplier",
    btb_s1_cmr_sc2: "Cameroonian SME seeks technology partner",
    btb_s1_cmr_sc3: "Cameroonian SME seeks Japanese distributor",
    btb_s1_cmr_sc4: "Cameroonian startup seeks Japanese investor",
    
    // Service 1 - Matchmaking scenarios JPN->CMR
    btb_s1_jpn_sc1: "Japanese SME seeks exclusive distributor in Cameroon",
    btb_s1_jpn_sc2: "Japanese SME seeks local subcontractor",
    btb_s1_jpn_sc3: "Japanese SME seeks co-development partner",
    btb_s1_jpn_sc4: "Japanese startup seeks field test partner",
    
    // Service 1 - Matchmaking deliverables
    btb_s1_del1: "3-5 pre-qualified partner profiles",
    btb_s1_del2: "Written introduction by email",
    btb_s1_del3: "Meeting organization (video/in-person)",

    // Service 2 - Complete Support scenarios CMR->JPN
    btb_s2_cmr_sc1: "Cameroonian SME wants to sign a manufacturing license",
    btb_s2_cmr_sc2: "Cameroonian SME wants to acquire industrial equipment with after-sales service",
    btb_s2_cmr_sc3: "Cameroonian SME wants to create a joint venture in Japan",
    
    // Service 2 - Complete Support scenarios JPN->CMR
    btb_s2_jpn_sc1: "Japanese SME wants to establish an exclusive distribution contract",
    btb_s2_jpn_sc2: "Japanese SME wants to outsource production in Cameroon",
    btb_s2_jpn_sc3: "Japanese SME wants to create a subsidiary or joint venture",
    
    // Service 2 - Complete Support deliverables
    btb_s2_del1: "Targeted market study & due diligence",
    btb_s2_del2: "Organization of 2-3 strategic meetings",
    btb_s2_del3: "Bilingual LOI (Letter of Intent)",
    btb_s2_del4: "Implementation roadmap",

    // Service 3 - Trade Mission scenarios CMR->JPN
    btb_s3_cmr_sc1: "Sector delegation (agriculture, energy, digital)",
    btb_s3_cmr_sc2: "Buyer mission for supplier sourcing",
    btb_s3_cmr_sc3: "Cameroonian SME visits factories and trade shows",
    
    // Service 3 - Trade Mission scenarios JPN->CMR
    btb_s3_jpn_sc1: "Factory and potential site visits",
    btb_s3_jpn_sc2: "Japanese delegation meets distributors",
    btb_s3_jpn_sc3: "Exploratory mission for establishment",
    
    // Service 3 - Trade Mission deliverables CMR->JPN
    btb_s3_cmr_del1: "5-7 days of support",
    btb_s3_cmr_del2: "Accommodation assistance",
    btb_s3_cmr_del3: "2-4 qualified appointments",
    btb_s3_cmr_del4: "Professional trade show access",
    
    // Service 3 - Trade Mission deliverables JPN->CMR
    btb_s3_jpn_del1: "5-7 days of support",
    btb_s3_jpn_del2: "Accommodation & local transport assistance",
    btb_s3_jpn_del3: "Professional interpreter",
    btb_s3_jpn_del4: "3-5 qualified appointments",
    btb_s3_jpn_del5: "Organized field visits",

    // Service 4 - Annual Subscription scenarios CMR->JPN
    btb_s4_cmr_sc1: "Company seeking recurring partners",
    btb_s4_cmr_sc2: "Support structure (incubator, chamber of commerce)",
    btb_s4_cmr_sc3: "Cameroonian SME wants continuous monitoring of Japan opportunities",
    
    // Service 4 - Annual Subscription scenarios JPN->CMR
    btb_s4_jpn_sc1: "Japanese SME wants commercial presence without heavy commitment",
    btb_s4_jpn_sc2: "Monitoring of tenders and local partners",
    btb_s4_jpn_sc3: "12-month market test",
    
    // Service 4 - Annual Subscription deliverables CMR->JPN
    btb_s4_cmr_del1: "6 partner files/year",
    btb_s4_cmr_del2: "Biweekly newsletter",
    btb_s4_cmr_del3: "Priority event access",
    btb_s4_cmr_del4: "1 free webinar",
    
    // Service 4 - Annual Subscription deliverables JPN->CMR
    btb_s4_jpn_del1: "4-7 partner files",
    btb_s4_jpn_del2: "1 customized sector report",
    btb_s4_jpn_del3: "Priority event access",
    btb_s4_jpn_del4: "Free participation in 1 trade show",

    // Service 5 - Performance-Based scenarios CMR->JPN
    btb_s5_cmr_sc1: "Client reluctant to pay upfront",
    btb_s5_cmr_sc2: "First collaboration test",
    btb_s5_cmr_sc3: "High potential project but limited budget",
    
    // Service 5 - Performance-Based scenarios JPN->CMR
    btb_s5_jpn_sc1: "Japanese company testing the market",
    btb_s5_jpn_sc2: "Pilot project without certainty of results",
    btb_s5_jpn_sc3: "Temporary representation contract",
    
    // Service 5 - Performance-Based modality
    btb_s5_modality: "Commission on results obtained",

    // À la Carte Section
    btb_carte_title: "À La Carte Services",
    btb_carte_subtitle: "One-time services available in both directions",
    btb_carte1_title: "Video Interpretation",
    btb_carte1_desc: "B2B meeting, negotiation, technical presentation",
    btb_carte1_duration: "Half day",
    btb_carte2_title: "In-Person Interpretation",
    btb_carte2_desc: "Factory visit, trade show, business mission",
    btb_carte2_duration: "1 day (expenses extra)",
    btb_carte3_title: "Certified Technical Translation",
    btb_carte3_desc: "Contract, manual, technical specifications, requirements",
    btb_carte3_duration: "10 pages",
    btb_carte4_title: "Partner KYC Verification",
    btb_carte4_desc: "Legal due diligence, existence verification, company extract, references",
    btb_carte4_duration: "Per file",
    btb_carte5_title: "B2B Webinar Organization",
    btb_carte5_desc: "Industry presentation, product demo, Q&A",
    btb_carte5_duration: "2 hours",

    // CTA Section
    btb_cta_title: "Ready to Grow Your Business?",
    btb_cta_subtitle: "Contact us to discuss your projects and get a personalized quote",
    btb_cta_btn1: "Contact Us",
    btb_cta_btn2: "Back to Home",

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
    btb_hero_title: "ビジネス・テクノロジーブリッジ",
    btb_hero_subtitle: "カメルーンと日本間のビジネス・技術交流を促進",
    btb_hero_feat1: "B2Bマッチング",
    btb_hero_feat2: "完全サポート",
    btb_hero_feat3: "商談ミッション",

    // Intro Section
    btb_intro_title: "ビジネス卓越性への架け橋",
    btb_intro_p1: "<strong>ビジネス・テクノロジーブリッジ</strong>部門は、カメルーンと日本間の永続的なビジネス接続を確立するための戦略的パートナーです。",
    btb_intro_p2: "シンプルなマッチングから事業拡大プロジェクトの完全サポートまで、お客様の特定のニーズに適応した幅広いサービスを提供します。",
    btb_stat1: "カスタムサービス",
    btb_stat2: "交流方向",
    btb_stat3: "サポート",
    btb_flag_cm: "カメルーン",
    btb_flag_jp: "日本",

    // Services Section
    btb_services_title: "詳細サービス",
    btb_services_subtitle: "ビジネスニーズに適したサービスをお選びください",
    btb_dir_cmr_jpn: "カメルーンから日本へ",
    btb_dir_jpn_cmr: "日本からカメルーンへ",

    // Service badges and common terms
    btb_badge_beginner: "初心者におすすめ",
    btb_badge_popular: "最も人気",
    btb_badge_immersion: "現地体験",
    btb_badge_value: "最高のコストパフォーマンス",
    btb_badge_risk: "初期リスクなし",
    btb_scenarios: "利用シーン：",
    btb_deliverables: "成果物：",
    btb_modalities: "条件：",
    btb_btn_request: "このサービスを依頼",

    // Service Titles
    btb_s1_title: "シンプルマッチング",
    btb_s2_title: "完全サポート",
    btb_s3_title: "商談ミッション",
    btb_s4_title: "年間サブスクリプション",
    btb_s5_title: "成果報酬型",

    // Service 1 - Matchmaking scenarios CMR->JPN
    btb_s1_cmr_sc1: "カメルーン中小企業が部品サプライヤーを探している",
    btb_s1_cmr_sc2: "カメルーン中小企業が技術パートナーを探している",
    btb_s1_cmr_sc3: "カメルーン中小企業が日本の販売代理店を探している",
    btb_s1_cmr_sc4: "カメルーンのスタートアップが日本の投資家を探している",
    
    // Service 1 - Matchmaking scenarios JPN->CMR
    btb_s1_jpn_sc1: "日本の中小企業がカメルーンで独占販売代理店を探している",
    btb_s1_jpn_sc2: "日本の中小企業が現地の下請け業者を探している",
    btb_s1_jpn_sc3: "日本の中小企業が共同開発パートナーを探している",
    btb_s1_jpn_sc4: "日本のスタートアップが現場テストパートナーを探している",
    
    // Service 1 - Matchmaking deliverables
    btb_s1_del1: "事前審査済みパートナープロフィール3〜5件",
    btb_s1_del2: "メールによる紹介文書",
    btb_s1_del3: "会議の手配（オンライン/対面）",

    // Service 2 - Complete Support scenarios CMR->JPN
    btb_s2_cmr_sc1: "カメルーン中小企業が製造ライセンス契約を希望",
    btb_s2_cmr_sc2: "カメルーン中小企業がアフターサービス付き産業設備の購入を希望",
    btb_s2_cmr_sc3: "カメルーン中小企業が日本で合弁会社の設立を希望",
    
    // Service 2 - Complete Support scenarios JPN->CMR
    btb_s2_jpn_sc1: "日本の中小企業が独占販売契約の締結を希望",
    btb_s2_jpn_sc2: "日本の中小企業がカメルーンでの生産外注を希望",
    btb_s2_jpn_sc3: "日本の中小企業が子会社または合弁会社の設立を希望",
    
    // Service 2 - Complete Support deliverables
    btb_s2_del1: "ターゲット市場調査 & デューデリジェンス",
    btb_s2_del2: "戦略的会議2〜3回の手配",
    btb_s2_del3: "バイリンガル意向書（LOI）",
    btb_s2_del4: "実施ロードマップ",

    // Service 3 - Trade Mission scenarios CMR->JPN
    btb_s3_cmr_sc1: "セクター別代表団（農業、エネルギー、デジタル）",
    btb_s3_cmr_sc2: "サプライヤー調達のためのバイヤーミッション",
    btb_s3_cmr_sc3: "カメルーン中小企業が工場や展示会を訪問",
    
    // Service 3 - Trade Mission scenarios JPN->CMR
    btb_s3_jpn_sc1: "工場および候補地の視察",
    btb_s3_jpn_sc2: "日本代表団が販売代理店と面会",
    btb_s3_jpn_sc3: "進出のための探索ミッション",
    
    // Service 3 - Trade Mission deliverables CMR->JPN
    btb_s3_cmr_del1: "5〜7日間のサポート",
    btb_s3_cmr_del2: "宿泊サポート",
    btb_s3_cmr_del3: "適格な商談2〜4件",
    btb_s3_cmr_del4: "専門展示会へのアクセス",
    
    // Service 3 - Trade Mission deliverables JPN->CMR
    btb_s3_jpn_del1: "5〜7日間のサポート",
    btb_s3_jpn_del2: "宿泊および現地交通サポート",
    btb_s3_jpn_del3: "プロフェッショナル通訳",
    btb_s3_jpn_del4: "適格な商談3〜5件",
    btb_s3_jpn_del5: "手配された現場訪問",

    // Service 4 - Annual Subscription scenarios CMR->JPN
    btb_s4_cmr_sc1: "定期的なパートナーを探している企業",
    btb_s4_cmr_sc2: "支援機関（インキュベーター、商工会議所）",
    btb_s4_cmr_sc3: "カメルーン中小企業が日本の機会の継続的監視を希望",
    
    // Service 4 - Annual Subscription scenarios JPN->CMR
    btb_s4_jpn_sc1: "日本の中小企業が大きなコミットメントなしで商業的存在を希望",
    btb_s4_jpn_sc2: "入札および現地パートナーの監視",
    btb_s4_jpn_sc3: "12ヶ月間の市場テスト",
    
    // Service 4 - Annual Subscription deliverables CMR->JPN
    btb_s4_cmr_del1: "年間パートナーファイル6件",
    btb_s4_cmr_del2: "隔週ニュースレター",
    btb_s4_cmr_del3: "イベント優先アクセス",
    btb_s4_cmr_del4: "無料ウェビナー1回",
    
    // Service 4 - Annual Subscription deliverables JPN->CMR
    btb_s4_jpn_del1: "パートナーファイル4〜7件",
    btb_s4_jpn_del2: "カスタマイズされたセクター別レポート1件",
    btb_s4_jpn_del3: "イベント優先アクセス",
    btb_s4_jpn_del4: "展示会1回無料参加",

    // Service 5 - Performance-Based scenarios CMR->JPN
    btb_s5_cmr_sc1: "前払いを躊躇するクライアント",
    btb_s5_cmr_sc2: "初回のコラボレーションテスト",
    btb_s5_cmr_sc3: "高いポテンシャルだが限られた予算のプロジェクト",
    
    // Service 5 - Performance-Based scenarios JPN->CMR
    btb_s5_jpn_sc1: "市場をテストする日本企業",
    btb_s5_jpn_sc2: "結果が不確実なパイロットプロジェクト",
    btb_s5_jpn_sc3: "一時的な代表契約",
    
    // Service 5 - Performance-Based modality
    btb_s5_modality: "得られた結果に基づく手数料",

    // À la Carte Section
    btb_carte_title: "単品サービス",
    btb_carte_subtitle: "両方向で利用可能な単発サービス",
    btb_carte1_title: "オンライン通訳",
    btb_carte1_desc: "B2B会議、交渉、技術プレゼンテーション",
    btb_carte1_duration: "半日",
    btb_carte2_title: "対面通訳",
    btb_carte2_desc: "工場見学、展示会、商談",
    btb_carte2_duration: "1日（経費別途）",
    btb_carte3_title: "認証技術翻訳",
    btb_carte3_desc: "契約書、マニュアル、技術仕様書、要件定義書",
    btb_carte3_duration: "10ページ",
    btb_carte4_title: "パートナー身元確認",
    btb_carte4_desc: "法的デューデリジェンス、実在確認、会社登記簿、参照先",
    btb_carte4_duration: "1件あたり",
    btb_carte5_title: "B2Bウェビナー企画",
    btb_carte5_desc: "業界プレゼン、製品デモ、Q&A",
    btb_carte5_duration: "2時間",

    // CTA Section
    btb_cta_title: "ビジネスを成長させる準備はできましたか？",
    btb_cta_subtitle: "プロジェクトについて話し合い、カスタム見積もりを取得するために、お問い合わせください",
    btb_cta_btn1: "お問い合わせ",
    btb_cta_btn2: "ホームに戻る",

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
  const t = btbI18n[lang];
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
  const directionBtns = document.querySelectorAll('.btb-direction-btn');
  
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
  const scenarios = document.querySelectorAll('.btb-scenarios');
  scenarios.forEach(scenario => {
    const scenarioDirection = scenario.dataset.direction;
    if (scenarioDirection === direction) {
      scenario.style.display = 'block';
    } else {
      scenario.style.display = 'none';
    }
  });
  
  // Update deliverables (for Mission Commerciale)
  const deliverables = document.querySelectorAll('.btb-deliverables ul[data-direction]');
  deliverables.forEach(deliverable => {
    const deliverableDirection = deliverable.dataset.direction;
    if (deliverableDirection === direction) {
      deliverable.style.display = 'block';
    } else {
      deliverable.style.display = 'none';
    }
  });
  
  // Update pricing
  const prices = document.querySelectorAll('.btb-price');
  prices.forEach(price => {
    const priceDirection = price.dataset.direction;
    if (priceDirection === direction) {
      price.style.display = 'block';
    } else {
      price.style.display = 'none';
    }
  });
  
  // Add animation
  const serviceCards = document.querySelectorAll('.btb-service-card');
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

// Observe service cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.btb-service-card, .btb-carte-item');
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
  const serviceCards = document.querySelectorAll('.btb-service-card');
  
  serviceCards.forEach(card => {
    // Add hover effect for better UX
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
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
  const scenarios = document.querySelectorAll('.btb-scenarios');
  scenarios.forEach(scenario => {
    scenario.style.display = 'block';
  });
});

window.addEventListener('afterprint', function() {
  // Restore original state after printing
  const activeDirection = document.querySelector('.btb-direction-btn.active');
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
console.log('Business & Technology Bridge page loaded successfully');
