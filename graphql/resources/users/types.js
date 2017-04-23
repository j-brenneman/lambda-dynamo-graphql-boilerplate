'use strict';

const types = /* GraphQL */`
    type Author {
        id: String!
        displayName: String
        firstName: String
        lastName: String
        email: String
        age: Int
        posts: [Post]
    }

    input AuthorCreateInput {
        firstName: String!
        lastName: String!
        email: String!
        age: Int
    }

    input AuthorEditInput {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        age: Int
    }
`;

const resolvers = {
    Author: {
        posts(author) {
            return [];
        }
    }
};

export { types, resolvers };
