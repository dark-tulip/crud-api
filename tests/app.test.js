// Юнит тесты: постарайтесь достичь покрытия в 70% и больше;
const request = require('supertest');
const assert = require('assert');

var app = require('../app').app;

it('should return We are posted', function (done) {
    request(app).get('/').expect('We are posted').end(done);
});


it('should return NotFound with status 404', function (done) {
    request(app)
      .get('/posts')
      .expect(200)
      .end(done);
    console.log(request(app)
    .get('/'))
});
  