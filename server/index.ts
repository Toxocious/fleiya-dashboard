import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './routers/index';
import { createContext } from './routers/context';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Use TRPC middleware
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(5000);
console.log('[tRPC Server] Listening on port 5000.');
