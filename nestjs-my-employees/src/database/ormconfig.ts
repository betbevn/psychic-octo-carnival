import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const connectionOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 33066,
  username: 'root',
  password: 'root',
  database: 'ambassador',
  connectTimeoutMS: 0,
  logNotifications: true,
  synchronize: false,
  entities: [join(__dirname, '..', 'modules/**/*.entity.{ts,js}')],
  poolErrorHandler: (err) => {
    console.log(err);
  },
  migrationsTableName: 'migration',
  migrations: [join(__dirname, '..', 'database/migrations/*{.js,.ts}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
} as TypeOrmModuleOptions;

export = connectionOptions;
