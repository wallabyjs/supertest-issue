const supertest = require('supertest');
const { App } = require('./app');

describe('my tests', () => {

  let app;

  beforeEach(() => {
    app = App();
  });

  it('end to end test', async () => {

    const response = await supertest(app)
      .get('/test')
      .send()
      .set('Accept', 'text/plain')
      .expect(200);

    expect(response.body).toEqual(true);
  });

})