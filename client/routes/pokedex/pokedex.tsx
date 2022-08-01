import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingSvg } from '@components/loading_svg';
import { PokedexList } from '@components/pokedex_list';

import { GET_POKEDEX_ENTRIES } from '@actions/pokedex_entry';

export const PokedexPage = () => {
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
      <h1 className='separator'>
        <span>Pok&eacute;dex</span>
      </h1>

      <div
        className='flex row'
        style={{
          gap: '10em',
          margin: '0 0.5em',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2>Filter By Generation</h2>
          <div className='flex row' style={{ maxWidth: '220px' }}>
            {[1, 2, 3, 4, 5, 6, 7].map((gen) => (
              <button key={gen} onClick={() => setFilter(`Gen ${gen}`)}>
                {gen}
              </button>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2>Filter By Name</h2>
          <div className='input-field'>
            <input
              type='text'
              placeholder='Search For A Pok&eacute;mon'
              onChange={inputHandler}
            />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className='flex row'>
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
