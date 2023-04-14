import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/database/abstract/abstract.entity';
import { User } from 'src/modules/user/user.entity';
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
