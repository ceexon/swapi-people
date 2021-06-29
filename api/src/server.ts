import dotenv from 'dotenv'
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import cors from 'cors';
import schema from './schema'

dotenv.config()

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(3)],
});

app.use(cors());
app.use(compression());

server.applyMiddleware({ app, path: '/' });

const port = process.env.PORT || 8000

app.listen(
  port,
  (): void => console.log('\n🚀      Server is now running on http://localhost:%d/', port)
);