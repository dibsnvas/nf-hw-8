import 'dotenv/config';
import express from 'express';
import globalRouter from './global-router';
import { logger } from './logger';
import http from 'http';
import { wss } from './roadmap/roadmap.router';
import cors from 'cors'
import connectDB from './db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger);
app.use(express.json());
app.use('/api/v1/', globalRouter);

const server = http.createServer(app);
connectDB()
// Handle WebSocket connections with origin validation
server.on('upgrade', (request, socket, head) => {
  const origin = request.headers.origin;
  // Validate the origin before proceeding
  if (origin === 'http://localhost:3001') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});