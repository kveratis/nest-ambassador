import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async find(options) {
    return this.userRepository.find(options);
  }

  async findOne(options: any): Promise<User> {
    return this.userRepository.findOne(options);
  }

  async save(options) {
    return this.userRepository.save(options);
  }

  async update(id: number, options) {
    return this.userRepository.update(id, options);
  }
}
