const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');


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

// app.get('/', (req, res) => {
    //     res.send('Way 3 Sexy')
    // })
const server = new ApolloServer({typeDefs, resolvers});
const app = express()
server.applyMiddleware({ app });

app.listen({port: 4000}, () => {
    console.log('SERVEREEE');
})
