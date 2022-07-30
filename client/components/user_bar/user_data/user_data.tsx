import { useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';

import { Dropdown } from '@components/dropdown';

import './user_data.scss';

const mock_user = {
  user_id: 1,
  user_name: 'Toxocious',
  membership: 'Premium',
  avatar: '/avatar.jpeg',
  links: [
    {
      id: 1,
      label: 'Settings',
      link: '/settings',
    },
    {
      id: 2,
      label: 'Log Out',
      link: '/logout',
    },
  ],
};

export const UserData = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section
      className='user_data'
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div>
        <img src={mock_user.avatar} />
        <ChevronDown size={14} />
      </div>

      <Dropdown links={mock_user.links} hidden={!showDropdown} />
    </section>
  );
};
