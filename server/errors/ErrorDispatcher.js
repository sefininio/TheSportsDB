import {
    ApolloError,
    UserInputError,
} from 'apollo-server';

export const errorDispatcher = (message, code) => {
    throw new ApolloError(
        message,
        code || 500,
    );
}

export const userInputErrorDispatcher = (message) => {
    throw new UserInputError(
        message || 'Invalid input args.',
    );
}
