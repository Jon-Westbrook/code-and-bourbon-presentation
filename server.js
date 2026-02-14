const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = process.env.PORT || 3000;

// MIME types for static file serving
const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

// Timestamp for request logging
const ts = () => new Date().toTimeString().slice(0, 8);

// Strip characters that could enable shell injection
const sanitize = (str) => str.replace(/[`$|;&()'\\]/g, "");

// Read the full request body as a string
const readBody = (req) =>
  new Promise((resolve) => {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => resolve(data));
  });

// POST /say — send text-to-speech to the 2018 MacBook via SSH
async function handleSay(req, res) {
  let body;
  try {
    body = JSON.parse(await readBody(req));
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: false, error: "Invalid JSON" }));
  }

  const text = sanitize(String(body.text || ""));
  const voice = sanitize(String(body.voice || "Fred"));
  if (!text) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: false, error: "Missing text" }));
  }

  const cmd = `ssh 2018 "say -v '${voice}' '${text}'"`;
  exec(cmd, { timeout: 5000 }, (err, _stdout, stderr) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: stderr || err.message }));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
  });
}

// Serve static files from the current directory
function serveStatic(req, res) {
  const urlPath = req.url.split("?")[0];
  const filePath = path.join(".", urlPath === "/" ? "index.html" : urlPath);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}

// --- Main server ---
const server = http.createServer(async (req, res) => {
  // CORS headers on every response
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    console.log(`[${ts()}] ${req.method} ${req.url} 204`);
    return;
  }

  // Route: POST /say
  if (req.method === "POST" && req.url === "/say") {
    await handleSay(req, res);
    console.log(`[${ts()}] ${req.method} ${req.url} ${res.statusCode}`);
    return;
  }

  // Everything else: static files
  serveStatic(req, res);
  res.on("finish", () => {
    console.log(`[${ts()}] ${req.method} ${req.url} ${res.statusCode}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Server mode: Dave integration ACTIVE");
});
