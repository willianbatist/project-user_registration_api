import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {
    
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<Users> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async create(obj): Promise<Users[]> {
    const newUser = this.userRepository.create(obj);
    return this.userRepository.save(newUser);
  }

  async deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  updateUser(id: number, updateUserDetails) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
}
