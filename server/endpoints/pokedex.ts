import express from 'express';

import {
  GET_POKEDEX_ENTRIES,
  GET_POKEDEX_ENTRY,
} from '../controllers/pokedex_entry';

const ROUTER = express.Router();

ROUTER.get('/', GET_POKEDEX_ENTRIES);
ROUTER.get('/:id', GET_POKEDEX_ENTRY);

export default ROUTER;
