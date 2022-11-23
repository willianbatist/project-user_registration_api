import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  validationLoginUser,
  validationBodyLogin,
  validationBodyCreateUser,
  validationCreateUser,
  validationId,
} from '../middleware/user.middleware';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async userLogin(body: LoginUserDto) {
    validationBodyLogin(body);
    const { email, password } = body;
    const user = await this.userRepository.findOne({ where: { email } });
    const checkPassword = bcrypt.compareSync(password, user.password);
    validationLoginUser(user, checkPassword);
    return user;
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<Users> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('ID not found or invalid.', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async createUser(body: CreateUserDto): Promise<Users> {
    validationBodyCreateUser(body);
    const { first_name, last_name, username, email, password } = body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const validation = await validationCreateUser(
      username,
      email,
      this.userRepository,
    );
    if (!validation) {
      const newUser = this.userRepository.create({
        first_name,
        last_name,
        username,
        email,
        password: hashPassword,
      });
      return this.userRepository.save(newUser);
    }
  }

  async deleteUser(id: number) {
    const user = await validationId(id, this.userRepository);
    if (!user) {
      return this.userRepository.delete({ id });
    }
  }

  async updateUser(id: number, updateUserDetails) {
    const user = await validationId(id, this.userRepository);
    if (!user) {
      return this.userRepository.update({ id }, { ...updateUserDetails });
    }
  }
}
