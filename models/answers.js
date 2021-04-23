const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswersSchema = new Schema({
    body: String,

    userId: String,

    questionId: String,

    favorited: Boolean,

    upvoters: [String],

    downvoters: [String],
})

const Answers = mongoose.model("Answers", AnswersSchema);
module.exports = Answers;