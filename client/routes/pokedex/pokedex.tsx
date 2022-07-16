import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loader, createStyles } from '@mantine/core';

import { PokedexCard } from '@components/pokedex_card';

import { POKEDEX_ENTRIES } from '@constants/pokedex_entries';

const useStyles = createStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1em',
  },
}));

export const PokedexPage = (props: any) => {
  const { classes } = useStyles();

  const ENTRIES = useSelector((state) => state);
  console.log('[~ | Redux Store] Entries:', ENTRIES);

  return (
    <div className='page'>
      <h2>Pokedex</h2>

      <div className={classes.cardContainer}>
        <Suspense fallback={<Loader color='teal' />}>
          {POKEDEX_ENTRIES.map((entry) => (
            <PokedexCard {...entry} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};
