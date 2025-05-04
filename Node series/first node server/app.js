const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers, req.method, req.url);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<h1>Hello from Node.js</h1>');
  res.write('<h2>Node.js is awesome</h2>');
  res.write('<h3>Node.js is a JavaScript runtime</h3>');
  res.write('</html>');
  res.end();
});
//request and response
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
