import { ChevronDown } from 'tabler-icons-react';

import './user_data.scss';

const mock_user = {
  user_id: 1,
  user_name: 'Toxocious',
  membership: 'Premium',
  avatar: '/avatar.jpeg',
};

export const UserData = () => {
  return (
    <section className='user_data'>
      <div>
        <img src={mock_user.avatar} />
        <ChevronDown size={14} />
      </div>
    </section>
  );
};
