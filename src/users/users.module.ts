import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../database/data-source';
import { DatabaseModule } from '../database/database.module';
// import { User } from './entities/user.entity';
// import { Users1668791026622 } from '../users/migrations/1668791026622-Users';
import { userProviders } from './entities/user.providers';
import { UserService } from './users.service';
import { UserController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
})
export class UserModule {}
