/* ============================================================
   NipponMboa Group — shared i18n + routing for the new arms
   (group hub, foundation, startup, training).
   Self-contained: does NOT depend on script.js. All DOM hooks
   are null-guarded so a single file can serve every new page.
   Consulting keeps its own script.js untouched.
   ============================================================ */

const groupI18n = {
  /* ---------------------------------------------------------- FR */
  fr: {
    /* shared nav / footer */
    nav_home: "Accueil",
    nav_consulting: "Consulting",
    nav_foundation: "Fondation",
    nav_startup: "Startups",
    nav_training: "Formation Pro",
    nav_academy: "Académie de Langues ↗",
    nav_group: "← NipponMboa",
    footer_tagline: "Un pont entre deux mondes — Nippon &amp; Mboa.",
    footer_copy: "© 2025 NipponMboa. Tous droits réservés.",
    footer_group: "Le Groupe",
    cta_contact: "Nous contacter",

    /* ---------- GROUP HUB ---------- */
    hub_title: "NipponMboa",
    hub_hero_title: "Un pont entre deux mondes",
    hub_hero_sub: "Nippon &amp; Mboa — le Japon et le « chez-nous » camerounais. NipponMboa relie l'expertise mondiale aux besoins concrets des communautés, et transforme les idées en impact tangible.",
    hub_hero_badge: "Faciliter. つなぐ. Succeed.",
    hub_hero_cta1: "Découvrir le groupe",
    hub_hero_cta2: "Nous contacter",

    hub_story_title: "Qui est NipponMboa ?",
    hub_story_subtitle: "Une famille d'entités au service d'un même pont",
    hub_story_p1: "« Nipponmboa » unit deux mondes : « Nippon » (le Japon) et « Mboa » (le pays, le « chez-nous » camerounais). Plus qu'un nom, c'est une promesse : être un pont vivant entre les deux nations, et plus largement entre l'expertise disponible partout dans le monde et les besoins concrets des communautés locales.",
    hub_story_p2: "Pour tenir cette promesse, NipponMboa réunit un pôle de conseil (Consulting), une fondation à but non lucratif, des startups, une formation professionnelle et une académie de langues — afin que les bonnes idées passent rapidement de la vision à l'impact tangible. Au cœur de tout : le transfert de technologies et de savoir-faire.",

    hub_entities_title: "Nos 5 entités",
    hub_entities_subtitle: "Chaque entité porte une mission distincte, au service du même pont Cameroun–Japon et du monde.",

    ent_consulting_title: "Consulting",
    ent_consulting_desc: "Pont business &amp; technologique : mise en relation B2B, transfert de technologie, formation linguistique et carrière, culture, solutions IT et commerce bilatéral entre le Cameroun et le Japon.",
    ent_consulting_link: "Explorer le Consulting →",

    ent_foundation_title: "Fondation",
    ent_foundation_desc: "Association apolitique à but non lucratif : partage et transfert de compétences et de technologies au bénéfice prioritaire des populations et zones défavorisées du Cameroun. « Empowering Every Human Future ».",
    ent_foundation_link: "Découvrir la Fondation →",

    ent_startup_title: "Startups",
    ent_startup_desc: "Les ventures que NipponMboa incube et développe pour répondre à des besoins vitaux — à commencer par un projet pilote de biogaz. Innovation concrète, ancrée dans le terrain.",
    ent_startup_link: "Voir les ventures →",

    ent_training_title: "Formation Professionnelle",
    ent_training_desc: "Formation professionnelle aux métiers du BTP — plomberie et électrotechnique — pour doter les jeunes de compétences pratiques et employables. Bientôt disponible.",
    ent_training_link: "En savoir plus →",

    ent_academy_title: "Académie de Langues",
    ent_academy_desc: "Apprentissage du japonais, du français et de l'anglais, en ligne et en présentiel, avec auto-apprentissage guidé. Plateforme dédiée déjà en ligne.",
    ent_academy_link: "Visiter l'Académie ↗",

    /* ---------- FOUNDATION ---------- */
    f_title: "NipponMboa Foundation",
    f_hero_title: "Empowering Every Human Future",
    f_hero_sub: "Association apolitique et à but non lucratif de droit camerounais. Nous captons l'expertise là où elle existe — au Japon en premier lieu, et partout dans le monde — et la redirigeons, à poids égal, vers les communautés qui en ont le plus besoin.",
    f_hero_cta1: "Notre mission",
    f_hero_cta2: "Nous rejoindre",
    f_hero_badge: "Loi n° 90/053 du 19 décembre 1990 — République du Cameroun",

    f_mission_title: "Notre mission",
    f_mission_subtitle: "Faciliter le partage et le transfert de compétences et de technologies",
    f_mission_intro: "La Fondation a pour objet de faciliter le partage et le transfert de compétences et de technologies, au bénéfice prioritaire des populations et des zones défavorisées du Cameroun. L'expertise est captée à toutes ses sources — pays développés (le Japon en premier lieu, par affinité culturelle) et acteurs locaux déjà avancés — et redirigée, à poids égal, vers ceux qui en ont le plus besoin.",
    f_m1_title: "Transfert de technologies",
    f_m1_desc: "Faciliter le transfert et le partage de technologies depuis des sources multiples vers les communautés qui en ont le plus besoin.",
    f_m2_title: "Renforcement des capacités",
    f_m2_desc: "Doter individus, communautés et organisations de compétences et de connaissances pratiques, en priorité dans les zones défavorisées.",
    f_m3_title: "Pont expertise ↔ besoins",
    f_m3_desc: "Relier l'expertise locale et internationale aux besoins locaux, vers des applications durables et pertinentes.",
    f_m4_title: "Adoption durable",
    f_m4_desc: "Promouvoir une adoption des technologies adaptée aux réalités locales et respectueuse de l'environnement.",
    f_m5_title: "Mentorat &amp; suivi",
    f_m5_desc: "Assurer l'accompagnement, le mentorat et le suivi des bénéficiaires pour ancrer durablement les compétences transférées.",
    f_m6_title: "Sensibilisation &amp; savoir",
    f_m6_desc: "Informer les populations sur les technologies et savoirs vitaux, et diffuser largement les connaissances utiles.",

    f_domains_title: "Domaines prioritaires",
    f_domains_subtitle: "Évolutifs selon les besoins et opportunités du moment",
    f_d1_title: "Énergies renouvelables",
    f_d1_desc: "Énergie solaire et autres technologies d'énergie propre.",
    f_d2_title: "Technologies de l'information",
    f_d2_desc: "Intelligence artificielle, apprentissage automatique, informatique en nuage, infrastructures numériques.",
    f_d3_title: "Autres secteurs vitaux",
    f_d3_desc: "Tout secteur vital, nécessiteux ou de pointe à un moment donné.",

    f_principles_title: "Principes directeurs",
    f_principles_subtitle: "Six principes qui guident chacune de nos actions",
    f_p1_title: "Pertinence locale",
    f_p1_desc: "Chaque initiative est adaptée au contexte et aux besoins spécifiques du Cameroun.",
    f_p2_title: "Priorité aux défavorisés",
    f_p2_desc: "Les efforts sont orientés en premier lieu vers les zones et populations les plus démunies.",
    f_p3_title: "Le savoir pour ceux qui en ont besoin",
    f_p3_desc: "L'expertise est captée à toutes ses sources, locale et internationale, à poids égal, et redirigée vers les nécessiteux.",
    f_p4_title: "Durabilité",
    f_p4_desc: "Priorité aux solutions que les communautés peuvent entretenir et développer de manière autonome.",
    f_p5_title: "Inclusivité",
    f_p5_desc: "Extension de l'accès à la technologie et au savoir à tous, en particulier aux plus démunis.",
    f_p6_title: "Partenariat",
    f_p6_desc: "Les résultats s'obtiennent par la collaboration, avec le Japon comme partenaire de premier plan par affinité culturelle.",

    f_how_title: "Comment nous agissons",
    f_how_subtitle: "Le savoir partout, pour ceux qui en ont besoin",
    f_how_p1: "Le partage et le transfert s'opèrent principalement à travers des formations courtes, des séminaires, des ateliers et des conférences, dans des formats adaptés au contexte. La priorité est accordée aux zones et populations défavorisées.",
    f_how_p2: "La Fondation mobilise l'expertise à poids égal auprès des pays développés et des acteurs locaux déjà avancés. Elle noue des partenariats techniques et opérationnels avec des structures privées ou publiques, locales ou internationales, dans le strict respect de son but non lucratif.",

    f_partners_title: "Partenariats",
    f_partners_subtitle: "Ouverts au monde, avec une sensibilité particulière au Japon",
    f_partners_text: "La Fondation est ouverte aux gouvernements, institutions académiques, entreprises privées, organisations internationales et acteurs locaux avancés. Elle demeure ouverte à tous les pays développés, avec une sensibilité particulière au Japon par affinité culturelle déjà établie.",

    f_gov_title: "Gouvernance",
    f_gov_subtitle: "Une association transparente et structurée",
    f_gov_text: "La Fondation est administrée par une Assemblée Générale souveraine et un Conseil d'Administration (Bureau exécutif). Son siège social est établi à Yaoundé, Maetur Nkomo — Antenne Orange. À terme, l'association aspire à évoluer vers le statut d'organisation non gouvernementale (ONG).",

    f_cta_title: "Rejoignez le mouvement",
    f_cta_text: "Devenez membre, partenaire ou donateur et contribuez à bâtir un avenir où le savoir et les technologies vitales sont accessibles à tous.",
    f_cta_btn: "Nous rejoindre / Devenir partenaire",

    /* ---------- STARTUP ---------- */
    s_title: "NipponMboa Startups",
    s_hero_title: "Des ventures nées pour résoudre des besoins vitaux",
    s_hero_sub: "NipponMboa incube et développe des startups qui transforment les défis en opportunités, en s'appuyant sur les ressources déjà à portée de main. Innovation concrète, ancrée dans le terrain camerounais.",
    s_hero_cta1: "Découvrir nos ventures",
    s_hero_cta2: "Proposer un projet",
    s_hero_badge: "De la vision à l'impact tangible",

    s_intro_title: "Notre approche des ventures",
    s_intro_subtitle: "Transformer les défis en opportunités",
    s_intro_text: "Chaque venture NipponMboa part d'un besoin réel observé sur le terrain, puis mobilise la technologie et le savoir-faire — locaux et internationaux — pour y répondre durablement. Nous commençons modestement, testons en conditions réelles, puis développons ce qui fonctionne.",

    s_ventures_title: "Nos ventures",
    s_ventures_subtitle: "Un portefeuille en croissance, à commencer par le biogaz",
    s_biogas_tag: "Projet pilote",
    s_biogas_title: "Biogas Pilot",
    s_biogas_desc: "Un projet pilote de biogaz transformant les déchets organiques en énergie propre et en fertilisant — une réponse concrète aux besoins énergétiques et agricoles des communautés camerounaises. Première venture du portefeuille NipponMboa.",
    s_biogas_f1: "Énergie propre à partir de déchets organiques",
    s_biogas_f2: "Réduction de la dépendance au bois et au gaz importé",
    s_biogas_f3: "Fertilisant naturel pour l'agriculture locale",
    s_biogas_status: "Statut : pilote en cours",

    s_soon_tag: "Bientôt",
    s_soon_title: "D'autres ventures à venir",
    s_soon_desc: "NipponMboa prépare de nouvelles ventures dans l'énergie, l'agritech et les technologies numériques. Vous avez un projet ou une idée ? Parlons-en.",

    s_cta_title: "Un projet à construire ensemble ?",
    s_cta_text: "Entrepreneurs, investisseurs, partenaires techniques : NipponMboa accueille les idées qui créent de l'impact.",
    s_cta_btn: "Proposer un projet",

    /* ---------- TRAINING ---------- */
    t_title: "NipponMboa — Formation Professionnelle",
    t_hero_title: "Des compétences pratiques pour des métiers d'avenir",
    t_hero_sub: "Formation professionnelle aux métiers du BTP — plomberie et électrotechnique. Nous dotons les jeunes de compétences concrètes, employables et ancrées dans les besoins du marché.",
    t_hero_cta1: "Les filières",
    t_hero_cta2: "S'informer",
    t_hero_badge: "Bientôt disponible",

    t_intro_title: "Pourquoi la formation BTP ?",
    t_intro_subtitle: "Des métiers essentiels, une demande constante",
    t_intro_text: "Les métiers du bâtiment et des travaux publics (BTP) offrent des débouchés concrets et durables. NipponMboa lance une formation professionnelle axée sur la pratique, pour former des techniciens qualifiés, immédiatement opérationnels et recherchés sur le marché camerounais.",

    t_fields_title: "Nos filières",
    t_fields_subtitle: "Deux filières BTP pour commencer",
    t_f1_title: "Plomberie",
    t_f1_desc: "Installation, maintenance et réparation des réseaux d'eau et sanitaires. Lecture de plans, soudure, mise aux normes et dépannage pour le résidentiel et le tertiaire.",
    t_f2_title: "Électrotechnique",
    t_f2_desc: "Installation et maintenance des systèmes électriques : câblage, tableaux, sécurité, dépannage et mise aux normes pour bâtiments résidentiels et professionnels.",

    t_approach_title: "Notre approche pédagogique",
    t_approach_subtitle: "La pratique au cœur de la formation",
    t_a1_title: "Apprentissage par la pratique",
    t_a1_desc: "Ateliers et mises en situation réelles pour maîtriser les gestes du métier.",
    t_a2_title: "Formateurs expérimentés",
    t_a2_desc: "Encadrement par des professionnels du terrain, locaux et internationaux.",
    t_a3_title: "Employabilité",
    t_a3_desc: "Des compétences directement alignées sur les besoins du marché de l'emploi.",

    t_cta_title: "Intéressé par nos formations ?",
    t_cta_text: "Inscrivez-vous à notre liste d'information pour être prévenu dès l'ouverture des inscriptions.",
    t_cta_btn: "Me tenir informé",
  },

  /* ---------------------------------------------------------- EN */
  en: {
    nav_home: "Home",
    nav_consulting: "Consulting",
    nav_foundation: "Foundation",
    nav_startup: "Startups",
    nav_training: "Pro Training",
    nav_academy: "Language Academy ↗",
    nav_group: "← NipponMboa",
    footer_tagline: "A bridge between two worlds — Nippon &amp; Mboa.",
    footer_copy: "© 2025 NipponMboa. All rights reserved.",
    footer_group: "The Group",
    cta_contact: "Contact us",

    hub_title: "NipponMboa",
    hub_hero_title: "A bridge between two worlds",
    hub_hero_sub: "Nippon &amp; Mboa — Japan and the Cameroonian sense of “home.” NipponMboa connects global expertise to the real needs of communities, turning ideas into tangible impact.",
    hub_hero_badge: "Facilitate. つなぐ. Succeed.",
    hub_hero_cta1: "Explore the group",
    hub_hero_cta2: "Contact us",

    hub_story_title: "Who is NipponMboa?",
    hub_story_subtitle: "A family of entities serving one bridge",
    hub_story_p1: "“Nipponmboa” unites two worlds: “Nippon” (Japan) and “Mboa,” which in Cameroon means “home,” “our place.” More than a name, it is a promise: to be a living bridge between the two nations, and more broadly between expertise available anywhere in the world and the concrete needs of local communities.",
    hub_story_p2: "To honour that promise, NipponMboa brings together a consulting arm, a non-profit foundation, startups, professional training and a language academy — so that good ideas move swiftly from vision to tangible impact. At the heart of everything: the transfer of technology and know-how.",

    hub_entities_title: "Our 5 entities",
    hub_entities_subtitle: "Each entity carries a distinct mission, serving the same bridge between Cameroon, Japan and the world.",

    ent_consulting_title: "Consulting",
    ent_consulting_desc: "Business &amp; technology bridge: B2B matchmaking, technology transfer, language &amp; career training, culture, IT solutions and bilateral trade between Cameroon and Japan.",
    ent_consulting_link: "Explore Consulting →",

    ent_foundation_title: "Foundation",
    ent_foundation_desc: "Apolitical, non-profit association: sharing and transfer of skills and technologies for the priority benefit of disadvantaged populations and areas of Cameroon. “Empowering Every Human Future.”",
    ent_foundation_link: "Discover the Foundation →",

    ent_startup_title: "Startups",
    ent_startup_desc: "Ventures that NipponMboa incubates and grows to meet vital needs — starting with a biogas pilot project. Concrete, field-rooted innovation.",
    ent_startup_link: "See the ventures →",

    ent_training_title: "Professional Training",
    ent_training_desc: "Vocational training in construction trades — plumbing and electro-technics — equipping young people with practical, employable skills. Coming soon.",
    ent_training_link: "Learn more →",

    ent_academy_title: "Language Academy",
    ent_academy_desc: "Learning Japanese, French and English, online and in person, with guided self-study. Dedicated platform already live.",
    ent_academy_link: "Visit the Academy ↗",

    f_title: "NipponMboa Foundation",
    f_hero_title: "Empowering Every Human Future",
    f_hero_sub: "An apolitical, non-profit association under Cameroonian law. We capture expertise wherever it exists — Japan first, and anywhere in the world — and redirect it, at equal weight, to the communities that need it most.",
    f_hero_cta1: "Our mission",
    f_hero_cta2: "Join us",
    f_hero_badge: "Law n° 90/053 of 19 December 1990 — Republic of Cameroon",

    f_mission_title: "Our mission",
    f_mission_subtitle: "Facilitating the sharing and transfer of skills and technologies",
    f_mission_intro: "The Foundation's purpose is to facilitate the sharing and transfer of skills and technologies, for the priority benefit of disadvantaged populations and areas of Cameroon. Expertise is captured from all its sources — developed countries (Japan first, by cultural affinity) and already-advanced local actors — and redirected, at equal weight, to those who need it most.",
    f_m1_title: "Technology transfer",
    f_m1_desc: "Facilitate the transfer and sharing of technologies from multiple sources to the communities that need them most.",
    f_m2_title: "Capacity building",
    f_m2_desc: "Equip individuals, communities and organisations with practical skills and knowledge, prioritising disadvantaged areas.",
    f_m3_title: "Expertise ↔ needs bridge",
    f_m3_desc: "Connect local and international expertise to local needs, toward sustainable and relevant applications.",
    f_m4_title: "Sustainable adoption",
    f_m4_desc: "Promote technology adoption that fits local realities and respects the environment.",
    f_m5_title: "Mentoring &amp; follow-up",
    f_m5_desc: "Provide support, mentoring and follow-up to anchor transferred skills durably.",
    f_m6_title: "Awareness &amp; knowledge",
    f_m6_desc: "Inform people about vital technologies and knowledge, and broadly disseminate useful knowledge.",

    f_domains_title: "Priority domains",
    f_domains_subtitle: "Evolving with the needs and opportunities of the moment",
    f_d1_title: "Renewable energy",
    f_d1_desc: "Solar energy and other clean-energy technologies.",
    f_d2_title: "Information technology",
    f_d2_desc: "Artificial intelligence, machine learning, cloud computing, digital infrastructure.",
    f_d3_title: "Other vital sectors",
    f_d3_desc: "Any vital, needed or cutting-edge sector at a given time.",

    f_principles_title: "Guiding principles",
    f_principles_subtitle: "Six principles that guide every action we take",
    f_p1_title: "Local relevance",
    f_p1_desc: "Every initiative is adapted to the specific context and needs of Cameroon.",
    f_p2_title: "Priority to the disadvantaged",
    f_p2_desc: "Efforts are directed first toward the most deprived areas and populations.",
    f_p3_title: "Knowledge for those who need it",
    f_p3_desc: "Expertise is captured from all sources, local and international, at equal weight, and redirected to those in need.",
    f_p4_title: "Sustainability",
    f_p4_desc: "Priority to solutions communities can maintain and grow autonomously.",
    f_p5_title: "Inclusivity",
    f_p5_desc: "Extending access to technology and knowledge to all, especially the most deprived.",
    f_p6_title: "Partnership",
    f_p6_desc: "Results come through collaboration, with Japan as a leading partner by cultural affinity.",

    f_how_title: "How we work",
    f_how_subtitle: "Knowledge everywhere, for those who need it",
    f_how_p1: "Sharing and transfer happen mainly through short training sessions, seminars, workshops and conferences, in formats suited to the context. Priority is given to disadvantaged areas and populations.",
    f_how_p2: "The Foundation mobilises expertise at equal weight from developed countries and already-advanced local actors. It forms technical and operational partnerships with private or public, local or international structures, in strict respect of its non-profit purpose.",

    f_partners_title: "Partnerships",
    f_partners_subtitle: "Open to the world, with a special sensibility toward Japan",
    f_partners_text: "The Foundation is open to governments, academic institutions, private companies, international organisations and advanced local actors. It remains open to all developed countries, with a special sensibility toward Japan through an already-established cultural affinity.",

    f_gov_title: "Governance",
    f_gov_subtitle: "A transparent, structured association",
    f_gov_text: "The Foundation is governed by a sovereign General Assembly and a Board (executive bureau). Its registered seat is in Yaoundé, Maetur Nkomo — Antenne Orange. In time, the association aspires to evolve toward NGO status.",

    f_cta_title: "Join the movement",
    f_cta_text: "Become a member, partner or donor and help build a future where knowledge and vital technologies are accessible to all.",
    f_cta_btn: "Join us / Become a partner",

    s_title: "NipponMboa Startups",
    s_hero_title: "Ventures born to solve vital needs",
    s_hero_sub: "NipponMboa incubates and grows startups that turn challenges into opportunities, using the resources already within reach. Concrete innovation, rooted in the Cameroonian field.",
    s_hero_cta1: "Discover our ventures",
    s_hero_cta2: "Propose a project",
    s_hero_badge: "From vision to tangible impact",

    s_intro_title: "Our approach to ventures",
    s_intro_subtitle: "Turning challenges into opportunities",
    s_intro_text: "Every NipponMboa venture starts from a real need observed in the field, then mobilises technology and know-how — local and international — to address it durably. We start small, test in real conditions, then scale what works.",

    s_ventures_title: "Our ventures",
    s_ventures_subtitle: "A growing portfolio, starting with biogas",
    s_biogas_tag: "Pilot project",
    s_biogas_title: "Biogas Pilot",
    s_biogas_desc: "A biogas pilot project turning organic waste into clean energy and fertiliser — a concrete answer to the energy and agricultural needs of Cameroonian communities. The first venture in the NipponMboa portfolio.",
    s_biogas_f1: "Clean energy from organic waste",
    s_biogas_f2: "Reduced reliance on firewood and imported gas",
    s_biogas_f3: "Natural fertiliser for local agriculture",
    s_biogas_status: "Status: pilot in progress",

    s_soon_tag: "Soon",
    s_soon_title: "More ventures ahead",
    s_soon_desc: "NipponMboa is preparing new ventures in energy, agritech and digital technologies. Have a project or an idea? Let's talk.",

    s_cta_title: "A project to build together?",
    s_cta_text: "Entrepreneurs, investors, technical partners: NipponMboa welcomes ideas that create impact.",
    s_cta_btn: "Propose a project",

    t_title: "NipponMboa — Professional Training",
    t_hero_title: "Practical skills for future-proof trades",
    t_hero_sub: "Vocational training in construction trades — plumbing and electro-technics. We equip young people with concrete, employable skills rooted in market needs.",
    t_hero_cta1: "The programs",
    t_hero_cta2: "Get informed",
    t_hero_badge: "Coming soon",

    t_intro_title: "Why construction-trade training?",
    t_intro_subtitle: "Essential trades, constant demand",
    t_intro_text: "Construction and public-works trades offer concrete, lasting opportunities. NipponMboa is launching a hands-on vocational training to produce qualified technicians who are immediately operational and sought-after on the Cameroonian market.",

    t_fields_title: "Our programs",
    t_fields_subtitle: "Two construction-trade programs to start",
    t_f1_title: "Plumbing",
    t_f1_desc: "Installation, maintenance and repair of water and sanitary networks. Blueprint reading, welding, compliance and troubleshooting for residential and commercial settings.",
    t_f2_title: "Electro-technics",
    t_f2_desc: "Installation and maintenance of electrical systems: wiring, panels, safety, troubleshooting and compliance for residential and professional buildings.",

    t_approach_title: "Our teaching approach",
    t_approach_subtitle: "Practice at the heart of training",
    t_a1_title: "Learning by doing",
    t_a1_desc: "Workshops and real-world scenarios to master the gestures of the trade.",
    t_a2_title: "Experienced trainers",
    t_a2_desc: "Guidance from field professionals, local and international.",
    t_a3_title: "Employability",
    t_a3_desc: "Skills directly aligned with the needs of the job market.",

    t_cta_title: "Interested in our training?",
    t_cta_text: "Join our information list to be notified as soon as enrolment opens.",
    t_cta_btn: "Keep me informed",
  },

  /* ---------------------------------------------------------- JA */
  ja: {
    nav_home: "ホーム",
    nav_consulting: "コンサルティング",
    nav_foundation: "財団",
    nav_startup: "スタートアップ",
    nav_training: "職業訓練",
    nav_academy: "ランゲージアカデミー ↗",
    nav_group: "← NipponMboa",
    footer_tagline: "二つの世界をつなぐ架け橋 — Nippon &amp; Mboa。",
    footer_copy: "© 2025 NipponMboa. All rights reserved.",
    footer_group: "グループ",
    cta_contact: "お問い合わせ",

    hub_title: "NipponMboa",
    hub_hero_title: "二つの世界をつなぐ架け橋",
    hub_hero_sub: "Nippon（日本）と Mboa（カメルーンの「故郷」）。NipponMboa は世界の専門知識を地域の具体的なニーズへとつなぎ、アイデアを確かな成果に変えます。",
    hub_hero_badge: "Facilitate. つなぐ. Succeed.",
    hub_hero_cta1: "グループを見る",
    hub_hero_cta2: "お問い合わせ",

    hub_story_title: "NipponMboa とは？",
    hub_story_subtitle: "一つの架け橋のために集う事業体の家族",
    hub_story_p1: "「Nipponmboa」は二つの世界を結びます。「Nippon」（日本）と「Mboa」（カメルーンで「故郷」「私たちの場所」を意味する言葉）。それは名前以上に、二国間の、そして世界中の専門知識と地域の具体的なニーズとをつなぐ、生きた架け橋であるという約束です。",
    hub_story_p2: "その約束を果たすため、NipponMboa はコンサルティング部門、非営利財団、スタートアップ、職業訓練、ランゲージアカデミーを束ね、良いアイデアを素早く成果へと導きます。すべての中心にあるのは、技術とノウハウの移転です。",

    hub_entities_title: "5つの事業体",
    hub_entities_subtitle: "各事業体は、カメルーン・日本・世界をつなぐ同じ架け橋のために、それぞれ固有の使命を担います。",

    ent_consulting_title: "コンサルティング",
    ent_consulting_desc: "ビジネス＆技術の架け橋：B2Bマッチング、技術移転、語学・キャリア研修、文化、ITソリューション、カメルーンと日本の二国間貿易。",
    ent_consulting_link: "コンサルティングを見る →",

    ent_foundation_title: "財団",
    ent_foundation_desc: "非政治・非営利の団体：カメルーンの恵まれない人々と地域を最優先に、技能と技術の共有・移転を行います。「Empowering Every Human Future」。",
    ent_foundation_link: "財団について →",

    ent_startup_title: "スタートアップ",
    ent_startup_desc: "NipponMboa が育成・展開する、生活に不可欠なニーズに応えるベンチャー群。まずはバイオガスの試験事業から。現場に根ざした具体的なイノベーション。",
    ent_startup_link: "ベンチャーを見る →",

    ent_training_title: "職業訓練",
    ent_training_desc: "建設関連職（配管・電気技術）の職業訓練。若者に実践的で雇用につながる技能を提供します。近日開始。",
    ent_training_link: "詳しく見る →",

    ent_academy_title: "ランゲージアカデミー",
    ent_academy_desc: "日本語・フランス語・英語を、オンラインと対面で学習。ガイド付き自習にも対応。専用プラットフォームはすでに公開中。",
    ent_academy_link: "アカデミーへ ↗",

    f_title: "NipponMboa 財団",
    f_hero_title: "Empowering Every Human Future",
    f_hero_sub: "カメルーン法に基づく非政治・非営利の団体です。専門知識を存在するところ――まず日本、そして世界中――から捉え、最も必要とする地域へ、等しい重みで届けます。",
    f_hero_cta1: "私たちの使命",
    f_hero_cta2: "参加する",
    f_hero_badge: "1990年12月19日法律 n° 90/053 — カメルーン共和国",

    f_mission_title: "私たちの使命",
    f_mission_subtitle: "技能と技術の共有・移転を促進する",
    f_mission_intro: "財団の目的は、カメルーンの恵まれない人々と地域を最優先に、技能と技術の共有・移転を促進することです。専門知識はあらゆる源――先進国（文化的親和性からまず日本）とすでに進んだ地域の担い手――から捉えられ、最も必要とする人々へ等しい重みで届けられます。",
    f_m1_title: "技術移転",
    f_m1_desc: "多様な源から、最も必要とする地域へ技術の移転と共有を促進します。",
    f_m2_title: "能力の強化",
    f_m2_desc: "恵まれない地域を優先し、個人・地域・組織に実践的な技能と知識を備えます。",
    f_m3_title: "専門知識とニーズの架け橋",
    f_m3_desc: "地域と国際の専門知識を地域のニーズへつなぎ、持続的で適切な応用へ導きます。",
    f_m4_title: "持続的な導入",
    f_m4_desc: "地域の実情に合い、環境に配慮した技術の導入を促進します。",
    f_m5_title: "メンタリングと伴走",
    f_m5_desc: "受益者への支援・メンタリング・フォローアップで、移転した技能を定着させます。",
    f_m6_title: "啓発と知識",
    f_m6_desc: "不可欠な技術や知識について人々に伝え、有用な知識を広く普及します。",

    f_domains_title: "重点分野",
    f_domains_subtitle: "その時々のニーズと機会に応じて進化します",
    f_d1_title: "再生可能エネルギー",
    f_d1_desc: "太陽光をはじめとするクリーンエネルギー技術。",
    f_d2_title: "情報技術",
    f_d2_desc: "人工知能、機械学習、クラウドコンピューティング、デジタルインフラ。",
    f_d3_title: "その他の不可欠な分野",
    f_d3_desc: "その時々で不可欠・必要・先端となるあらゆる分野。",

    f_principles_title: "指導原則",
    f_principles_subtitle: "すべての活動を導く6つの原則",
    f_p1_title: "地域への適合",
    f_p1_desc: "各取り組みはカメルーンの状況と具体的なニーズに合わせます。",
    f_p2_title: "恵まれない人々を優先",
    f_p2_desc: "最も困窮する地域と人々へ、まず力を注ぎます。",
    f_p3_title: "必要とする人へ知識を",
    f_p3_desc: "専門知識を地域・国際のあらゆる源から等しい重みで捉え、必要とする人々へ届けます。",
    f_p4_title: "持続可能性",
    f_p4_desc: "地域が自律的に維持・発展できる解決策を優先します。",
    f_p5_title: "包摂性",
    f_p5_desc: "技術と知識へのアクセスを、特に最も困窮する人々を含め、すべての人へ広げます。",
    f_p6_title: "パートナーシップ",
    f_p6_desc: "成果は協働から生まれます。文化的親和性により日本を主要なパートナーとします。",

    f_how_title: "活動の進め方",
    f_how_subtitle: "知識をあらゆる場所から、必要とする人へ",
    f_how_p1: "共有と移転は主に、状況に合わせた短期研修・セミナー・ワークショップ・会議を通じて行います。恵まれない地域と人々を優先します。",
    f_how_p2: "財団は先進国とすでに進んだ地域の担い手から等しい重みで専門知識を動員します。非営利の目的を厳守しつつ、民間・公的、地域・国際の組織と技術的・運営的な連携を結びます。",

    f_partners_title: "パートナーシップ",
    f_partners_subtitle: "世界に開かれ、特に日本への親和性をもって",
    f_partners_text: "財団は政府、学術機関、民間企業、国際機関、進んだ地域の担い手に開かれています。すべての先進国に開かれ、すでに築かれた文化的親和性により、特に日本への感度を保ちます。",

    f_gov_title: "ガバナンス",
    f_gov_subtitle: "透明で体系的な団体",
    f_gov_text: "財団は主権的な総会と理事会（執行局）によって運営されます。登録事務所はヤウンデ、Maetur Nkomo — Antenne Orange にあります。将来的には NGO への発展を目指します。",

    f_cta_title: "この動きに参加しませんか",
    f_cta_text: "会員・パートナー・寄付者として、知識と不可欠な技術が万人に届く未来づくりにご参加ください。",
    f_cta_btn: "参加する / パートナーになる",

    s_title: "NipponMboa スタートアップ",
    s_hero_title: "不可欠なニーズを解決するために生まれたベンチャー",
    s_hero_sub: "NipponMboa は、すでに手の届く資源を活かして課題を機会に変えるスタートアップを育成・展開します。カメルーンの現場に根ざした具体的なイノベーション。",
    s_hero_cta1: "ベンチャーを見る",
    s_hero_cta2: "プロジェクトを提案",
    s_hero_badge: "ビジョンから確かな成果へ",

    s_intro_title: "ベンチャーへの取り組み",
    s_intro_subtitle: "課題を機会に変える",
    s_intro_text: "NipponMboa の各ベンチャーは、現場で観察された本物のニーズから始まり、地域と国際の技術・ノウハウを動員して持続的に応えます。小さく始め、実環境で検証し、うまくいくものを育てます。",

    s_ventures_title: "ベンチャー",
    s_ventures_subtitle: "成長するポートフォリオ、まずはバイオガスから",
    s_biogas_tag: "試験事業",
    s_biogas_title: "バイオガス・パイロット",
    s_biogas_desc: "有機廃棄物をクリーンエネルギーと肥料に変えるバイオガス試験事業。カメルーンの地域が抱えるエネルギーと農業のニーズへの具体的な答えです。NipponMboa ポートフォリオの最初のベンチャー。",
    s_biogas_f1: "有機廃棄物からのクリーンエネルギー",
    s_biogas_f2: "薪や輸入ガスへの依存を低減",
    s_biogas_f3: "地域農業のための天然肥料",
    s_biogas_status: "ステータス：試験運用中",

    s_soon_tag: "近日",
    s_soon_title: "さらなるベンチャーを準備中",
    s_soon_desc: "NipponMboa はエネルギー、アグリテック、デジタル技術の新たなベンチャーを準備しています。プロジェクトやアイデアがあればぜひご相談ください。",

    s_cta_title: "一緒に築くプロジェクトは？",
    s_cta_text: "起業家、投資家、技術パートナーの皆さま：NipponMboa はインパクトを生むアイデアを歓迎します。",
    s_cta_btn: "プロジェクトを提案",

    t_title: "NipponMboa — 職業訓練",
    t_hero_title: "未来の仕事につながる実践的な技能",
    t_hero_sub: "建設関連職（配管・電気技術）の職業訓練。市場のニーズに根ざした、具体的で雇用につながる技能を若者に提供します。",
    t_hero_cta1: "コース",
    t_hero_cta2: "情報を受け取る",
    t_hero_badge: "近日開始",

    t_intro_title: "なぜ建設関連の訓練か？",
    t_intro_subtitle: "不可欠な職種、絶えない需要",
    t_intro_text: "建設・土木の職種は、具体的で持続的な就業機会を提供します。NipponMboa は実践重視の職業訓練を立ち上げ、即戦力でカメルーン市場に求められる有資格技術者を育てます。",

    t_fields_title: "コース",
    t_fields_subtitle: "まずは2つの建設関連コース",
    t_f1_title: "配管",
    t_f1_desc: "給排水・衛生設備の設置、保守、修理。図面の読解、溶接、法令適合、住宅・商業向けのトラブル対応。",
    t_f2_title: "電気技術",
    t_f2_desc: "電気系統の設置と保守：配線、分電盤、安全、トラブル対応、住宅・業務用建物の法令適合。",

    t_approach_title: "教育アプローチ",
    t_approach_subtitle: "実践を訓練の中心に",
    t_a1_title: "実践による学習",
    t_a1_desc: "ワークショップと実地演習で職の技を習得します。",
    t_a2_title: "経験豊富な講師",
    t_a2_desc: "地域と国際の現場プロによる指導。",
    t_a3_title: "雇用への適合",
    t_a3_desc: "労働市場のニーズに直結した技能。",

    t_cta_title: "訓練にご関心がありますか？",
    t_cta_text: "受付開始をお知らせする情報リストにご登録ください。",
    t_cta_btn: "情報を受け取る",
  }
};

