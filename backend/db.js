const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://himralgarg:husn172003@cluster0.p97vpsm.mongodb.net/")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todos
}