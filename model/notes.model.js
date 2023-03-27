

const mongoose = require("mongoose")

const schema = mongoose.Schema({
"title":String,
"body":String,
"device":String,
"no_of_comments": Number,
"userId":String

},{
    versionKey:false
})

const NoteModels = mongoose.model("linkdinnotes", schema)

module.exports={
    NoteModels
}