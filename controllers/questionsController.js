const db = require("../models");

// Defining methods for the questionsController
module.exports = {
  findAll: function(req, res) {
    db.Questions
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: async (req, res) => {
    var objToSend = {
      question: {},
      asker: {},
      user: {},
      answers: [],
    }
    await db.Questions
      .findById(req.params.id)
      .then(dbModel => objToSend.question=dbModel)
      .catch(err => res.status(422).json(err));
    
    await db.User
    .findById(objToSend.question.askerID)
    .then(dbModel => objToSend.asker = dbModel)
    .catch(err => res.status(422).json(err));

    await db.User
    .findById(req.session.user_id)
    .then(dbModel => objToSend.user = dbModel)
    .catch(err => res.status(422).json(err));

    await db.Answers
    .find({questionId: req.params.id})
    .then((aModel)=>{objToSend.answers = aModel})
    .catch(err => res.status(422).json(err));

    res.json(objToSend);
  },
  create: function(req, res) {
    console.log('create questions');
    db.Questions
      .create(req.body)
      .then(dbModel => {
        console.log('question created, updating user');
        db.User.updateOne({_id: dbModel.askerID}, {$push: {asked: dbModel._id}})
        .then((uModel) => {
          console.log(uModel);
        })
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Questions
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Questions
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  upvote: function(req, res) {
    console.log('upvote route hit');
    db.Questions.update({_id: req.body.qId}, {$push: {upvoters: req.session.user_id}})
        .then((uModel) => {
          console.log(uModel);
          res.json({message: 'success'});
        })    
  },
  downvote: function(req, res) {
    console.log('upvote route hit');
    db.Questions.update({_id: req.body.qId}, {$push: {downvoters: req.session.user_id}})
        .then((uModel) => {
          console.log(uModel);
          res.json({message: 'success'});
        })    
  },
};