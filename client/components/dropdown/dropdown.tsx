import { Link } from 'react-router-dom';

import './dropdown.scss';

export const Dropdown = (props: any) => {
  const { links, hidden } = props;

  return (
    <div className={'dropdown' + (hidden ? ' hidden' : '')}>
      {links.map((link: any) => (
        <div key={link.label}>
          <Link to={link.link}>{link.label}</Link>
        </div>
      ))}
    </div>
  );
};
