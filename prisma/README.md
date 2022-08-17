## Syncronizing your Prisma schema with Mongo
Upon adding or changing any models new or otherwise, ensure that you sync up with the connected MongoDB cluster by running the generate command in your terminal.

```sh
npx prisma generate
```

## Displaying database information in-browser
You can monitor database information from within your browser by running the following command in your terminal, which will open a new tab/window for Prisma Studio.

```sh
npx prisma studio
```
