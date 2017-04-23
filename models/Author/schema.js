import { Schema } from 'dynamoose';

const schema = new Schema({
    id: {
        type: String,
        hashKey: true
    },
    displayName: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        rangeKey: true,
        index: true,
        type: String
    },
    age: {
        type: Number
    }
}, {
    throughput: { read: 10, write: 10 }
});

export { schema };
