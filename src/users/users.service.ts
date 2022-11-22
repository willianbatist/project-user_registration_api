import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { validationCreateUser } from '../middleware/user.middleware';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async userLogin(body) {
    const { email, password } = body;
    const userEmail = await this.userRepository.findOne({ where: { email } });
    if (!userEmail) {
      throw new HttpException('email not registered', HttpStatus.UNAUTHORIZED);
    }
    const check = bcrypt.compareSync(password, userEmail.password);
    if (!check) {
      throw new HttpException('incorrect password', HttpStatus.UNAUTHORIZED);
    }
    return userEmail;
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<Users> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async create(body: CreateUserDto): Promise<Users> {
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
    return this.userRepository.delete({ id });
  }

  updateUser(id: number, updateUserDetails) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
}
