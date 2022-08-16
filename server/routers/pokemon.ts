import { createRouter } from './context';
import { z } from 'zod';

export const pokemonRouter = createRouter()
  .query('getPokemon', {
    input: z
      .object({
        POKEDEX_ID: z.string(),
      })
      .nullish(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.pokemon.findMany({
        where: { Pokedex_ID: input?.POKEDEX_ID ?? '1' },
      });
    },
  })
  .query('allPokemonNoFormes', {
    async resolve({ ctx }) {
      return await ctx.prisma.pokemon.findMany({
        where: { Forme: null },
      });
    },
  });
