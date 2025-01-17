const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PAGES_DIR = path.join(__dirname, "pages");

// Function to serve HTML files
const serveFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

// Create the server
const server = http.createServer((req, res) => {
  let filePath;

  switch (req.url) {
    case "/":
      filePath = path.join(PAGES_DIR, "index.html");
      break;
    case "/about":
      filePath = path.join(PAGES_DIR, "about.html");
      break;
    case "/contact":
      filePath = path.join(PAGES_DIR, "contact.html");
      break;
    default:
      filePath = path.join(PAGES_DIR, "404.html");
      break;
  }

  serveFile(filePath, res);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

