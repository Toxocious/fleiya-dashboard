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
    route: '/',
    color: 'teal',
    icon: <Home size={16} />,
    hiddenToGuests: false,
  },
  {
    id: 1,
    label: 'News',
    route: '/news',
    color: 'teal',
    icon: <News size={16} />,
    hiddenToGuests: false,
  },
  {
    id: 2,
    label: 'Pokedex',
    route: '/pokedex',
    color: 'teal',
    icon: <Database size={16} />,
    hiddenToGuests: false,
  },
  {
    id: 3,
    label: 'Itemdex',
    route: '/itemdex',
    color: 'teal',
    icon: <Database size={16} />,
    hiddenToGuests: false,
  },
  {
    id: 4,
    label: 'Guides',
    route: '/guides',
    color: 'teal',
    icon: <AlertCircle size={16} />,
    hiddenToGuests: false,
  },
  {
    id: 5,
    label: 'Map Explorer (Beta)',
    route: '/explorer',
    color: 'grape',
    icon: <GitPullRequest size={16} />,
    hiddenToGuests: true,
  },
];
