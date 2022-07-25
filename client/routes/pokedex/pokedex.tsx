import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingSvg } from '@components/loading_svg';
import { PokedexCard } from '@components/pokedex_card';

import { GET_POKEDEX_ENTRIES } from '@actions/pokedex_entry';

export const PokedexPage = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(GET_POKEDEX_ENTRIES());
  }, [dispatch]);

  const ENTRIES: any = useSelector((state) => state);

  return (
    <main>
      <h2>Pokedex</h2>

      <div className='flex-row'>
        {typeof ENTRIES?.POKEDEX_ENTRIES?.payload == 'undefined' ? (
          <LoadingSvg />
        ) : (
          ENTRIES.POKEDEX_ENTRIES.payload.map((entry: any) => (
            <PokedexCard key={entry.ID} {...entry} />
          ))
        )}
      </div>
    </main>
  );
};
