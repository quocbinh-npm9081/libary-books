const Author = require('../models/Author')
const Book = require('../models/Book')

const getAuthors = async() => await Author.find()

const getBooks = async() => await Book.find()

const getAuthorById = async(id) => await Author.findById(id);


const getBookById = async(id) => await Book.findById(id);

const createAuthor = async(arguments) => {
    const newAuthor = await new Author({
        name: arguments.name,
        age: arguments.age
    })
    return newAuthor.save();
}

const createBook = async(arguments) => {
    const newBook = await new Book(arguments)
    return newBook.save();
}
const mongoDataMethods = {
    getAuthorById,
    getBookById,
    getAuthors,
    getBooks,
    createAuthor,
    createBook
}

module.exports = mongoDataMethods;