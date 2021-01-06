const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const authorSchema = new Schema({

    name : String,
    authorname : String,
    language: String,
    books: String,
    image : String

});

var Authordata = mongoose.model('authordata',authorSchema);

module.exports = Authordata;