/* ---------------- routing (GitHub Pages friendly) ----------------
   Pages are served as root-level .html files. Language is carried via
   a ?lang= query param and preserved across navigation. We also still
   support the legacy /{lang}/ path prefix and the 404.html ?p= redirect
   so shared links keep working. */
function groupGetLangFromURL() {
  // 1) explicit ?lang= query
  const params = new URLSearchParams(window.location.search);
  const q = params.get('lang');
  if (q && ['en', 'fr', 'ja'].includes(q)) return q;
  // 2) legacy /{lang}/ path prefix
  const m = window.location.pathname.match(/^\/(en|fr|ja)(\/|$)/);
  if (m) return m[1];
  // 3) a ?p= redirect path (from 404.html) that starts with /{lang}
  const p = params.get('p');
  if (p) {
    const pm = decodeURIComponent(p).match(/^\/(en|fr|ja)(\/|$)/);
    if (pm) return pm[1];
  }
  return null;
}

function groupNavigateToLang(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.pathname + url.search + window.location.hash;
}

let groupCurrentLang = 'fr';

function groupApplyLang(lang) {
  groupCurrentLang = lang;
  const t = groupI18n[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function groupInitLanguage() {
  // Handle 404.html SPA redirect (?p=...): restore the intended path if it
  // points to a real root-level page; otherwise just clean the URL.
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('p');
  if (redirectPath) {
    const decoded = decodeURIComponent(redirectPath);
    // strip any /{lang} prefix to find the target file
    const stripped = decoded.replace(/^\/(en|fr|ja)/, '');
    const lang = groupGetLangFromURL() || 'fr';
    // If the redirect targeted a specific page, send to its root .html
    const fileMatch = stripped.match(/\/([a-z0-9-]+)(?:\.html)?\/?$/i);
    const file = fileMatch ? fileMatch[1] : '';
    const current = window.location.pathname.split('/').pop().replace('.html', '');
    const target = (file && file !== 'index') ? file : '';
    const currentNorm = (current === '' || current === 'index') ? '' : current;
    if (target !== currentNorm) {
      window.location.replace(`/${target ? target + '.html' : ''}?lang=${lang}${window.location.hash}`);
      return;
    }
    // same page: just clean the URL to ?lang=
    window.history.replaceState(null, '', `${window.location.pathname}?lang=${lang}${window.location.hash}`);
  }
  const lang = groupGetLangFromURL() || 'fr';
  groupApplyLang(lang);
}

/* ---------------- navigation helpers ---------------- */
function groupNavigateToPage(page) {
  const lang = groupGetLangFromURL() || 'fr';
  // '' => group hub (index), otherwise root-level {page}.html
  const file = page ? `${page}.html` : 'index.html';
  window.location.href = `/${file}?lang=${lang}`;
}

function groupOpenContactForm() {
  window.open('https://forms.gle/MVnEEwQ3kff55KgZ9', '_blank');
}

/* ---------------- wire up (all null-guarded) ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      groupNavigateToLang(btn.dataset.lang);
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
});

groupInitLanguage();
