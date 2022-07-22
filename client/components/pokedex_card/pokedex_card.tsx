import { Link } from 'react-router-dom';

import { GetPokemonImages } from '@util/get_poke_images';

import './pokedex_card.css';

interface iPokedexCard {
  ID: string;
  Pokemon: string;
  Forme: string;
  Pokedex_ID: string;
  Alt_ID: string;
}

export const PokedexCard = (props: iPokedexCard) => {
  const { ID, Pokemon, Forme, Pokedex_ID, Alt_ID } = props;

  const SPECIES_NAME = !Forme ? Pokemon : `${Pokemon} ${Forme}`;
  const ROUTE_PATH = Alt_ID ? Pokedex_ID : `${Pokedex_ID}.${Alt_ID}`;

  const ENTRY_SPRITES = GetPokemonImages(Pokedex_ID, Forme);

  return (
    <Link to={`/pokedex/${ROUTE_PATH}`} id={SPECIES_NAME}>
      <div key={ID} className='pokedex-icon'>
        <img src={ENTRY_SPRITES.Icon} alt={Pokemon} />
      </div>
    </Link>
  );
};
