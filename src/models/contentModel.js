const mongoose = require('mongoose');

const contentSchema = {
    title: String,
    description: String,
    pictureURL: String,
    address: String
}

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;
