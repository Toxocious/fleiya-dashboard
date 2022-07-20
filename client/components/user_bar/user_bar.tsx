import { NavigationItems } from '@constants/navigation_items';

import MockAvatar from '@assets/avatar.jpeg';

import './user_bar.css';

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
  const sub_links =
    link_data?.links?.map((link: any) => (
      <NavLink key={link.label} {...link} />
    )) || [];

  return (
    <li className={link_data.active ? 'active' : ''}>
      <span>
        <link_data.icon size={20} />
      </span>
      {link_data.label}
    </li>
  );
};
