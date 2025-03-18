import { createServer } from 'http';
import { handler } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 8080;

const server = createServer(handler);

// Close any existing server instance before starting a new one
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use, retrying...`);
    setTimeout(() => {
      server.close();
      server.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Server restarted on port ${PORT}`);
      });
    }, 1000);
  } else {
    console.error('Server error:', err);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
