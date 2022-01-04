require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MDB, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports.Book = require('./books');