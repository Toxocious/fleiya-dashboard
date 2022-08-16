// src/server/router/index.ts
import { createRouter } from './context';

import { pokemonRouter } from './pokemon';

export const appRouter = createRouter().merge('pokemon.', pokemonRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
