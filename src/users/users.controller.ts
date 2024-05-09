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
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';


@ApiTags('users')
@Controller('/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async findAll(): Promise<CreateUserDto[]> {
    return this.userService.findAll();
  }

  @Get('/user/:id')
  async findOne(@Param('id') id: number): Promise<CreateUserDto> {
    return this.userService.findOneById(id);
  }

  @Post('/user/login')
  async loginUser(@Body() login: LoginUserDto) {
    return this.userService.userLogin(login);
  }

  @Post('/user')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.userService.createUser(createUserDto);
  }

  @Delete('/user/:id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Put('/user/:id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }
}
