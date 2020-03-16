const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/red' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text.html',
        status: '200 OK',
        body: `
    <html>
      <body>
        <h1>This is red<h1>
      </body>
    </html>`
      }));
    // } else if(request.path === '/blue') {

    // }

    }

    client.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});


//path	method	body
// /	GET	plain text "hi"
// /echo	POST	status code 200 and plain text with the request body
// /red	GET	html with an h1 and the word red
// /green	GET	html with an h1 and the word green
// /blue	GET	html with an h1 and the word blue
// Everything else respond with 404 and a not found HTML page.

module.exports = app;
