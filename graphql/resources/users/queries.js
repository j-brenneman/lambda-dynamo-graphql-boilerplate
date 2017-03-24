'use strict';

import { models } from '../../connectors/models';

const resolvers = {
    authors(root, args, context) {
        const { Author } = context.models;
        const { id } = args;

        if (id) {
            return models({
                model: Author,
                operation: 'read',
                fields: { id }
            });
        }

        return models({
            model: Author,
            operation: 'read',
            fields: {}
        });
    }
}

export { resolvers };
