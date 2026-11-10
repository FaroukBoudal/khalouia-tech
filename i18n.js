/* Khalouia Tech — lightweight i18n (EN / FR / AR)
 * Works by translating exact text nodes, so the markup stays untouched.
 * Language is picked once per visitor: saved choice > ?lang= > country (timezone) > browser language.
 */
(function () {
    'use strict';

    var META = {
        en: {
            title: 'Khalouia Tech | Smart Tech Solutions & Digital Media',
            description: 'Khalouia Tech builds custom software, database systems, local networks, and digital media for businesses in Algeria. Programming, databases, IT support, and video editing.'
        },
        fr: {
            title: 'Khalouia Tech | Solutions technologiques et medias numeriques',
            description: "Khalouia Tech cree des logiciels sur mesure, des systemes de bases de donnees, des reseaux locaux et des contenus numeriques pour les entreprises en Algerie. Programmation, bases de donnees, support informatique et montage video."
        },
        ar: {
            title: 'Khalouia Tech | حلول تقنية ذكية ووسائط رقمية',
            description: 'خالوية تك تبني برمجيات مخصصة وأنظمة قواعد بيانات وشبكات محلية ومحتوى رقمياً للشركات في الجزائر. برمجة، قواعد بيانات، دعم تقني، ومونتاج فيديو.'
        }
    };

    var FR = {
        'Dev • Systems • Media': 'Dev • Systemes • Media',
        'Services': 'Services',
        'About': 'A propos',
        'Portfolio': 'Portfolio',
        'Estimate Project': 'Estimer un projet',
        'Contact Us': 'Nous contacter',

        'Smart Tech Solutions & Digital Media from Algeria': 'Solutions technologiques intelligentes et medias numeriques depuis l\'Algerie',
        'Transforming Ideas Into': 'Transformer les idees en',
        'Precision Systems & Media': 'systemes de precision et medias',
        'Custom Stock Management, High-Performance Database Systems, PC Diagnostics & Assembly, and Viral Shorts/Reels Editing built with technical precision.': 'Gestion de stock sur mesure, systemes de bases de donnees haute performance, diagnostic et assemblage de PC, et montage de Shorts/Reels viraux, realises avec une precision technique.',
        'Get Started': 'Commencer',
        'Explore Services': 'Decouvrir nos services',

        'Self-Reliant Tech': 'Technologie autonome',
        'Custom': 'Sur mesure',
        'Database Apps': 'Applications de bases de donnees',
        'Fast': 'Rapide',
        'Hardware Setup': 'Installation materielle',
        'Media Production': 'Production media',

        'Core Engineering & Creation': 'Ingenierie et creation',
        'Comprehensive Technical Services': 'Services techniques complets',
        'From database management tools to sleek short-form video editing, we engineer solutions tailored for growth.': 'Des outils de gestion de bases de donnees au montage video court et soigne, nous concevons des solutions adaptees a votre croissance.',
        'Database & Stock Systems': 'Systemes de bases de donnees et de stock',
        'Tailored Python & MySQL desktop software designed specifically for local shops, warehouses, and small businesses to manage stock, sales records, and inventory seamlessly.': 'Logiciels de bureau Python et MySQL sur mesure, concus pour les commerces locaux, entrepots et petites entreprises afin de gerer stocks, ventes et inventaire en toute simplicite.',
        'Fast local offline data sync': 'Synchronisation locale des donnees hors ligne',
        'Receipt & inventory report generation': 'Generation de tickets et de rapports d\'inventaire',
        'Clean, intuitive user interface': 'Interface utilisateur claire et intuitive',
        'PC Diagnostics & Hardware': 'Diagnostic PC et materiel',
        'Professional computer troubleshooting, custom PC builds for gaming/workstations, thermal repasting, OS optimization, hardware upgrades, and server maintenance.': 'Depannage informatique professionnel, montages PC sur mesure pour le gaming et les stations de travail, reapplication de pate thermique, optimisation du systeme, mises a niveau materielles et maintenance de serveurs.',
        'Deep diagnostic testing & cleanups': 'Tests de diagnostic approfondis et nettoyage',
        'Custom PC component picking & build': 'Selection de composants et montage PC sur mesure',
        'OS reinstalls & driver optimizations': 'Reinstallation du systeme et optimisation des pilotes',
        'Digital Media & Reels Editing': 'Medias numeriques et montage de Reels',
        'Engaging post-production for vertical content (TikTok, Instagram Reels, YouTube Shorts). Dynamic captions, sound design, hooks, color grading, and branding.': 'Post-production captivante pour contenus verticaux (TikTok, Instagram Reels, YouTube Shorts). Sous-titres dynamiques, design sonore, accroches, etalonnage et image de marque.',
        'Fast-paced caption styling & SFX': 'Sous-titres rythmes et effets sonores',
        'Product showcase videos for shops': 'Videos de presentation de produits pour commerces',
        'High conversion promo clips': 'Clips promotionnels a forte conversion',
        'Local Network & Server Setup': 'Reseau local et installation de serveur',
        'Setting up fast local network infrastructures (LAN/WLAN) for offices, cyber cafes, or stores. Local server setup for shared database access without external internet dependencies.': 'Mise en place d\'infrastructures reseau locales rapides (LAN/WLAN) pour bureaux, cybercafes ou commerces. Installation de serveurs locaux pour un acces partage aux bases de donnees sans dependance a Internet.',
        'Secure multi-user database sharing': 'Partage securise de bases de donnees multi-utilisateurs',
        'Router configuration & cabling setup': 'Configuration de routeurs et cablage',
        'Automated backup routines': 'Routines de sauvegarde automatisees',

        'Our Technical Mindset': 'Notre etat d\'esprit technique',
        'Built on Self-Reliance, Discipline & Execution': 'Fonde sur l\'autonomie, la discipline et l\'execution',
        'Whether it\'s rescuing a malfunctioning PC workstation, programming a clean database inventory app, or editing crisp short-form media to boost local business sales—we approach every task with rigorous technical precision.': 'Qu\'il s\'agisse de reparer une station de travail defaillante, de programmer une application d\'inventaire propre, ou de monter des contenus courts percutants pour booster les ventes d\'un commerce local, nous abordons chaque tache avec une rigueur technique absolue.',
        'Python & MySQL': 'Python & MySQL',
        'Robust backend logic and data structure.': 'Logique backend robuste et structure de donnees.',
        'Video Editing': 'Montage video',
        'High-retention Reels & Shorts post-production.': 'Post-production de Reels et Shorts a forte retention.',
        '"Practical Technical Independence"': '"Independance technique pratique"',
        'f"Executing {client_need} with 100% precision."': 'f"Execution de {client_need} avec une precision de 100 %."',
        'Status:': 'Statut :',
        'Ready to Deploy': 'Pret au deploiement',
        'Algeria 🇩🇿': 'Algerie 🇩🇿',

        'Selected Work': 'Realisations',
        'Highlights & Capability Demos': 'Apercues et demonstrations de competences',
        'All Projects': 'Tous les projets',
        'Desktop & Databases': 'Bureau et bases de donnees',
        'Hardware & PC': 'Materiel et PC',
        'Video & Media': 'Video et medias',
        'Stock Management GUI': 'Interface de gestion de stock',
        'Custom desktop application for real-time inventory tracking, receipt printing, and daily sales reports.': 'Application de bureau sur mesure pour le suivi des stocks en temps reel, l\'impression de tickets et les rapports de ventes quotidiens.',
        'Custom Local Business App': 'Application locale sur mesure',
        'Workstation Build': 'Montage station de travail',
        'Custom PC Assembly': 'Assemblage PC sur mesure',
        'Thermal management, cable routing, BIOS configuration, and stress testing for editing workstations.': 'Gestion thermique, gestion des cables, configuration du BIOS et tests de charge pour stations de montage.',
        'Hardware Diagnostics': 'Diagnostic materiel',
        'Reels / Shorts': 'Reels / Shorts',
        'Dynamic Content Editing': 'Montage de contenu dynamique',
        'Fast-paced vertical videos with animated captions, background audio balancing, and high-retention hooks.': 'Videos verticales rythmees avec sous-titres animes, equilibrage audio et accroches a forte retention.',
        'Social Media Video': 'Video pour reseaux sociaux',

        'Quick Estimator': 'Estimation rapide',
        'Estimate Your Project Cost': 'Estimez le cout de votre projet',
        'Select the services you need to calculate an instant estimated starting budget.': 'Selectionnez les services souhaites pour obtenir une estimation budgetaire immediate.',
        'Basic PC Maintenance / Diagnostic': 'Maintenance / diagnostic PC de base',
        'Deep cleaning, OS reinstall, hardware testing': 'Nettoyage complet, reinstallation du systeme, tests materiels',
        'Custom Stock Management System': 'Systeme de gestion de stock sur mesure',
        'Python + MySQL desktop app tailored for shop': 'Application de bureau Python + MySQL adaptee au commerce',
        'Shorts / Reels Video Package (5 Videos)': 'Pack video Shorts / Reels (5 videos)',
        'Full post-production with subtitles & effects': 'Post-production complete avec sous-titres et effets',
        'Local Office Network & Server Setup': 'Reseau de bureau local et installation de serveur',
        'Multi-pc database linkage & network cabling': 'Connexion de bases de donnees multi-PC et cablage reseau',
        'Total Estimated Cost:': 'Cout total estime :',
        'Request This Package': 'Demander ce pack',

        'Get In Touch': 'Contactez-nous',
        'Let\'s Build Your Project': 'Construisons votre projet',
        'Have a business system to program, a computer that needs repair, or social media content to produce? Reach out directly via message or use the form.': 'Un systeme de gestion a programmer, un ordinateur a reparer ou du contenu pour les reseaux sociaux a produire ? Ecrivez-nous directement ou utilisez le formulaire.',
        'Facebook Page': 'Page Facebook',
        'Direct Email': 'E-mail direct',
        'Copy': 'Copier',
        'Base Location': 'Localisation',
        'Algeria (Remote & On-Site)': 'Algerie (a distance et sur site)',
        'Your Name': 'Votre nom',
        'Full Name': 'Nom complet',
        'Service Needed': 'Service souhaite',
        'Database / Stock System': 'Base de donnees / systeme de stock',
        'Computer Diagnostic / Assembly': 'Diagnostic / assemblage PC',
        'Reels / Shorts Video Editing': 'Montage video Reels / Shorts',
        'Local Network / Server Setup': 'Reseau local / installation de serveur',
        'Other Inquiry': 'Autre demande',
        'Message Detail': 'Detail du message',
        'Describe what you need built or fixed...': 'Decrivez ce que vous souhaitez creer ou reparer...',
        'Send Message': 'Envoyer le message',
        'Message sent successfully! We will get back to you soon.': 'Message envoye avec succes ! Nous vous repondrons bientot.',
        '© 2026. All rights reserved.': '© 2026. Tous droits reserves.',
        'Driven by Technical Excellence & Self-Reliance.': 'Guide par l\'excellence technique et l\'autonomie.',
        'Email address copied to clipboard!': 'Adresse e-mail copiee dans le presse-papiers !'
    };

    var AR = {
        'Dev • Systems • Media': 'برمجة • أنظمة • إعلام',
        'Services': 'الخدمات',
        'About': 'من نحن',
        'Portfolio': 'أعمالنا',
        'Estimate Project': 'تقدير المشروع',
        'Contact Us': 'اتصل بنا',

        'Smart Tech Solutions & Digital Media from Algeria': 'حلول تقنية ذكية ووسائط رقمية من الجزائر',
        'Transforming Ideas Into': 'نحوّل الأفكار إلى',
        'Precision Systems & Media': 'أنظمة ووسائط عالية الدقة',
        'Custom Stock Management, High-Performance Database Systems, PC Diagnostics & Assembly, and Viral Shorts/Reels Editing built with technical precision.': 'إدارة مخزون مخصصة، وأنظمة قواعد بيانات عالية الأداء، وتشخيص وتجميع الحواسيب، ومونتاج مقاطع Shorts وReels جذابة، بدقة تقنية عالية.',
        'Get Started': 'ابدأ الآن',
        'Explore Services': 'استكشف الخدمات',

        'Self-Reliant Tech': 'تقنية معتمدة على الذات',
        'Custom': 'مخصص',
        'Database Apps': 'تطبيقات قواعد البيانات',
        'Fast': 'سريع',
        'Hardware Setup': 'تجهيز العتاد',
        'Media Production': 'إنتاج إعلامي',

        'Core Engineering & Creation': 'الهندسة والإبداع',
        'Comprehensive Technical Services': 'خدمات تقنية شاملة',
        'From database management tools to sleek short-form video editing, we engineer solutions tailored for growth.': 'من أدوات إدارة قواعد البيانات إلى مونتاج الفيديوهات القصيرة الأنيق، نصمم حلولاً مخصصة للنمو.',
        'Database & Stock Systems': 'أنظمة قواعد البيانات والمخزون',
        'Tailored Python & MySQL desktop software designed specifically for local shops, warehouses, and small businesses to manage stock, sales records, and inventory seamlessly.': 'برمجيات سطح مكتب مخصصة بلغة Python وMySQL مصممة للمتاجر المحلية والمستودعات والشركات الصغيرة لإدارة المخزون والمبيعات والجرد بسهولة.',
        'Fast local offline data sync': 'مزامنة محلية سريعة للبيانات دون إنترنت',
        'Receipt & inventory report generation': 'إنشاء الفواتير وتقارير الجرد',
        'Clean, intuitive user interface': 'واجهة مستخدم واضحة وسهلة',
        'PC Diagnostics & Hardware': 'تشخيص الحواسيب والعتاد',
        'Professional computer troubleshooting, custom PC builds for gaming/workstations, thermal repasting, OS optimization, hardware upgrades, and server maintenance.': 'صيانة احترافية للحواسيب، وتجميع أجهزة مخصصة للألعاب ومحطات العمل، وإعادة وضع المعجون الحراري، وتحسين نظام التشغيل، وترقية العتاد، وصيانة الخوادم.',
        'Deep diagnostic testing & cleanups': 'اختبارات تشخيصية عميقة وتنظيف',
        'Custom PC component picking & build': 'اختيار المكونات وتجميع الحاسوب حسب الطلب',
        'OS reinstalls & driver optimizations': 'إعادة تثبيت نظام التشغيل وتحسين التعريفات',
        'Digital Media & Reels Editing': 'الوسائط الرقمية ومونتاج Reels',
        'Engaging post-production for vertical content (TikTok, Instagram Reels, YouTube Shorts). Dynamic captions, sound design, hooks, color grading, and branding.': 'إنتاج احترافي جذاب للمحتوى العمودي (تيك توك، إنستغرام ريلز، يوتيوب شورتس). ترجمات ديناميكية، تصميم صوتي، جذبات افتتاحية، تصحيح ألوان، وهوية بصرية.',
        'Fast-paced caption styling & SFX': 'تنسيق ترجمات سريع ومؤثرات صوتية',
        'Product showcase videos for shops': 'فيديوهات عرض منتجات للمتاجر',
        'High conversion promo clips': 'مقاطع ترويجية عالية التحويل',
        'Local Network & Server Setup': 'الشبكات المحلية وإعداد الخوادم',
        'Setting up fast local network infrastructures (LAN/WLAN) for offices, cyber cafes, or stores. Local server setup for shared database access without external internet dependencies.': 'إعداد بنية شبكات محلية سريعة (LAN/WLAN) للمكاتب ومقاهي الإنترنت والمتاجر. إعداد خادم محلي للوصول المشترك إلى قواعد البيانات دون الاعتماد على الإنترنت.',
        'Secure multi-user database sharing': 'مشاركة آمنة لقواعد البيانات بين عدة مستخدمين',
        'Router configuration & cabling setup': 'إعداد الراوتر وتمديد الكابلات',
        'Automated backup routines': 'نسخ احتياطي تلقائي',

        'Our Technical Mindset': 'عقليتنا التقنية',
        'Built on Self-Reliance, Discipline & Execution': 'قائمون على الاعتماد على الذات والانضباط والتنفيذ',
        'Whether it\'s rescuing a malfunctioning PC workstation, programming a clean database inventory app, or editing crisp short-form media to boost local business sales—we approach every task with rigorous technical precision.': 'سواء كان الأمر يتعلق بإنقاذ محطة عمل معطلة، أو برمجة تطبيق جرد نظيف، أو مونتاج محتوى قصير احترافي لزيادة مبيعات الأعمال المحلية، نتعامل مع كل مهمة بدقة تقنية صارمة.',
        'Python & MySQL': 'Python & MySQL',
        'Robust backend logic and data structure.': 'منطق خلفي قوي وهيكلة بيانات سليمة.',
        'Video Editing': 'مونتاج الفيديو',
        'High-retention Reels & Shorts post-production.': 'إنتاج Reels وShorts عالي الاحتفاظ بالمشاهد.',
        '"Practical Technical Independence"': '"استقلال تقني عملي"',
        'f"Executing {client_need} with 100% precision."': 'f"تنفيذ {client_need} بدقة 100%."',
        'Status:': 'الحالة:',
        'Ready to Deploy': 'جاهز للنشر',
        'Algeria 🇩🇿': 'الجزائر 🇩🇿',

        'Selected Work': 'أعمال مختارة',
        'Highlights & Capability Demos': 'أبرز الأعمال ونماذج القدرات',
        'All Projects': 'كل المشاريع',
        'Desktop & Databases': 'سطح المكتب وقواعد البيانات',
        'Hardware & PC': 'العتاد والحواسيب',
        'Video & Media': 'الفيديو والوسائط',
        'Stock Management GUI': 'واجهة إدارة المخزون',
        'Custom desktop application for real-time inventory tracking, receipt printing, and daily sales reports.': 'تطبيق سطح مكتب مخصص لتتبع المخزون في الوقت الفعلي، وطباعة الفواتير، وتقارير المبيعات اليومية.',
        'Custom Local Business App': 'تطبيق محلي مخصص للأعمال',
        'Workstation Build': 'تجميع محطة عمل',
        'Custom PC Assembly': 'تجميع حاسوب مخصص',
        'Thermal management, cable routing, BIOS configuration, and stress testing for editing workstations.': 'إدارة الحرارة، وتنظيم الكابلات، وإعداد BIOS، واختبارات التحمل لمحطات المونتاج.',
        'Hardware Diagnostics': 'تشخيص العتاد',
        'Reels / Shorts': 'Reels / Shorts',
        'Dynamic Content Editing': 'مونتاج محتوى ديناميكي',
        'Fast-paced vertical videos with animated captions, background audio balancing, and high-retention hooks.': 'فيديوهات عمودية سريعة الإيقاع مع ترجمات متحركة، وموازنة صوتية، وجذبات عالية الاحتفاظ.',
        'Social Media Video': 'فيديو لوسائل التواصل',

        'Quick Estimator': 'تقدير سريع',
        'Estimate Your Project Cost': 'قدّر تكلفة مشروعك',
        'Select the services you need to calculate an instant estimated starting budget.': 'اختر الخدمات التي تحتاجها لحساب ميزانية تقديرية فورية.',
        'Basic PC Maintenance / Diagnostic': 'صيانة / تشخيص حاسوب أساسي',
        'Deep cleaning, OS reinstall, hardware testing': 'تنظيف عميق، إعادة تثبيت النظام، اختبار العتاد',
        'Custom Stock Management System': 'نظام إدارة مخزون مخصص',
        'Python + MySQL desktop app tailored for shop': 'تطبيق سطح مكتب Python + MySQL مخصص للمتجر',
        'Shorts / Reels Video Package (5 Videos)': 'باقة فيديوهات Shorts / Reels (5 فيديوهات)',
        'Full post-production with subtitles & effects': 'إنتاج كامل مع ترجمات ومؤثرات',
        'Local Office Network & Server Setup': 'شبكة مكتب محلية وإعداد خادم',
        'Multi-pc database linkage & network cabling': 'ربط قواعد بيانات عدة حواسيب وتمديد الشبكة',
        'Total Estimated Cost:': 'التكلفة التقديرية الإجمالية:',
        'Request This Package': 'اطلب هذه الباقة',

        'Get In Touch': 'تواصل معنا',
        'Let\'s Build Your Project': 'لنبنِ مشروعك',
        'Have a business system to program, a computer that needs repair, or social media content to produce? Reach out directly via message or use the form.': 'لديك نظام أعمال تريد برمجته، أو حاسوب يحتاج إلى إصلاح، أو محتوى لوسائل التواصل تريد إنتاجه؟ تواصل معنا مباشرة أو استخدم النموذج.',
        'Facebook Page': 'صفحة فيسبوك',
        'Direct Email': 'البريد الإلكتروني',
        'Copy': 'نسخ',
        'Base Location': 'الموقع',
        'Algeria (Remote & On-Site)': 'الجزائر (عن بُعد وحضورياً)',
        'Your Name': 'اسمك',
        'Full Name': 'الاسم الكامل',
        'Service Needed': 'الخدمة المطلوبة',
        'Database / Stock System': 'قاعدة بيانات / نظام مخزون',
        'Computer Diagnostic / Assembly': 'تشخيص / تجميع حاسوب',
        'Reels / Shorts Video Editing': 'مونتاج فيديو Reels / Shorts',
        'Local Network / Server Setup': 'شبكة محلية / إعداد خادم',
        'Other Inquiry': 'استفسار آخر',
        'Message Detail': 'تفاصيل الرسالة',
        'Describe what you need built or fixed...': 'صف ما تريد بناؤه أو إصلاحه...',
        'Send Message': 'إرسال الرسالة',
        'Message sent successfully! We will get back to you soon.': 'تم إرسال الرسالة بنجاح! سنعاود التواصل معك قريباً.',
        '© 2026. All rights reserved.': '© 2026. جميع الحقوق محفوظة.',
        'Driven by Technical Excellence & Self-Reliance.': 'مدفوعون بالتميز التقني والاعتماد على الذات.',
        'Email address copied to clipboard!': 'تم نسخ البريد الإلكتروني!'
    };

    var HTML = {
        fr: {
            'about.p1': 'Chez <strong>Khalouia Tech</strong>, nous croyons aux solutions pratiques plutot qu\'au discours creux. Fonde par un specialiste senior des bases de donnees avec une experience concrete en ingenierie informatique, notre objectif est simple : construire des systemes fiables qui resolvent de vrais problemes.'
        },
        ar: {
            'about.p1': 'في <strong>Khalouia Tech</strong>، نؤمن بالحلول العملية بدلاً من الكلام الفارغ. أسسها متخصص أول في قواعد البيانات بخبرة عملية في هندسة الحاسوب، وهدفنا بسيط: بناء أنظمة موثوقة تحل مشاكل حقيقية.'
        }
    };

    var DICT = { fr: FR, ar: AR };

    // Countries that mainly use Arabic / French, keyed by IANA timezone.
    var TZ_AR = [
        'Africa/Algiers', 'Africa/Tunis', 'Africa/Casablanca', 'Africa/Tripoli',
        'Africa/Cairo', 'Asia/Riyadh', 'Asia/Dubai', 'Asia/Qatar', 'Asia/Kuwait',
        'Asia/Bahrain', 'Asia/Muscat', 'Asia/Amman', 'Asia/Beirut', 'Asia/Damascus',
        'Asia/Baghdad', 'Asia/Aden', 'Africa/Khartoum', 'Africa/Nouakchott',
        'Asia/Gaza', 'Asia/Hebron', 'Africa/El_Aaiun'
    ];
    var TZ_FR = [
        'Europe/Paris', 'Europe/Brussels', 'Europe/Luxembourg', 'Europe/Monaco',
        'Europe/Zurich', 'America/Montreal', 'Africa/Dakar', 'Africa/Abidjan',
        'Africa/Douala', 'Africa/Libreville', 'Africa/Brazzaville', 'Africa/Kinshasa',
        'Africa/Antananarivo', 'Africa/Djibouti', 'Africa/Moroni', 'America/Port-au-Prince',
        'Africa/Porto-Novo', 'Africa/Lome', 'Africa/Conakry', 'Africa/Kigali',
        'Africa/Bujumbura', 'Africa/Ouagadougou', 'Africa/Bamako', 'Africa/Niamey',
        'Africa/Ndjamena'
    ];

    var currentLang = 'en';
    var originals = new Map();
    var htmlOriginals = new Map();
    var placeholderOriginals = new Map();
    var SKIP = 'script, style, noscript, [data-i18n-html]';

    function t(text) {
        if (currentLang === 'en') return text;
        var d = DICT[currentLang];
        return (d && d[text]) || text;
    }

    function collect() {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        var node;
        while ((node = walker.nextNode())) {
            if (node.parentElement && node.parentElement.closest(SKIP)) continue;
            originals.set(node, node.nodeValue);
        }
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            htmlOriginals.set(el, el.innerHTML);
        });
        document.querySelectorAll('[placeholder]').forEach(function (el) {
            placeholderOriginals.set(el, el.getAttribute('placeholder'));
        });
    }

    function apply(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        originals.forEach(function (orig, node) {
            if (!node.isConnected) return;
            var key = orig.trim();
            if (!key) { node.nodeValue = orig; return; }
            var translated = lang === 'en' ? key : t(key);
            node.nodeValue = translated === key ? orig : orig.replace(key, translated);
        });

        htmlOriginals.forEach(function (origHtml, el) {
            if (!el.isConnected) return;
            var key = el.getAttribute('data-i18n-html');
            var html = lang === 'en' ? origHtml : (HTML[lang] && HTML[lang][key]);
            el.innerHTML = html || origHtml;
        });

        placeholderOriginals.forEach(function (orig, el) {
            if (!el.isConnected) return;
            el.setAttribute('placeholder', lang === 'en' ? orig : t(orig));
        });

        document.title = META[lang].title;
        var md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute('content', META[lang].description);
        var ogt = document.querySelector('meta[property="og:title"]');
        if (ogt) ogt.setAttribute('content', META[lang].title);
        var ogd = document.querySelector('meta[property="og:description"]');
        if (ogd) ogd.setAttribute('content', META[lang].description);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            var active = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('bg-brand-500', active);
            btn.classList.toggle('text-darkBg', active);
            btn.classList.toggle('text-gray-400', !active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        try { localStorage.setItem('kt-lang', lang); } catch (e) { /* private mode */ }
    }

    function detect() {
        // An explicit ?lang= link always wins so shared links keep their language.
        var q = new URLSearchParams(window.location.search).get('lang');
        if (q && META[q]) return q;

        try {
            var saved = localStorage.getItem('kt-lang');
            if (saved && META[saved]) return saved;
        } catch (e) { /* ignore */ }

        var tz = '';
        try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* ignore */ }
        if (TZ_AR.indexOf(tz) !== -1) return 'ar';
        if (TZ_FR.indexOf(tz) !== -1) return 'fr';

        var langs = navigator.languages || [navigator.language || ''];
        for (var i = 0; i < langs.length; i++) {
            var l = String(langs[i]).toLowerCase();
            if (l.indexOf('ar') === 0) return 'ar';
            if (l.indexOf('fr') === 0) return 'fr';
            if (l.indexOf('en') === 0) return 'en';
        }
        return 'en';
    }

    function init() {
        collect();
        apply(detect());
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang');
                apply(lang);
                try {
                    var url = new URL(window.location.href);
                    url.searchParams.set('lang', lang);
                    window.history.replaceState(null, '', url);
                } catch (e) { /* ignore */ }
            });
        });
    }

    window.ktT = t;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
