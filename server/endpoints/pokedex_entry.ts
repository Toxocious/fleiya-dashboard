import express from 'express';

import { GET_POKEDEX_ENTRIES } from '../controllers/pokedex_entry';

const ROUTER = express.Router();

ROUTER.get('/', GET_POKEDEX_ENTRIES);

export default ROUTER;
