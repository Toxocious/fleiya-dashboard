export const GetPokemonImages = (Pokedex_ID: any, Forme: any = '') => {
  if (typeof Pokedex_ID === 'undefined') {
    return { Sprite: '', Icon: '' };
  }

  const PADDED_POKEDEX_ID: string = Pokedex_ID.padStart(3, '0');

  const FORMAT_FORME: string =
    Forme && Forme !== ''
      ? Forme.toLowerCase().replace(/(^\s*\()|(\)\s*$)/g, '')
      : '';

  let Forme_Suffix: string;
  switch (FORMAT_FORME) {
    case 'mega x':
      Forme_Suffix = '-x-mega';
      break;
    case 'mega y':
      Forme_Suffix = '-y-mega';
      break;
    case 'galar':
      Forme_Suffix = '-galar';
      break;
    case 'gigantamax':
      Forme_Suffix = '-gmax';
      break;
    case 'dynamax':
      Forme_Suffix = '-dmax';
      break;
    case 'female':
      Forme_Suffix = '-f';
      break;
    case 'male':
      Forme_Suffix = '-m';
      break;
    case '':
    case null:
      Forme_Suffix = '';
      break;
    default:
      Forme_Suffix = `-${FORMAT_FORME}`;
      break;
  }

  const POKEMON_SPRITE = `/assets/pokemon/sprites/${
    PADDED_POKEDEX_ID + Forme_Suffix
  }.png`;
  const POKEMON_ICON = `/assets/pokemon/icons/${
    PADDED_POKEDEX_ID + Forme_Suffix
  }.png`;

  return {
    Sprite: POKEMON_SPRITE,
    Icon: POKEMON_ICON,
  };
};
