## Disclaimer
This README is a heavy work-in-progress.

## Importing Data Sets
To import data sets from this directory, run the ``./import_data_sets.sh`` script, and all data sets will be imported to your cluster.

If the script doesn't work for you (or does not yet exist) you may run the following CLI command as many times as needed to manually import each data set.

**NOTE:: Substitute the database URI for your own if needed.**
```sh
## Import `/pokedex.json` into the `pokedex` collection.
mongoimport --uri mongodb+srv://<USERNAME>:<PASSWORD>@pokeone-cluster.8h5mgay.mongodb.net/pokeone --collection pokedex --type json --file "./server/data/pokedex.json" --jsonArray --verbose
```
