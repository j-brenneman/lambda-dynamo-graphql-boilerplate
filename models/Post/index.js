import uuidV4 from 'uuid/v4';
import dynamoose from 'dynamoose';
import { initializeConnection } from '../util/initialize';
initializeConnection(dynamoose);

import { schema } from './schema';
const Model = dynamoose.model('Author', schema);

class Post {
    create({ text, dateCreated, author }) {
        const id = uuidV4();

        return Model.create({
            id,
            text,
            dateCreated,
            author
        })
        .then((post, error) => error || post);
    }

    read({ id }) {
        if (id) {
            return Model.query({ id })
                .exec()
                .then((post, error) => error || post);
        }
        return Model.scan()
            .exec()
            .then((posts, error) => error || posts);
    }

    update({ id, text, dateCreated, author }) {

        return Model.update({ id }, {
            id,
            text,
            dateCreated,
            author
        })
        .then((post, error) => error ? error : Object.assign({ id }, post));
    }

    delete({ id }) {
        return Model.delete({ id })
            .then((post, error) => error ? error : { id: post.id });
    }
}

export { Post };
