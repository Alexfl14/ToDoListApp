const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    text:
    {
        type:String,
        required:true
    }
},{timestamps: true})
module.exports = mongoose.model('ToDo', ToDoSchema)