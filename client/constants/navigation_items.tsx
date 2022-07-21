import { Home, Apps, Database, Tools } from 'tabler-icons-react';

export const NavigationItems = [
  {
    id: 0,
    label: 'Home',
    link: '/',
    color: 'teal',
    icon: Home,
    active: true,
    links: [],
  },
  {
    id: 7,
    label: 'Guides',
    link: '/guides',
    color: 'teal',
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
        color: 'teal',
      },
      {
        id: 6,
        label: 'Itemdex',
        link: '/itemdex',
        color: 'teal',
      },
    ],
  },
  {
    id: 8,
    label: 'Tools',
    color: 'teal',
    icon: Tools,
    active: false,
    links: [
      {
        id: 9,
        label: 'Hidden Power Calculator',
        link: '/hp_calc',
        color: 'teal',
      },
      {
        id: 10,
        label: 'Trainer Level Calculator',
        link: '/tl_calc',
        color: 'teal',
      },
    ],
  },
];
