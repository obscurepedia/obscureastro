import { createServer } from 'http';
import { handler } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 8080;

const server = createServer(handler);

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
