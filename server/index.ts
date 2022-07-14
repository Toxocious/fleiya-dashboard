import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, './.env') });

if (typeof process.env.ATLAS_URI === 'undefined') {
  console.log(`[! | Error] ATLAS_URI env var is missing`);
  process.exit(1);
}

if (typeof process.env.MONGODB_PORT === 'undefined') {
  console.log(`[! | Error] MONGODB_PORT env var is missing`);
  process.exit(1);
}

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() =>
    app.listen(process.env.MONGODB_PORT, () =>
      console.log(
        `[~ | Server] Running On: http://localhost:${process.env.MONGODB_PORT}`
      )
    )
  )
  .catch((error) => console.log(`[! | Error] ${error} did not connect`));
