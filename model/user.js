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

module.exports.updateUserProjectDetails = function(callBack, currentName, project) {
  Model.findOne({ name: currentName }, function (err, doc){
  doc.name = project.name;
  doc.location = project.description;
  doc.location = project.location;
  doc.visits.$inc();
  doc.save();
});
}
