import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:4200', // local admin app
      'http://localhost:4200', // local ambassador app
      'http://localhost:5000', // local checkout app
    ],
    credentials: true, // ensure that frontend will receive and store cookie
  });
  await app.listen(3000);
}
bootstrap();
