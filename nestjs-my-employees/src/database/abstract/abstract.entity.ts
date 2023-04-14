import { PaginationParams } from 'src/types/pagination.interfaces';
import { TypeORMRepository } from '../../shared/typeorm.repository';

export class AbstractService<T> {
  protected constructor(protected readonly repository: TypeORMRepository<T>) {}

  async save(options) {
    return this.repository.save(options);
  }

  async find(options = {}) {
    return this.repository.find(options);
  }

  async findOne(options) {
    return this.repository.findOne(options);
  }

  async update(id: number, options) {
    return this.repository.update(id, options);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }

  async listPaged(query: PaginationParams<T>) {
    const { limit = 10, page = 1 } = query;
    let queryBuilder = query.queryBuilder;

    if (!queryBuilder) {
      queryBuilder = this.repository
        .createQueryBuilder('document')
        .orderBy('document.createdAt', 'ASC');
    }

    queryBuilder
      .limit(Number(limit) || 10)
      .offset((Number(page) - 1) * limit || 0);

    const [data, count] = await queryBuilder.getManyAndCount();

    return {
      data,
      count,
      currentPage: Number(page),
      totalPage: Math.ceil(count / limit),
    };
  }

  repositoryAbstract() {
    return this.repository;
  }
}
