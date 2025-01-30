import { AffiliationsArrayProps, DownloadLinksProps, ElitesProps, FeaturedOperatorProps, MediaContentProps, NavbarProps, OperatorClassesProps, PotensialsProps, WorldContentProps } from "./interface";

export const MediaContent:MediaContentProps[] = [
  {
    id: 0,
    name: 'monster siren',
    image: '/media/monster_siren_active.png'
  },
  {
    id: 1,
    name: 'gallery',
    image: '/media/gallery_active.png'
  },
  {
    id: 2,
    name: 'operator',
    image: '/media/operator_active.png'
  },
  {
    id: 3,
    name: 'video',
    image: '/media/video_active.png'
  }
]

export const NavbarLinks: NavbarProps[] = [
  {
    id: 1,
    label: 'informations',
    link: '/#'
  },
  {
    id: 2,
    label: 'operators',
    link: '/operators'
  },
  {
    id: 3,
    label: 'world',
    link: '/#'
  },
  {
    id: 4,
    label: 'media',
    link: '/#'
  }
]

export const  ArknightNations = [
  'rhodes', 'columbia', 'leithanien', 'lungmen', 'victoria', 'sargon', 'siracusa', 'sami', 'ursus', 'yan', 'laterano', 'rim', 'kjerag', 'bolivar', 'higashi', 'minos', 'iberia', 'kazimierz', 'egir', 'minos'
]

export const ArknightGroup = [
  'rainbow'
]

export const OperatorClasses:OperatorClassesProps[] = [
  {
    name: 'caster',
    image: '/classes/class_caster.png'
  },
  {
    name: 'defender',
    image: '/classes/class_defender.png'
  },
  {
    name: 'caster',
    image: '/classes/class_caster.png'
  },
  {
    name: 'guard',
    image: '/classes/class_guard.png'
  },
  {
    name: 'medic',
    image: '/classes/class_medic.png'
  },
  {
    name: 'sniper',
    image: '/classes/class_sniper.png'
  },
  {
    name: 'specialist',
    image: '/classes/class_specialist.png'
  },
  {
    name: 'supporter',
    image: '/classes/class_supporter.png'
  },
  {
    name: 'vanguard',
    image: '/classes/class_vanguard.png'
  },
]

export const ArknightsAffiliations:AffiliationsArrayProps[] = [
  {
    faction: "Rhodes Island",
    params: 'rhodes',
    image: '/affiliations/Rhodes_Island.png'
  },
  {
    faction: "Egir",
    params: 'egir',
    image: '/affiliations/Aegir.png'
  },
  {
    faction: "Babel",
    params: 'babel',
    image: '/affiliations/Babel.png'
  },
  {
    faction: "Abyssal",
    params: 'abyssal',
    image: '/affiliations/Abyssal_Hunters.png'
  },
  {
    faction: "Bolivar",
    params: 'bolivar',
    image: '/affiliations/Bolívar.png'
  },
  {
    faction: "Columbia",
    params: 'columbia',
    image: '/affiliations/Columbia.png'
  },
  {
    faction: "Blacksteel",
    params: 'blacksteel',
    image: '/affiliations/Blacksteel.png'
  },
  {
    faction: "Rhine Lab",
    params: 'rhine',
    image: '/affiliations/Rhine_Lab.png'
  },
  {
    faction: "Higashi",
    params: 'higashi',
    image: '/affiliations/Higashi.png'
  },
  {
    faction: "Iberia",
    params: 'iberia',
    image: '/affiliations/Iberia.png'
  },
  {
    faction: "Kazimierz",
    params: 'kazimierz',
    image: '/affiliations/Kazimierz.png'
  },
  {
    faction: "Kjerag",
    params: 'kjerag',
    image: '/affiliations/Kjerag.png'
  },
  {
    faction: "Laterano",
    params: 'laterano',
    image: '/affiliations/Laterano.png'
  },
  {
    faction: "Leithanien",
    params: 'leithanien',
    image: '/affiliations/Leithanien.png'
  },
  {
    faction: "Great Lungmen",
    params: 'lungmen',
    image: '/affiliations/Lungmen.png'
  },
  {
    faction: "Minos",
    params: 'minos',
    image: '/affiliations/Minos.png'
  },
  {
    faction: "RIM Billiton",
    params: 'rim',
    image: '/affiliations/Rim_Billiton.png'
  },
  {
    faction: "Sami",
    params: 'sami',
    image: '/affiliations/Sami.png'
  },
  {
    faction: "Sargon",
    params: 'sargon',
    image: '/affiliations/Sargon.png'
  },
  {
    faction: "Siesta",
    params: 'siesta',
    image: '/affiliations/Siesta.png'
  },
  {
    faction: "Siracusa",
    params: 'siracusa',
    image: '/affiliations/Siracusa.png'
  },
  {
    faction: 'Rainbow',
    params: 'rainbow',
    image: '/affiliations/Team_Rainbow.png'
  },
  {
    faction: 'Ursus',
    params: 'ursus',
    image: '/affiliations/Ursus.png'
  },
  {
    faction: 'Victoria',
    params: 'victoria',
    image: '/affiliations/Victoria.png'
  },
  {
    faction: 'Yan',
    params: 'yan',
    image: '/affiliations/Yan.png'
  },
]

