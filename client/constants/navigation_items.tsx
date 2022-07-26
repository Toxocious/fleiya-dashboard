import { Home, Apps, Database, Tools } from 'tabler-icons-react';

export const NavigationItems = [
  {
    id: 0,
    label: 'Home',
    link: '/',
    icon: Home,
    active: true,
    links: [],
  },
  {
    id: 7,
    label: 'Guides',
    link: '/guides',
    icon: Apps,
    active: false,
    links: [],
  },
  {
    id: 4,
    label: 'National Dex',
    link: '/',
    icon: Database,
    active: false,
    links: [
      {
        id: 5,
        label: 'Pokedex',
        link: '/pokedex',
      },
      {
        id: 6,
        label: 'Itemdex',
        link: '/itemdex',
      },
    ],
  },
  {
    id: 8,
    label: 'Tools',
    icon: Tools,
    active: false,
    links: [
      {
        id: 9,
        label: 'Hidden Power Calculator',
        link: '/hp_calc',
      },
      {
        id: 10,
        label: 'Trainer Level Calculator',
        link: '/tl_calc',
      },
      {
        id: 11,
        label: 'Pokemon Stat Calc',
        link: '/pkmn_calc',
      },
    ],
  },
];
