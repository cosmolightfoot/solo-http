const request = require('superagent');

function getCharacter(id) {
  return request.get(`https://rickandmortyapi.com/api/character/${id}`);
}

module.exports = getCharacter;
