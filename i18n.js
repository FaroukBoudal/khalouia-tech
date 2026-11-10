/* Khalouia Tech — lightweight i18n (EN / FR / AR)
 * Works by translating exact text nodes, so the markup stays untouched.
 * Language is picked once per visitor: ?lang= > saved choice > country (timezone) > browser language.
 */
(function () {
    'use strict';

    var META = {
        en: {
            title: 'Khalouia Tech | Software, Systems & Design',
            description: 'Khalouia Tech builds mobile apps, desktop software, database systems, servers, networks, graphic design, and video editing for businesses in Algeria.'
        },
        fr: {
            title: 'Khalouia Tech | Logiciels, systèmes et design',
            description: "Khalouia Tech crée des applications mobiles, des logiciels de bureau, des systèmes de bases de données, des serveurs, des réseaux, du design graphique et du montage vidéo pour les entreprises en Algérie."
        },
        ar: {
            title: 'Khalouia Tech | برمجيات وأنظمة وتصميم',
            description: 'خالوية تك تبني تطبيقات جوال وبرمجيات سطح مكتب وأنظمة قواعد بيانات وخوادم وشبكات وتصاميم جرافيك ومونتاج فيديو للشركات في الجزائر.'
        }
    };

    var FR = {
        'Dev • Systems • Media': 'Dev • Systèmes • Médias',
        'Services': 'Services',
        'About': 'À propos',
        'Portfolio': 'Portfolio',
        'Contact Us': 'Nous contacter',

        'Software • Systems • Design • Media from Algeria': "Logiciels • Systèmes • Design • Médias depuis l'Algérie",
        'Transforming Ideas Into': 'Transformer les idées en',
        'Software, Systems & Design': 'logiciels, systèmes et design',
        'Mobile apps, desktop software, database systems, servers and networks, graphic design, and video editing — all built with technical precision.': 'Applications mobiles, logiciels de bureau, systèmes de bases de données, serveurs et réseaux, design graphique et montage vidéo — le tout réalisé avec une précision technique.',
        'Get Started': 'Commencer',
        'Explore Services': 'Découvrir nos services',

        'Full-Stack': 'Full-Stack',
        'Apps & Software': 'Applications et logiciels',
        'Polyglot': 'Polyglotte',
        'C, Java & Python': 'C, Java et Python',
        'Servers': 'Serveurs',
        'Networks & Infrastructure': 'Réseaux et infrastructure',
        'Creative': 'Créatif',
        'Design & Media': 'Design et médias',

        'Core Engineering & Creation': 'Ingénierie et création',
        'Comprehensive Technical Services': 'Services techniques complets',
        'From mobile apps and servers to brand design and short-form video, we engineer solutions tailored for growth.': 'Des applications mobiles et des serveurs au design de marque et au montage vidéo court, nous concevons des solutions adaptées à votre croissance.',

        'Mobile Applications': 'Applications mobiles',
        'Native Android and cross-platform mobile apps, from idea and interface design to store-ready builds and updates.': "Applications Android natives et multiplateformes, de l'idée et de la conception d'interface aux versions prêtes pour les stores et aux mises à jour.",
        'Android & cross-platform apps': 'Applications Android et multiplateformes',
        'API & backend integration': 'Intégration API et backend',
        'Store-ready builds & updates': 'Versions prêtes pour les stores',

        'Desktop & Backend Software': 'Logiciels de bureau et backend',
        'Custom Windows and Linux programs, backend services, and automation built with C, Java, and Python.': 'Programmes Windows et Linux sur mesure, services backend et automatisation développés en C, Java et Python.',
        'C, Java & Python development': 'Développement en C, Java et Python',
        'Windows & Linux desktop tools': 'Outils de bureau Windows et Linux',
        'APIs, scripts & automation': 'API, scripts et automatisation',

        'Databases & Business Systems': 'Bases de données et systèmes de gestion',
        'Tailored Python & MySQL desktop software designed specifically for local shops, warehouses, and small businesses to manage stock, sales records, and inventory seamlessly.': 'Logiciels de bureau Python et MySQL sur mesure, conçus pour les commerces locaux, entrepôts et petites entreprises afin de gérer stocks, ventes et inventaire en toute simplicité.',
        'Fast local offline data sync': 'Synchronisation locale des données hors ligne',
        'Receipt & inventory report generation': "Génération de tickets et de rapports d'inventaire",
        'Clean, intuitive user interface': 'Interface utilisateur claire et intuitive',

        'Servers & Networks': 'Serveurs et réseaux',
        'Linux and Windows server setup, deployment, backups, and local networks (LAN/WLAN) for offices, shops, and startups.': 'Installation et déploiement de serveurs Linux et Windows, sauvegardes et réseaux locaux (LAN/WLAN) pour bureaux, commerces et startups.',
        'Server installation & hardening': 'Installation et sécurisation des serveurs',
        'LAN/WLAN & shared access': 'LAN/WLAN et accès partagé',
        'Backups, monitoring & maintenance': 'Sauvegardes, supervision et maintenance',

        'Graphic Design & Illustration': 'Design graphique et illustration',
        'Logos, brand identity, illustrations, social media visuals, and clean interface mockups that make your business stand out.': "Logos, identité de marque, illustrations, visuels pour réseaux sociaux et maquettes d'interface soignées qui font ressortir votre entreprise.",
        'Logo & brand identity': 'Logo et identité de marque',
        'Illustration & custom artwork': 'Illustration et création sur mesure',
        'Social media & UI design': "Réseaux sociaux et design d'interface",

        'Digital Media & Video Editing': 'Médias numériques et montage vidéo',
        'Engaging post-production for vertical content (TikTok, Instagram Reels, YouTube Shorts). Dynamic captions, sound design, hooks, color grading, and branding.': 'Post-production captivante pour contenus verticaux (TikTok, Instagram Reels, YouTube Shorts). Sous-titres dynamiques, design sonore, accroches, étalonnage et image de marque.',
        'Fast-paced caption styling & SFX': 'Sous-titres rythmés et effets sonores',
        'Product showcase videos for shops': 'Vidéos de présentation de produits pour commerces',
        'High conversion promo clips': 'Clips promotionnels à forte conversion',

        'Also available:': 'Également disponible :',
        'PC diagnostics & repair': 'Diagnostic et réparation PC',
        'Custom PC builds & upgrades': 'Montages et mises à niveau PC',
        'IT support & maintenance': 'Support et maintenance informatique',

        'Our Technical Mindset': "Notre état d'esprit technique",
        'Built on Self-Reliance, Discipline & Execution': "Fondé sur l'autonomie, la discipline et l'exécution",
        "Whether it's shipping a mobile app, programming a desktop tool in C, Java or Python, deploying a server, designing a brand identity, or editing crisp short-form media to boost local business sales—we approach every task with rigorous technical precision.": "Qu'il s'agisse de livrer une application mobile, de programmer un outil de bureau en C, Java ou Python, de déployer un serveur, de concevoir une identité de marque ou de monter des contenus courts percutants pour booster les ventes d'un commerce local, nous abordons chaque tâche avec une rigueur technique absolue.",
        'C • Java • Python': 'C • Java • Python',
        'Mobile, desktop & backend development.': 'Développement mobile, bureau et backend.',
        'Databases & Servers': 'Bases de données et serveurs',
        'SQL design, deployment & maintenance.': 'Conception, déploiement et maintenance SQL.',
        'Graphic Design': 'Design graphique',
        'Logos, illustration & brand identity.': 'Logos, illustration et identité de marque.',
        'Video Editing': 'Montage vidéo',
        'High-retention Reels & Shorts post-production.': 'Post-production de Reels et Shorts à forte rétention.',
        '"Practical Technical Independence"': '"Indépendance technique pratique"',
        'f"Executing {client_need} with 100% precision."': 'f"Exécution de {client_need} avec une précision de 100 %."',
        'Status:': 'Statut :',
        'Ready to Deploy': 'Prêt au déploiement',
        'Algeria 🇩🇿': 'Algérie 🇩🇿',

        'Selected Work': 'Réalisations',
        'Highlights & Capability Demos': 'Aperçus et démonstrations de compétences',
        'All Projects': 'Tous les projets',
        'Hardware': 'Matériel',
        'Mobile Delivery App': 'Application de livraison mobile',
        'Order tracking, driver assignment, and live status updates for a local delivery business.': 'Suivi des commandes, affectation des livreurs et mises à jour de statut en direct pour une entreprise de livraison locale.',
        'Mobile Application': 'Application mobile',
        'Stock Management GUI': 'Interface de gestion de stock',
        'Custom desktop application for real-time inventory tracking, receipt printing, and daily sales reports.': 'Application de bureau sur mesure pour le suivi des stocks en temps réel, l’impression de tickets et les rapports de ventes quotidiens.',
        'Custom Local Business App': 'Application locale sur mesure',
        'Local Server Deployment': 'Déploiement de serveur local',
        'Shared database server, automated backups, and multi-PC access for an office network.': 'Serveur de base de données partagé, sauvegardes automatisées et accès multi-PC pour un réseau de bureau.',
        'Servers & Infrastructure': 'Serveurs et infrastructure',
        'Logo & Visual Identity': 'Logo et identité visuelle',
        'Logo design, color system, typography, and social media templates for a new brand.': 'Création de logo, système de couleurs, typographie et modèles pour réseaux sociaux pour une nouvelle marque.',
        'Dynamic Content Editing': 'Montage de contenu dynamique',
        'Fast-paced vertical videos with animated captions, background audio balancing, and high-retention hooks.': 'Vidéos verticales rythmées avec sous-titres animés, équilibrage audio et accroches à forte rétention.',
        'Social Media Video': 'Vidéo pour réseaux sociaux',
        'Custom PC Assembly': 'Assemblage PC sur mesure',
        'Thermal management, cable routing, BIOS configuration, and stress testing for editing workstations.': 'Gestion thermique, gestion des câbles, configuration du BIOS et tests de charge pour stations de montage.',
        'Hardware Diagnostics': 'Diagnostic matériel',

        'Get In Touch': 'Contactez-nous',
        "Let's Build Your Project": 'Construisons votre projet',
        'Have an app or program to build, a server or network to set up, a database to design, or visual content to create? Reach out directly via message or use the form.': 'Une application ou un programme à créer, un serveur ou un réseau à installer, une base de données à concevoir ou du contenu visuel à produire ? Écrivez-nous directement ou utilisez le formulaire.',
        'Facebook Page': 'Page Facebook',
        'Direct Email': 'E-mail direct',
        'Copy': 'Copier',
        'Base Location': 'Localisation',
        'Algeria (Remote & On-Site)': 'Algérie (à distance et sur site)',
        'Your Name': 'Votre nom',
        'Full Name': 'Nom complet',
        'Service Needed': 'Service souhaité',
        'Desktop / Backend Software': 'Logiciel de bureau / backend',
        'Database / Business System': 'Base de données / système de gestion',
        'Server / Network Setup': 'Serveur / réseau',
        'Graphic Design / Illustration': 'Design graphique / illustration',
        'Other Inquiry': 'Autre demande',
        'Message Detail': 'Détail du message',
        'Describe what you need built or fixed...': 'Décrivez ce que vous souhaitez créer ou réparer...',
        'Send Message': 'Envoyer le message',
        'Message sent successfully! We will get back to you soon.': 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
        'Sending...': 'Envoi en cours...',
        'Something went wrong. Please try again or email us directly.': "Une erreur s'est produite. Réessayez ou écrivez-nous directement.",
        '© 2026. All rights reserved.': '© 2026. Tous droits réservés.',
        'Driven by Technical Excellence & Self-Reliance.': "Guidé par l'excellence technique et l'autonomie.",
        'Email address copied to clipboard!': 'Adresse e-mail copiée dans le presse-papiers !'
    };

    var AR = {
        'Dev • Systems • Media': 'برمجة • أنظمة • إعلام',
        'Services': 'الخدمات',
        'About': 'من نحن',
        'Portfolio': 'أعمالنا',
        'Contact Us': 'اتصل بنا',

        'Software • Systems • Design • Media from Algeria': 'برمجيات • أنظمة • تصميم • إعلام من الجزائر',
        'Transforming Ideas Into': 'نحوّل الأفكار إلى',
        'Software, Systems & Design': 'برمجيات وأنظمة وتصميم',
        'Mobile apps, desktop software, database systems, servers and networks, graphic design, and video editing — all built with technical precision.': 'تطبيقات جوال، برمجيات سطح مكتب، أنظمة قواعد بيانات، خوادم وشبكات، تصميم جرافيك، ومونتاج فيديو — كل ذلك بدقة تقنية.',
        'Get Started': 'ابدأ الآن',
        'Explore Services': 'استكشف الخدمات',

        'Full-Stack': 'متكامل',
        'Apps & Software': 'تطبيقات وبرمجيات',
        'Polyglot': 'متعدد اللغات',
        'C, Java & Python': 'C وJava وPython',
        'Servers': 'خوادم',
        'Networks & Infrastructure': 'شبكات وبنية تحتية',
        'Creative': 'إبداعي',
        'Design & Media': 'تصميم وإعلام',

        'Core Engineering & Creation': 'الهندسة والإبداع',
        'Comprehensive Technical Services': 'خدمات تقنية شاملة',
        'From mobile apps and servers to brand design and short-form video, we engineer solutions tailored for growth.': 'من تطبيقات الجوال والخوادم إلى تصميم الهوية ومونتاج الفيديو القصير، نصمم حلولاً مخصصة للنمو.',

        'Mobile Applications': 'تطبيقات الجوال',
        'Native Android and cross-platform mobile apps, from idea and interface design to store-ready builds and updates.': 'تطبيقات أندرويد أصلية ومتعددة المنصات، من الفكرة وتصميم الواجهة إلى نسخ جاهزة للمتاجر والتحديثات.',
        'Android & cross-platform apps': 'تطبيقات أندرويد ومتعددة المنصات',
        'API & backend integration': 'تكامل API والواجهة الخلفية',
        'Store-ready builds & updates': 'نسخ جاهزة للمتاجر',

        'Desktop & Backend Software': 'برمجيات سطح المكتب والواجهة الخلفية',
        'Custom Windows and Linux programs, backend services, and automation built with C, Java, and Python.': 'برامج مخصصة لنظامي Windows وLinux، وخدمات خلفية، وأتمتة مبنية بلغات C وJava وPython.',
        'C, Java & Python development': 'تطوير بلغات C وJava وPython',
        'Windows & Linux desktop tools': 'أدوات سطح مكتب لويندوز ولينكس',
        'APIs, scripts & automation': 'واجهات API وسكربتات وأتمتة',

        'Databases & Business Systems': 'قواعد البيانات وأنظمة الأعمال',
        'Tailored Python & MySQL desktop software designed specifically for local shops, warehouses, and small businesses to manage stock, sales records, and inventory seamlessly.': 'برمجيات سطح مكتب مخصصة بلغة Python وMySQL مصممة للمتاجر المحلية والمستودعات والشركات الصغيرة لإدارة المخزون والمبيعات والجرد بسهولة.',
        'Fast local offline data sync': 'مزامنة محلية سريعة للبيانات دون إنترنت',
        'Receipt & inventory report generation': 'إنشاء الفواتير وتقارير الجرد',
        'Clean, intuitive user interface': 'واجهة مستخدم واضحة وسهلة',

        'Servers & Networks': 'الخوادم والشبكات',
        'Linux and Windows server setup, deployment, backups, and local networks (LAN/WLAN) for offices, shops, and startups.': 'إعداد ونشر خوادم Linux وWindows، ونسخ احتياطي، وشبكات محلية (LAN/WLAN) للمكاتب والمتاجر والشركات الناشئة.',
        'Server installation & hardening': 'تثبيت الخوادم وتأمينها',
        'LAN/WLAN & shared access': 'شبكات LAN/WLAN ووصول مشترك',
        'Backups, monitoring & maintenance': 'نسخ احتياطي ومراقبة وصيانة',

        'Graphic Design & Illustration': 'التصميم الجرافيكي والرسم',
        'Logos, brand identity, illustrations, social media visuals, and clean interface mockups that make your business stand out.': 'شعارات، وهوية بصرية، ورسومات، وتصاميم لوسائل التواصل، ونماذج واجهات أنيقة تميز عملك.',
        'Logo & brand identity': 'الشعار والهوية البصرية',
        'Illustration & custom artwork': 'رسم وأعمال فنية مخصصة',
        'Social media & UI design': 'تصميم وسائل التواصل والواجهات',

        'Digital Media & Video Editing': 'الوسائط الرقمية ومونتاج الفيديو',
        'Engaging post-production for vertical content (TikTok, Instagram Reels, YouTube Shorts). Dynamic captions, sound design, hooks, color grading, and branding.': 'إنتاج احترافي جذاب للمحتوى العمودي (تيك توك، إنستغرام ريلز، يوتيوب شورتس). ترجمات ديناميكية، تصميم صوتي، جذبات افتتاحية، تصحيح ألوان، وهوية بصرية.',
        'Fast-paced caption styling & SFX': 'تنسيق ترجمات سريع ومؤثرات صوتية',
        'Product showcase videos for shops': 'فيديوهات عرض منتجات للمتاجر',
        'High conversion promo clips': 'مقاطع ترويجية عالية التحويل',

        'Also available:': 'متاح أيضاً:',
        'PC diagnostics & repair': 'تشخيص وإصلاح الحواسيب',
        'Custom PC builds & upgrades': 'تجميع وترقية الحواسيب',
        'IT support & maintenance': 'دعم وصيانة تقنية',

        'Our Technical Mindset': 'عقليتنا التقنية',
        'Built on Self-Reliance, Discipline & Execution': 'قائمون على الاعتماد على الذات والانضباط والتنفيذ',
        "Whether it's shipping a mobile app, programming a desktop tool in C, Java or Python, deploying a server, designing a brand identity, or editing crisp short-form media to boost local business sales—we approach every task with rigorous technical precision.": 'سواء كان الأمر يتعلق بإطلاق تطبيق جوال، أو برمجة أداة سطح مكتب بلغة C أو Java أو Python، أو نشر خادم، أو تصميم هوية بصرية، أو مونتاج محتوى قصير احترافي لزيادة مبيعات الأعمال المحلية، نتعامل مع كل مهمة بدقة تقنية صارمة.',
        'C • Java • Python': 'C • Java • Python',
        'Mobile, desktop & backend development.': 'تطوير الجوال وسطح المكتب والواجهة الخلفية.',
        'Databases & Servers': 'قواعد البيانات والخوادم',
        'SQL design, deployment & maintenance.': 'تصميم ونشر وصيانة SQL.',
        'Graphic Design': 'التصميم الجرافيكي',
        'Logos, illustration & brand identity.': 'شعارات ورسومات وهوية بصرية.',
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
        'Hardware': 'العتاد',
        'Mobile Delivery App': 'تطبيق توصيل الجوال',
        'Order tracking, driver assignment, and live status updates for a local delivery business.': 'تتبع الطلبات، وتعيين السائقين، وتحديثات الحالة المباشرة لشركة توصيل محلية.',
        'Mobile Application': 'تطبيق جوال',
        'Stock Management GUI': 'واجهة إدارة المخزون',
        'Custom desktop application for real-time inventory tracking, receipt printing, and daily sales reports.': 'تطبيق سطح مكتب مخصص لتتبع المخزون في الوقت الفعلي، وطباعة الفواتير، وتقارير المبيعات اليومية.',
        'Custom Local Business App': 'تطبيق محلي مخصص للأعمال',
        'Local Server Deployment': 'نشر خادم محلي',
        'Shared database server, automated backups, and multi-PC access for an office network.': 'خادم قاعدة بيانات مشترك، ونسخ احتياطي تلقائي، ووصول من عدة حواسيب لشبكة مكتب.',
        'Servers & Infrastructure': 'خوادم وبنية تحتية',
        'Logo & Visual Identity': 'الشعار والهوية البصرية',
        'Logo design, color system, typography, and social media templates for a new brand.': 'تصميم شعار، ونظام ألوان، وخطوط، وقوالب لوسائل التواصل لعلامة تجارية جديدة.',
        'Dynamic Content Editing': 'مونتاج محتوى ديناميكي',
        'Fast-paced vertical videos with animated captions, background audio balancing, and high-retention hooks.': 'فيديوهات عمودية سريعة الإيقاع مع ترجمات متحركة، وموازنة صوتية، وجذبات عالية الاحتفاظ.',
        'Social Media Video': 'فيديو لوسائل التواصل',
        'Custom PC Assembly': 'تجميع حاسوب مخصص',
        'Thermal management, cable routing, BIOS configuration, and stress testing for editing workstations.': 'إدارة الحرارة، وتنظيم الكابلات، وإعداد BIOS، واختبارات التحمل لمحطات المونتاج.',
        'Hardware Diagnostics': 'تشخيص العتاد',

        'Get In Touch': 'تواصل معنا',
        "Let's Build Your Project": 'لنبنِ مشروعك',
        'Have an app or program to build, a server or network to set up, a database to design, or visual content to create? Reach out directly via message or use the form.': 'لديك تطبيق أو برنامج تريد بنائه، أو خادم أو شبكة تريد إعدادها، أو قاعدة بيانات تريد تصميمها، أو محتوى بصري تريد إنتاجه؟ تواصل معنا مباشرة أو استخدم النموذج.',
        'Facebook Page': 'صفحة فيسبوك',
        'Direct Email': 'البريد الإلكتروني',
        'Copy': 'نسخ',
        'Base Location': 'الموقع',
        'Algeria (Remote & On-Site)': 'الجزائر (عن بُعد وحضورياً)',
        'Your Name': 'اسمك',
        'Full Name': 'الاسم الكامل',
        'Service Needed': 'الخدمة المطلوبة',
        'Desktop / Backend Software': 'برمجيات سطح المكتب / الواجهة الخلفية',
        'Database / Business System': 'قاعدة بيانات / نظام أعمال',
        'Server / Network Setup': 'خادم / شبكة',
        'Graphic Design / Illustration': 'تصميم جرافيك / رسم',
        'Other Inquiry': 'استفسار آخر',
        'Message Detail': 'تفاصيل الرسالة',
        'Describe what you need built or fixed...': 'صف ما تريد بناؤه أو إصلاحه...',
        'Send Message': 'إرسال الرسالة',
        'Message sent successfully! We will get back to you soon.': 'تم إرسال الرسالة بنجاح! سنعاود التواصل معك قريباً.',
        'Sending...': 'جارٍ الإرسال...',
        'Something went wrong. Please try again or email us directly.': 'حدث خطأ ما. حاول مرة أخرى أو راسلنا مباشرة.',
        '© 2026. All rights reserved.': '© 2026. جميع الحقوق محفوظة.',
        'Driven by Technical Excellence & Self-Reliance.': 'مدفوعون بالتميز التقني والاعتماد على الذات.',
        'Email address copied to clipboard!': 'تم نسخ البريد الإلكتروني!'
    };

    var HTML = {
        fr: {
            'about.p1': "Chez <strong>Khalouia Tech</strong>, nous croyons aux solutions pratiques plutôt qu'au discours creux. Fondé par un spécialiste en logiciels et bases de données avec une expérience concrète de l'ingénierie, notre objectif est simple : construire des systèmes fiables qui résolvent de vrais problèmes."
        },
        ar: {
            'about.p1': 'في <strong>Khalouia Tech</strong>، نؤمن بالحلول العملية بدلاً من الكلام الفارغ. أسسها متخصص في البرمجيات وقواعد البيانات بخبرة هندسية عملية، وهدفنا بسيط: بناء أنظمة موثوقة تحل مشاكل حقيقية.'
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
