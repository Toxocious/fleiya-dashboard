import mongoose, { Schema } from 'mongoose';

const POKEDEX_ENTRY_SCHEMA: any = new Schema({
  ID: {
    type: String,
  },
  Pokedex_ID: {
    type: String,
  },
  Alt_ID: {
    type: String,
  },

  Pokemon: {
    type: String,
  },
  Forme: {
    type: String,
  },

  Type_Primary: {
    type: String,
  },
  Type_Secondary: {
    type: String,
  },

  Ability_1: {
    type: String,
  },
  Ability_2: {
    type: String,
  },
  Hidden_Ability: {
    type: String,
  },

  HP: {
    type: String,
  },
  Attack: {
    type: String,
  },
  Defense: {
    type: String,
  },
  SpAttack: {
    type: String,
  },
  SpDefense: {
    type: String,
  },
  Speed: {
    type: String,
  },

  EV_HP: {
    type: String,
  },
  EV_Attack: {
    type: String,
  },
  EV_Defense: {
    type: String,
  },
  EV_SpAttack: {
    type: String,
  },
  EV_SpDefense: {
    type: String,
  },
  EV_Speed: {
    type: String,
  },

  Male: {
    type: String,
  },
  Female: {
    type: String,
  },
  Genderless: {
    type: String,
  },

  Height: {
    type: String,
  },
  Weight: {
    type: String,
  },

  Catch_Rate: {
    type: String,
  },
  Egg_Cycles: {
    type: String,
  },
  Egg_Group_1: {
    type: String,
  },
  Egg_Group_2: {
    type: String,
  },

  Exp_Yield: {
    type: String,
  },

  Base_Happiness: {
    type: String,
  },

  Is_Baby: {
    type: String,
  },
  Is_Mythical: {
    type: String,
  },
  Is_Legendary: {
    type: String,
  },
});

export const POKEDEX_ENTRY = mongoose.model(
  'pokedex',
  POKEDEX_ENTRY_SCHEMA,
  'pokedex'
);
