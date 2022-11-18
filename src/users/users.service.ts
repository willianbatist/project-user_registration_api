import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {}

  async create(obj): Promise<unknown> {
    return this.userRepository.create(obj);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }
}
