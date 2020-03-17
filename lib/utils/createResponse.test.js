const createResponse = require('./createResponse');

describe('createResponse', () => {
  it('creates a valid HTTP response', () => {
    const response = createResponse({
      body: '<h1>hi there</h1>',
      status: '200 OK',
      contentType: 'text/html'
    });

    expect(response).toEqual(`HTTP/1.1 200 OK \nAccept-Ranges: bytes \nContent-Length: 17 \nContent-Type: text/html
    \n<h1>hi there</h1>`);
  });
});
