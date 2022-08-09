import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ChevronDown } from 'tabler-icons-react';

import { Dropdown } from '@components/dropdown';
import { UserData } from '@components/user_bar/user_data';

import {
  NavigationItems,
  NavigationItemType,
} from '@constants/navigation_items';

import './user_bar.scss';

export const UserBar = () => {
  return (
    <div className='user_bar'>
      <div className='user_bar_container'>
        <nav>
          <ul>
            {NavigationItems.map((link: NavigationItemType) => (
              <NavLink key={link.label} {...link} />
            ))}
          </ul>
        </nav>

        <UserData />
      </div>
    </div>
  );
};

const NavLink = (link_data: NavigationItemType) => {
  const { label, link, active, links } = link_data;

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li
      className={active ? 'active' : ''}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <ConditionalWrapper
        condition={link}
        wrapper={(children: any) => (
          <Link to={link ?? ''} className='nav-item'>
            {children}
          </Link>
        )}
      >
        <span className='nav-item-icon'>
          <link_data.icon size={20} />
        </span>
        <span className='nav-item-label'>{label}</span>
        {links.length > 0 && (
          <>
            <ChevronDown size={14} />
            <Dropdown
              links={links.filter((link: NavigationItemType) => !link.hidden)}
              hidden={!showDropdown}
            />
          </>
        )}
      </ConditionalWrapper>
    </li>
  );
};

const ConditionalWrapper = ({ condition, wrapper, children }: any) =>
  condition ? wrapper(children) : <div className='nav-item'>{children}</div>;
