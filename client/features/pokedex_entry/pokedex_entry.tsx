import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight, Settings } from 'tabler-icons-react';

import { GET_POKEDEX_ENTRY } from '@actions/pokedex_entry';

import { LoadingSvg } from '@components/loading_svg';
import { PokemonIcon } from '@components/pokemon_icon';
import { PokemonSprite } from '@components/pokemon_sprite';
import { ProgressBar } from '@components/progress_bar';

import { Card } from '@components/card';

export const PokedexEntry = () => {
  const dispatch = useDispatch();

  const ROUTE_PARAMS = useParams();
  const SPECIES_ID: any = ROUTE_PARAMS.id;

  useEffect(() => {
    // @ts-ignore
    dispatch(GET_POKEDEX_ENTRY(SPECIES_ID ?? 1));
  }, [dispatch]);

  const ENTRY: any = useSelector((state) => state);
  const LEADING_ENTRY: any = ENTRY?.POKEDEX_ENTRIES?.payload?.[0];

  console.log(
    '[Client | Pokedex Entry]',
    ROUTE_PARAMS,
    ENTRY?.POKEDEX_ENTRIES?.payload?.[0]
  );

  return (
    <>
      {typeof ENTRY.POKEDEX_ENTRIES.payload == 'undefined' ? (
        <LoadingSvg />
      ) : (
        <main>
          <div className='page-header'>
            <h2>
              Pok&eacute;dex <ChevronRight /> {LEADING_ENTRY.Pokemon}
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
                  <PokemonSprite {...LEADING_ENTRY} />
                </Card.Section>
              </Card>

              <div className='flex row'>
                {ENTRY.POKEDEX_ENTRIES.payload.length > 0 &&
                  ENTRY.POKEDEX_ENTRIES.payload.map((FORME: any) => {
                    if (FORME.Alt_ID != 0) {
                      return <PokemonIcon key={FORME._id} {...FORME} />;
                    }
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
                          currentValue={parseInt(LEADING_ENTRY[stat])}
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
