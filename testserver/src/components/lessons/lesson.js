const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lesson = new Schema({
  lesson: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  }
})
