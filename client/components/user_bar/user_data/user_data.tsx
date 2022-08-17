import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'tabler-icons-react';

import { Dropdown } from '@components/dropdown';
import { getGitHubUrl, getGoogleUrl } from '@util/get_oauth_urls';

import './user_data.scss';

export const UserData = () => {
  const location = useLocation();
  const from = ((location.state as any)?.from.pathname as string) || '/profile';

  const [showDropdown, setShowDropdown] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState('/default_avatar.png');
  const [userLinks, setUserLinks] = useState([
    {
      id: 0,
      label: 'Login With Google',
      link: getGoogleUrl(from),
      offSite: true,
    },
  ]);

  if (loggedIn) {
    setUserLinks([
      {
        id: 1,
        label: 'Settings',
        link: '/settings',
        offSite: false,
      },
      {
        id: 2,
        label: 'Log Out',
        link: '/logout',
        offSite: false,
      },
    ]);
  }

  return (
    <section
      className='user_data'
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div>
        <img src={userAvatar} />
        <ChevronDown size={14} />
      </div>

      <Dropdown links={userLinks} hidden={!showDropdown} />
    </section>
  );
};
