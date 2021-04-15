const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: String,
    
    body: String,
    
    askerID: [
        {
            userID: {
                type: String
            }
        }],

 
    upvoters: [
    {
        userID: {
            type: String
        }
    }],

    downvoters: [
        {
            userID: {
                type: String
            }
        }]
});

const Questions = mongoose.model("Questions", QuestionSchema);
module.exports = Questions;