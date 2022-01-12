const http = require('http');
const {
  resourceUsage
} = require('process');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment</title><head>');
    res.write('<body><h1>Welcome to the Login Page</h1><h2> Please create a username:</h2><form action="/create-user" method="POST"><label for="username "></label><input type="text " name="message " id="username "><button>Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment</title><head>');
    res.write('<body><ul><li>User 1</li><li>user 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user') {
    const body = [];
    req.on('data', (dataChunk) => {
      body.push(dataChunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=' [1]));
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
})

server.listen(3000);