import uuidV4 from 'uuid/v4';
import dynamoose from 'dynamoose';
import { initializeConnection } from '../util/initialize';
initializeConnection(dynamoose);

import { schema } from './schema';
const Model = dynamoose.model('Author', schema);

class Author {
    create({ firstName, lastName, email, age }) {
        const id = uuidV4();
        const displayName = `${firstName} ${lastName}`;

        return Model.create({
            id,
            displayName,
            firstName,
            lastName,
            email,
            age
        })
        .then((author, error) => error || author);
    }

    read({ id }) {
        if (id) {
            return Model.query({ id })
                .exec()
                .then((author, error) => error || author);
        }
        return Model.scan()
            .exec()
            .then((authors, error) => error || authors);
    }

    update({ id, firstName, email, lastName, age }) {
        const displayName = `${firstName} ${lastName}`;

        return Model.update({ id, email }, {
            displayName,
            firstName,
            lastName,
            age
        })
        .then((author, error) => error ? error : Object.assign({ id }, author));
    }

    delete({ id, email }) {
        return Model.delete({ id, email })
            .then((author, error) => error ? error : { id: author.id });
    }
}

export { Author };
