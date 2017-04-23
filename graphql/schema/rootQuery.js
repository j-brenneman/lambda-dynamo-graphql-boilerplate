'use strict';

const rootQuery = /* GraphQL */`
    type Query {
        # query to fetch authors
        authors(id: ID): [Author]

        # a query to fetch posts
        posts: [Post]
    }
`;

export { rootQuery };
