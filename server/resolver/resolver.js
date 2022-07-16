const { books, authors } = require('../data/static');

const resolvers = {
    //QUERY - GET
    Query: {
        book: (parent, arguments) => books.find(book => book.id.toString() === arguments.id),
        author: (parent, arguments) => authors.find(author => author.id.toString() === arguments.id),
        books: () => books,
        authors: () => authors,
    },

    Book: {
        author: (parent, arguments) => {
            return authors.find(author => author.id.toString() === parent.authorId)
        }
    },
    Author: {
        books: (parent, arguments) => {
            return books.filter(book => book.authorId === parent.id);
        }
    },

    //MUTATION - POST 
    Mutation: {
        createAuthor: (parent, arguments) => arguments,
        createBook: (parent, arguments) => arguments

    },
}

module.exports = resolvers;