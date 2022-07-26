import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GET_POKEDEX_ENTRY } from '@actions/pokedex_entry';

import { LoadingSvg } from '@components/loading_svg';

export const PokedexEntry = () => {
  const dispatch = useDispatch();

  const ROUTE_PARAMS = useParams();
  const SPECIES_ID: any = ROUTE_PARAMS.id;

  useEffect(() => {
    // @ts-ignore
    dispatch(GET_POKEDEX_ENTRY(SPECIES_ID ?? 1));
  }, [dispatch]);

  const ENTRY: any = useSelector((state) => state);
  console.log('[Client | Pokedex Entry]', ROUTE_PARAMS, SPECIES_ID, ENTRY);

  return (
    <main>
      {typeof ENTRY.POKEDEX_ENTRIES.payload == 'undefined' ? (
        <LoadingSvg />
      ) : (
        <h1>pokemon entry loaded</h1>
      )}
    </main>
  );
};
