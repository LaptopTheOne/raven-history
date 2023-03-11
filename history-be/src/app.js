const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const redditHistory = require('./routes/history');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/history', redditHistory.routes);

app.use((req, res, next) => {
  res.status(404).write('error');
  res.end();
});

app.listen(3001);
