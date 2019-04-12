const http = require('http');
const { parse } = require('url');
const request = require('superagent');
const People = require('./models/People');
//import body parser

module.exports = http.createServer((req, res) => {
  const url = parse(req.url, true);
  console.log(url);


});
