const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

const users = require('./routes/users');

const config = require('./config/db');

const port = 3000;

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

mongoose.connection.error('error', (err) => {
  console.log('Failed to connect to database ' + err);
});

app.use(express.static(path.join(__dirname, 'client')));

app.use(cors());

app.use(passport.initialize());

app.use(passport.session());

app.use(bodyParser.json());

require('./config/passport')(passport)

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

app.listen(port, () => {
  console.log('Server started at port: ' + port);
});
