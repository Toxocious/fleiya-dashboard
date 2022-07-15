import mongoose, { Schema } from 'mongoose';

const POKEDEX_ENTRY_SCHEMA: any = new Schema({
  // Canonical National Dex ID #
  id: {
    type: Number,
  },

  // Alternative formes are tracked via their alt_id
  // Ex: Absol (non-mega) would have an alt_id of 0
  //     Absol (mega) would have an alt_id of 1
  // And so on and so forth
  alt_id: {
    type: Number,
  },

  // Base name of the Pokemon
  // Ex: Absol or Jirachi
  name: {
    type: String,
  },

  // Name of the Pokemon's forme if applicable
  // Ex: Mega or Primal
  // Is undefined by default
  forme: {
    type: String,
    default: undefined,
  },

  // Timestamp of when the Pokemon was last updated
  last_updated: {
    type: Date,
    default: new Date(),
  },
});

export const POKEDEX_ENTRY = mongoose.model(
  'Pokedex_Entry',
  POKEDEX_ENTRY_SCHEMA
);
