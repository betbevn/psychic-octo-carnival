import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/database/abstract/abstract.entity';
import { User } from 'src/modules/user/user.entity';
import { TypeORMRepository } from 'src/database/typeorm.repository';
import { QueryPaginationDto } from 'src/common/dto/query-pagination.dto';
import { ListUsersDto } from './dtos/listUsers.dto';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: TypeORMRepository<User>,
  ) {
    super(userRepository);
  }

  async getListUsersPaged(metadata: QueryPaginationDto & ListUsersDto) {
    const queryBuilder = this.userRepository.createQueryBuilder('users');
    const { limit, page, search } = metadata;
    if (search) {
      queryBuilder.andWhere(
        'users.first_name LIKE :search OR users.last_name LIKE :search OR users.email LIKE :search',
        { search },
      );
    }
    const query = {
      limit,
      page,
    };
    Object.assign(query, { queryBuilder });

    return this.listPaged(query);
  }
}
