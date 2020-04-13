# TheSportsDB
GraphQL wrapper for TheSportsDB
API doc - https://www.thesportsdb.com/api.php

## How to use

### Execute loal server

Two ways for execute local server

#### Using [Visual Studio Code](https://azure.microsoft.com/en-us/products/visual-studio-code/)

Modify configurations of `launch.json`.

```json:.vscode/launch.json
{
    ...
    "configurations": [
        {
            ...
            "runtimeExecutable": null, // Write your node path. (run: 'which node' on terminal)
            ...
    ]
}
```

Press `F5` for run debugger.

#### Using CLI

Type this command

```bash
cd server
npm run local
```

### Execute query

We are able to install [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) for execute query.

```bash
brew cask install graphql-playground
```