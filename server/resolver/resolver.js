const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
    //QUERY - GET
    Query: {
        book: async(parent, arguments, context) => {
            return await context.mongoDataMethods.getBookById(arguments.id)
        },

        author: async(parent, arguments, context) => {
            return await context.mongoDataMethods.getAuthorById(arguments.id)
        },

        books: async(parent, arguments, context) => {
            return await context.mongoDataMethods.getBooks();
        },

        authors: async(parent, arguments, context) => {
            return await context.mongoDataMethods.getAuthors();
        },

    },

    Book: {
        author: async(parent, arguments, context) => {
            const authors = await context.mongoDataMethods.getAuthors();
            return authors.find(author => author.id.toString() === parent.authorId)
        }
    },
    Author: {
        books: async(parent, arguments, context) => {
            const books = await context.mongoDataMethods.getBooks();
            return books.filter(book => book.authorId === parent.id);
        }
    },

    //MUTATION - POST 
    Mutation: {
        createAuthor: async(parent, arguments, context) => {
            return await context.mongoDataMethods.createAuthor(arguments)
        },


        createBook: async(parent, arguments, context) => {
            return await context.mongoDataMethods.createBook(arguments)
        }

    },
}

module.exports = resolvers;