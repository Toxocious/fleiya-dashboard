import {
  Home,
  News,
  GitPullRequest,
  AlertCircle,
  Database,
} from 'tabler-icons-react';

export const SidebarNavigation = [
  {
    id: 0,
    label: 'Home',
    color: 'teal',
    icon: Home,
    hiddenToGuests: false,
    links: [
      {
        id: 1,
        label: 'Home',
        link: '/',
        color: 'teal',
        hiddenToGuests: false,
      },
      {
        id: 2,
        label: 'News',
        link: '/news',
        color: 'teal',
        hiddenToGuests: false,
      },
    ],
  },
  {
    id: 3,
    label: 'National Dex',
    link: '/',
    icon: Database,
    hiddenToGuests: false,
    links: [
      {
        id: 4,
        label: 'Pokedex',
        link: '/pokedex',
        color: 'teal',
        hiddenToGuests: false,
      },
      {
        id: 5,
        label: 'Itemdex',
        link: '/itemdex',
        color: 'teal',
        hiddenToGuests: false,
      },
    ],
  },
  {
    id: 6,
    label: 'Guides',
    link: '/guides',
    color: 'teal',
    icon: AlertCircle,
    hiddenToGuests: false,
    links: [],
  },
  {
    id: 7,
    label: 'Map Explorer (Beta)',
    link: '/explorer',
    color: 'grape',
    icon: GitPullRequest,
    hiddenToGuests: true,
    links: [],
  },
];
