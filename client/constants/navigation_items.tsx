import { Home, Apps, Database, Tools, Icon } from 'tabler-icons-react';

export type NavigationItemType = {
  id: number;
  label: string;
  icon: any;
  link?: string;
  active?: boolean;
  links: Array<NavigationItemType>;
  hidden?: boolean;
};

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
    id: 1,
    label: 'Guides',
    link: '/guides',
    icon: Apps,
    active: false,
    links: [],
  },
  {
    id: 2,
    label: 'National Dex',
    icon: Database,
    active: false,
    links: [
      {
        id: 4,
        label: 'Pokedex',
        link: '/pokedex',
        icon: '',
        links: [],
      },
      {
        id: 5,
        label: 'Itemdex',
        link: '/itemdex',
        icon: '',
        links: [],
      },
      {
        id: 6,
        label: 'Movedex',
        link: '/movedex',
        icon: '',
        links: [],
      },
      {
        id: 7,
        label: 'NPCs',
        link: '/npcs',
        icon: '',
        links: [],
      },
    ],
  },
  {
    id: 3,
    label: 'Tools',
    icon: Tools,
    active: false,
    links: [
      {
        id: 8,
        label: 'Hidden Power Calculator',
        link: '/hp_calc',
        icon: '',
        links: [],
      },
      {
        id: 9,
        label: 'Trainer Level Calculator',
        link: '/tl_calc',
        icon: '',
        links: [],
      },
      {
        id: 10,
        label: 'Pokemon Stat Calc',
        link: '/pkmn_calc',
        icon: '',
        links: [],
        hidden: true,
      },
    ],
  },
];
