const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Making Sub Documents
const UserRatedQuestions = new Schema({
  rating: {
    type: Number,
  },
  urls: [
    {
      type: String,
    },
  ],
});

const Users = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    ranking: {
      type: Number,
    },
    rated_questions: {
      type: [UserRatedQuestions],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
