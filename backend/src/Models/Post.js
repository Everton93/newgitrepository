const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
    author : String,
    place : String,
    descripton : String,
    hashtags : String,
    image : String,
    likes :{
        type : Number,
        default : 0,
    },
    timestamps : String,
    author : String,
});

module.exports = mongoose.model('post', postSchema);