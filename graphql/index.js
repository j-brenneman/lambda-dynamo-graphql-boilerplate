'use strict';

import { graphql } from 'graphql';
import { schema } from './schema';
import { modelKeys as models } from '../models';

const graphqlHandler = (query, variables) => {
    const root = {};
    const context = { models };

    return graphql(schema, query, root, context, variables)
};

export default graphqlHandler;
