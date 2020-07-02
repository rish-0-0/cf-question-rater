const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Questions = new Schema({
  urls: [
    {
      type: String,
    }
  ],
  mean: Number,
  median: Number,
  mode: Number,
}, { timestamps: true });

module.exports = mongoose.model('Questions', Questions);