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
    }
})

module.exports = model("Author", AuthorSchema);