export const Elites:ElitesProps[] = [
  {
    name: 'base',
    image: '/elite/0.png',
    imageBlue: '/elite/0_blue.png'
  },
  {
    name: 'e1',
    image: '/elite/1.png',
    imageBlue: '/elite/1_blue.png'
  },
  {
    name: 'e2',
    image: '/elite/2.png',
    imageBlue: '/elite/2_blue.png'
  },
  {
    name: 'e3',
    image: '/elite/3.png',
    imageBlue: '/elite/0_blue.png'
  }
]

export const Potensials:PotensialsProps[]  = [
  {
    name: '1',
    image: '/potential/1.png'
  },
  {
    name: '2',
    image: '/potential/2.png'
  },
  {
    name: '3',
    image: '/potential/3.png'
  },
  {
    name: '4',
    image: '/potential/4.png'
  },
  {
    name: '5',
    image: '/potential/5.png'
  },
  {
    name: '6',
    image: '/potential/6.png'
  },
]

export const FeaturedOperator: FeaturedOperatorProps[] = [
  {
    id: 'char_amiya2',
    name: 'Amiya',
    biography: 'The public face of Rhodes Island and its top executive. Although Amiya appears to be a young and inexperienced girl, she is universally trusted and highly qualified for her position. Amiya now leads Rhodes Island in fighting for the future of the Infected and striving to exorcise the dark shadow of Originium from the land.',
    description: 'Amiya, leader of Rhodes Island, will fight alongside you.',
    affiliation: [
      'Rhodes Island'
    ],
    background: '/bg_amiya.png',
    art: [
      {
          name: "Base",
          "link": "/char/amiya_base.png"
      },
      {
          name: "E1",
          link: "/char/amiya_e1.png"
      },
      {
          name: "E2",
          link: "/char/amiya_e2.png"
      },
    ],
    cardImage: '/card_amiya.png'
  },
  {
    id: 'char_kalts',
    name: "Kal'tsit",
    biography: "Kal'tsit, one of Rhodes Island's high-level administrative crew, and leader to Rhodes Island's medical projects. Profoundly learned in metallurgy, sociology, Originium Arts, archaeology, history and genealogy, economics, botany, geology, and other fields. In a portion of Rhodes Island operations, provides medical theory assistance and emergency aid apparatus as medical personnel. Simultaneously, active in many projects as a major constituent of Rhodes Island's command system.",
    description: "Rhodes Island Medical Department Officer-in-Charge, Kal'tsit.",
    affiliation: [
      'Rhodes Island'
    ],
    background: '/bg_kaltsit.png',
    art: [
      {
          name: "E1",
          link: "/char/kaltsit_e1.png"
      },
      {
          name: "E2",
          link: "/char/kaltsit_e2.png"
      },
    ],
    cardImage: '/card_kaltsit.png'
  },
  {
    id: 'char_chen',
    name: "Ch'en",
    biography: "Ch'en, head of the Lungmen Guard Department's Special Inspection Unit, graduated from the Royal Victorian Guard School with superb grades and outstanding achievements. During her time with the Department, she cracked down on crime, fought violent offenders, tracked down armed fugitives, and brought down international criminals. Now works at Rhodes Island, providing on-site tactical command.",
    description: "Ch'en, Special Inspection Unit Chief, L.G.D., is cooperating with Rhodes Island to fulfill the obligations outlined in her contract.",
    affiliation: [
      "Great Lungmen",
      "L.G.D."
    ],
    background: '/bg_chen.png',
    art: [
      {
          name: "E1",
          link: "/char/chen_e1.png"
      },
      {
          name: "E2",
          link: "/char/chen_e2.png"
      },
    ],
    cardImage: '/card_chen.png'
  },
  {
    id: 'char_texas',
    name: "Texas",
    biography: "Texas is a Penguin Logistics staff member who is extraordinarily skilled in single combat. She was sent to Rhodes Island as a liaison, where she assists with a variety of operations.",
    description: "Texas, employee of Penguin Logistics, will give the squad a tactical advantage with her Originium Arts at the start of every battle.",
    affiliation: [
      "Great Lungmen",
      "Penguin Logistics"
    ],
    background: '/bg_texas.png',
    art: [
      {
          name: "E1",
          link: "/char/texas_e1.png"
      },
      {
          name: "E2",
          link: "/char/texas_e2.png"
      },
    ],
    cardImage: '/card_texas.png'
  },
  {
    id: 'char_exusiai',
    name: "Exusiai",
    biography: "Exusiai is a citizen of Laterano and as such, is entitled to the privileges listed in Clauses 1-13 of the Laterano Constitution. She is an employee of Penguin Logistics who specializes in covert communication, armed escort, and other undercover activities. We suspect she is a Messenger. While contracted with Penguin Logistics, she serves as a liaison to Rhodes Island, assisting us with our operations.",
    description: "Exusiai, employee of Penguin Logistics, will clear out everything in the way using her guns.",
    affiliation: [
      "Great Lungmen",
      "Penguin Logistics"
    ],
    background: '/bg_exusiai.png',
    art: [
      {
          name: "E1",
          link: "/char/exusiai_e1.png"
      },
      {
          name: "E2",
          link: "/char/exusiai_e2.png"
      },
    ],
    cardImage: '/card_exusiai.png'
  },
  {
    id: 'char_ptilopsis',
    name: "Ptilopsis",
    biography: "...I have chosen an accurate answer for you from 20,593 search results.Operator Ptilopsis. Formerly a data maintenance specialist at the Rhine Lab company. Has made considerable accomplishments in the area of Originium Healing Arts. Experienced in medical data processing, routine medical program applications, multi-project medical operations, and other related fields.Now a member of the medical staff at Rhodes Island. She is also a member Dr. Silence's clinical team and assists with treatment programs at Rhodes Island....",
    description: "Ptilopsis, database maintainer of Rhine Lab, activated. Please enter commands to operate.",
    affiliation: [
      "Columbia",
      "Rhine Lab"
    ],
    background: '/bg_ptilopsis.png',
    art: [
      {
          name: "E1",
          link: "/char/ptilopsis_e1.png"
      },
      {
          name: "E2",
          link: "/char/ptilopsis_e2.png"
      },
    ],
    cardImage: '/card_ptilopsis.png'
  },
]

