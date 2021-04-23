const db = require("../models");

// Defining methods for the answersController
module.exports = {
  findAll: function(req, res) {
    db.Answers
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Answers
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async (req, res) => {
    console.log('answer created')
    await db.Answers
      .create(req.body)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));

    await db.User.update({_id: req.body.userId}, {$push: {answered: req.body.questionId}})
    .then((uModel) => {
      console.log(uModel);
      res.json({message: 'success'});
    })   
  },
  update: function(req, res) {
    db.Answers
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Answers
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  upvote: function(req, res) {
    console.log('upvote route hit');
    db.Answers.update({_id: req.body.aId}, {$push: {upvoters: req.session.user_id}})
        .then((uModel) => {
          console.log(uModel);
          res.json({message: 'success'});
        })    
  },
  downvote: function(req, res) {
    console.log('upvote route hit');
    db.Answers.update({_id: req.body.aId}, {$push: {downvoters: req.session.user_id}})
        .then((uModel) => {
          console.log(uModel);
          res.json({message: 'success'});
        })    
  },
};