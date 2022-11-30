//user model to create a user.
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const { models } = require("mongoose");

var Schema = mongoose.Schema;

userSchema = new Schema( {

    id: Number,
    name: String,
    username: String,
    password: String,
    passwordConf: String
})

User = mongoose.model('User', userSchema);

module.exports = User;