import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

/*
 * Google Cloud additional endpoints
 */
const server = Express();
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.setGlobalPrefix('api')

  console.log('Runned on', process.env.PORT);
  await app.listen(process.env.PORT);
}
bootstrap();
