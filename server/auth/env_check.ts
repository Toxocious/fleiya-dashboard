import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, './../../.env') });

export const ATLAS_URI = process.env.ATLAS_URI ?? '';
if (ATLAS_URI == '') {
  console.log('ATLAS_URL =', ATLAS_URI);
  console.log(`[! | Error] ATLAS_URI env var is missing`);
  process.exit(1);
}

export const MONGODB_PORT = process.env.MONGODB_PORT ?? '';
if (MONGODB_PORT == '') {
  console.log(`[! | Error] MONGODB_PORT env var is missing`);
  process.exit(1);
}

export const EXPRESS_SECRET = process.env.EXPRESS_SECRET ?? '';
if (EXPRESS_SECRET == '') {
  console.log(`[! | Error] EXPRESS_SECRET env var is missing`);
  process.exit(1);
}

export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID ?? '';
if (GITHUB_CLIENT_ID == '') {
  console.log(`[! | Error] GITHUB_CLIENT_ID env var is missing`);
  process.exit(1);
}

export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET ?? '';
if (GITHUB_CLIENT_SECRET == '') {
  console.log(`[! | Error] GITHUB_CLIENT_SECRET env var is missing`);
  process.exit(1);
}

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? '';
if (GOOGLE_CLIENT_ID == '') {
  console.log(`[! | Error] GOOGLE_CLIENT_ID env var is missing`);
  process.exit(1);
}

export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? '';
if (GOOGLE_CLIENT_SECRET == '') {
  console.log(`[! | Error] GOOGLE_CLIENT_SECRET env var is missing`);
  process.exit(1);
}
