import express from "express";
import http from "http";
import fs from 'fs';
import { router } from "./routes/routes";

const app = express();
const port = process.env.PORT || 8000;

const server = http.createServer(app);

app.use(express.json());
app.use(router);

server.listen(port, () => {
  console.log("🚀 Server is running...");
});

process.on("SIGINT", () => {
  console.log("🤖 Server closed");
});
