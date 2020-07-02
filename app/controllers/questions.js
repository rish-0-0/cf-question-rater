const Question = require("../models/questions");
const User = require("../models/users");
const { statusResponse } = require("../utils/responses");

const rateQuestion = async (req, res) => {
  try {
    if (req.body.updateRanking) {
      // Update question and not create
      await User.updateOne(
        { $where: { _id: req.body.user_id } },
        { ranking: "Legendary Grandmaster" }
      );
      await Question.updateOne(
        { $where: { _id: req.body.question_id } },
        { mean: 12, median: 12, mode: 12 }
      );
      return statusResponse(res, 200, true, {
        message: "Question ranking updated",
      });
    }
    return statusResponse(res, 200, true, { message: "Question rated." });
  } catch (e) {
    console.error("Error while rating question:", e);
    return statusResponse(res, 500, false, {
      message: "Error while rating question.",
      error: e,
    });
  }
};

module.exports = { rateQuestion };
