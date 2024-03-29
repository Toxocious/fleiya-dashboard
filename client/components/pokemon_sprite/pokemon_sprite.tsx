import { Link } from 'react-router-dom';

import { GetPokemonImages } from '@util/get_poke_images';

import './pokemon_sprite.scss';

interface iPokemonSprite {
  ID: string;
  Pokemon: string;
  Forme: string | null;
  Pokedex_ID: string;
  Alt_ID: string;
}

export const PokemonSprite = ({
  ID,
  Pokemon,
  Forme,
  Pokedex_ID,
  Alt_ID,
}: iPokemonSprite) => {
  const SPECIES_NAME = !Forme ? Pokemon : `${Pokemon} ${Forme}`;
  const ROUTE_PATH = Alt_ID ? Pokedex_ID : `${Pokedex_ID}.${Alt_ID}`;

  const ENTRY_SPRITES = GetPokemonImages(Pokedex_ID, Forme);

  return (
    <div key={ID} className='pokemon-sprite'>
      <img src={ENTRY_SPRITES.Sprite} alt={Pokemon} />
    </div>
  );
};
