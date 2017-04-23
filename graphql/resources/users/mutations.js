'use strict';

import { models } from '../../connectors/models';

const resolvers = {
    createAuthor(root, args, context) {
        const { Author } = context.models;
        const { author } = args;

        return models({
            model: Author,
            operation: 'create',
            fields: author
        });
    },

    updateAuthor(root, args, context) {
        const { Author } = context.models;
        const { author } = args;

        return models({
            model: Author,
            operation: 'update',
            fields: author
        });
    }
};

export { resolvers };
