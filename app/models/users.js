const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Making Sub Documents
const UserRatedQuestions = new Schema({
  rating: {
    type: Number,
  },
  cf_id: {
    type: String,
    unique: true,
  },
});

const Users = new Schema(
  {
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
