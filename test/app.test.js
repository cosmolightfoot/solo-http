const request = require('supertest');
const app = require('../lib/app');
const People = require('../lib/models/People');

describe('testing app', () => {
  afterAll(() => {
    return People.drop();
  });
  it('creates a person with /people', ()=> {
    return request(app)
      .post('/people')
      .send({ name: 'carl', age: 22, color: 'purple' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'carl',
          age: 22,
          color: 'purple',
          _id: expect.any(String)
        });
      });
  });

  it('returns all people on get', () => {
    return People.create({
      name: 'Skip',
      age: 23,
      color: 'aqua'
    })
      .then(createdPerson => {
        return request(app)
          .get('/people')
          .then(returnedObject => {
            expect(returnedObject).toEqual({
              name: 'Skip',
              age: 23,
              color: 'aqua',
              _id: expect.any(String)
            });
          });
      });
  });
});
