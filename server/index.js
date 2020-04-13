import { ApolloServer } from 'apollo-server';
import depthLimit from 'graphql-depth-limit'
import resolvers from './resolvers';
import typeDefs from './resources';
import errorFormatter from './errors/ErrorFormatter';

const validationRules = [
    depthLimit(3),
];

const apiKey = process.env.API_KEY || '1';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        baseUrl: `https://www.thesportsdb.com/api/v1/json/${apiKey}/`,
    },
    formatError: errorFormatter,
    validationRules,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});