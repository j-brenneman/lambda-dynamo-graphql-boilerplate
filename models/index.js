'use strict';

import { mapValues } from 'lodash';

import { models } from './models';

const modelKeys = mapValues(models, (value, key) => key);

const runOperation = ({ model, operation, fields }) => {
    const modelInstance = new models[modelKeys[model]]();
    const dbOperation = modelInstance[operation];

    return dbOperation.call(modelInstance, fields);
};

export { modelKeys };
export default runOperation;
