const path = require('path');
const https = require('https');

const express = require('express');
const router = express.Router();
const savedItemsHelpers = require('../helpers/fetch-saved-items');

router.get('/bearer-token', (req, res, next) => {
  console.log('acquiring bearer token for history scope...');
  console.log('req params', req.query)
  res.write('test');
  res.end();
});

router.get('/get-saved-items', async (req, res, next) => {
  console.log('req params', req.query)
  const username = req.query['username'];
  const token = req.query['token'];
  const result = await savedItemsHelpers.fetchAllSavedItems(username, token);
  res.write(JSON.stringify(result));
  res.end()
});

exports.routes = router;
