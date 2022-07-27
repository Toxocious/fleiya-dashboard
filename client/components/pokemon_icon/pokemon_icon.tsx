import { Link } from 'react-router-dom';

import { GetPokemonImages } from '@util/get_poke_images';

import './pokemon_icon.scss';

interface iPokemonIcon {
  ID: string;
  Pokemon: string;
  Forme: string;
  Pokedex_ID: string;
  Alt_ID: string;
  Has_Link: boolean;
}

export const PokemonIcon = (props: iPokemonIcon) => {
  const { ID, Pokemon, Forme, Pokedex_ID, Alt_ID, Has_Link } = props;

  const SPECIES_NAME = !Forme ? Pokemon : `${Pokemon} ${Forme}`;
  const ROUTE_PATH = Alt_ID ? Pokedex_ID : `${Pokedex_ID}.${Alt_ID}`;

  const ENTRY_SPRITES = GetPokemonImages(Pokedex_ID, Forme);

  if (Has_Link) {
    return (
      <Link to={`/pokedex/${ROUTE_PATH}`} id={SPECIES_NAME}>
        <div key={ID} className='pokedex-icon'>
          <img src={ENTRY_SPRITES.Icon} alt={Pokemon} />
        </div>
      </Link>
    );
  }

  return (
    <div key={ID} className='pokedex-icon'>
      <img src={ENTRY_SPRITES.Icon} alt={Pokemon} />
    </div>
  );
};
