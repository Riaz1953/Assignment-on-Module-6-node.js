import http from "http";
import fs from "fs";
import path from "path";

const PORT = 5000;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
