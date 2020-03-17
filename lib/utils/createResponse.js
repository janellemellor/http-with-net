// module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
//   return `HTTP/1.1 ${status}
//     Accept-Ranges: bytes
//     Content-Length: ${body.length}
//     Content-Type: ${contentType}
//     ${body}`;
// };

module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}\nAccept-Ranges: bytes\nContent-Length: ${body.length}\nContent-Type: ${contentType}\n\n${body}`;
};
