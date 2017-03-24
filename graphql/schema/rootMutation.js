'use strict';

const rootMutation = `
    type Mutation {
        # create an author with an id and name
        createAuthor(
            author: AuthorInput!
        ): Author
    }
`;

export { rootMutation };
