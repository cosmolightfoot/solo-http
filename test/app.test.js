const request = require('supertest');
const app = require('../lib/app');

describe('testing something', () => {
  it('creates a person qith /people', ()=> {
    request(app)
      .post('/people')
      .send({ name: 'carl', age: 22, color: 'purple'})
      .then(res => {
        expect(res.body).toEqual({
          name: 'carl',
          age: 22,
          color: 'purple',
          _id: expect.any(String)
        });
      });
  });
});
