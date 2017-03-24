'use strict';

import rp from 'request-promise';

const models = ({ model, operation, fields }) => {
    console.log('model, operation, fields', model, operation, fields);
    const params = { model, operation, fields };

    const requestOptions = {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        uri: 'http://localhost:3000/models',
        body: { params },
        json: true
    };

    return rp(requestOptions)
        .then(body => {
            console.log('model.connector.response.body', body);
            return body;
        })
        .catch(error => error);
};

export { models };


// IDEA: Possible production code below, if we want to
//       "Invoke" our models lambda instead of exposing
//        via APIGateway, we just can't do this locally (...yet)

// var aws = require('aws-sdk');
// var lambda = new aws.Lambda({ region: 'us-east-2' });
//
// const models = ({ model, operation, fields }) => {
//     console.log('In Models connector!');
//
//     const onComplete = (error, success) => {
//         console.log('Model Response Error', error);
//         console.log('Model Response Success', success);
//
//         return Promise.resolve(error || success);
//     };
//
//     const request = lambda.invoke({
//         FunctionName: 'models',
//         // InvocationType: 'Event',
//         Payload: JSON.stringify({ model, operation, fields })
//     }, onComplete);
//
//     return Promise.resolve(null)
// };
//
// export { models };
