const http = require('http');
const { parse } = require('url');
const request = require('superagent');
const People = require('./models/People');
const bodyParser = require('./body-parser');
//import body parser

module.exports = http.createServer((req, res) => {
  res.send = json => res.end(JSON.stringify(json));
  const url = parse(req.url, true);
  console.log(url);
  if(url.pathname === '/people' && req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json');
    bodyParser(req)
      .then(json => {
        return People.create({
          name: json.name,
          age: json.age,
          color: json.color
        });
      })
      .then(createdPerson => res.send(createdPerson));
  } else if(url.pathname === '/people' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    People.find()
      .then(foundPeople => res.send(foundPeople));
  }
  console.log(url);





});
