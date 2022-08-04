import { PokemonIcon } from '@components/pokemon_icon';

export const PokedexList = (props: any) => {
  const { PokedexEntries, Filter } = props;

  const FILTERED_LIST = PokedexEntries.json.filter((ENTRY: any) => {
    switch (Filter) {
      case '':
        return ENTRY;

      case 'Gen 1':
        return ENTRY.Pokedex_ID <= 151;

      case 'Gen 2':
        return ENTRY.Pokedex_ID >= 152 && ENTRY.Pokedex_ID <= 251;

      case 'Gen 3':
        return ENTRY.Pokedex_ID >= 252 && ENTRY.Pokedex_ID <= 386;

      case 'Gen 4':
        return ENTRY.Pokedex_ID >= 387 && ENTRY.Pokedex_ID <= 493;

      case 'Gen 5':
        return ENTRY.Pokedex_ID >= 494 && ENTRY.Pokedex_ID <= 649;

      case 'Gen 6':
        return ENTRY.Pokedex_ID >= 650 && ENTRY.Pokedex_ID <= 721;

      case 'Gen 7':
        return ENTRY.Pokedex_ID >= 722 && ENTRY.Pokedex_ID <= 809;

      default:
        return ENTRY.Pokemon.toLowerCase().includes(Filter);
    }
  });

  return (
    <div className='flex row'>
      {FILTERED_LIST.map((entry: any) => (
        <PokemonIcon key={entry.ID} Has_Link={true} {...entry} />
      ))}
    </div>
  );
};
