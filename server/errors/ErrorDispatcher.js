import { ApolloError } from 'apollo-server';

const errorDispatcher = (parent, args, message, code) => {
    throw new ApolloError(
        message,
        code || 500,
        {
            args,
            parent,
        }
    );
}

export default errorDispatcher;
