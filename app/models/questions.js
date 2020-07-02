const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sub Document Rated

const RatedBySchema = new Schema({
  username: {
    type: String,
  },
  rating: {
    type: Number
  },
});

const Questions = new Schema({
  cf_id: {
    type: String,
    unique: true,
  },
  mean: Number,
  rated_by: {
    type: [RatedBySchema],
    default: []
  },
  median: Number,
  mode: Number,
}, { timestamps: true });

module.exports = mongoose.model('Questions', Questions);