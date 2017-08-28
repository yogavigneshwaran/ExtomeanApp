const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

const User = require('../model/user');

const Project = require('../model/project');

router.post('/register', (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add new user.'});
    } else {
      res.json({success: true, msg: 'User added successfully.'});
    }
  });
});

router.post('/authenticate', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findUserByName(username, (err, user) => {
    if (err) {
      throw err;
    } else {
      if (!user) {
        return res.json({success: false, msg: 'User not found.'});
      }
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        }
        if (isMatch) {
          const token = jwt.sign(user, config.secret, {
            expiresIn: 604800
          });
          res.json({
            success: true,
            token: 'JWT' + token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              password: user.password
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password.'});
        }
      });
    }
  });
});

router.get('/projects', (req, res) => {
  User.getAllProjects((err, projects) => {
    if (err) throw err;
    else {
      console.log(projects);
      res.json({success: true, msg: projects});
    }
  });
});

module.exports = router;
