'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Note', new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  note: {
    type: String
  }
}))
