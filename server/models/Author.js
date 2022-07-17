const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
    name: {
        type: String,
        require
    },
    genre: {
        type: String
    },
    authorId: {
        type: String
    },
    age: {
        type: Number
    }
})

module.exports = model("Author", AuthorSchema);