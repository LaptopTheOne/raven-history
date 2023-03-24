const path = require('path');
const cors = require('cors')
const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
} else {
  app.use(cors({
    origin: 'https://tidder-app.netlify.app/'
  }))
}


const redditHistory = require('./routes/history');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/history', redditHistory.routes);

app.use((req, res, next) => {
  res.write('raven history api');
  res.end();
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
