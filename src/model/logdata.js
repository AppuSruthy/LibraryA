const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    name : String,
    email :String,
    password :String,
    phone : String
});

var Logdata = mongoose.model('logdata',logSchema);
module.exports = Logdata;