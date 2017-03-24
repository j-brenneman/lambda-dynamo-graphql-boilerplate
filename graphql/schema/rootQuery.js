'use strict';

const rootQuery = `
    type Query {
        # query to fetch authors
        authors(id: ID): [Author]

        # a query to fetch posts
        posts: [Post]
    }
`;

export { rootQuery };
