const supertest = require('supertest');
const { test1Method } = require('./test1');

describe('my tests', () => {
  it('should pass', () => {
    supertest(() => { });
    expect(test1Method()).toBe(true);
  })
})