import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const ATLAS_URI = process.env.ATLAS_URI ?? '';
if (typeof ATLAS_URI === 'undefined' || ATLAS_URI == '') {
  console.log(`[! | Error] ATLAS_URI env var is missing`);
  process.exit(1);
}

export const MONGODB_PORT = process.env.MONGODB_PORT ?? '';
if (typeof MONGODB_PORT === 'undefined' || MONGODB_PORT == '') {
  console.log(`[! | Error] MONGODB_PORT env var is missing`);
  process.exit(1);
}

export const EXPRESS_SECRET = process.env.EXPRESS_SECRET ?? '';
if (typeof EXPRESS_SECRET === 'undefined' || EXPRESS_SECRET == '') {
  console.log(`[! | Error] EXPRESS_SECRET env var is missing`);
  process.exit(1);
}

export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID ?? '';
if (typeof GITHUB_CLIENT_ID === 'undefined' || GITHUB_CLIENT_ID == '') {
  console.log(`[! | Error] GITHUB_CLIENT_ID env var is missing`);
  process.exit(1);
}

export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET ?? '';
if (typeof GITHUB_CLIENT_SECRET === 'undefined' || GITHUB_CLIENT_SECRET == '') {
  console.log(`[! | Error] GITHUB_CLIENT_SECRET env var is missing`);
  process.exit(1);
}

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? '';
if (typeof GOOGLE_CLIENT_ID === 'undefined' || GOOGLE_CLIENT_ID == '') {
  console.log(`[! | Error] GOOGLE_CLIENT_ID env var is missing`);
  process.exit(1);
}

export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? '';
if (typeof GOOGLE_CLIENT_SECRET === 'undefined' || GOOGLE_CLIENT_SECRET == '') {
  console.log(`[! | Error] GOOGLE_CLIENT_SECRET env var is missing`);
  process.exit(1);
}
