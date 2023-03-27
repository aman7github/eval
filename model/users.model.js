
const mongoose = require("mongoose")

const schema = mongoose.Schema({
"name":String,
"email":String,
"gender":String,
"password": String,
"age": Number,
"city": String,
"is_married":Boolean
},{
    versionKey:false
})

const UserModels = mongoose.model("linkdinuser", schema)

module.exports={
    UserModels
}