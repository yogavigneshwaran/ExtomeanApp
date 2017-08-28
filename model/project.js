const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const ProjectSchema = mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  createdBy: {
    type: String
  },
  location: {
    type: String,
  }
});

const Project = module.exports =  mongoose.model('Project', ProjectSchema);

module.exports.getAllProjects = function(callBack) {
  Project.find({}, callBack);
}
