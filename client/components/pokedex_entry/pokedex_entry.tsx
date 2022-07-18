import { useParams } from 'react-router-dom';

export const PokedexEntry = () => {
  const ROUTE_PARAMS = useParams();
  const SPECIES_ID: any = ROUTE_PARAMS.id;

  if (typeof SPECIES_ID === 'undefined') {
    return (
      <div className='page'>
        <h2>ERROR</h2>
        There is no information on this species of Pok&eacute;mon.
      </div>
    );
  }

  return (
    <div className='page'>
      <h2>{SPECIES_ID.name}</h2>
    </div>
  );
};
