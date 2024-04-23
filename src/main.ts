import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { apiDescription } from './utils/index';

async function bootstrap() {


  const config = new DocumentBuilder()
    .setTitle('API de cadastro de usuários')
    .setDescription(apiDescription)
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3010);
  console.log('http://localhost:3010/api/');
}
bootstrap();
