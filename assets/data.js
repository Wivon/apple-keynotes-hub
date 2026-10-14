/* ==========================================================================
   Apple Keynotes — jeu de données
   Tous les keynotes et événements Apple depuis le lancement de l’iPhone (2007).
   Les identifiants YouTube ont été vérifiés un par un ; quand la vidéo n’est
   pas sur la chaîne officielle Apple, `videoSource` indique la provenance.
   ========================================================================== */

const TYPES = {
  macworld: { label: "Macworld",           color: "var(--c-macworld)" },
  wwdc:     { label: "WWDC",               color: "var(--c-wwdc)" },
  iphone:   { label: "Keynote iPhone",     color: "var(--c-iphone)" },
  special:  { label: "Événement spécial",  color: "var(--c-special)" },
  press:    { label: "Annonce presse",     color: "var(--c-press)" }
};

const PRODUCTS = {
  iphone:    "iPhone",
  ipad:      "iPad",
  mac:       "Mac",
  watch:     "Apple Watch",
  ipod:      "iPod",
  audio:     "Audio",
  appletv:   "Apple TV",
  vision:    "Vision Pro",
  silicon:   "Puces Apple",
  software:  "Logiciels",
  services:  "Services",
  accessory: "Accessoires"
};

const EVENTS = [
  /* ------------------------------- 2007 ------------------------------- */
  {
    id: "2007-macworld",
    date: "2007-01-09",
    title: "Macworld 2007",
    tagline: "« Today, Apple reinvents the phone »",
    type: "macworld",
    venue: "Moscone Center, San Francisco",
    host: "Steve Jobs",
    video: "3iVGJDxCE4M",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "appletv", "software"],
    summary: "Le keynote fondateur. Steve Jobs présente « trois produits révolutionnaires » — un iPod à écran large, un téléphone et un communicateur Internet — avant de révéler qu’il s’agit d’un seul appareil : l’iPhone. Apple Computer devient Apple Inc.",
    announcements: [
      "iPhone (1re génération) — écran multi-touch 3,5\", à partir de 499 $",
      "Apple TV (anciennement iTV)",
      "Apple Computer, Inc. devient Apple Inc."
    ]
  },
  {
    id: "2007-wwdc",
    date: "2007-06-11",
    title: "WWDC 2007",
    tagline: "Leopard, Safari et les « web apps » pour iPhone",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Steve Jobs",
    video: "ubm2dYzoDW8",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "iphone", "software"],
    summary: "Dernière ligne droite avant la sortie de l’iPhone : Apple annonce que les développeurs tiers passeront par des applications web Safari — une décision qui sera abandonnée un an plus tard avec le SDK.",
    announcements: [
      "Mac OS X 10.5 Leopard : les 10 fonctionnalités phares, sortie en octobre",
      "Safari 3 pour Windows",
      "Applications web (Web 2.0 + AJAX) comme modèle de développement iPhone",
      "Date de sortie de l’iPhone : 29 juin 2007"
    ]
  },
  {
    id: "2007-ipod",
    date: "2007-09-05",
    title: "The Beat Goes On",
    tagline: "L’iPod devient tactile",
    type: "special",
    venue: "Moscone West, San Francisco",
    host: "Steve Jobs",
    video: "gADbJdb6fVs",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipod", "iphone", "services"],
    summary: "Refonte totale de la gamme iPod, dont un iPod touch qui reprend l’interface de l’iPhone. Jobs annonce aussi une baisse de prix de l’iPhone de 200 $ deux mois après son lancement — provoquant une vague de mécontentement et une lettre d’excuses publique.",
    announcements: [
      "iPod touch",
      "iPod classic, iPod nano (format « fatty »), iPod shuffle en couleurs",
      "iTunes Wi-Fi Music Store",
      "Baisse de prix de l’iPhone 8 Go à 399 $"
    ]
  },

  /* ------------------------------- 2008 ------------------------------- */
  {
    id: "2008-macworld",
    date: "2008-01-15",
    title: "Macworld 2008",
    tagline: "« There’s something in the air »",
    type: "macworld",
    venue: "Moscone Center, San Francisco",
    host: "Steve Jobs",
    video: "i9XU6wk_mWY",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "appletv", "services", "accessory"],
    summary: "Steve Jobs sort le MacBook Air d’une enveloppe kraft — l’un des moments de scène les plus copiés de l’histoire de la tech.",
    announcements: [
      "MacBook Air, « l’ordinateur portable le plus fin du monde »",
      "Time Capsule",
      "iTunes Movie Rentals",
      "Apple TV « Take 2 » (mise à jour logicielle majeure)"
    ]
  },
  {
    id: "2008-sdk",
    date: "2008-03-06",
    title: "iPhone Software Roadmap",
    tagline: "Le SDK et la naissance de l’App Store",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Steve Jobs, Scott Forstall",
    video: "e6TJ2uwjhVY",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "software", "services"],
    summary: "Apple fait volte-face sur les web apps et ouvre l’iPhone aux développeurs natifs. L’App Store, annoncé ici, va redéfinir toute l’industrie du logiciel mobile.",
    announcements: [
      "SDK iPhone (iPhone OS 2.0)",
      "App Store : distribution et partage de revenus 70/30",
      "Support Microsoft Exchange ActiveSync",
      "iFund : 100 M$ de KPCB pour les développeurs iPhone"
    ]
  },
  {
    id: "2008-wwdc",
    date: "2008-06-09",
    title: "WWDC 2008",
    tagline: "iPhone 3G, App Store et MobileMe",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Steve Jobs",
    video: "RCdLYGwo_As",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "software", "services"],
    summary: "L’iPhone passe à la 3G et au GPS, mais surtout : le prix chute à 199 $ et l’App Store ouvre officiellement. C’est le moment où l’iPhone devient un produit de masse.",
    announcements: [
      "iPhone 3G à 199 $ — 3G, GPS assisté, lancement dans 22 pays",
      "iPhone OS 2.0 et ouverture de l’App Store",
      "MobileMe remplace .Mac"
    ]
  },
  {
    id: "2008-letsrock",
    date: "2008-09-09",
    title: "Let’s Rock",
    tagline: "Genius et la gamme iPod remaniée",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Steve Jobs",
    video: "f0Fb9WvJ0_M",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipod", "software"],
    summary: "Un keynote iPod classique, où Apple introduit les playlists Genius générées automatiquement dans iTunes.",
    announcements: [
      "iPod nano 4e génération (format allongé)",
      "iPod touch 2e génération",
      "iTunes 8 et playlists Genius"
    ]
  },
  {
    id: "2008-notebooks",
    date: "2008-10-14",
    title: "The spotlight turns to notebooks",
    tagline: "L’usinage unibody",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Steve Jobs, Jony Ive",
    video: "tiquj6u14HU",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "accessory"],
    summary: "Apple dévoile son procédé unibody : un châssis usiné dans un seul bloc d’aluminium, qui restera la signature industrielle des Mac portables pendant plus de quinze ans.",
    announcements: [
      "MacBook et MacBook Pro unibody en aluminium",
      "Trackpad en verre sans bouton",
      "Écran LED Cinema Display 24\""
    ]
  },

  /* ------------------------------- 2009 ------------------------------- */
  {
    id: "2009-macworld",
    date: "2009-01-06",
    title: "Macworld 2009",
    tagline: "Le dernier Macworld d’Apple",
    type: "macworld",
    venue: "Moscone Center, San Francisco",
    host: "Phil Schiller",
    video: "49wbEAWWf6Y",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "software", "services"],
    summary: "Premier keynote Macworld sans Steve Jobs (en congé maladie) et dernier tout court : Apple quitte le salon pour ne communiquer que via ses propres événements.",
    announcements: [
      "MacBook Pro 17\" unibody",
      "iLife ’09 et iWork ’09",
      "iTunes Store sans DRM (iTunes Plus) et tarification à trois paliers"
    ]
  },
  {
    id: "2009-iphoneos3",
    date: "2009-03-17",
    title: "iPhone OS 3.0 Preview",
    tagline: "Enfin le copier-coller",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Scott Forstall, Greg Joswiak",
    video: "vWW3lS2iBVs",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "software"],
    summary: "Apple comble les manques les plus critiqués de l’iPhone et ouvre les achats intégrés — le modèle économique qui dominera l’App Store.",
    announcements: [
      "Copier-coller, MMS, recherche Spotlight",
      "Achats intégrés (In-App Purchase)",
      "Bluetooth A2DP, accessoires connectés, Push Notifications"
    ]
  },
  {
    id: "2009-wwdc",
    date: "2009-06-08",
    title: "WWDC 2009",
    tagline: "iPhone 3GS et Snow Leopard",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Phil Schiller, Scott Forstall, Bertrand Serlet",
    video: "BwUGh0XKrNQ",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "mac", "software"],
    summary: "Le « S » veut dire speed. Snow Leopard, lui, est un cas rare : une version de macOS vendue comme une pure optimisation, sans nouvelle fonctionnalité majeure.",
    announcements: [
      "iPhone 3GS — vidéo, boussole, commande vocale",
      "Mac OS X 10.6 Snow Leopard à 29 $",
      "MacBook Pro 13\" et gamme portable rafraîchie",
      "Safari 4"
    ]
  },
  {
    id: "2009-rocknroll",
    date: "2009-09-09",
    title: "It’s only rock and roll",
    tagline: "Le retour de Steve Jobs",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Steve Jobs",
    video: "siNlQ1hJZeg",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipod", "software"],
    summary: "Premier keynote de Steve Jobs après sa greffe de foie. Il ouvre la présentation en remerciant son donneur, sous une standing ovation.",
    announcements: [
      "iPod nano avec caméra vidéo et radio FM",
      "iPod touch plus rapide et moins cher",
      "iTunes 9, Home Sharing, Genius Mixes"
    ]
  },

  /* ------------------------------- 2010 ------------------------------- */
  {
    id: "2010-ipad",
    date: "2010-01-27",
    title: "Présentation de l’iPad",
    tagline: "« A magical and revolutionary device »",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Steve Jobs",
    video: "zZtWlSDvb_k",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipad", "software", "services"],
    summary: "Apple crée une nouvelle catégorie entre le smartphone et l’ordinateur portable. Steve Jobs présente l’iPad assis dans un fauteuil, sur scène.",
    announcements: [
      "iPad (1re génération) à partir de 499 $",
      "iBooks et l’iBookstore",
      "iWork pour iPad",
      "Puce Apple A4 — la première conçue en interne"
    ]
  },
  {
    id: "2010-ios4",
    date: "2010-04-08",
    title: "iPhone OS 4 Preview",
    tagline: "Le multitâche arrive",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Steve Jobs, Scott Forstall",
    video: "YXQT19gl1eg",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "software", "services"],
    summary: "Apple répond à la critique la plus persistante contre l’iPhone avec un multitâche limité à sept services système, pensé pour préserver l’autonomie.",
    announcements: [
      "Multitâche (7 API dédiées)",
      "Dossiers d’applications, fonds d’écran personnalisés",
      "Game Center",
      "iAd : la régie publicitaire d’Apple"
    ]
  },
  {
    id: "2010-wwdc",
    date: "2010-06-07",
    title: "WWDC 2010",
    tagline: "iPhone 4, Retina et FaceTime",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Steve Jobs",
    video: "UjUd0VSM2RA",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "software", "services"],
    summary: "Le design verre-et-acier de l’iPhone 4 et l’écran Retina redéfinissent le haut de gamme. La démo est perturbée par la saturation du Wi-Fi de la salle — et suivie, quelques semaines plus tard, par l’affaire de l’antenne (« antennagate »).",
    announcements: [
      "iPhone 4 — design en verre et acier inoxydable, écran Retina",
      "FaceTime",
      "iPhone OS renommé iOS 4",
      "iMovie pour iPhone, iBooks sur iPhone"
    ]
  },
  {
    id: "2010-music",
    date: "2010-09-01",
    title: "Apple Music Event 2010",
    tagline: "Un iPod nano tout tactile, un Apple TV miniature",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Steve Jobs",
    video: "RSUUTBLTLXM",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipod", "appletv", "services"],
    summary: "Apple réinvente l’Apple TV en boîtier de streaming à 99 $ et transforme l’iPod nano en un carré tactile sans molette.",
    announcements: [
      "Apple TV 2e génération à 99 $",
      "iPod nano entièrement tactile, iPod touch avec FaceTime",
      "iTunes 10 et le réseau social Ping",
      "AirPlay"
    ]
  },
  {
    id: "2010-backtomac",
    date: "2010-10-20",
    title: "Back to the Mac",
    tagline: "Ce que l’iPad a appris au Mac",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Steve Jobs",
    video: "OdlEZWSq0zM",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "software"],
    summary: "Apple commence à faire remonter les idées d’iOS vers le Mac : plein écran, Launchpad, et surtout une boutique d’applications intégrée.",
    announcements: [
      "Aperçu de Mac OS X Lion",
      "Mac App Store",
      "MacBook Air 11\" et 13\" full flash",
      "FaceTime pour Mac, iLife ’11"
    ]
  },

  /* ------------------------------- 2011 ------------------------------- */
  {
    id: "2011-ipad2",
    date: "2011-03-02",
    title: "Événement iPad 2",
    tagline: "Le dernier lancement produit de Steve Jobs",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Steve Jobs",
    video: "shD-lcM4dPs",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipad", "software", "accessory"],
    summary: "En congé médical, Steve Jobs monte quand même sur scène : « We’ve been working on this product for a while, and I just didn’t want to miss today. » Ce sera son dernier keynote de lancement produit.",
    announcements: [
      "iPad 2 — 33 % plus fin, double cœur A5, deux caméras",
      "Smart Cover",
      "iMovie et GarageBand pour iPad",
      "iOS 4.3"
    ]
  },
  {
    id: "2011-wwdc",
    date: "2011-06-06",
    title: "WWDC 2011",
    tagline: "iCloud et la fin du PC comme centre du monde",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Steve Jobs, Phil Schiller, Scott Forstall",
    video: "LPMjUtfQPks",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "iphone", "ipad", "software", "services"],
    summary: "Dernière apparition publique de Steve Jobs. Il annonce iCloud en expliquant qu’Apple « rétrograde » l’ordinateur au rang de simple appareil parmi d’autres.",
    announcements: [
      "Mac OS X 10.7 Lion",
      "iOS 5 : Centre de notifications, iMessage, PC Free",
      "iCloud, gratuit, en remplacement de MobileMe"
    ]
  },
  {
    id: "2011-iphone4s",
    date: "2011-10-04",
    title: "Let’s talk iPhone",
    tagline: "Siri, et le premier keynote de Tim Cook",
    type: "iphone",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Tim Cook",
    video: "ld32LiyMs04",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "software", "services"],
    summary: "Premier keynote de Tim Cook en tant que CEO. Steve Jobs meurt le lendemain, le 5 octobre 2011.",
    announcements: [
      "iPhone 4S — puce A5, appareil photo 8 Mpx",
      "Siri (en bêta)",
      "iOS 5 et iCloud disponibles",
      "Cards, l’app de cartes postales d’Apple"
    ]
  },

  /* ------------------------------- 2012 ------------------------------- */
  {
    id: "2012-education",
    date: "2012-01-19",
    title: "Événement Éducation",
    tagline: "Réinventer le manuel scolaire",
    type: "special",
    venue: "Guggenheim Museum, New York",
    host: "Phil Schiller, Eddy Cue",
    video: "SrURbW1Kx14",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipad", "software", "services"],
    summary: "Une tentative ambitieuse de remplacer les manuels papier par des livres interactifs sur iPad. L’impact restera limité, mais iBooks Author aura une seconde vie chez les auteurs indépendants.",
    announcements: [
      "iBooks 2 et les manuels interactifs",
      "iBooks Author (gratuit sur Mac)",
      "Application iTunes U"
    ]
  },
  {
    id: "2012-ipad3",
    date: "2012-03-07",
    title: "Le nouvel iPad",
    tagline: "« Resolutionary »",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Tim Cook",
    video: "naXxmz1bjGQ",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipad", "appletv", "software"],
    summary: "Apple abandonne la numérotation et appelle simplement l’appareil « le nouvel iPad ». Il inaugure un écran Retina de 2048 × 1536 sur tablette.",
    announcements: [
      "iPad 3e génération : écran Retina, puce A5X, 4G LTE",
      "Apple TV 3e génération (1080p)",
      "iPhoto pour iOS"
    ]
  },
  {
    id: "2012-wwdc",
    date: "2012-06-11",
    title: "WWDC 2012",
    tagline: "Le MacBook Pro Retina et Plans",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Tim Cook, Phil Schiller, Scott Forstall",
    video: "ZL9Hw8kyEh0",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "iphone", "software", "services"],
    summary: "Le MacBook Pro Retina impose le très haute densité sur ordinateur. Apple remplace aussi Google Maps par ses propres Plans — un lancement si raté qu’il coûtera son poste à Scott Forstall.",
    announcements: [
      "MacBook Pro 15\" avec écran Retina",
      "OS X Mountain Lion",
      "iOS 6 : Plans d’Apple, Passbook, FaceTime en cellulaire",
      "Siri sur iPad, intégration Facebook"
    ]
  },
  {
    id: "2012-iphone5",
    date: "2012-09-12",
    title: "Événement iPhone 5",
    tagline: "Plus grand, plus fin, et un nouveau connecteur",
    type: "iphone",
    venue: "Yerba Buena Center, San Francisco",
    host: "Tim Cook, Phil Schiller",
    video: "KROYfsNl59U",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "ipod", "accessory"],
    summary: "L’iPhone passe à 4 pouces et abandonne le connecteur 30 broches au profit du Lightning — une rupture d’accessoires assumée qui durera onze ans.",
    announcements: [
      "iPhone 5 — écran 4\", châssis aluminium, LTE",
      "Connecteur Lightning",
      "EarPods",
      "iPod touch 5 et iPod nano 7"
    ]
  },
  {
    id: "2012-ipadmini",
    date: "2012-10-23",
    title: "We’ve got a little more to show you",
    tagline: "L’iPad mini",
    type: "special",
    venue: "California Theatre, San José",
    host: "Tim Cook, Phil Schiller",
    video: "ACGTX-R0Wd0",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipad", "mac"],
    summary: "Apple lance la petite tablette que Steve Jobs avait publiquement écartée deux ans plus tôt — et met à jour presque toute la gamme Mac le même jour.",
    announcements: [
      "iPad mini 7,9\"",
      "iPad 4e génération (puce A6X)",
      "MacBook Pro Retina 13\"",
      "iMac ultra-fin et Fusion Drive, Mac mini"
    ]
  },

  /* ------------------------------- 2013 ------------------------------- */
  {
    id: "2013-wwdc",
    date: "2013-06-10",
    title: "WWDC 2013",
    tagline: "iOS 7 : la grande rupture visuelle",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Tim Cook, Craig Federighi, Jony Ive",
    video: "ZIQ5zGOo6qE",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "iphone", "software", "services"],
    summary: "Jony Ive prend la main sur le design logiciel et efface le skeuomorphisme : iOS 7 est la refonte visuelle la plus radicale de l’histoire du système.",
    announcements: [
      "iOS 7 — design plat, Centre de contrôle, AirDrop",
      "OS X Mavericks (fin des noms de félins)",
      "Mac Pro cylindrique",
      "MacBook Air Haswell, iTunes Radio"
    ]
  },
  {
    id: "2013-iphone5s",
    date: "2013-09-10",
    title: "Événement iPhone 5s / 5c",
    tagline: "Touch ID et le premier 64 bits sur mobile",
    type: "iphone",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Tim Cook, Phil Schiller",
    video: "yBX-KpMoxYk",
    products: ["iphone", "software"],
    summary: "Apple prend l’industrie de vitesse avec une puce 64 bits dans un téléphone, et démocratise l’empreinte digitale avec Touch ID. Le 5c en polycarbonate coloré sera, lui, un demi-succès.",
    announcements: [
      "iPhone 5s — Touch ID, puce A7 64 bits, coprocesseur M7",
      "iPhone 5c en polycarbonate coloré",
      "iOS 7 disponible le 18 septembre"
    ]
  },
  {
    id: "2013-ipadair",
    date: "2013-10-22",
    title: "We still have a lot to cover",
    tagline: "Quand le logiciel Apple devient gratuit",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Tim Cook, Craig Federighi, Phil Schiller",
    video: "4FunXnJQxYU",
    products: ["ipad", "mac", "software"],
    summary: "Décision structurante : macOS, iWork et iLife deviennent gratuits. Apple cesse de vendre son logiciel pour vendre son matériel.",
    announcements: [
      "iPad Air et iPad mini avec écran Retina",
      "OS X Mavericks gratuit",
      "iWork et iLife gratuits à l’achat d’un appareil",
      "Mac Pro et MacBook Pro Retina"
    ]
  },

  /* ------------------------------- 2014 ------------------------------- */
  {
    id: "2014-wwdc",
    date: "2014-06-02",
    title: "WWDC 2014",
    tagline: "Swift, HealthKit, HomeKit",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Tim Cook, Craig Federighi",
    video: "w87fOAG8fjk",
    products: ["mac", "iphone", "software", "services"],
    summary: "Un WWDC sans matériel mais parmi les plus lourds de conséquences : Apple présente un nouveau langage de programmation et ouvre iOS aux extensions et aux claviers tiers.",
    announcements: [
      "Swift, nouveau langage de programmation",
      "iOS 8 : extensions, widgets, claviers tiers",
      "OS X Yosemite et Continuité / Handoff",
      "HealthKit et HomeKit, Metal, CloudKit"
    ]
  },
  {
    id: "2014-iphone6",
    date: "2014-09-09",
    title: "Wish we could say more",
    tagline: "« One more thing… » : l’Apple Watch",
    type: "iphone",
    venue: "Flint Center, Cupertino",
    host: "Tim Cook",
    video: "38IqQpwPe7s",
    products: ["iphone", "watch", "services"],
    summary: "Apple revient au Flint Center, là où le Macintosh fut présenté en 1984, pour lancer sa première nouvelle catégorie de produit depuis l’iPad. Le keynote se termine par un concert de U2 et un album offert de force dans les bibliothèques iTunes.",
    announcements: [
      "iPhone 6 et iPhone 6 Plus — grands écrans",
      "Apple Watch (1re génération)",
      "Apple Pay",
      "Album « Songs of Innocence » de U2"
    ]
  },
  {
    id: "2014-october",
    date: "2014-10-16",
    title: "It’s been way too long",
    tagline: "L’iMac Retina 5K",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Tim Cook, Phil Schiller",
    video: "sBfvJn-fpnc",
    products: ["ipad", "mac", "software"],
    summary: "Apple pousse l’écran Retina jusqu’au bureau avec un iMac 5K à 2 499 $ — un tarif agressif face aux moniteurs professionnels de l’époque.",
    announcements: [
      "iMac Retina 5K 27\"",
      "iPad Air 2 (Touch ID) et iPad mini 3",
      "Mac mini 2014",
      "OS X Yosemite disponible"
    ]
  },

  /* ------------------------------- 2015 ------------------------------- */
  {
    id: "2015-springforward",
    date: "2015-03-09",
    title: "Spring forward",
    tagline: "L’Apple Watch, prix et date",
    type: "special",
    venue: "Yerba Buena Center, San Francisco",
    host: "Tim Cook",
    video: "drsuHb_BYZo",
    videoSource: "Archive (chaîne tierce)",
    products: ["watch", "mac", "services", "software"],
    summary: "Apple détaille enfin le prix de l’Apple Watch — de 349 $ à 17 000 $ pour l’Edition en or — et présente un MacBook 12\" réduit à un unique port USB-C.",
    announcements: [
      "Apple Watch : tarifs, autonomie, sortie le 24 avril",
      "MacBook 12\" Retina (un seul port USB-C)",
      "ResearchKit",
      "HBO Now en exclusivité Apple TV"
    ]
  },
  {
    id: "2015-wwdc",
    date: "2015-06-08",
    title: "WWDC 2015",
    tagline: "Apple Music entre en scène",
    type: "wwdc",
    venue: "Moscone West, San Francisco",
    host: "Tim Cook, Craig Federighi, Jimmy Iovine",
    video: "_p8AsQhaVKI",
    products: ["mac", "iphone", "watch", "software", "services"],
    summary: "Un an après le rachat de Beats, Apple lance son service de streaming et ouvre Swift en open source.",
    announcements: [
      "Apple Music et la radio Beats 1",
      "iOS 9, split-view sur iPad, app News",
      "watchOS 2 (apps natives)",
      "OS X El Capitan, Swift 2 en open source"
    ]
  },
  {
    id: "2015-heysiri",
    date: "2015-09-09",
    title: "Hey Siri, give us a hint",
    tagline: "iPad Pro, Apple Pencil et 3D Touch",
    type: "iphone",
    venue: "Bill Graham Civic Auditorium, San Francisco",
    host: "Tim Cook, Phil Schiller",
    video: "0qwALOOvUik",
    products: ["iphone", "ipad", "appletv", "accessory", "software"],
    summary: "Apple lance un iPad de 12,9 pouces avec un stylet — après des années passées à moquer publiquement l’idée du stylet.",
    announcements: [
      "iPhone 6s / 6s Plus avec 3D Touch et Live Photos",
      "iPad Pro 12,9\", Apple Pencil, Smart Keyboard",
      "Apple TV 4e génération avec tvOS et App Store",
      "iPad mini 4"
    ]
  },

  /* ------------------------------- 2016 ------------------------------- */
  {
    id: "2016-loop",
    date: "2016-03-21",
    title: "Let us loop you in",
    tagline: "L’iPhone SE et un iPad Pro plus petit",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Tim Cook",
    video: "0wIiDnjz4X4",
    products: ["iphone", "ipad", "watch", "software"],
    summary: "Keynote court, ouvert par une prise de position de Tim Cook sur le bras de fer avec le FBI à propos du chiffrement. Apple ressort le format 4 pouces avec des composants haut de gamme.",
    announcements: [
      "iPhone SE (1re génération) à 399 $",
      "iPad Pro 9,7\"",
      "Bracelets Apple Watch et baisse de prix à 299 $",
      "CareKit, iOS 9.3 (Night Shift)"
    ]
  },
  {
    id: "2016-wwdc",
    date: "2016-06-13",
    title: "WWDC 2016",
    tagline: "OS X devient macOS",
    type: "wwdc",
    venue: "Bill Graham Civic Auditorium, San Francisco",
    host: "Tim Cook, Craig Federighi",
    video: "n5jXg_NNiCA",
    products: ["mac", "iphone", "watch", "appletv", "software"],
    summary: "Harmonisation des noms de systèmes et ouverture de Siri aux développeurs, sur iOS comme sur Mac.",
    announcements: [
      "macOS Sierra (fin de « OS X ») et Siri sur Mac",
      "iOS 10 : Messages enrichi, SiriKit, apps système supprimables",
      "watchOS 3 (bien plus rapide), tvOS 10"
    ]
  },
  {
    id: "2016-iphone7",
    date: "2016-09-07",
    title: "See you on the 7th",
    tagline: "« Courage » : la fin de la prise jack",
    type: "iphone",
    venue: "Bill Graham Civic Auditorium, San Francisco",
    host: "Tim Cook, Phil Schiller",
    video: "NS0txu_Kzl8",
    products: ["iphone", "watch", "audio"],
    summary: "Apple retire la prise casque 3,5 mm — Phil Schiller justifie la décision par le mot « courage », qui deviendra un mème durable — et lance les AirPods.",
    announcements: [
      "iPhone 7 et 7 Plus (double capteur, étanchéité, sans prise jack)",
      "AirPods (1re génération)",
      "Apple Watch Series 2 avec GPS",
      "Super Mario Run"
    ]
  },
  {
    id: "2016-helloagain",
    date: "2016-10-27",
    title: "hello again",
    tagline: "La Touch Bar",
    type: "special",
    venue: "Town Hall, Apple Campus, Cupertino",
    host: "Tim Cook, Phil Schiller",
    video: "56Ts0ttvlno",
    videoSource: "Archive (chaîne tierce)",
    products: ["mac", "appletv", "software"],
    summary: "Apple remplace la rangée de touches de fonction par un écran tactile OLED. L’expérience sera abandonnée en 2021.",
    announcements: [
      "MacBook Pro avec Touch Bar et Touch ID",
      "Passage au tout USB-C sur MacBook Pro",
      "Application « TV » sur Apple TV et iOS"
    ]
  },

  /* ------------------------------- 2017 ------------------------------- */
  {
    id: "2017-wwdc",
    date: "2017-06-05",
    title: "WWDC 2017",
    tagline: "ARKit, HomePod, iMac Pro",
    type: "wwdc",
    venue: "McEnery Convention Center, San José",
    host: "Tim Cook, Craig Federighi, Phil Schiller",
    video: "oaqHdULqet0",
    products: ["mac", "ipad", "audio", "software", "services"],
    summary: "Le WWDC le plus dense en matériel de la décennie : Apple annonce un enceinte connectée, une station de travail tout-en-un et fait d’iOS la plus grande plateforme de réalité augmentée du monde.",
    announcements: [
      "HomePod",
      "iMac Pro et iPad Pro 10,5\" (ProMotion 120 Hz)",
      "ARKit",
      "iOS 11, macOS High Sierra, watchOS 4"
    ]
  },
  {
    id: "2017-iphonex",
    date: "2017-09-12",
    title: "Let’s meet at our place",
    tagline: "iPhone X : l’encoche et Face ID",
    type: "iphone",
    venue: "Steve Jobs Theater, Apple Park (inauguration)",
    host: "Tim Cook, Phil Schiller",
    video: "Zle3bUCrwow",
    videoSource: "Archive (chaîne tierce)",
    products: ["iphone", "watch", "appletv", "software"],
    summary: "Premier keynote au Steve Jobs Theater, pour les dix ans de l’iPhone. L’iPhone X supprime le bouton d’accueil, franchit la barre des 1 000 $ et impose l’encoche à toute l’industrie.",
    announcements: [
      "iPhone X — écran OLED bord à bord, Face ID, gestes, Animoji",
      "iPhone 8 et 8 Plus (charge sans fil)",
      "Apple Watch Series 3 avec cellulaire",
      "Apple TV 4K"
    ]
  },

  /* ------------------------------- 2018 ------------------------------- */
  {
    id: "2018-education",
    date: "2018-03-27",
    title: "Let’s take a field trip",
    tagline: "L’iPad d’entrée de gamme prend le Pencil",
    type: "special",
    venue: "Lane Tech College Prep, Chicago",
    host: "Tim Cook, Greg Joswiak",
    video: "mr7nyaEMmGE",
    videoSource: "Archive (chaîne tierce)",
    products: ["ipad", "software", "services"],
    summary: "Un keynote tenu dans un lycée public de Chicago, pensé comme une réponse frontale aux Chromebooks dans les salles de classe.",
    announcements: [
      "iPad 6e génération compatible Apple Pencil, 299 $ pour l’éducation",
      "Schoolwork et ClassKit",
      "Everyone Can Create, 200 Go d’iCloud pour les élèves"
    ]
  },
  {
    id: "2018-wwdc",
    date: "2018-06-04",
    title: "WWDC 2018",
    tagline: "Mode sombre, Memoji et Raccourcis",
    type: "wwdc",
    venue: "McEnery Convention Center, San José",
    host: "Tim Cook, Craig Federighi",
    video: "UThGcWBIMpU",
    products: ["mac", "iphone", "watch", "software"],
    summary: "Après une année 2017 marquée par des bugs, Apple met l’accent sur la performance et introduit Temps d’écran — premier outil grand public sur le temps passé devant les écrans.",
    announcements: [
      "iOS 12 : performances, Memoji, FaceTime de groupe",
      "Temps d’écran (Screen Time)",
      "Raccourcis (Shortcuts), issu de l’app Workflow",
      "macOS Mojave et son mode sombre"
    ]
  },
  {
    id: "2018-gatherround",
    date: "2018-09-12",
    title: "Gather round",
    tagline: "iPhone XS, XR et l’Apple Watch qui fait des ECG",
    type: "iphone",
    venue: "Steve Jobs Theater, Apple Park",
    host: "Tim Cook",
    video: "wFTmQ27S7OQ",
    products: ["iphone", "watch"],
    summary: "L’Apple Watch Series 4 devient un dispositif médical homologué par la FDA — le vrai tournant du produit vers la santé.",
    announcements: [
      "iPhone XS et XS Max",
      "iPhone XR (aluminium, LCD Liquid Retina)",
      "Apple Watch Series 4 : écran agrandi, ECG, détection de chute"
    ]
  },
  {
    id: "2018-brooklyn",
    date: "2018-10-30",
    title: "There’s more in the making",
    tagline: "L’iPad Pro perd son bouton, le MacBook Air gagne un Retina",
    type: "special",
    venue: "Brooklyn Academy of Music, New York",
    host: "Tim Cook, John Ternus, Laura Metz",
    video: "bfHEnw6Rm-4",
    products: ["ipad", "mac", "accessory"],
    summary: "Refonte complète de l’iPad Pro (bords plats, Face ID, USB-C) et retour du MacBook Air après quatre ans sans mise à jour sérieuse.",
    announcements: [
      "iPad Pro 11\" et 12,9\" — Face ID, USB-C, Apple Pencil 2",
      "MacBook Air avec écran Retina",
      "Mac mini (première mise à jour depuis 2014)"
    ]
  },

  /* ------------------------------- 2019 ------------------------------- */
  {
    id: "2019-showtime",
    date: "2019-03-25",
    title: "It’s show time",
    tagline: "Apple devient une entreprise de services",
    type: "special",
    venue: "Steve Jobs Theater, Apple Park",
    host: "Tim Cook, Oprah Winfrey, Steven Spielberg",
    video: "TZmBoMZFC8g",
    products: ["services"],
    summary: "Keynote entièrement consacré aux services, sans un seul produit matériel — un signal clair du virage stratégique d’Apple face au plafonnement des ventes d’iPhone.",
    announcements: [
      "Apple TV+",
      "Apple Arcade",
      "Apple News+",
      "Apple Card, en partenariat avec Goldman Sachs"
    ]
  },
  {
    id: "2019-wwdc",
    date: "2019-06-03",
    title: "WWDC 2019",
    tagline: "SwiftUI, iPadOS et le Mac Pro « râpe à fromage »",
    type: "wwdc",
    venue: "McEnery Convention Center, San José",
    host: "Tim Cook, Craig Federighi",
    video: "psL_5RIBqnY",
    products: ["mac", "ipad", "iphone", "watch", "software"],
    summary: "L’iPad obtient enfin son propre système. Apple présente aussi un Mac Pro modulaire à 5 999 $ et un écran dont le pied est vendu 999 $ — un moment devenu culte.",
    announcements: [
      "iPadOS, séparé d’iOS",
      "SwiftUI",
      "Mac Pro et Pro Display XDR",
      "iOS 13, mode sombre, Sign in with Apple, macOS Catalina"
    ]
  },
  {
    id: "2019-innovationonly",
    date: "2019-09-10",
    title: "By innovation only",
    tagline: "Trois capteurs et une offensive sur les prix",
    type: "iphone",
    venue: "Steve Jobs Theater, Apple Park",
    host: "Tim Cook, Phil Schiller",
    video: "-rAeqN-Q7x4",
    products: ["iphone", "watch", "ipad", "services"],
    summary: "Apple casse les prix de ses services (4,99 $/mois pour TV+ et Arcade) pour s’attaquer frontalement à Netflix, et généralise le triple capteur photo.",
    announcements: [
      "iPhone 11, iPhone 11 Pro et Pro Max (triple capteur, mode Nuit)",
      "Apple Watch Series 5 avec écran toujours allumé",
      "iPad 7e génération",
      "Apple TV+ et Apple Arcade à 4,99 $/mois"
    ]
  },

  /* ------------------------------- 2020 ------------------------------- */
  {
    id: "2020-wwdc",
    date: "2020-06-22",
    title: "WWDC 2020",
    tagline: "Le Mac quitte Intel",
    type: "wwdc",
    venue: "Événement 100 % en ligne (pandémie)",
    host: "Tim Cook, Craig Federighi, Johny Srouji",
    video: "GEZhD3J89ZE",
    products: ["mac", "iphone", "silicon", "software"],
    summary: "Premier keynote entièrement préenregistré, et l’annonce la plus lourde de la décennie : Apple abandonne Intel pour ses propres puces, avec une transition annoncée sur deux ans.",
    announcements: [
      "Transition du Mac vers Apple Silicon",
      "macOS Big Sur et Rosetta 2",
      "iOS 14 : widgets, Bibliothèque d’apps, App Clips",
      "watchOS 7, suivi du sommeil"
    ]
  },
  {
    id: "2020-timeflies",
    date: "2020-09-15",
    title: "Time Flies",
    tagline: "Apple One et Fitness+",
    type: "special",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook, Jeff Williams",
    video: "b13xnFp_LJs",
    products: ["watch", "ipad", "services"],
    summary: "Événement sans iPhone — une première en septembre — consacré à la montre, à l’iPad et au regroupement des abonnements.",
    announcements: [
      "Apple Watch Series 6 (oxymètre) et Apple Watch SE",
      "iPad Air 4 (design iPad Pro, puce A14)",
      "iPad 8e génération",
      "Apple One et Apple Fitness+"
    ]
  },
  {
    id: "2020-hispeed",
    date: "2020-10-13",
    title: "Hi, Speed",
    tagline: "La 5G et le retour du MagSafe",
    type: "iphone",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook, Greg Joswiak",
    video: "KR0g-1hnQPA",
    products: ["iphone", "audio", "accessory"],
    summary: "Quatre iPhone d’un coup, des bords plats inspirés de l’iPhone 5, et la disparition du chargeur et des écouteurs de la boîte.",
    announcements: [
      "iPhone 12, 12 mini, 12 Pro et 12 Pro Max — 5G, Ceramic Shield",
      "MagSafe pour iPhone",
      "HomePod mini",
      "Fin du chargeur secteur dans la boîte"
    ]
  },
  {
    id: "2020-onemorething",
    date: "2020-11-10",
    title: "One more thing",
    tagline: "La puce M1",
    type: "special",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook, Johny Srouji",
    video: "5AwdkGKmZ0I",
    products: ["mac", "silicon", "software"],
    summary: "Les premiers Mac Apple Silicon arrivent moins de cinq mois après l’annonce de la transition, avec des gains de performance et d’autonomie qui prennent tout le secteur de court.",
    announcements: [
      "Puce Apple M1",
      "MacBook Air M1 (sans ventilateur)",
      "MacBook Pro 13\" M1 et Mac mini M1",
      "macOS Big Sur disponible"
    ]
  },

  /* ------------------------------- 2021 ------------------------------- */
  {
    id: "2021-springloaded",
    date: "2021-04-20",
    title: "Spring Loaded",
    tagline: "AirTag et l’iMac en couleurs",
    type: "special",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook",
    video: "JdBYVNuky1M",
    products: ["mac", "ipad", "accessory", "appletv", "services"],
    summary: "L’iMac renoue avec les couleurs vives de 1998, et l’iPad Pro hérite de la puce M1 du Mac — première fois qu’une puce Mac équipe une tablette.",
    announcements: [
      "AirTag",
      "iMac 24\" M1 en sept couleurs",
      "iPad Pro avec puce M1 et écran mini-LED",
      "Apple TV 4K (2e génération) avec nouvelle Siri Remote"
    ]
  },
  {
    id: "2021-wwdc",
    date: "2021-06-07",
    title: "WWDC 2021",
    tagline: "Focus, SharePlay et Universal Control",
    type: "wwdc",
    venue: "En ligne",
    host: "Tim Cook, Craig Federighi",
    video: "0TD96VTf0Xs",
    products: ["mac", "iphone", "ipad", "software", "services"],
    summary: "Apple pousse la confidentialité comme argument produit (Private Relay, Mail Privacy Protection) et fait circuler curseur et fichiers entre Mac et iPad sans configuration.",
    announcements: [
      "iOS 15 : Focus, Live Text, FaceTime multiplateforme",
      "macOS Monterey et Universal Control",
      "SharePlay",
      "iCloud+ et iCloud Private Relay"
    ]
  },
  {
    id: "2021-californiastreaming",
    date: "2021-09-14",
    title: "California streaming",
    tagline: "ProMotion sur iPhone",
    type: "iphone",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook",
    video: "EvGOlAkLSLw",
    products: ["iphone", "ipad", "watch"],
    summary: "L’iPhone 13 Pro passe au 120 Hz, et l’iPad mini est entièrement redessiné après six ans de quasi-immobilisme.",
    announcements: [
      "iPhone 13, 13 mini, 13 Pro et 13 Pro Max (ProMotion 120 Hz)",
      "iPad mini 6e génération",
      "iPad 9e génération",
      "Apple Watch Series 7"
    ]
  },
  {
    id: "2021-unleashed",
    date: "2021-10-18",
    title: "Unleashed",
    tagline: "M1 Pro, M1 Max et le retour des ports",
    type: "special",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook, John Ternus",
    video: "exM1uajp--A",
    products: ["mac", "silicon", "audio"],
    summary: "Apple fait machine arrière sur cinq ans de choix contestés : retour du HDMI, du lecteur SD et du MagSafe, abandon de la Touch Bar.",
    announcements: [
      "MacBook Pro 14\" et 16\" avec M1 Pro et M1 Max",
      "Retour de MagSafe, HDMI et lecteur de carte SD",
      "AirPods 3e génération",
      "Apple Music Voice"
    ]
  },

  /* ------------------------------- 2022 ------------------------------- */
  {
    id: "2022-peekperformance",
    date: "2022-03-08",
    title: "Peek performance",
    tagline: "Mac Studio et M1 Ultra",
    type: "special",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook, John Ternus",
    video: "CUwg_JoNHpo",
    products: ["mac", "silicon", "iphone", "ipad"],
    summary: "Apple invente une nouvelle catégorie de Mac de bureau pour les professionnels et fusionne deux puces M1 Max en une seule via une interconnexion maison.",
    announcements: [
      "Mac Studio et Studio Display",
      "Puce M1 Ultra",
      "iPhone SE 3e génération (5G)",
      "iPad Air 5 avec puce M1"
    ]
  },
  {
    id: "2022-wwdc",
    date: "2022-06-06",
    title: "WWDC 2022",
    tagline: "Écran verrouillé personnalisable et MacBook Air M2",
    type: "wwdc",
    venue: "Apple Park",
    host: "Tim Cook, Craig Federighi",
    video: "q5D55G7Ejs8",
    products: ["mac", "iphone", "ipad", "silicon", "software", "services"],
    summary: "Refonte la plus visible d’iOS depuis iOS 7 sur l’écran verrouillé, et redesign complet du MacBook Air autour de la puce M2.",
    announcements: [
      "iOS 16 : écran verrouillé personnalisable, activités en direct",
      "MacBook Air M2 (nouveau design)",
      "macOS Ventura et Stage Manager",
      "CarPlay nouvelle génération, Apple Pay Later"
    ]
  },
  {
    id: "2022-farout",
    date: "2022-09-07",
    title: "Far out",
    tagline: "Dynamic Island et Apple Watch Ultra",
    type: "iphone",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook",
    video: "ux6zXguiqxM",
    products: ["iphone", "watch", "audio"],
    summary: "Apple transforme l’encoche en interface logicielle et lance une montre baroudeuse à 799 $ pour attaquer Garmin sur son terrain.",
    announcements: [
      "iPhone 14 et 14 Plus, iPhone 14 Pro et Pro Max",
      "Dynamic Island et écran toujours allumé",
      "Apple Watch Ultra, Series 8, SE 2",
      "AirPods Pro 2, SOS d’urgence par satellite"
    ]
  },
  {
    id: "2022-press-oct",
    date: "2022-10-18",
    title: "iPad Pro M2 et iPad 10",
    tagline: "Annoncés par communiqué, sans keynote",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["ipad", "appletv", "silicon"],
    summary: "Apple abandonne le keynote d’automne et publie ses annonces matérielles sous forme de communiqués — un format qui deviendra la norme pour les mises à jour intermédiaires.",
    announcements: [
      "iPad Pro avec puce M2",
      "iPad 10e génération (nouveau design, USB-C)",
      "Apple TV 4K 3e génération"
    ]
  },

  /* ------------------------------- 2023 ------------------------------- */
  {
    id: "2023-press-jan",
    date: "2023-01-17",
    title: "MacBook Pro M2 Pro / M2 Max",
    tagline: "Communiqué de presse",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["mac", "silicon", "audio"],
    summary: "Mise à jour discrète mais importante : les MacBook Pro 14\" et 16\" passent aux puces M2 Pro et M2 Max, et le Mac mini reçoit pour la première fois une puce Pro.",
    announcements: [
      "MacBook Pro 14\" et 16\" (M2 Pro, M2 Max)",
      "Mac mini M2 et M2 Pro",
      "HomePod 2e génération"
    ]
  },
  {
    id: "2023-wwdc",
    date: "2023-06-05",
    title: "WWDC 2023",
    tagline: "« One more thing » : Vision Pro",
    type: "wwdc",
    venue: "Apple Park",
    host: "Tim Cook, Craig Federighi, Mike Rockwell",
    video: "GYkq9Rgoj8E",
    products: ["vision", "mac", "iphone", "silicon", "software"],
    summary: "Apple lance sa première nouvelle plateforme depuis l’Apple Watch : un casque de « calcul spatial » à 3 499 $. C’est aussi le keynote qui achève la transition Apple Silicon, trois ans après son annonce.",
    announcements: [
      "Apple Vision Pro et visionOS",
      "MacBook Air 15\"",
      "Mac Studio et Mac Pro avec M2 Ultra — fin de la transition Apple Silicon",
      "iOS 17, StandBy, app Journal, macOS Sonoma"
    ]
  },
  {
    id: "2023-wonderlust",
    date: "2023-09-12",
    title: "Wonderlust",
    tagline: "L’USB-C, imposé par l’Europe",
    type: "iphone",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook",
    video: "ZiP1l7jlIIA",
    products: ["iphone", "watch", "accessory"],
    summary: "Après onze ans, le Lightning disparaît de l’iPhone sous la pression de la réglementation européenne. Apple met aussi en avant son premier produit neutre en carbone.",
    announcements: [
      "iPhone 15 et 15 Plus, iPhone 15 Pro et Pro Max en titane",
      "Passage à l’USB-C sur toute la gamme",
      "Bouton Action sur les modèles Pro",
      "Apple Watch Series 9 et Ultra 2, geste « double tap »"
    ]
  },
  {
    id: "2023-scaryfast",
    date: "2023-10-30",
    title: "Scary fast",
    tagline: "Un keynote nocturne filmé à l’iPhone",
    type: "special",
    venue: "Apple Park (préenregistré, la veille d’Halloween)",
    host: "Tim Cook, John Ternus",
    video: "ctkW3V0Mh-k",
    products: ["mac", "silicon"],
    summary: "Événement de 30 minutes diffusé à 20 h, heure du Pacifique — et entièrement tourné avec un iPhone 15 Pro Max, comme l’a révélé Apple à la fin de la vidéo.",
    announcements: [
      "Puces M3, M3 Pro et M3 Max (gravure 3 nm)",
      "MacBook Pro 14\" et 16\" M3",
      "iMac 24\" M3"
    ]
  },

  /* ------------------------------- 2024 ------------------------------- */
  {
    id: "2024-press-mar",
    date: "2024-03-04",
    title: "MacBook Air M3",
    tagline: "Communiqué de presse",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["mac", "silicon"],
    summary: "Mise à jour classique de la gamme Air, avec pour la première fois la prise en charge de deux écrans externes sur un Mac d’entrée de gamme.",
    announcements: [
      "MacBook Air 13\" et 15\" avec puce M3",
      "Prise en charge de deux écrans externes (couvercle fermé)"
    ]
  },
  {
    id: "2024-letloose",
    date: "2024-05-07",
    title: "Let Loose",
    tagline: "L’iPad Pro OLED et l’Apple Pencil Pro",
    type: "special",
    venue: "Événement en ligne (préenregistré)",
    host: "Tim Cook, John Ternus",
    video: "f1J38FlDKxo",
    products: ["ipad", "silicon", "accessory"],
    summary: "Apple sort la puce M4 sur iPad avant le Mac et lance l’iPad le plus fin de son histoire. La publicité « Crush! » diffusée ce jour-là provoquera un tollé et des excuses publiques.",
    announcements: [
      "iPad Pro M4 avec écran Tandem OLED — 5,1 mm d’épaisseur",
      "iPad Air 11\" et 13\" (M2)",
      "Apple Pencil Pro",
      "Magic Keyboard redessiné"
    ]
  },
  {
    id: "2024-wwdc",
    date: "2024-06-10",
    title: "WWDC 2024",
    tagline: "Apple Intelligence",
    type: "wwdc",
    venue: "Apple Park",
    host: "Tim Cook, Craig Federighi",
    video: "RXeOiIDNNek",
    products: ["iphone", "mac", "ipad", "software", "services"],
    summary: "Réponse d’Apple à la vague de l’IA générative : un système d’IA personnelle intégré au système, doublé d’un partenariat avec OpenAI pour les requêtes complexes.",
    announcements: [
      "Apple Intelligence : outils d’écriture, Genmoji, Image Playground",
      "Intégration de ChatGPT dans Siri",
      "iOS 18 : personnalisation de l’écran d’accueil, Recopie de l’iPhone",
      "macOS Sequoia, Calculatrice sur iPad avec Math Notes"
    ]
  },
  {
    id: "2024-glowtime",
    date: "2024-09-09",
    title: "It’s Glowtime",
    tagline: "Le bouton Contrôle de l’appareil photo",
    type: "iphone",
    venue: "Apple Park (préenregistré)",
    host: "Tim Cook",
    video: "uarNiSl_uh4",
    products: ["iphone", "watch", "audio"],
    summary: "Premier iPhone conçu pour Apple Intelligence, avec un bouton physique dédié à la photo. Les AirPods Pro 2 deviennent, par mise à jour logicielle, une aide auditive homologuée.",
    announcements: [
      "iPhone 16 et 16 Plus, iPhone 16 Pro et Pro Max",
      "Bouton Contrôle de l’appareil photo",
      "Apple Watch Series 10 et Ultra 2 noire",
      "AirPods 4, AirPods Pro 2 en aide auditive"
    ]
  },
  {
    id: "2024-press-oct",
    date: "2024-10-28",
    title: "Semaine Mac M4",
    tagline: "Trois jours d’annonces par communiqué",
    type: "press",
    venue: "Communiqués de presse (28–30 octobre)",
    host: "—",
    video: null,
    products: ["mac", "silicon"],
    summary: "Plutôt qu’un keynote, Apple étale ses annonces sur trois jours : un iMac le lundi, le Mac mini le mardi, les MacBook Pro le mercredi. Le Mac mini est entièrement redessiné, réduit à 12,7 cm de côté.",
    announcements: [
      "iMac M4 (28 octobre)",
      "Mac mini M4 et M4 Pro, format 12,7 cm (29 octobre)",
      "MacBook Pro M4, M4 Pro et M4 Max (30 octobre)"
    ]
  },

  /* ------------------------------- 2025 ------------------------------- */
  {
    id: "2025-press-feb",
    date: "2025-02-19",
    title: "iPhone 16e",
    tagline: "Communiqué de presse",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["iphone", "silicon"],
    summary: "L’iPhone SE disparaît au profit d’un « 16e » à 599 $, qui inaugure le modem cellulaire C1 conçu par Apple — première étape de la sortie de la dépendance à Qualcomm.",
    announcements: [
      "iPhone 16e à 599 $",
      "Modem Apple C1, le premier conçu en interne"
    ]
  },
  {
    id: "2025-press-mar",
    date: "2025-03-05",
    title: "MacBook Air M4 et Mac Studio",
    tagline: "Communiqué de presse",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["mac", "silicon"],
    summary: "Baisse de prix du MacBook Air à 999 $ et configuration inhabituelle pour le Mac Studio, qui combine une puce de génération précédente en version Ultra avec une plus récente en version Max.",
    announcements: [
      "MacBook Air M4 à 999 $, coloris bleu ciel",
      "Mac Studio avec M4 Max et M3 Ultra"
    ]
  },
  {
    id: "2025-wwdc",
    date: "2025-06-09",
    title: "WWDC 2025",
    tagline: "Liquid Glass et la bascule vers iOS 26",
    type: "wwdc",
    venue: "Apple Park",
    host: "Tim Cook, Craig Federighi, Alan Dye",
    video: "0_DjDdfqtUE",
    products: ["iphone", "mac", "ipad", "watch", "vision", "software"],
    summary: "Plus grande refonte visuelle depuis iOS 7 avec le matériau « Liquid Glass », et abandon de la numérotation historique : tous les systèmes passent à la version 26, alignée sur l’année.",
    announcements: [
      "Design Liquid Glass sur toutes les plateformes",
      "Numérotation unifiée : iOS 26, macOS Tahoe 26, iPadOS 26…",
      "iPadOS 26 : fenêtrage et barre de menus façon Mac",
      "Ouverture des modèles Apple Intelligence aux développeurs"
    ]
  },
  {
    id: "2025-awedropping",
    date: "2025-09-09",
    title: "Awe Dropping",
    tagline: "L’iPhone Air",
    type: "iphone",
    venue: "Steve Jobs Theater, Apple Park",
    host: "Tim Cook",
    video: "H3KnMyojEQU",
    products: ["iphone", "watch", "audio"],
    summary: "Apple remplace le modèle « Plus » par un iPhone Air de 5,6 mm, le plus fin jamais produit, et fait de la traduction en direct dans les oreillettes un argument de vente central.",
    announcements: [
      "iPhone Air, 5,6 mm d’épaisseur",
      "iPhone 17, iPhone 17 Pro et Pro Max",
      "Apple Watch Series 11, SE 3 et Ultra 3",
      "AirPods Pro 3 avec traduction en direct"
    ]
  },
  {
    id: "2025-press-oct",
    date: "2025-10-15",
    title: "Génération M5",
    tagline: "Communiqué de presse",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["mac", "ipad", "vision", "silicon"],
    summary: "Trois produits, trois communiqués, une seule puce : la M5 arrive simultanément sur le MacBook Pro, l’iPad Pro et le Vision Pro.",
    announcements: [
      "MacBook Pro 14\" M5",
      "iPad Pro M5",
      "Apple Vision Pro avec puce M5 et Dual Knit Band"
    ]
  },

  /* ------------------------------- 2026 ------------------------------- */
  {
    id: "2026-experience",
    date: "2026-03-04",
    title: "Apple Experience",
    tagline: "Des annonces étalées, sans keynote diffusé",
    type: "press",
    venue: "New York, Londres et Shanghai",
    host: "—",
    video: "u3SIKAmPXY4",
    videoLabel: "Film produit « Hello, MacBook Neo » (Apple)",
    products: ["mac", "iphone", "ipad", "silicon", "audio"],
    summary: "Apple rompt avec le format du keynote de printemps : plutôt qu’une présentation diffusée, la marque organise des sessions de prise en main pour la presse à New York, Londres et Shanghai, et étale ses communiqués sur plusieurs jours. Le MacBook Neo à 599 $ marque son retour sur l’entrée de gamme.",
    announcements: [
      "MacBook Neo à 599 $",
      "iPhone 17e à 599 $",
      "MacBook Air M5 et MacBook Pro M5 Pro / M5 Max",
      "iPad Air M4, puis AirPods Max 2 plus tard dans le mois"
    ]
  },
  {
    id: "2026-wwdc",
    date: "2026-06-08",
    title: "WWDC 2026",
    tagline: "Siri AI, propulsé par Gemini",
    type: "wwdc",
    venue: "Apple Park",
    host: "Tim Cook, Craig Federighi",
    video: "hF8swzNR1-o",
    videoSource: "Rediffusion (chaîne tierce)",
    products: ["iphone", "mac", "ipad", "watch", "vision", "software", "services"],
    summary: "Après deux ans de promesses non tenues sur Siri, Apple présente « Siri AI » — un assistant reconstruit, adossé aux modèles Gemini de Google. La fonctionnalité est initialement indisponible dans l’Union européenne pour des raisons de conformité au DMA.",
    announcements: [
      "Siri AI : nouvelle interface, app dédiée, intelligence visuelle",
      "iOS 27, iPadOS 27, macOS 27 « Golden Gate », watchOS / tvOS / visionOS 27",
      "Apple Intelligence étendu à Safari, Mail, Photos, Calendrier",
      "Comptes enfants obligatoires sous 13 ans et refonte de Temps d’écran",
      "Gains de performance : AirDrop +80 %, lancement d’apps +30 %"
    ],
    link: "https://www.apple.com/newsroom/2026/05/apple-kicks-off-worldwide-developers-conference-on-june-8/"
  },
  {
    id: "2026-press-aug",
    date: "2026-08-25",
    title: "Puces M6 et M5 Ultra",
    tagline: "Communiqué de presse surprise",
    type: "press",
    venue: "Communiqué de presse",
    host: "—",
    video: null,
    products: ["mac", "silicon"],
    summary: "Annonce inattendue de fin d’été : la M6 est étrennée par le Mac mini plutôt que par un portable, et le Mac Studio reçoit la M5 Ultra. Apple met l’accent sur la puissance de calcul dédiée à l’IA locale.",
    announcements: [
      "Puce M6, inaugurée par le Mac mini (899 $)",
      "Puce M5 Ultra dans le Mac Studio (5 499 $)",
      "Livraisons à partir du 22 septembre 2026"
    ],
    link: "https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/"
  },
  {
    id: "2026-september",
    date: "2026-09-09",
    title: "Surprise and Shine",
    tagline: "L’iPhone Duo, premier iPhone pliant",
    type: "iphone",
    venue: "Steve Jobs Theater, Apple Park",
    host: "John Ternus",
    video: "39BalPDuTo0",
    products: ["iphone", "watch", "audio", "silicon", "software"],
    summary: "Premier keynote de John Ternus en tant que CEO, huit jours après avoir succédé à Tim Cook (devenu président du conseil). Apple entre enfin sur le marché du pliable avec l’iPhone Duo, un format livre à 1 999 $, et inaugure sa première puce gravée en 2 nm.",
    announcements: [
      "iPhone Duo : écran externe 5,4\" qui s’ouvre sur 7,6\", titane, à partir de 1 999 $ (sortie le 23 octobre)",
      "iPhone 18 Pro et Pro Max : puce A20 Pro en 2 nm, capteur principal à ouverture variable",
      "Apple Watch Series 12 (nouveau système de capteurs santé) et Apple Watch Ultra 4",
      "AirPods 5 avec réduction de bruit active de série, à 129 $",
      "iOS 27 et watchOS 27 le 14 septembre, Siri AI en bêta (anglais)"
    ]
  },
  {
    id: "2026-october",
    date: "2026-10-13",
    title: "Welcome home",
    tagline: "HomeView : Apple entre dans la maison connectée",
    type: "special",
    venue: "Tribeca, New York (Apple Experience, sans keynote diffusé)",
    host: "—",
    video: "hkrYiZ_g9tw",
    videoLabel: "Film produit « Welcome Apple HomeView » (Apple) — pas de keynote filmé",
    products: ["audio", "appletv", "accessory", "silicon"],
    summary: "Comme en mars, Apple remplace le keynote par une « Experience » réservée à la presse à New York. La pièce maîtresse est le HomeView, premier écran domestique d’Apple, qui reconnaît le visage de chaque membre du foyer pour afficher son propre agenda et ses notifications. Apple l’accompagne d’une gamme d’accessoires de maison co-conçus avec LG et Schneider Electric.",
    announcements: [
      "HomeView à 299 $ : écran carré 7\" sur base enceinte, puce A18, reconnaissance faciale, version murale ou à poser (livraison le 13 novembre)",
      "HomePod mini 2 à 149 $ : nouvelle puce pour Siri AI, « sound glow », enceinte par défaut du Mac, 5 coloris (le 30 octobre)",
      "Apple TV 4K (4e génération) à 299 $ : puce A19, micros pour Siri AI mains libres, son surround avec jusqu’à quatre HomePod (le 13 novembre)",
      "Apple Home Collection avec LG et Schneider Electric : caméras, sonnette vidéo, serrure, thermostats (dès décembre 2026)"
    ]
  }
];
