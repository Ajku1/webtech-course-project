import http from "http";
import express from "express";

import cors from "cors";

// mongo connection
import "./config/mongo.ts";
// routes
import indexRouter from "./routes/index";

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
