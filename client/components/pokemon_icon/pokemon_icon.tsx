import { Link } from 'react-router-dom';

import { GetPokemonImages } from '@util/get_poke_images';

interface iPokemonIcon {
  ID: string;
  Pokemon: string;
  Forme: string;
  Pokedex_ID: string;
  Alt_ID: string;
  Has_Link: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const PokemonIcon = ({
  ID,
  Pokemon,
  Forme,
  Pokedex_ID,
  Alt_ID,
  Has_Link,
  onClick,
}: iPokemonIcon) => {
  const SPECIES_NAME = !Forme ? Pokemon : `${Pokemon} ${Forme}`;
  const ROUTE_PATH = Alt_ID ? Pokedex_ID : `${Pokedex_ID}.${Alt_ID}`;

  const ENTRY_SPRITES = GetPokemonImages(Pokedex_ID, Forme);

  if (Has_Link) {
    return (
      <Link
        key={ID}
        to={`/pokedex/${ROUTE_PATH}`}
        id={SPECIES_NAME}
        className='button pokemon-icon'
      >
        <img src={ENTRY_SPRITES.Icon} alt={Pokemon} />
      </Link>
    );
  }

  return (
    <div key={ID} className='button pokemon-icon' onClick={onClick}>
      <img src={ENTRY_SPRITES.Icon} alt={Pokemon} />
    </div>
  );
};
