import 'dotenv/config';
import * as RateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Express from 'express';
import {
    ExpressAdapter,
    NestExpressApplication,
} from '@nestjs/platform-express';
import { setupSwagger } from './swagger';

/*
 * Google Cloud additional endpoints
 */
const server = Express();
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
        new ExpressAdapter(server),
        { cors: true },
    );

    app.use(helmet()); // protect http headers
    app.use(
        new RateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
        }),
    );
    app.use(compression()); // for less size of response
    app.use(morgan('combined')); // http requests logger

    // setup swagger
    setupSwagger(app);

    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT);

    console.info(`server running on port ${process.env.PORT}`);
}
bootstrap();
