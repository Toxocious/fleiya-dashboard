import { Link } from 'react-router-dom';

import { POKEDEX_ENTRIES } from '@constants/pokedex_entries';

export const PokedexPage = (props: any) => {
  return (
    <div className='page'>
      <h2>Pokedex</h2>
      {POKEDEX_ENTRIES.map((entry) => (
        <Link key={entry.id} to={'/pokedex/' + entry.id}>
          {entry.name}
        </Link>
      ))}
    </div>
  );
};
