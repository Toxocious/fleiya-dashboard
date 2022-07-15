import express, { Response } from 'express';
import mongoose from 'mongoose';

import { POKEDEX_ENTRY } from '../models/pokedex_entry';

export const GET_POKEDEX_ENTRIES = async (req: any, res: Response) => {
  try {
    const POKEDEX_ENTRIES = await POKEDEX_ENTRY.find();
    res.status(200).json(POKEDEX_ENTRIES);
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
