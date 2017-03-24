import { Schema } from 'dynamoose';

const schema = new Schema({
    id: {
        type: String,
        hashKey: true
    },
    displayName: {
        type: String,
        rangeKey: true,
        index: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    throughput: { read: 10, write: 10 }
});

export { schema };
