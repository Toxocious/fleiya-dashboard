import { ATLAS_URI, MONGODB_PORT } from './auth/env_check';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import pokedexRoutes from './endpoints/pokedex';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/pokedex', pokedexRoutes);

mongoose
  .connect(ATLAS_URI)
  .then(() =>
    app.listen(MONGODB_PORT, () =>
      console.log(`[~ | Server] Running On: http://localhost:${MONGODB_PORT}`)
    )
  )
  .catch((error) => console.log(`[! | Server] Unable to connect`, error));
