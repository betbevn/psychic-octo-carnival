import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1681439699397 implements MigrationInterface {
  name = 'init1681439699397';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `is_ambassador` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`',
    );
    await queryRunner.query('DROP TABLE `users`');
  }
}
