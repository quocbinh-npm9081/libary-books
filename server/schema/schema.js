const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Book {
        id: ID,
        name :String,
        genre: String,    
        author: Author
    }
    type Author {
        id: ID!, #require
        name :String,
        age: Int,  
        books : [Book]  
    }
    #ROOT TYPE
    type Query {
        books: [Book], # array nhieu quyen sach
        book(id: ID!): Book ,# truy xuat tim 1 quyen sach theo ID
        authors: [Author],
        author(id: ID!): Author
    }

    # MUTATION (thông qua mutation để save dữ liệu và db) 
    type Mutation{
        createAuthor(name:String, age:Int) : Author,
        createBook(name:String, genre:String, authorId: ID!) : Book
    }

`

module.exports = typeDefs;