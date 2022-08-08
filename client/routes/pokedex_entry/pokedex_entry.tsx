import { useParams } from 'react-router-dom';
import { ChevronRight, Settings } from 'tabler-icons-react';

import { trpc } from '@hooks/trpc';

import { LoadingSvg } from '@components/loading_svg';
import { PokemonIcon } from '@components/pokemon_icon';
import { PokemonSprite } from '@components/pokemon_sprite';
import { ProgressBar } from '@components/progress_bar';

import { Card } from '@components/card';

export const PokedexEntry = () => {
  const ROUTE_PARAMS = useParams();
  const SPECIES_ID: string = ROUTE_PARAMS.id ?? '1';

  const { data } = trpc.useQuery([
    'pokemon.getPokemon',
    { POKEDEX_ID: SPECIES_ID },
  ]);

  return (
    <>
      {typeof data == 'undefined' ? (
        <LoadingSvg fullPage />
      ) : (
        <main>
          <div className='page-header'>
            <h2>
              Pok&eacute;dex <ChevronRight /> {data[0].Pokemon}
            </h2>

            <aside>
              <button>
                <Settings />
              </button>
            </aside>
          </div>

          <section className='flex row space-around'>
            <div className='flex col'>
              <Card variant='flex-center column' background='grassland'>
                <Card.Section
                  style={{
                    height: '12em',
                  }}
                >
                  <PokemonSprite
                    ID={data[0].ID}
                    Pokemon={data[0].Pokemon}
                    Forme={data[0].Forme}
                    Pokedex_ID={data[0].Pokedex_ID}
                    Alt_ID={data[0].Alt_ID}
                  />
                </Card.Section>
              </Card>

              <div className='flex row'>
                {data.length > 0 &&
                  data
                    .filter((pokemon) => pokemon.Forme)
                    .map((FORME: any) => {
                      return <PokemonIcon key={FORME.Alt_ID} {...FORME} />;
                    })}
              </div>
            </div>

            <div>
              <h2 className='separator'>
                <span>Base Stats</span>
              </h2>

              <table>
                <tbody>
                  {[
                    'HP',
                    'Attack',
                    'Defense',
                    'SpAttack',
                    'SpDefense',
                    'Speed',
                  ].map((stat) => (
                    <tr key={stat}>
                      <td>
                        <b>{stat}</b>
                      </td>
                      <td>
                        <ProgressBar
                          // @ts-ignore
                          currentValue={parseInt(data[0][stat])}
                          maxValue={258}
                          stat={stat}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <br />

          <section>
            <div>
              <h2 className='separator'>
                <span>Obtainable Locations</span>
              </h2>
            </div>

            <div className='flex col'>
              <table className='styled wide text-center'>
                <thead>
                  <tr>
                    <th>Map Name</th>
                    <th>Time Of Day</th>
                    <th>Encounter Odds</th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <tr key={item}>
                      <td>Random Zone #{item}</td>
                      <td>
                        {Math.floor(Math.random() * 4) <= 1 ? (
                          <b>Morning</b>
                        ) : (
                          <b>Evening</b>
                        )}
                      </td>
                      <td>{Math.floor(Math.random() * 15)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )}
    </>
  );
};
