import express from 'express'
import { fetchAllSavedItems } from '../helpers/fetch-saved-items'

const router = express.Router();

router.get('/get-saved-items', async (req, res) => {
  console.log('req params', req.query)
  const username = req.query['username'] as string;
  const token = req.query['token'] as string;
  try {
    const result = await fetchAllSavedItems(username, token);
    res.write(JSON.stringify(result));
    res.end()
  } catch (err) {
    console.log('error...', err)
    res.write('error');
    res.end()
  }
});

export default router;
