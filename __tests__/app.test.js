const request = require('supertest');
const app = require('../lib/app.js');

describe('app routes', () => {
  it('retrieves the hi plain text page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.body).toEqual('hi');
      });
  });

  it('creates a plain text page', () => {
    return request(app)
      .post('/echo')
      .then(res => {
        expect(res.body).toEqual('is there an echo in here?');
      });
  });
  
  it('retrieves the red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`
            <html>
                <body>
                    <h1>This is red<h1>
                </body>
            </html>`);
      });
  });
  
});

