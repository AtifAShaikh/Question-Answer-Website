const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswersSchema = new Schema({
    body: String,

    userId: String,

    upvotes: Number,

    downvotes: Number,

    favorited: Boolean,

    upvoters: [
        {
            userId: {
                type: String
            }

    }],

    downvoters: [
        {
            userId: {
                type: String
            }
        }],
})

const Answers = mongoose.model("Answers", AnswersSchema);
module.exports = Answers;