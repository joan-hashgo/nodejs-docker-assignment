const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Docker App</title>
      </head>
      <body>
        <h1>Hello! My Node.js application is running successfully 🚀</h1>
        <p>Deployed using Node.js, Linux, Docker and Docker Hub.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
