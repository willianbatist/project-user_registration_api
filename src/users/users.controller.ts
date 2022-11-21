import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/user.entity';
import { UserService } from './users.service';

@Controller('/')
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

  @Delete('/user/:id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }
}
