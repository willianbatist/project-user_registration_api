import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    // private userRepository: Repository<Users>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(obj): Promise<unknown> {
    const newUser = this.userRepository.create(obj);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
