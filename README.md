# TheSportsDB
GraphQL wrapper for TheSportsDB
API doc - https://www.thesportsdb.com/api.php

## How to use

### Execute loal server

Two ways for execute local server

#### Using [Visual Studio Code](https://azure.microsoft.com/en-us/products/visual-studio-code/)

`.vscode/launch.json` is already prepared in place. Press `F5` key for execute server.

#### Using CLI

Type this command

```bash
cd server
yarn install
yarn run local
```

### Execute query

We are able to use [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) for execute queries and mutations.
It is installed as part of [Apollo](https://www.apollographql.com/docs/react/v3.0-beta/), please open the following url on your browser after the server is running.

http://localhost:4000/