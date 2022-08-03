import { createReactQueryHooks } from '@trpc/react';
import type { appRouter } from '../../trpc/routers/index';

export const trpc = createReactQueryHooks<typeof appRouter>();
