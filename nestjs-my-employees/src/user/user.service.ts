import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import { AbstractService } from 'src/shared/abstract.service';
import { TypeORMRepository } from 'src/shared/typeorm.repository';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: TypeORMRepository<User>,
  ) {
    super(userRepository);
  }
}
