import { useParams } from 'react-router-dom';

import { POKEDEX_ENTRIES } from 'client/constants/pokedex_entries';

export const PokedexEntry = () => {
  const ROUTE_PARAMS = useParams();
  const SPECIES_ID: any = ROUTE_PARAMS.id;

  const SPECIES_DATA: any = POKEDEX_ENTRIES.filter(
    (entry) => entry.id == SPECIES_ID
  )?.[0];

  if (typeof SPECIES_DATA === 'undefined') {
    return (
      <div className='page'>
        <h2>ERROR</h2>
        There is no information on this species of Pok&eacute;mon.
      </div>
    );
  }

  return (
    <div className='page'>
      <h2>{SPECIES_DATA.name}</h2>
    </div>
  );
};
