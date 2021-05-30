import http from "http";
import express from "express";

import cors from "cors";

const app = express();

const port =  "8000";
app.set("port", port);

app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

const server = http.createServer(app);

server.listen(port);

server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`)
});
