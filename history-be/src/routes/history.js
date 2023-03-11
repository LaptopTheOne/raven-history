const path = require('path');
const https = require('https');

const express = require('express');
const router = express.Router();

const products = [];

router.get('/bearer-token', (req, res, next) => {
  console.log('acquiring bearer token for history scope...');
  console.log('req params', req.query)
  res.write('test');
  res.end();
});

router.get('/get-saved-items', (req, res, next) => {
  console.log(req)
  res.write('test');
  res.end()
});

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

exports.routes = router;
