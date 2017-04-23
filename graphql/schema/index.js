'use strict';

import { makeExecutableSchema } from 'graphql-tools';
import { concat, merge } from 'lodash';

import { rootQuery } from './rootQuery';
import { rootMutation } from './rootMutation';

// Resources
import {
    types as userTypes,
    typeResolvers as userTypeResolvers,
    queryResolvers as userQueryResolvers,
    mutationResolvers as userMutationResolvers
} from '../resources/users';

import {
    types as postTypes,
    typeResolvers as postTypeResolvers,
    queryResolvers as postQueryResolvers
} from '../resources/posts';

const typeResolvers = Object.assign({},
    userTypeResolvers,
    postTypeResolvers
);

const queryResolvers = { Query: Object.assign({},
    userQueryResolvers,
    postQueryResolvers
)};

const mutationResolvers = { Mutation: Object.assign({},
    userMutationResolvers
)};

const resolvers = merge({},
    typeResolvers,
    queryResolvers,
    mutationResolvers
);

const rootSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`;

const typeDefs = concat([],
    rootSchema,
    rootQuery,
    rootMutation,
    userTypes,
    postTypes
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
        requireResolversForNonScalar: false
    }
});

export { schema };
