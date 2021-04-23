const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log('creat user route hit');
    // console.log(req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('update user hit');
    console.log(req.body);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res){
    console.log('logging in user');
    console.log(`search by email ${req.body.email}`);
    db.User.findOne({email: req.body.email})
    .then((dbModel) => {
      console.log(dbModel);
      if(dbModel.password == req.body.password){
        console.log('user succesfully logged in!');
        req.session.save(() =>{
          req.session.user_id = dbModel._id;
          req.session.logged_in = true;

          res.status(200).json({message: 'success'});
        });
      } else {
        res.status(400).json({message: 'failed'});
      } 
    })
    .catch(err => res.status(422).json(err));
  },
  logout: function(req, res){
    console.log('session destroyed');
    req.session.destroy(()=>{
      res.json({message: 'successfully logged out'});
    });
  },
  getuser: function(req, res){
    console.log(req.session.user_id);
    console.log('getuser route hit');
    db.User
      .findById(req.session.user_id)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  followQuestion: function(req, res){
    console.log('follow Question Hit');
    db.User.update({_id: req.session.user_id}, {$push: {followed: req.body.id}})
        .then((uModel) => {
          console.log(uModel);
        })
        res.json({message: 'success'});
  }
};
      