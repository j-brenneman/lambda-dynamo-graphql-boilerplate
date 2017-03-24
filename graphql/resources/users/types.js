'use strict';

const types = `
    type Author {
        id: String!
        displayName: String
        firstName: String
        lastName: String
        email: String
        age: Int
        posts: [Post]
    }

    input AuthorInput {
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
}

export { types, resolvers };
