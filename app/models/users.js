const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Making Sub Documents
const UserRatedQuestions = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  cf_id: {
    type: String,
    required: true,
    unique: true,
  },
});

const Users = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
