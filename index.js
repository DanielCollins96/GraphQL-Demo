const path = require('path');
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = 4000
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
const app = express()
server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

// go to <port>/graphql
app.listen({port: PORT}, () => {
    console.log('SERVEREEE REEEEEEE');
    console.log(`Now browse to http://localhost:${PORT}${server.graphqlPath}`)
})
