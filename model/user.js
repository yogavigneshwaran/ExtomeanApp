const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  project: {
    name: {type: String},
    location: {type: String},
    description: {type: String}
  },
  contractor: {
    name: {type: String},
    category: {type: String},
    city: {type: String}
  }
});

const User = module.exports =  mongoose.model('User', userSchema);

module.exports.getAllProjects = function(callBack) {
  User.find({}, 'project',callBack);
}
