# Lambda Dynamodb Graphql Boilerplate

## Local Enviroment / Setup

1. `npm install`
2. `serverless offline start`
3. In another tab, `serverless dynamodb start`

To open graphiql query editor,
* `cd graphiql`
* `open index.html`

And Go to Town. Oh, example graphql queries,
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
