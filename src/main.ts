import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);

  app.enableCors(CORS);

  app.setGlobalPrefix('/api/');

  await app.listen(configService.get('PORT'));

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();