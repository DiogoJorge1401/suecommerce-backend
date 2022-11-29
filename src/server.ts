import cors from 'cors';
import 'dotenv/config';
import e, { Application } from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import { handleError } from './middlewares/handleError';
import { routes } from './routes';

class App {
  app: Application;

  port: number;

  constructor() {
    this.configuration();

    this.databaseConnect();

    this.middlewares();

    this.start();
  }

  configuration() {
    this.app = e();

    this.port = process.env.PORT as unknown as number;
  }

  databaseConnect() {
    mongoose
      .connect(process.env.MONGO_URI as string)
      .then(() => console.log('DBConnection Successfull'))
      .catch((e) => console.log(e));
  }

  middlewares() {
    this.app.use(e.json());

    this.app.use(cors({ origin: true, credentials: true }));

    this.app.use('/api', routes);

    this.app.use(handleError);
  }

  start() {
    this.app.listen(this.port, () => console.log('server is running'));
  }
}

export default new App().app;
