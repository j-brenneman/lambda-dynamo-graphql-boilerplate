'use strict';

import { types, resolvers as typeResolvers } from './types';
import { resolvers as queryResolvers } from './queries';
import { resolvers as mutationResolvers } from './mutations';

export {
    types,
    queryResolvers,
    mutationResolvers,
    typeResolvers
};
