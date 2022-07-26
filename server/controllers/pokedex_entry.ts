import express, { Response } from 'express';
import mongoose from 'mongoose';

import { POKEDEX_ENTRY } from '../models/pokedex_entry';

const router = express.Router();

export const GET_POKEDEX_ENTRIES = async (req: any, res: Response) => {
  try {
    const POKEDEX_ENTRIES = await POKEDEX_ENTRY.find({
      Forme: null,
    })
      .sort({
        Pokedex_ID: 'ascending',
        Alt_ID: 'ascending',
      })
      .collation({
        locale: 'en_US',
        numericOrdering: true,
      });

    res.status(200).json(POKEDEX_ENTRIES);
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const GET_POKEDEX_ENTRY = async (req: any, res: Response) => {
  const { id } = req.params;

  try {
    const POKEDEX_ENTRIES = await POKEDEX_ENTRY.find({
      Pokedex_ID: id,
    })
      .sort({
        Alt_ID: 'ascending',
      })
      .collation({
        locale: 'en_US',
        numericOrdering: true,
      });

    res.status(200).json(POKEDEX_ENTRIES);
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default router;
