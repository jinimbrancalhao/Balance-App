const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Goal = new Schema(
  {
    title: { type: String, required: true },
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('goals', Goal)
