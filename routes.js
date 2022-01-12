const fs = require('fs');
// const {
//   Http2ServerRequest
// } = require('http2');
// const {
//   parse
// } = require('path');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Login Page</title></head>');
    res.write('<body><h1>Welcome to the Login Page</h1><form action="/message" method="POST"><label for="username"></label><input type="text" name="message" id="username"><button>Login</button></form></body>');
    res.write('</html>')
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (dataItem) => {
      body.push(dataItem);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      fs.writeFile('username.txt', username, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Login Page</title>');
  res.write('<body><h1>Thank you for registering an account</h1></body>');
  res.write('</html>');
  res.end();
};

exports.handler = requestHandler;