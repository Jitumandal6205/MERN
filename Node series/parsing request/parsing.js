
const fs = require('fs');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User input</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {
          const body = [];
          req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
          })

          req.on('end', () => {
            const FullBody = Buffer.concat(body).toString();
            console.log(FullBody);
            const params = new URLSearchParams(FullBody);
            // const bodyObject = {};
            // for (const [key, value] of params.entries()){
            //   bodyObject[key] = value;
            // }
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('parsing.txt', JSON.stringify(bodyObject));
          })

    fs.writeFileSync('user.txt', 'Jitu Mandal');
    res.statusCode = 302;
    res.setHeader('Location', '/');



  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1> Jitu kumar Mandal</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;