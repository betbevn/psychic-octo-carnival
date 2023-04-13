import { ObjectLiteral, Repository } from 'typeorm';

export class TypeORMRepository<T extends ObjectLiteral> extends Repository<T> {}
