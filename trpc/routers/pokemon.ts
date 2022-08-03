import { createRouter } from './context';
import { z } from 'zod';

export const pokemonRouter = createRouter()
  .query('allPokemon', {
    async resolve({ ctx }) {
      return await ctx.prisma.pokemon.findMany();
    },
  })
  .query('allPokemonNoFormes', {
    async resolve({ ctx }) {
      return await ctx.prisma.pokemon.findMany({
        where: { Forme: null },
      });
    },
  })
  .query('getByDexId', {
    input: z.string(),
    async resolve({ ctx }) {
      return await ctx.prisma.pokemon.findMany({
        where: { Pokedex_ID: ctx.req.input },
      });
    },
  });
