import "dotenv/config";
import config from './config/config';
import createServer from './server'

const startServer = () => {
  const app = createServer();
  const port: number = parseInt(<string>config.server.port, 10) || 4000;
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();