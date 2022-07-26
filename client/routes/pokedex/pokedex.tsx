import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingSvg } from '@components/loading_svg';
import { PokedexList } from '@components/pokedex_list';

import { GET_POKEDEX_ENTRIES } from '@actions/pokedex_entry';

export const PokedexPage = (props: any) => {
  const [filter, setFilter] = useState('Gen 1');
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(GET_POKEDEX_ENTRIES());
  }, [dispatch]);

  const inputHandler = (e: any) => {
    setFilter(e.target.value.toLowerCase());
    console.log('filter:', filter);
  };

  const ENTRIES: any = useSelector((state) => state);

  return (
    <main>
      <div className='page-header'>
        <h1>Pokedex</h1>

        <aside>
          <div>
            <b>Generation</b>
            <a href='#' onClick={() => setFilter('Gen 1')}>
              I
            </a>
            <a href='#' onClick={() => setFilter('Gen 2')}>
              II
            </a>
            <a href='#' onClick={() => setFilter('Gen 3')}>
              III
            </a>
            <a href='#' onClick={() => setFilter('Gen 4')}>
              IV
            </a>
            <a href='#' onClick={() => setFilter('Gen 5')}>
              V
            </a>
            <a href='#' onClick={() => setFilter('Gen 6')}>
              VI
            </a>
            <a href='#' onClick={() => setFilter('Gen 7')}>
              VII
            </a>
          </div>
          <div>
            <input
              type='text'
              placeholder='Search For A Pok&eacute;mon'
              onChange={inputHandler}
            />
          </div>
        </aside>
      </div>

      <div className='flex-row'>
        {typeof ENTRIES?.POKEDEX_ENTRIES?.payload == 'undefined' ? (
          <LoadingSvg />
        ) : (
          <PokedexList
            PokedexEntries={ENTRIES.POKEDEX_ENTRIES.payload}
            Filter={filter}
          />
        )}
      </div>
    </main>
  );
};
