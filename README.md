# Lambda Dynamodb Graphql Boilerplate

## Local Enviroment / Setup

1. `npm install`
2. `serverless offline start`
3. In another tab, `serverless dynamodb start`

To open graphiql query editor,
* `cd graphiql`
* `open index.html`

And Go to town. The graphql end is served at `localhost:3000` and dynamodb is exposed at `localhost:8000`

Oh, example graphql queries,
*Note* You can only run one query/mutation at a time, so comment out the others and press `CTR + ENTER` to run a query/mutation.

```graphql
mutation CreateAuthors {
  jacob: createAuthor(author: {
    firstName: "Jacob",
    lastName: "Brenneman",
    age: 4,
    email: "jacob@fake-gmail.com"
  }) {
    id
    displayName
  }
derek: createAuthor(author: {
    firstName: "Derek",
    lastName: "Vance",
    age: 35,
    email: "derek@fake-gmail.com"
  }) {
    id
    displayName
  }
}

query AllAuthors {
  authors {
    id
    displayName
  }
}

query Authors($john: ID) {
  john: authors(id: $john) {
    id
    displayName
    email
    age
    posts {
      id
      name
    }
  }
  paul: authors(id: $paul) {
    id
    displayName
    email
    age
    posts {
      id
      name
    }
  }
}

query Jacob($jacob: ID) {
  authors(id: $jacob) {
    id
    displayName
    email
    age
    posts {
      id
      name
    }
  }
}

query Derek($derek: ID) {
  authors(id: $derek) {
    id
    displayName
    email
    age
    posts {
      id
      name
    }
  }
}
```
