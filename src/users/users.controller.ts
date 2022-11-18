import { Controller, Get } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Controller('/')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/users')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
