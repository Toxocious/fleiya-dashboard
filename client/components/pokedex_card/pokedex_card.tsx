import { Link } from 'react-router-dom';

import { Image, Card, Tooltip, createStyles } from '@mantine/core';

interface iPokedexCard {
  ID: string;
  Pokemon: string;
  Forme: String;
  Pokedex_ID: string;
  Alt_ID: string;
}

const useStyles = createStyles((theme) => ({
  card: {
    'backgroundColor': 'transparent',
    'backdropFilter': 'blur(2px) saturate(100%)',
    'border': '1px solid rgba(255, 255, 255, 0.125)',
    'height': 40,
    'width': 48,
    '&:hover': {
      backgroundColor: 'rgba(97, 32, 201, 0.15)',
      cursor: 'pointer',
    },
  },

  cardImage: {},
}));

export const PokedexCard = (props: iPokedexCard) => {
  const { classes } = useStyles();
  const { ID, Pokemon, Forme, Pokedex_ID, Alt_ID } = props;

  const SPECIES_NAME = !Forme ? Pokemon : `${Pokemon} ${Forme}`;
  const ROUTE_PATH = Alt_ID ? Pokedex_ID : `${Pokedex_ID}.${Alt_ID}`;

  return (
    <Tooltip label={SPECIES_NAME} openDelay={100} color='grape'>
      <Link to={`/pokedex/${ROUTE_PATH}`}>
        <div
          key={ID}
          className='card-container'
          style={{ height: 32, width: 40 }}
        >
          <Card radius='md' shadow='md' className={classes.card}>
            <Card.Section>
              <Image
                className={classes.cardImage}
                alt={Pokemon}
                fit='contain'
              />
            </Card.Section>
          </Card>
        </div>
      </Link>
    </Tooltip>
  );
};
