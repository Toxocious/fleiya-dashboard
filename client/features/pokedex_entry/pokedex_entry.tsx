import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GET_POKEDEX_ENTRY } from '@actions/pokedex_entry';

import { LoadingSvg } from '@components/loading_svg';
import { PokemonIcon } from '@components/pokemon_icon';
import { PokemonSprite } from '@components/pokemon_sprite';

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
          <div className='page-header center'>
            <h1>Pok&eacute;dex Entry</h1>
          </div>

          <aside>
            <Card variant='flex-center column' background='grassland'>
              <Card.Section
                style={{
                  height: '12em',
                }}
              >
                <PokemonSprite {...LEADING_ENTRY} />
              </Card.Section>

              <Card.Section
                variant='glass'
                style={{
                  width: '100%',
                  borderRadius: '0 0 0.3em 0.3em',
                }}
              >
                <h2
                  style={{
                    margin: '0.5em',
                  }}
                >
                  {LEADING_ENTRY.Pokemon}
                </h2>
              </Card.Section>
            </Card>

            <div className='flex-row'>
              {ENTRY.POKEDEX_ENTRIES.payload.length > 0 &&
                ENTRY.POKEDEX_ENTRIES.payload.map((FORME: any) => {
                  if (FORME.Alt_ID != 0) {
                    return <PokemonIcon key={FORME._id} {...FORME} />;
                  }
                })}
            </div>
          </aside>
        </main>
      )}
    </>
  );
};
