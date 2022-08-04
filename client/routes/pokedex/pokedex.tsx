import { useState } from 'react';
import { trpc } from '@hooks/trpc';

import { LoadingSvg } from '@components/loading_svg';
import { PokedexList } from '@components/pokedex_list';

export const PokedexPage = () => {
  const [filter, setFilter] = useState('Gen 1');

  const { data, isFetching } = trpc.useQuery(['pokemon.allPokemonNoFormes']);

  const inputHandler = (e: any) => {
    setFilter(e.target.value.toLowerCase());
  };

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
        {isFetching || typeof data?.json == 'undefined' ? (
          <LoadingSvg />
        ) : (
          <PokedexList PokedexEntries={data?.json} Filter={filter} />
        )}
      </div>
    </main>
  );
};
