import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/user.entity';
import { UserService } from './users.service';

@Controller('/t')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Post('/user')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<unknown> {
    return this.userService.create(createUserDto);
  }
}
