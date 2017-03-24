'use strict';

const types = `
    type Post {
        id: Int!
        name: String
        author: Author
    }
`;

const resolvers = {
    Post: {
        author(post) {
            if (post.id  === 0) {
                return { id: 0, name: 'Jacob' };
            }

            if (post.id === 1) {
                return { id: 1, name: 'Derek' };
            }

            return null;
        }
    }
}

export { types, resolvers };
