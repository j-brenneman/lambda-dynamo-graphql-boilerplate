import { Schema } from 'dynamoose';

const schema = new Schema({
    id: {
        type: String,
        hashKey: true
    },
    text: {
        type: String
    },
    dateCreated: {
        type: Date
    },
    author: {
        type: String
    }
}, {
    throughput: { read: 10, write: 10 }
});

export { schema };
