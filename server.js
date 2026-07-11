const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req, res) => {
  let filePath = "";
  let statusCode = 200;
  let contentType = "text/html; charset=utf-8";

  if (req.url === "/") {
    filePath = path.join(__dirname, "public", "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "public", "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "public", "contact.html");
  } else if (req.url === "/style.css") {
    filePath = path.join(__dirname, "public", "style.css");
    contentType = "text/css";
  } else {
    filePath = path.join(__dirname, "public", "404.html");
    statusCode = 404;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("semething went problem in server");
    } else {
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
