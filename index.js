const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    schema {
        query: Query
    }

    type Query {
        greeting: String
    }
`
// Resolver must mirror query object exactly
const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL world!'
    }
}

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 4000})
      .then((serverInfo) => console.log(serverInfo))