# TheSportsDB
GraphQL wrapper for TheSportsDB
API doc - https://www.thesportsdb.com/api.php

# Example of query

Query for get types of schema

```
query {
    player(id:34145937) {
        name
        sportType
        nationality
    }
}
```

Query for get all fields of `Player`

```
query {
    __type(name:"Player") {
        name
        fields {
            name
        }
    }
}
```

Query for get information of `Player` on `id:34145937`

```
query {
    player(id:34145937) {
        name
        sportType
        nationality
    }
}
```