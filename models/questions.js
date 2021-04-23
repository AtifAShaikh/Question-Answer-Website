const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: String,
    
    body: String,

    catagory: String,
    
    askerID: String,

    upvoters: [String],

    downvoters: [String],
});

const Questions = mongoose.model("Questions", QuestionSchema);
module.exports = Questions;