export const WorldContent: WorldContentProps[] = [
  {
    id: 1,
    name: 'originiums',
    description: 'As the world was torn apart by Catastrophes of unknown origin, Originium ore began to appear. With advances in technology, the power of the ore was harnessed to push civilization forward. But Originium ore also gave birth to the Infected...',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/item_origin.f524ea1a.png'
  },
  {
    id: 2,
    name: 'originiums arts',
    description: 'After the discovery of Originium ore, people mastered a technique for the manipulation and transformation of matter using the power of the ore. The technique came to be called Originium Arts, and often simply "Arts." Whether a person can use Arts, and what forms those Arts may take is determined by both physiology and study in the field of Originium Arts.',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/item_art_crafts.b3c2679b.png'
  },
  {
    id: 3,
    name: 'rounion',
    description: 'A radical Infected organization, Reunion rallies around the cause of Infected nationalism, rejecting racial and national identities. They aggressively push for acquisition and exploitation of Infected power. Reunion uses violence in their push for justice, having gone so far as to destroy an entire city. This led to the intervention of a pharmaceutical company called "Rhodes Island," the outcome of which is not yet clear.',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/item_reunion.6f415449.png'
  },
  {
    id: 4,
    name: 'infected',
    description: 'Those infected by Originium Ore. The fatality rate of Oripathy is theoretically 100%. The threat of contagion remains upon the carrier’s death. Combined with the threat of dangerous, unknown powers, most countries have chosen to expel the Infected. Left stateless, the Infected had no clear path to life. But recently, the Infected have begun to gather around the radical resistance movement known as "Reunion."',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/item_infected.abf73ca5.png'
  },
  {
    id: 5,
    name: 'nomadic city',
    description: 'These cities are built on special structures and can be moved. The threat of Catastrophe meant that every nation would need to be constantly on the move to avoid disaster, giving rise to this technology. The structures continued to expand as engineers developed new ways to add buildings and facilities to them, eventually becoming sprawling, mobile cities.',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/item_mortal_city.e3fff992.png'
  },
  {
    id: 6,
    name: 'rhodes island',
    description: 'The most advanced Infected research institution in the world, Rhodes Island is not afraid to employ the Infected. They are known to go deep into hazardous areas to take care of issues related to the Infected. They are currently working with many governments, corporations, and NGOs to uncover the causes of an Infected riot on an unprecedented scale. Your decisions will have a significant impact on how Rhodes Island will proceed.',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/item_rhodes.c10125c5.png'
  }
]

export const DownloadLinks:DownloadLinksProps[] = [
  {
    id: 1,
    link: 'https://apps.apple.com/us/app/id1464872022?mt=8',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/4.2928664f.svg'
  },
  {
    id: 2,
    link: 'https://play.google.com/store/apps/details?id=com.YoStarEN.Arknights',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/3.fa510ad1.png'
  },
  {
    id: 3,
    link: 'https://play.google.com/googleplaygames/com.YoStarEN.Arknights?pcampaignid=dev-website-badge-en',
    image: 'https://webusstatic.yo-star.com/ark_us_web/pc/img/1.9982db6b.png'
  }
]