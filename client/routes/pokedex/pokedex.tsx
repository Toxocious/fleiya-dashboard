import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Loader, createStyles } from '@mantine/core';

import { PokedexCard } from '@components/pokedex_card';

import { GET_POKEDEX_ENTRIES } from '@actions/pokedex_entry';

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
  const [entries, setEntries] = useState([]);
  const dispatch = useDispatch();
  const { classes } = useStyles();

  useEffect(() => {
    // @ts-ignore
    dispatch(GET_POKEDEX_ENTRIES());
  }, [entries, dispatch]);


  const ENTRIES: any = useSelector((state) => state);

  return (
    <div className='page'>
      <h2>Pokedex</h2>

      <div className={classes.cardContainer}>
        {typeof ENTRIES?.POKEDEX_ENTRIES?.payload == 'undefined' ? (
          <Loader color='teal' />
        ) : (
          ENTRIES.POKEDEX_ENTRIES.payload.map((entry: any) => (
            <PokedexCard key={entry.ID} {...entry} />
          ))
        )}
      </div>
    </div>
  );
};
