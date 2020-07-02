const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sub Document Rated

const RatedBySchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Questions = new Schema({
  cf_id: {
    type: String,
    required: true,
    unique: true,
  },
  mean: Number,
  rated_by: {
    type: [RatedBySchema],
    default: []
  },
}, { timestamps: true });

module.exports = mongoose.model('Questions', Questions);