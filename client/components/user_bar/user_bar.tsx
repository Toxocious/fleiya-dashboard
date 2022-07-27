import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ChevronDown } from 'tabler-icons-react';

import { Dropdown } from '@components/dropdown';

import { NavigationItems } from '@constants/navigation_items';

import MockAvatar from '@assets/avatar.jpeg';

import './user_bar.scss';

const mock_user = {
  user_id: 1,
  user_name: 'Toxocious',
  membership: 'Premium',
  avatar: MockAvatar,
};

export const UserBar = () => {
  return (
    <div className='user_bar'>
      <div className='user_bar_container'>
        <nav>
          <ul>
            {NavigationItems.map((link: any) => (
              <NavLink key={link.label} {...link} />
            ))}
          </ul>
        </nav>

        <section>
          <div className='user_data'>
            <img src={mock_user.avatar} />

            <div>
              {mock_user.user_name}
              <i>{mock_user.membership} Membership</i>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const NavLink = (link_data: any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (link_data?.links?.length > 0) {
    return (
      <li
        className={link_data.active ? 'active' : ''}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className='nav-item'>
          <span>
            <link_data.icon size={20} />
          </span>

          {link_data.label}

          <>
            <ChevronDown size={14} />
            <Dropdown links={link_data.links} hidden={!showDropdown} />
          </>
        </div>
      </li>
    );
  }

  return (
    <li className={link_data?.active ? 'active' : ''}>
      <Link to={link_data.link ?? ''} className='nav-item'>
        <span>
          <link_data.icon size={20} />
        </span>
        {link_data.label}
      </Link>
    </li>
  );
};
