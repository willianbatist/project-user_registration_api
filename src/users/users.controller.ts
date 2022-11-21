import {
  Body,
  Controller,
  Get,
  Post,
  Put,
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

  @Get('/users/:id')
  async findOne(@Param('id') id: number): Promise<Users> {
    return this.userService.findOneById(id);
  }

  @Post('/user')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.userService.create(createUserDto);
  }

  @Delete('/user/:id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Put('/user/:id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }
}
