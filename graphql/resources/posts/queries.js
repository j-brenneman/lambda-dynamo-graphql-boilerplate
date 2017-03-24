'use strict';

const posts = [
    { id: 0, name: 'Tree Blog Post' },
    { id: 1, name: 'Hunting Blog Post' }
];

const resolvers = {
    posts() {
        return posts;
    }
}

export { resolvers };
