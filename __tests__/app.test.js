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

  it('retrieves the green html page', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`
            <html>
                <body>
                    <h1>This is green<h1>
                </body>
            </html>`);
      });
  });

  it('retrieves the blue html page', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`
            <html>
                <body>
                    <h1>This is blue<h1>
                </body>
            </html>`);
      });
  });

  it('responds with a 404', () => {
    return request(app)
      .get('/404')
      .then(res => {
        expect(res.text).toEqual('not found');
      });
  });
  
});

