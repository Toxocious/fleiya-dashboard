import PokeOneIcon from '@assets/PokeOne.ico';

import './header.css';

export const Header = () => {
  return (
    <header>
      <div className='header_container'>
        <div className='logo'>
          <img src={PokeOneIcon} />
          <h1>Fleiya</h1>
        </div>
      </div>
    </header>
  );
};
