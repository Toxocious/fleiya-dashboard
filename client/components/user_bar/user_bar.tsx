import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ChevronDown } from 'tabler-icons-react';

import { Dropdown } from '@components/dropdown';
import { UserData } from '@components/user_bar/user_data';

import { NavigationItems } from '@constants/navigation_items';

import './user_bar.scss';

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

        <UserData />
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
          <span className='nav-item-icon'>
            <link_data.icon size={20} />
          </span>

          <span className='nav-item-label'>{link_data.label}</span>

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
        <span className='nav-item-icon'>
          <link_data.icon size={20} />
        </span>
        <span className='nav-item-label'>{link_data.label}</span>
      </Link>
    </li>
  );
};
