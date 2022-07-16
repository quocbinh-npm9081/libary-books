const express = require('express')
const { ApolloServer } = require('apollo-server-express')


//load schema & rersolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

async function startApolloServer() {
    const app = express()

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    await server.start();

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    await server.applyMiddleware({ app });

    app.listen(port = 4000, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })
    return { server, app };

}

startApolloServer()