const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true 
  },

  password: { 
    type: String, 
    required: true
  },
  
  picture: String,
  
  followed: Array,
  
  asked: Array,
  
  answered: Array, 

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
