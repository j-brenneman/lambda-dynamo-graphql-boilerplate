'use strict';

const rootMutation = /* GraphQL */`
    type Mutation {
        # create an author with an id and name
        createAuthor(
            author: AuthorCreateInput!
        ): Author

        updateAuthor(
            author: AuthorEditInput!
        ): Author
    }
`;

export { rootMutation };
