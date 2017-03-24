'use strict';

import handleGraphql from './graphql';
import handleModels from './models';

const graphql = (event, context, callback) => {
    handleGraphql(event.body.query, event.body.variables || {})
        .then((response) => callback(null, response))
        .catch((error) => callback(error));
};

const models = (event, context, callback) => {
    handleModels(event.body.params)
        .then((response) => callback(null, response))
        .catch((error) => callback(error));
};

export { graphql, models };
