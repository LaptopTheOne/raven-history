import cors from 'cors';
import express from 'express'
import bodyParser from 'body-parser';
import redditHistory from './routes/history';

const PORT = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
} else {
  app.use(cors({
    origin: 'https://tidder-app.netlify.app'
  }))
}

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/history', redditHistory);

app.use((req, res, next) => {
  res.write('raven history api');
  res.end();
});

app.listen(PORT, () => console.log(`HelloNode app listening on port ${PORT}!`));
