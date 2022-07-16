const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    name: {
        type: String,
        require
    },
    age: {
        type: Number
    }
})

module.exports = model("Book", BookSchema);