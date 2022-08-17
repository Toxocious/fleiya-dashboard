import { Link } from 'react-router-dom';

import './dropdown.scss';

type DropdownType = {
  links: Array<LinkType>;
  hidden: Boolean;
};

type LinkType = {
  id: number;
  label: string;
  link: string;
  offSite: boolean;
};

export const Dropdown = ({ links, hidden }: DropdownType) => {
  return (
    <div className={'dropdown' + (hidden ? ' hidden' : '')}>
      {links.map((link: LinkType) => (
        <div key={link.label}>
          {link.offSite ? (
            <a href={link.link}>{link.label}</a>
          ) : (
            <Link to={link.link}>{link.label}</Link>
          )}
        </div>
      ))}
    </div>
  );
};
