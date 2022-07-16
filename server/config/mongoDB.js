const mongoose = require('mongoose');


const connect = async() => {
    try {
        await mongoose.connect('mongodb+srv://louisq:0979853419binh@cluster0.2v4gmfj.mongodb.net/?retryWrites=true&w=majority');
        console.log("connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = { connect };