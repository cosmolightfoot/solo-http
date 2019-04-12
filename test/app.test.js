const request = require('supertest');
const app = require('../lib/app');

describe('testing something', () => {
  it('creates a person qith /people', ()=> {
    request
      .post('/people');
  });
});
