import { combineReducers } from 'redux';

import { POKEDEX_ENTRY } from './pokedex_entry';

export const MAIN_REDUCER = combineReducers({
  POKEDEX_ENTRIES: POKEDEX_ENTRY,
});
