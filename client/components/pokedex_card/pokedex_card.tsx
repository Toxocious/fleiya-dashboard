import { Link } from 'react-router-dom';

import { Image, Card, Tooltip, createStyles } from '@mantine/core';

interface iPokedexCard {
  id: number;
  alt_id: number;
  name: string;
  forme: string;
  icon: string;
  sprite: string;
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
  const { id, alt_id, name, forme, icon, sprite } = props;

  const SPECIES_NAME = forme == '' ? name : `${name} (${forme})`;
  const ROUTE_PATH = alt_id == 0 ? id : `${id}.${alt_id}`;

  return (
    <Tooltip label={SPECIES_NAME} openDelay={100} color='grape'>
      <Link to={`/pokedex/${ROUTE_PATH}`}>
        <div
          key={`${id}.${alt_id}`}
          className='card-container'
          style={{ height: 32, width: 40 }}
        >
          <Card radius='md' shadow='md' className={classes.card}>
            <Card.Section>
              <Image
                className={classes.cardImage}
                src={icon}
                alt={name}
                fit='contain'
              />
            </Card.Section>
          </Card>
        </div>
      </Link>
    </Tooltip>
  );
};
